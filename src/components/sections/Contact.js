import React, {useState, useReducer} from 'react'
import emailjs from "emailjs-com";
import EmailNotification from './EmailNotification';
import Captcha from '../Captcha';

const initialFormState = {
    name: '',
    phoneNumber: '',
    phoneNumberDisplayed: '',
    make: '',
    model: '',
    year: ''
}
const notificationInitState = {
    error: false,
    messages: [],
    display: false
}
const ACTIONS = {
    UPDATE_NAME: 'updateName',
    UPDATE_PHONE_NUMBER: 'updatePhoneNumber',
    UPDATE_MAKE: 'updateMake',
    UPDATE_MODEL: 'updateModel',
    UPDATE_YEAR: 'updateYear',
    ADD_ADD_ON: 'addAddOn',
    REMOVE_ADD_ON: 'removeAddOn',
    UPDATE_NOTIFICATION_ERROR: 'updateEmailError',
    UPDATE_NOTIFICATION_MESSAGE: 'updateEmailMessage',
    UPDATE_NOTIFICATION_DISPLAY: 'updateEmailDisplay',

}

function formReducer(state, action) {
    switch (action.type) {
        case ACTIONS.UPDATE_NAME:
            state.name = action.value;
            return {...state}
        case ACTIONS.UPDATE_PHONE_NUMBER:
            state.phoneNumber = action.phoneNumber;
            state.phoneNumberDisplayed = action.phoneNumberDisplayed;
            return {...state}
        case ACTIONS.UPDATE_MAKE:
            state.make = action.value;
            return {...state}
        case ACTIONS.UPDATE_MODEL:
            state.model = action.value;
            return {...state}
        case ACTIONS.UPDATE_YEAR:
            state.year = action.value;
            return {...state}
        default:
            return state;
    }
}

function addOnReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_ADD_ON:
            state[action.key].selected = true;
            return {...state}
        case ACTIONS.REMOVE_ADD_ON:
            state[action.key].selected = false;
            return {...state}
        default:
            return state;
    }
}

function Input(id, placeholder, value, onChange, customClasses) {
    return (
        <input
            type={'input'}
            className={'contactFormInput ' + customClasses}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
                onChange(e)
            }}
        />
    )
}

let modalTimeout = null;

