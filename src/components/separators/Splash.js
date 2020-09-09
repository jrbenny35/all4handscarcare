import React from 'react';
import logoImg from '../images/textLogoLightFont.png';

export default class BigBoiSeperator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {current: this.props.current};
    }

    render() {

        return (
            <div
                id={'splash'}
                className="separator">
                <img alt={'logo'} className={'logo'}
                    src={logoImg} />
                    <div id={'slogan'}>When two hands aren't enough.</div>
            </div>
        )
    }
}
