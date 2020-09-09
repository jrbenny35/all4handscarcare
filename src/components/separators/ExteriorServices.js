import React from 'react';
import icon1 from '../../icons/level1.png';
import icon2 from '../../icons/level2.png';
import icon3 from '../../icons/level3.png';
import icon4 from '../../icons/level4.png';

export default class ExteriorServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {current: this.props.current};
    }

    render() {

        return (
            <div
                id={'exteriorServicesSection'}
                className="separator services"
            >
                <div
                    className={'headerHolder'}
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
                                <li>Decontamination</li>
                                <li>Wheel Cleaning</li>
                                <li>Tire Cleaning</li>
                                <li>Protective Coating</li>
                            </ul>
                            <div className={'youtubeHolder'}>
                                <iframe
                                    title={'vid1'}
                                    src="https://www.youtube.com/embed/xaQmB_qje_4"
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
                                <iframe
                                    title={'vid 2'}
                                    src="https://www.youtube.com/embed/xaQmB_qje_4"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
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
                                <iframe src="https://www.youtube.com/embed/xaQmB_qje_4"
                                        title={'vid 3'}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
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
                                <iframe src="https://www.youtube.com/embed/xaQmB_qje_4"
                                        title={'vid4'}
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
