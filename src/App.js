import React from 'react';
import './App.css';
import {FixedNavMenu} from './components/fixedNavMenu/';
import './components/separators';
import {About, Contact, ExteriorServices, Splash, Blog} from "./components/separators";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpen: true
        }
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
                <Contact/>
                <About/>
                <Blog/>
            </div>
        );
    }


}

