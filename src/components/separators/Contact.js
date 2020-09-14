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
                            <span className={'header'}>Contact</span>
                        </div>
                    </div>

                    <div id={'contactSectionRight'} className={'sideSection'}>
                        <div id={'actualForm'}>
                            <div className={'formSection nameNumber'}>
                                <input
                                    type={'text'}
                                    className={'contactFormInput'}
                                    id={'nameInput'}
                                />
                                <input
                                    type={'text'}
                                    className={'contactFormInput'}
                                    id={'numberInput'}
                                />
                            </div>
                            <div className={'formSection email'}>
                                <input
                                    type={'text'}
                                    className={'contactFormInput'}
                                    id={'emailInput'}
                                />
                            </div>
                            <div className={'formSection bottom'}>
                                <div className={'contactBotSection'}>
                                    <textarea/>
                                </div>
                                <div className={'contactBotSection'}>
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
