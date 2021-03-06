import React from 'react';


export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {current: this.props.current};
    }

    render() {

        return (
            <div className="separator">
            </div>
        )
    }
}