export default function Contact({selectedOffers}) {
    const [notificationState, updateNotificationState] = useState(notificationInitState)
    const [messageFieldOpen, updateMessageFieldState] = useState(false);
    const [userMessage, updateUserMessage] = useState('');
    const [formState, dispatch] = useReducer(formReducer, initialFormState);
    const [addOnState, addOnDispatch] = useReducer(addOnReducer, addOnObject);
    const [captchaVerified, updateCaptchaVerified] = useState(false);
    return (
        <div id={'contactSectionRight'} className={'sideSection'}>
            {notificationState.display &&
            <EmailNotification
                notificationObject={notificationState}
                dismissNotification={() => {
                    clearModalTimeout();
                    updateNotificationState(notificationInitState)
                }}
            />}
            <div className={'headerHolder'}>
                <div className={'header'}>Schedule</div>
            </div>
            <form id={'actualForm'}>
                <div className={'formSection top'}>
                    <div id={'formInputs'}>
                        <div id={'nameAndNumber'}>
                            <div className={'necessaryFieldHolder'}>
                                {Input('nameInput', 'Name', formState.name, (e) => {
                                    dispatch({type: ACTIONS.UPDATE_NAME, value: e.target.value})
                                }, ('necessaryInput' + (formState.name.length !== 0 ? ' valid' : '')))}
                                {/*<div*/}
                                {/*    className={('necessaryFieldIndicator' + (formState.name.length !== 0 ? ' valid' : ''))}/>*/}
                            </div>
                            <div className={'necessaryFieldHolder'}>
                                {Input('numberInput', 'Phone Number', formState.phoneNumber, (e) => {
                                    let numbers = getPhoneNumber(e.target.value);
                                    if (numbers) {
                                        dispatch({
                                            type: ACTIONS.UPDATE_PHONE_NUMBER,
                                            phoneNumber: numbers.phoneNumber,
                                            phoneNumberDisplayed: numbers.phoneNumberDisplayed
                                        });
                                    }
                                }, ('necessaryInput' + (formState.phoneNumber.length === 10 ? ' valid' : '')))}
                                {/*<div*/}
                                {/*    className={('necessaryFieldIndicator' + (formState.phoneNumber.length === 10 ? ' valid' : ''))}/>*/}
                            </div>
                        </div>
                        <div id={'makeModelHolder'}>
                            {Input('make', 'Make', formState['make'], (e) => {
                                dispatch({type: ACTIONS.UPDATE_MAKE, value: e.target.value})
                            })}
                            {Input('year', 'Year', formState['year'], (e) => {
                                let val = e.target.value;
                                let numericalYearValue = val.replace(/\D/g, '');
                                if (numericalYearValue.length > 4) {
                                    numericalYearValue = numericalYearValue.substring(0, 3);
                                }
                                dispatch({type: ACTIONS.UPDATE_YEAR, value: numericalYearValue})
                            })}
                            {Input('model', 'Model', formState['model'], (e) => {
                                dispatch({type: ACTIONS.UPDATE_MODEL, value: e.target.value})
                            })}
                        </div>
                    </div>
                    <div id={'selectedServices'}>
                        <div id={'selectedServicesHeader'}>Selected Offers</div>
                        <div id={'selectionsHolder'}>
                            {!!(selectedOffers.length) && selectedOffers.map((offer) => {
                                return (
                                    <div
                                        key={offer}
                                    >{offer.text}</div>
                                )
                            })}
                            {!(selectedOffers.length) &&
                            <span>You've haven't selected any offers</span>
                            }
                        </div>
                    </div>
                    <div id={'addOns'}>
                        <div id={'addOnsHeader'}>Add-Ons</div>
                        <div id={'addOnsHolder'}>
                            {Object.keys(addOnState).map((key) => {
                                const selected = addOnState[key].selected
                                const selectedClass = selected ? ' selected' : '';
                                return (
                                    <div
                                        key={key}
                                        className={'addOnItem' + selectedClass}
                                        onClick={() => {
                                            let ACTION = selected ? ACTIONS.REMOVE_ADD_ON : ACTIONS.ADD_ADD_ON;
                                            addOnDispatch({type: ACTION, key: key})
                                        }}
                                        tabIndex={0}
                                    >{key}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div id={'messageArea'}>
                        <div id={'expandMessageAreaButton'}
                             onClick={() => {
                                 updateMessageFieldState(!messageFieldOpen)
                             }}
                        >
                            Click to {messageFieldOpen ? 'remove message' : 'add a message'}
                            <span id={'openStateIndicator'} className={messageFieldOpen ? 'open' : ''}> {'<'}</span>
                        </div>
                        <div id={'textAreaHolder'} className={messageFieldOpen ? 'expanded' : ''}>
                            <textarea
                                value={userMessage}
                                onChange={e => {
                                    updateUserMessage(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                </div>
                <Captcha
                    updateCaptchaVerified={updateCaptchaVerified}/>
                <div className={'formSection bottom'}>
                    <div className={'contactBotSection sendHolder'}>
                        <button onClick={e => {
                            onSubmit(e)
                        }}>Send
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );


    function onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();


        const invalidName = (formState.name.length === 0);
        const invalidNumber = (formState.phoneNumber.length !== 10);

        if (invalidName || invalidNumber) {
            let errState = {
                error: true,
                messages: [],
                display: true,
                header: 'Required Fields:'
            }
            if (invalidName) {
                errState.messages.push('Please enter a name.')
            }
            if (invalidNumber) {
                errState.messages.push('Please enter a phone number.')
            }
            renderModal(errState)
            return;
        }

        if (!captchaVerified) {
            let errState = {
                error: true,
                messages: ['Before sending you must validate', 'Please use the CAPTCHA above this button'],
                display: true,
                header: 'Are you human?'
            }
            renderModal(errState)
            return;
        }


        let addOns = []
        Object.keys(addOnObject).forEach((key) => {
            if (addOnObject[key].selected) {
                let str = key + ': ' + addOnObject[key].price;
                addOns.push(str);
            }
        });
        let offers = [];
        selectedOffers.forEach((offer) => {
            let str = offer.text + ': ' + offer.discountedPrice
            offers.push(str);
        });
        let data = {...formState, addOns: addOns, offers: offers, message: userMessage}
        console.log(process.env.REACT_APP_EMUSER)

        emailjs.send(process.env.REACT_APP_EMSERV, process.env.REACT_APP_EMTEMP, data, process.env.REACT_APP_EMUSER)
            .then(function (response) {
                let successState = {
                    error: false,
                    messages: ['Your message has been sent!', 'Expect to hear from us in the next 48 hours'],
                    display: true,
                    header: 'Success!'
                }
                renderModal(successState)
            }, function (error) {
                console.log('error');
                console.log(error);
                let errState = {
                    error: true,
                    messages: ['There was an error!', 'Try again later or give us a call at 512-886-9114'],
                    display: true,
                    header: 'uh-oh, server error'
                }
                renderModal(errState)
            });
    }

    function renderModal(notificationObject) {
        updateNotificationState(notificationObject);
        modalTimeout = setTimeout(() => {
            let beginFadeoutState = {...notificationObject, fadeOut: true}
            updateNotificationState(beginFadeoutState);
            document.body.classList.remove('modalShowing');
            modalTimeout = setTimeout(() => {
                updateNotificationState(notificationInitState);
            }, 500)
        }, 4000)
    }
}

function clearModalTimeout() {
    if (setTimeout !== null) {
        clearTimeout(modalTimeout);
    }
}

function getPhoneNumber(val) {
    //pure numbers
    let newNumberValue = val.replace(/\D/g, '');
    let displayedNumber = newNumberValue;
    let length = newNumberValue.length;
    if (length === 0) {
        displayedNumber = '';
    } else if (length <= 3) {
        //12
        // -> (12)
        displayedNumber = '(' + displayedNumber;
    } else if (length <= 6) {
        displayedNumber = '(' + newNumberValue.substring(0, 3) + ') ' + newNumberValue.substring(3);
    } else if (length <= 10) {
        displayedNumber = '(' + newNumberValue.substring(0, 3) + ') ' + newNumberValue.substring(3, 6) + '-' + newNumberValue.substring(6);
    } else {
        return;
    }

    return {
        phoneNumber: newNumberValue,
        phoneNumberDisplayed: displayedNumber
    };
}

const addOnObject = {
    'Class Coating': {
        price: 5,
        selected: false

    },
    'Headlight restoration': {
        price: 50,
        selected: false

    },
    'Wheel coating': {
        price: 5,
        selected: false
    },
    'Stain Removal': {
        price: 10,
        selected: false

    },
    'Trim Restoration': {
        price: 500,
        selected: false
    },
    'Glass Polishing': {
        price: 10,
        selected: false
    }
}

