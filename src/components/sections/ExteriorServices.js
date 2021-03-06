import React from 'react';
import icon1 from '../../icons/level1.png';
import icon2 from '../../icons/level2.png';
import icon3 from '../../icons/level3.png';
import icon4 from '../../icons/level4.png';

export default class ExteriorServices extends React.Component {
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
                }, 100);
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
                    id={'exteriorServicesSection'}
                    className="separator services"
                    ref={this.entireSection}
                >
                    <div
                        className={'headerHolder'}
                        ref={this.headerHolder}
                    >
                    <span
                        className={'header'}
                    >Exterior Services
                    </span>
                    </div>
                    <div
                        className={stickyHeaderHolderClasses}
                    >
                    <span
                        className={'header'}
                    >Exterior Services
                    </span>
                    </div>


                    <div className={'mainBody'}>
                        <div className={'holder'}>
                            <div className={'slice'}>
                                <div className={'level level1'}>
                                    <span className={'levelText'}>Level </span>
                                    <img alt={'tier 1 icon'} src={icon1}/>

                                </div>
                                <ul>
                                    <li>Complete Exterior Cleaning</li>
                                    <li>Wheel Cleaning</li>
                                    <li>Tire Cleaning</li>
                                    <li>Basic Protective Sealant</li>
                                </ul>
                                <div className={'youtubeHolder'}>
                                    <iframe
                                        title={'vid1'}
                                        src="https://www.youtube.com/embed/EdAfTx-PXmo"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                                </div>
                            </div>
                            <div className={'slice'}>
                                <div className={'level level2'}>
                                    <span className={'levelText'}>Level </span>
                                    <img alt={'tier 2 icon'} src={icon2}/>

                                </div>
                                <ul>
                                    <li className={'includes'}>
                                        <span className={'includesHolder'}>
                                            <span className={'includeText'}>INCLUDES LEVEL</span>
                                            <span className={'imgHolder'}><img alt={'tier 1 icon'} src={icon1}/> </span>
                                        </span>
                                    </li>
                                    <li>Paint Decontamination Package</li>
                                    <li>High End Sealant</li>
                                </ul>
                                <div className={'youtubeHolder'}>
                                    <h1>Video Coming Soon!</h1>
                                </div>
                            </div>
                            <div className={'slice'}>
                                <div className={'level level3'}>
                                    <span className={'levelText'}>Level </span>
                                    <img alt={'tier 3 icon'} src={icon3}/>
                                </div>
                                <ul>
                                    <li className={'includes'}>
                                        <span className={'includesHolder'}>
                                            <span className={'includeText'}>INCLUDES LEVEL</span>
                                            <span className={'imgHolder'}><img alt={'tier 2 icon'} src={icon2}/> </span>
                                        </span>
                                    </li>
                                    <li>One Step Paint Correction</li>
                                    <li>Complete Trim Package</li>
                                    <li>Glass Sealant</li>
                                </ul>
                                <div className={'youtubeHolder'}>
                                    <h1>Video Coming Soon!</h1>
                                </div>
                            </div>
                            <div className={'slice'}>
                                <div className={'level level4'}>
                                    <span className={'levelText'}>Level </span>
                                    <img alt={'tier 4 icon'} src={icon4}/>

                                </div>
                                <ul>
                                    <li className={'includes'}>
                                        <span className={'includesHolder'}>
                                            <span className={'includeText'}>INCLUDES LEVEL</span>
                                            <span className={'imgHolder'}><img alt={'tier 3 icon'} src={icon3}/> </span>
                                        </span>
                                    </li>
                                    <li>Engine Bay Cleaning Package</li>
                                    <li>Ceramic Coating Package</li>
                                    <li>Full Paint Correction</li>
                                    <li>Metal Polish</li>
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
