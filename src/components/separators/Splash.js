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
        this.updateCoords = this.updateCoords.bind(this);
        this.localTimeout = () => {
        };

    }

    componentDidMount() {
        if (this.props.reportDistance) {
            this.updateCoords();
        }
    }

    updateCoords() {
        let section = this.entireSection.current;
        let offsetTop = section.offsetTop;
        let offsetHeight = section.offsetHeight;
        let coordObj = {
            top: offsetTop,
            bot: offsetTop + offsetHeight,
            height: offsetHeight,
            halfCheckDistance: (offsetTop + (offsetHeight * .5))
        };
        this.setState({coords: coordObj});
        this.props.updateCoords(coordObj)
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
                }, 100);
            })

        }
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
