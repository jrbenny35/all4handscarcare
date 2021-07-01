import React from 'react';
import icon1 from '../../icons/level1.png';
import icon2 from '../../icons/level2.png';

export default class InteriorServices extends React.Component {
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
                    >Interior Services
                    </span>
                </div>
                <div
                    className={stickyHeaderHolderClasses}
                >
                    <span
                        className={'header'}
                    >Interior Services
                    </span>
                </div>

                <div className={'mainBody'}>
                    <div className={'holder'}>
                        <div className={'slice'}>
                            <div className={'level level1'}>
                                <div className={'levelTextAndIconHolder'}>
                                    <span className={'levelText'}>Tier </span>
                                    <img alt={'tier 1 icon'} src={icon1}/>
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
                                    <li>UV Protection applied to Dash, door panels, seats</li>
                                </ul>
                            </div>
                            <div className={'specialHolder'}>
                                <div className={'special'}>Special Attention paid to:</div>
                                <ul className={'specialUL'}>
                                    <ul>
                                        <li>Steering wheel</li>
                                        <li>Center Console</li>
                                        <li>Doors</li>
                                    </ul>
                                    <ul>
                                        <li>Seats</li>
                                        <li>Dashboard</li>
                                        <li>Touch Surfaces</li>
                                    </ul>
                                </ul>
                            </div>
                            <div className={'youtubeHolder'}>
                                <iframe src="https://www.youtube.com/embed/mO_p3sEguTM"
                                        title={'vid 2int'}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                        </div>
                        <div className={'slice interiorTier2'}>
                            <div className={'level level2'}>
                                <div className={'levelTextAndIconHolder'}>
                                    <span className={'levelText'}>Tier </span>
                                    <img alt={'tier 2 icon'} src={icon2}/>
                                </div>
                            </div>

                            <ul>

                                <li
                                    className={'includes'}>
                                    Deep clean version of services provided in <span className={'includesHolder'}>
                                            <span className={'includeText'}> Tier</span>
                                            <span className={'imgHolder'}><img alt={'tier 1 icon'} src={icon1}/> </span>
                                        </span>
                                </li>
                                <li>Only done via estimates</li>
                            </ul>
                            <div className={'youtubeHolder'}>
                                <h1>Video Coming Soon!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
