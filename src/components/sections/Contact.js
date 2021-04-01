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
    UPDATE_YEAR: 'updateYear'
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

export default function Contact() {
    const [formState, dispatch] = useReducer(formReducer, initialFormState);
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
                                })}
                                <div className={('necessaryFieldIndicator' + (formState.name.length !== 0 ? ' valid' : ''))}/>
                            </div>
                            <div className={'necessaryFieldHolder'}>
                                {Input('numberInput', 'Phone Number', formState.phoneNumber, (e) => {
                                    let numbers = getPhoneNumber(e.target.value);
                                    if(numbers) {
                                        dispatch({
                                            type: ACTIONS.UPDATE_PHONE_NUMBER,
                                            phoneNumber: numbers.phoneNumber,
                                            phoneNumberDisplayed: numbers.phoneNumberDisplayed
                                        });
                                    }
                                })}
                                <div className={('necessaryFieldIndicator' + (formState.phoneNumber.length === 10 ? ' valid' : ''))}/>
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
                        <div id={'selectedServicesHeader'}>Selected Combos</div>
                        <div id={'selectionsHolder'}>

                            SELECTED SERVICES LIVE HERE
                            {/*{this.state.selectedServices.map((combo) => {*/}
                            {/*    return (*/}
                            {/*        <div>{combo.text}</div>*/}
                            {/*    )*/}
                            {/*})}*/}
                        </div>
                    </div>
                    <div id={'disclaimer'}>
                        We'll discuss availability when scheduling your appointment.
                    </div>
                </div>
                <div className={'formSection bottom'}>
                    <div className={'contactBotSection sendHolder'}>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_r317n9j', 'template_3vdhg3h', e.target, 'user_bmGQziAe7CejBZhHyXZm6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
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