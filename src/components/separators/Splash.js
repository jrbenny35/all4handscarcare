import React from 'react';
import logoImg from '../images/textLogoLightFont.png';

export default class BigBoiSeperator extends React.Component {
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

    }

    render() {
        return (
            <div
                id={'splash'}
                className="separator">
                <img
                    alt={'logo'}
                    className={'logo'}
                    src={logoImg}
                    ref={this.entireSection}
                />
                <div id={'slogan'}>When two hands aren't enough.</div>
            </div>
        )
    }
}
