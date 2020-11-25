import React from 'react';

export default class BlogAndBTT extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };


    render() {
        return (
            <div
                id={'blogAndBTT'}
                className="separator">
                <div className={'mainBody'}>
                    <div className={'bottomButton'}
                         onClick={this.props.openBlog}
                    > Visit Our BLog
                    </div>
                    <div className={'bottomButton'}
                         onClick={this.props.backToTop}
                    > Back to Top
                    </div>
                </div>
            </div>
        )
    }
}
