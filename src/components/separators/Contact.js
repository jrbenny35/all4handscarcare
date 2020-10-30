import React from 'react';


export default class BigBoiSeperator extends React.Component {
    constructor(props) {
        super(props);
        this.entireSection = React.createRef();
        this.headerHolder = React.createRef();
        this.state = {
            current: this.props.current,
            coords: {top: null, bot: null},
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
        let headerHolderClasses = 'headerHolder';
        if (winYOffset < (coords.bot - coords.headerHolderHeight) && winYOffset > coords.top) {
            headerHolderClasses += ' sticky';
        }

        return (
            <div
                id={'contactSection'}
                className="separator contact"
                ref={this.entireSection}

            >

                <div className={'mainBody'}>
                    <div id={'contactSectionLeft'} className={'sideSection'}>
                        <div className={'headerHolder'}
                             ref={this.headerHolder}>
                            <div className={'header'}>Combo</div>
                            <div className={'header second'}>Deals</div>
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
