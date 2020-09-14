import React from 'react';


export default class BigBoiSeperator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {current: this.props.current};
    }

    render() {

        return (
            <div
                id={'contactSection'}
                className="separator contact"
            >

                <div className={'mainBody'}>
                    <div id={'contactSectionLeft'} className={'sideSection'}>
                        <div className={'headerHolder'}>
                            <span className={'header'}>Get In</span>
                            <span className={'header'}>Contact</span>
                        </div>


                        <div className={'rightSideText'}>
                            Cliche prism four loko, sustainable selvage raw denim iPhone affogato enamel pin. Man braid
                            asymmetrical viral, quinoa live-edge jean shorts lo-fi marfa typewriter vegan migas. Iceland
                            woke fanny pack bicycle rights. Organic kinfolk subway tile, art party portland kombucha
                            pour-over.
                        </div>
                    </div>

                    <div id={'contactSectionRight'} className={'sideSection'}>
                        <div id={'actualForm'}>
                            <div className={'formSection nameNumber'}>
                                <input
                                    type={'text'}
                                    className={'contactFormInput'}
                                    id={'nameInput'}
                                    placeholder={'Name'}
                                />
                                <input
                                    type={'text'}
                                    className={'contactFormInput'}
                                    id={'numberInput'}
                                    placeholder={'Number'}
                                />

                                <input
                                    type={'text'}
                                    className={'contactFormInput'}
                                    id={'emailInput'}
                                    placeholder={'Email'}
                                />
                            </div>

                            <div className={'formSection textarea'}>
                                      <textarea
                                          placeholder={'Message'}
                                      />
                            </div>
                            <div className={'formSection bottom'}>
                                <div className={'contactBotSection radiosHolder'}>
                                    <div>
                                        <input type="radio" id="exterior" name="service" value="exterior"/>
                                        <label htmlFor="exterior">Exterior</label>

                                    </div>
                                    <div>
                                        <input type="radio" id="interior" name="service" value="interior"/>
                                        <label htmlFor="interior">Interior</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="other" name="service" value="other"/>
                                        <label htmlFor="other">Other</label>
                                    </div>
                                </div>
                                <div className={'contactBotSection sendHolder'}>
                                    <button>send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
