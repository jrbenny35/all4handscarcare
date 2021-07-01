import React from 'react';
import icon1 from '../../icons/level1.png';
import icon2 from '../../icons/level2.png';

export default class IndividualItems extends React.Component {
    constructor(props) {
        super(props);
        this.entireSection = React.createRef();
        this.headerHolder = React.createRef();
        this.state = {
            current: this.props.current,
            coords: {
                top: null,
                bot: null,
                height: null,
                headerHolderHeight: null
            },
            allowUpdate: true
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
        let stickyHeaderHolderClasses = 'stickyHeaderHolder';

        let windowBot = winYOffset + this.props.windowDimensions.height;
        if (winYOffset > coords.top && (windowBot < coords.bot)) {
            //inside
            stickyHeaderHolderClasses += ' visible';

        }
        return (
        <div
            id={'interiorServicesSection'}
            className="separator services"
            ref={this.entireSection}
        >
            <div
                className={'headerHolder'}
                ref={this.headerHolder}
            >
                <span
                    className={'header'}
                >A la Carte services
                </span>
            </div>
            <div
                className={stickyHeaderHolderClasses}
            >
                <span
                    className={'header'}
                >A la Carte services
                </span>
            </div>

            <div className={'mainBody'}>
                <div className={'holder'}>
                    <div className={'slice'}>
                        <div className={'level level1'}>
                            <div className={'individualItemHolder'}>
                                <span className={'individualItemText'}>Decontamination</span>
                            </div>
                        </div>
                        <div id={'tier1ULHolder'}>
                            <ul>
                                <li>Trash removed from vehicle</li>
                                <li>Vacuum of seats and carpets</li>
                                <li>Cleaning of vents</li>
                            </ul>
                            <ul>
                                <li>Leather Seats cleaned lightly</li>
                                <li>UV Protection applied</li>
                                <li>Dash, door panels, seats</li>
                            </ul>
                        </div>
                    </div>
                    <div className={'slice'}>
                        <div className={'level level1'}>
                            <div className={'individualItemHolder'}>
                                <span className={'individualItemText'}>Decontamination</span>
                            </div>
                        </div>
                        <div id={'tier1ULHolder'}>
                            <ul>
                                <li>Trash removed from vehicle</li>
                                <li>Vacuum of seats and carpets</li>
                                <li>Cleaning of vents</li>
                            </ul>
                            <ul>
                                <li>Leather Seats cleaned lightly</li>
                                <li>UV Protection applied</li>
                                <li>Dash, door panels, seats</li>
                            </ul>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        )
    }
}