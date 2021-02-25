import React from 'react';

const sampleCombos = [
    {
        text: 'this is deal text',
        price: 1,
        id: 1
    }, {
        text: 'this is deal text',
        price: 2,
        id: 2

    },
    {
        text: 'this is deal text',
        price: 99999,
        id: 3
    }
];

export default class BigBoiSeperator extends React.Component {
    constructor(props) {
        super(props);
        this.entireSection = React.createRef();
        this.headerHolder = React.createRef();
        this.state = {
            current: this.props.current,
            coords: {top: null, bot: null},
            allowUpdate: true,
            name: '',
            phoneNumberValue: '',
            phoneNumber: '',
            phoneNumberDisplayed: '',
            make: '',
            model: '',
            year: '',
            selectedServicesByID: {},
            selectedServices: []
        };
        this.updateCoords = this.updateCoords.bind(this);
        this.localTimeout = () => {
        };
    }

    componentDidMount() {
        if (this.props.reportDistance) {
            this.updateCoords();
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {

        if (this.state.allowUpdate) {
            clearTimeout(this.localTimeout);
            let localCoords = this.state.coords;
            let elm = this.entireSection.current;
            let offsetTop = elm.offsetTop;
            let offsetHeight = elm.offsetHeight;
            let coordObj = {
                top: offsetTop,
                bot: offsetTop + offsetHeight,
                height: offsetHeight,
                halfCheckDistance: (offsetTop + (offsetHeight * .5))
            };
            if (localCoords.bot && (localCoords.bot !== coordObj.bot)) {
                this.updateCoords()
            }
            this.setState({allowUpdate: false}, () => {
                this.localTimeout = setTimeout(() => {
                    this.setState({allowUpdate: true});
                }, 250);
            })

        }
    }

    updateCoords() {
        let section = this.entireSection.current;
        let headerHolder = this.headerHolder.current;
        let offsetTop = section.offsetTop;
        let offsetHeight = section.offsetHeight;
        let coordObj = {
            top: offsetTop,
            bot: offsetTop + offsetHeight,
            height: offsetHeight,
            headerHolderHeight: headerHolder.offsetHeight,
            halfCheckDistance: (offsetTop + (offsetHeight * .5))
        };
        this.setState({coords: coordObj});
        this.props.updateCoords(coordObj)
    }

    render() {
        let winYOffset = this.props.windowYOffset;
        let coords = this.state.coords;
        let headerHolderClasses = 'headerHolder';
        if (winYOffset < (coords.bot - coords.headerHolderHeight) && winYOffset > coords.top) {
            headerHolderClasses += ' sticky';
        }

        return (
            <div
                id={'contactSection'}
                className="separator contact"
                ref={this.entireSection}

            >

                <div className={'mainBody'}>
                    <div id={'contactSectionLeft'} className={'sideSection'}>
                        <div className={'headerHolder'}
                             ref={this.headerHolder}>
                            <div className={'header'}>Combo</div>
                            <div className={'header second'}>Deals</div>
                        </div>
                        <div className={'rightSideText'}>
                            <ul>
                                {sampleCombos.map((comboObj, i) => {
                                    let classNames = 'comboSpecial';
                                    classNames += !!(this.state.selectedServicesByID[comboObj.id]) ? ' selected' : '';
                                    return (<li
                                        key={i}
                                        className={classNames}
                                        onClick={() => {
                                            let selectedServicesByID = this.state.selectedServicesByID;
                                            let selectedServices = this.state.selectedServices;

                                            if (selectedServicesByID[comboObj.id]) {
                                                //remove
                                                selectedServices.splice(comboObj.arrayIndex, 1);
                                                delete selectedServicesByID[comboObj.id];

                                                this.setState({
                                                    selectedServices: selectedServices,
                                                    selectedServicesByID: selectedServicesByID
                                                });
                                            } else {
                                                //add
                                                comboObj.arrayIndex = selectedServices.length;
                                                selectedServices.push(comboObj);
                                                selectedServicesByID[comboObj.id] = comboObj;

                                                this.setState({
                                                    selectedServices: selectedServices,
                                                    selectedServicesByID: selectedServicesByID
                                                });
                                            }

                                        }}
                                    >
                                                <span
                                                    className={'comboText'}
                                                >
                                                    {comboObj.text}
                                                </span>
                                        <span className={'comboPrice'}>
                                                    {comboObj.price}
                                                </span>
                                    </li>);
                                })}
                            </ul>
                        </div>
                    </div>

                    <div id={'contactSectionRight'} className={'sideSection'}>
                        <div className={'headerHolder'}
                             ref={this.headerHolder}>
                            <div className={'header'}>Schedule</div>
                        </div>
                        <div id={'actualForm'}>
                            {/*<div id={'formHeader1'}>Let's talk</div>*/}
                            <div className={'formSection top'}>
                                <div id={'formInputs'}>
                                    <div id={'nameAndNumber'}>
                                        <div className={'necessaryFieldHolder'}>
                                            <input
                                                type={'text'}
                                                className={'contactFormInput'}
                                                id={'nameInput'}
                                                placeholder={'Name'}
                                                value={this.state.name}
                                                onChange={(e) => {
                                                    let val = e.target.value;
                                                    this.setState({name: val})
                                                }}
                                            />
                                            <div
                                                className={('necessaryFieldIndicator' + (this.state.name.length !== 0 ? ' valid' : ''))}/>

                                        </div>
                                        <div className={'necessaryFieldHolder'}>
                                            <input
                                                type={'input'}
                                                className={'contactFormInput'}
                                                id={'numberInput'}
                                                placeholder={'Number'}
                                                value={this.state.phoneNumberDisplayed}
                                                onChange={(e) => {
                                                    let val = e.target.value;

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

                                                    console.log(newNumberValue);
                                                    this.setState({
                                                        phoneNumber: newNumberValue,
                                                        phoneNumberDisplayed: displayedNumber
                                                    });
                                                }}
                                            />
                                            <div
                                                className={('necessaryFieldIndicator' + (this.state.phoneNumber.length === 10 ? ' valid' : ''))}/>
                                        </div>
                                    </div>
                                    <div id={'makeModelHolder'}>
                                        <input
                                            type={'text'}
                                            className={'contactFormInput'}
                                            id={'make'}
                                            placeholder={'Make'}
                                            value={this.state.make}
                                            onChange={(e) => {
                                                let val = e.target.value;
                                                this.setState({make: val})
                                            }}
                                        />
                                        <input
                                            type={'text'}
                                            className={'contactFormInput'}
                                            id={'year'}
                                            placeholder={'Year'}
                                            value={this.state.year}
                                            onChange={(e) => {
                                                let val = e.target.value;
                                                let numericalYearValue = val.replace(/\D/g, '');
                                                if (numericalYearValue.length > 4) {
                                                    numericalYearValue = numericalYearValue.substring(0, 3);
                                                }
                                                this.setState({year: numericalYearValue})
                                            }}
                                        />
                                        <input
                                            type={'text'}
                                            className={'contactFormInput'}
                                            id={'model'}
                                            placeholder={'Model'}
                                            value={this.state.model}
                                            onChange={(e) => {
                                                let val = e.target.value;
                                                this.setState({model: val})
                                            }}
                                        />
                                    </div>
                                </div>
                                <div id={'selectedServices'}>
                                    <div id={'selectedServicesHeader'}>Selected Combos</div>
                                    <div id={'selectionsHolder'}>
                                        {this.state.selectedServices.map((combo) => {
                                            return (
                                                <div>{combo.text}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div id={'disclaimer'}>
                                    We'll discuss availability when scheduling your appointment.
                                    {/*Selecting a date does not guarantee its availability*/}
                                </div>
                            </div>


                            <div className={'formSection bottom'}>
                                <div className={'contactBotSection sendHolder'}>
                                    <button>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
