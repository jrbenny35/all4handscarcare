import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


export default class FixedNavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {current: this.props.current};
    }

    render() {
        return (
            <div
                id={'fixedNav'}
                onClick={()=>{
                    this.props.openNav();
                }}
            >
                tester
            </div>
        )
    }
}
