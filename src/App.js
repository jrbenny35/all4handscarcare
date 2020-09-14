import React from 'react';
import './App.css';
import {FixedNavMenu} from './components/fixedNavMenu/';
import './components/separators';
import {About, Contact, ExteriorServices, Splash, Blog, InteriorServices} from "./components/separators";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpen: true,
            isIOS: false
        }
    }

    componentWillMount() {
        let isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
            || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

        this.setState();
    }

    render() {
        return (

            <div className="App">
                {!this.state.navOpen &&
                <FixedNavMenu
                    openNav={() => {
                        this.setState({navOpen: true});
                    }}
                />
                }
                <Splash/>
                <ExteriorServices/>
                <InteriorServices/>
                <Contact/>
                {/*<About/>*/}
                {/*<Blog/>*/}
            </div>
        );
    }
}

