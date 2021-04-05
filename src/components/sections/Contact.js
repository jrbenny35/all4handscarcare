import React, {useReducer} from 'react'
import emailjs from "emailjs-com";

const initialFormState = {
    name: '',
    phoneNumber: '',
    phoneNumberDisplayed: '',
    make: '',
    model: '',
    year: ''
}

const ACTIONS = {
    UPDATE_NAME: 'updateName',
    UPDATE_PHONE_NUMBER: 'updatePhoneNumber',
    UPDATE_MAKE: 'updateMake',
    UPDATE_MODEL: 'updateModel',
    UPDATE_YEAR: 'updateYear',
    ADD_ADD_ON: 'addAddOn',
    REMOVE_ADD_ON: 'removeAddOn'
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


export default function Contact({selectedOffers}) {
    const [formState, dispatch] = useReducer(formReducer, initialFormState);
    const [addOnState, addOnDispatch] = useReducer(addOnReducer, addOnObject);
    return (
        <div id={'contactSectionRight'} className={'sideSection'}>
            <div className={'headerHolder'}>
                <div className={'header'}>Schedule</div>
            </div>
            <div id={'actualForm'}>
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
                                    <div>{offer.text}</div>
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
                            {Object.keys(addOnObject).map((key) => {
                                const selected = addOnObject[key].selected
                                const selectedClass = selected ? ' selected' : '';
                                return (
                                    <div
                                        className={'addOnItem' + selectedClass}
                                        onClick={() => {
                                            let ACTION = selected ? ACTIONS.REMOVE_ADD_ON : ACTIONS.ADD_ADD_ON;
                                            addOnDispatch({type: ACTION, key: key})
                                        }}
                                    >{key}</div>
                                )
                            })}
                        </div>
                    </div>
                    {/*<div id={'disclaimer'}>*/}
                    {/*    We'll discuss availability when scheduling your appointment.*/}
                    {/*</div>*/}
                </div>
                <div className={'formSection bottom'}>
                    <div className={'contactBotSection sendHolder'}>
                        <button onClick={e=>{sendEmail(e)}}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );




    function sendEmail(e) {
        e.preventDefault();
        let addOns = []
        Object.keys(addOnObject).forEach((key) => {
            if(addOnObject[key].selected){
                let str = key + ' priced at ' + addOnObject[key].price;
                console.log(str);
                addOns.push(str);
            }
        });
        let offers = [];
        selectedOffers.forEach((offer) => {
            let str = offer.text + ' priced at ' + offer.price + ' DISCOUNTED to ' + offer.discountedPrice
            offers.push(str);
        });
        let data = {...formState, addOns: addOns, offers: offers}
        emailjs.send('service_r317n9j', 'A4H_template', data, 'user_bmGQziAe7CejBZhHyXZm6')
            .then(function(response) {
            }, function(error) {
                console.log('FAILED...', error);
            });
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
    'Back Rub': {
        price: 5,
        selected: false

    }, 'Special Back Rub': {
        price: 50,
        selected: false

    },
    'Little tree air freshner': {
        price: 5,
        selected: false
    },
    'Big tree air freshner': {
        price: 10,
        selected: false

    },
    'steering wheel re-calibration': {
        price: 500,
        selected: false
    },
    'fish sandwich': {
        price: 10,
        selected: false
    }
}

