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

                    </div>
                </div>
            </div>
        )
    }
}
