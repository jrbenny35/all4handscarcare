import React from 'react';
import icon1 from '../../icons/level1.png';
import icon2 from '../../icons/level2.png';
import icon3 from '../../icons/level3.png';
import icon4 from '../../icons/level4.png';

export default class InteriorServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {current: this.props.current};
    }

    render() {

        return (
            <div
                id={'interiorServicesSection'}
                className="separator services"
            >
                <div
                    className={'headerHolder'}
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
                                    <img src={icon1}/>
                                </div>
                                <div className={'headerSubtitle'}>
                                    &#8226; Because of our attention to detail, this tier will suffice for the <span className={'subtitleEmphasis'}>vast</span> of situations &#8226;
                                </div>
                            </div>
                            <div id={'tier1ULHolder'}>
                                <ul>
                                    <li>Trash removed from vehicle</li>
                                    <li>Vacuum of seats and carpets</li>
                                    <li>Cleaning of vents</li>
                                    {/*<li>Interactive/Touch Surfaces</li>*/}
                                    {/*<ul>*/}
                                    {/*    <li>Thoroughly Cleaned</li>*/}
                                    {/*    <li>Sanitized</li>*/}
                                    {/*</ul>*/}

                                </ul>
                                <ul>
                                    <li>Leather Seats cleaned lightly</li>
                                    <li>UV Protection applied</li>
                                    <li>Dash, door panels, seats</li>
                                </ul>
                            </div>
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
                            <div className={'youtubeHolder'}>
                                <iframe src="https://www.youtube.com/embed/xaQmB_qje_4"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                        </div>
                        <div className={'slice interiorTier2'}>
                            <div className={'level level2'}>
                                <div className={'levelTextAndIconHolder'}>
                                    <span className={'levelText'}>Tier </span>
                                    <img src={icon2}/>
                                </div>
                                <div className={'headerSubtitle'}>
                                    &#8226; This is for those <span className={'subtitleEmphasis'}>serious</span> messes where special attention is needed. &#8226;
                                </div>
                            </div>

                            <ul>
                                <li className={'includes'}>
                                        <span className={'includesHolder'}>
                                            <span className={'includeText'}>INCLUDES TIER</span>
                                            <span className={'imgHolder'}><img src={icon1}/> </span>
                                        </span>
                                </li>
                                <li>Deep clean version of services provided in Tier 1</li>
                            </ul>
                            <div className={'youtubeHolder'}>
                                <iframe src="https://www.youtube.com/embed/xaQmB_qje_4"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
