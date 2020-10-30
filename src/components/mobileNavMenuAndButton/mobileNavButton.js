import React from 'react';
//import { Link, animateScroll as scroll } from "react-scroll";


export default class mobileNavButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {current: this.props.current};
    }

    render() {
        return (
            <div
                id={'mobileNavButton'}
                onClick={() => {
                    this.props.openNav();
                }}
            >
                <span/>
                <span/>
                <span/>
            </div>
        )
    }
}
