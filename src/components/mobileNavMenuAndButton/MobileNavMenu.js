import React from 'react';


export default class MobileNavButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div
                id={'mobileNavMenu'}
                className={'mobileNav visible'}
                onWheel={(e => {
                    e.preventDefault();
                })}
            >
                <div
                    className={'desktopNavLink'}
                    onClick={() => {
                        this.props.scrollToSection('exteriorServicesSection');
                    }}
                >
                    Exterior
                </div>
                <div
                    className={'desktopNavLink'}
                    onClick={() => {
                        this.props.scrollToSection('interiorServicesSection');
                    }}
                >
                    Interior
                </div>
                <div
                    className={'desktopNavLink'}
                    onClick={() => {
                        this.props.scrollToSection('contactSection');
                    }}
                >
                    Contact
                </div>
                <div
                    className={'desktopNavLink'}
                    onClick={() => {
                        window.open('http://google.com');
                    }}
                >
                    Blog
                </div>
                <div
                    className={'desktopNavLink'}
                    onClick={() => {
                        this.props.scrollToSection('splash');
                    }}
                >
                    Top
                </div>
            </div>
        )
    }
}
