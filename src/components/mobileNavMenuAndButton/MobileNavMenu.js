import React from 'react';


export default class MobileNavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                            <span className={'header second'}>Contact</span>
                        </div>


                        <div className={'rightSideText'}>
                            The best way to get started is to get in contact.
                            <br/>Shoot us a message with what your details and we'll be in touch.
                        </div>
                    </div>

                    <div id={'contactSectionRight'} className={'sideSection'}>
                        <div id={'actualForm'}>
                            <div id={'formHeader1'}>Let's talk</div>
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
                                {/*<div className={'contactBotSection radiosHolder'}>*/}
                                {/*    <div>*/}
                                {/*        <input type="radio" id="exterior" name="service" value="exterior"/>*/}
                                {/*        <label htmlFor="exterior">Exterior</label>*/}

                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <input type="radio" id="interior" name="service" value="interior"/>*/}
                                {/*        <label htmlFor="interior">Interior</label>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <input type="radio" id="other" name="service" value="other"/>*/}
                                {/*        <label htmlFor="other">Other</label>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className={'contactBotSection sendHolder'}>
                                    <button>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
