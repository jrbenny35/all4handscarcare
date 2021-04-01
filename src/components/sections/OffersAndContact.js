import React from 'react';
import Offers from './Offers';
import Contact from './Contact';


export default class OffersAndContact extends React.Component {

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
        this.localTimeout = () => {
        };
    }

    render() {

        // let winYOffset = this.props.windowYOffset;
        // let coords = this.state.coords;
        // let headerHolderClasses = 'headerHolder';
        // if (winYOffset < (coords.bot - coords.headerHolderHeight) && winYOffset > coords.top) {
        //     headerHolderClasses += ' sticky';
        // }

        return (
            <div
                id={'contactSection'}
                className="separator contact"
                ref={this.entireSection}
            >
                <div className={'mainBody'}>
                    <Offers/>
                    <Contact/>
                </div>
            </div>
        )
    }
}
