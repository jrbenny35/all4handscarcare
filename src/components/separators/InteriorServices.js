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
                className="separator"
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
                                <span className={'levelText'}>Tier </span>
                                <img src={icon1}/>

                            </div>
                            <ul>
                                <li>Trash removed from vehicle</li>
                                <li>Light vacuum of seats and carpets</li>
                                <li>Clean vents</li>
                                <li>All touch surfaces cleaned & Sanitized</li>
                                <li>Steering wheel, Center console, door, seats dash</li>
                                <li>Leather Seats cleaned lightly</li>
                                <li>UV Protection applied</li>
                                <li>Dash, door panels, seats</li>
                            </ul>
                            <div className={'youtubeHolder'}>
                                <iframe src="https://www.youtube.com/embed/xaQmB_qje_4"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                        </div>
                        <div className={'slice'}>
                            <div className={'level level2'}>
                                <span className={'levelText'}>Tier </span>
                                <img src={icon2}/>

                            </div>
                            <ul>
                                <li className={'includes'}>
                                        <span className={'includesHolder'}>
                                            <span className={'includeText'}>INCLUDES TIER</span>
                                            <span className={'imgHolder'}><img src={icon1}/> </span>
                                        </span>
                                </li>
                                <li>Deep Cleaning of all surfaces</li>
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
