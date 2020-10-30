import React from 'react';
import './App.css';
import {MobileNavButton, MobileNavMenu} from './components/mobileNavMenuAndButton/';
import {DesktopNav} from './components/desktopNav/';
import './components/separators';
import {BlogAndBTT, About, Contact, ExteriorServices, Splash, Blog, InteriorServices} from "./components/separators";
import AnchorLink from "react-anchor-link-smooth-scroll";

function posY(elm) {
    var test = elm, top = 0;

    while (!!test && test.tagName.toLowerCase() !== "body") {
        top += test.offsetTop;
        test = test.offsetParent;
    }

    return top;
}

function viewPortHeight() {
    var de = document.documentElement;

    if (!!window.innerWidth) {
        return window.innerHeight;
    } else if (de && !isNaN(de.clientHeight)) {
        return de.clientHeight;
    }

    return 0;
}

function scrollY() {
    if (window.pageYOffset) {
        return window.pageYOffset;
    }
    return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

function checkvisible(elm) {
    var vpH = viewPortHeight(), // Viewport Height
        st = scrollY(), // Scroll Top
        y = posY(elm);

    return (y > (vpH + st));
}


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNavMenuOpen: false,
            isIOS: false,
            showMobileNavButton: false,
            windowDimensions: {height: null, width: null},
            currentSection: 'splash',
            windowYOffset: 0,
            showDesktopNav: false,
            sectionCoordinates: {
                splash: {top: null, bot: null},
                exterior: {top: null, bot: null},
                interior: {top: null, bot: null},
                contact: {top: null, bot: null}
            }
        }
        this.desktopNavMenuTimeout = () => {
        };
        this.positionCheckTimeout = () => {
        };
        this.setWindowDimensions = this.setWindowDimensions.bind(this);
        this.updateCoords = this.updateCoords.bind(this);
        this.scrollToSection = this.scrollToSection.bind(this);
    }

    componentWillMount() {
        this.setWindowDimensions();
        window.addEventListener('resize', () => {
            this.setWindowDimensions();
        });
        let isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
            || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

        this.setState({isIOS: isIOS});
    }


    setDesktopNavTimeout(navFadeoutTimeout = 2000, positionCheckTimeout = 200) {
        if (this.desktopNavMenuTimeout !== null) {
            clearTimeout(this.desktopNavMenuTimeout);
            this.desktopNavMenuTimeout = setTimeout(() => {
                this.setState({
                    showDesktopNav: false
                });
            }, navFadeoutTimeout);
            this.positionCheckTimeout = setTimeout(() => {
                /**
                 * final check post scroll
                 **/
                this.getAndSet_CurrentSection();
            }, positionCheckTimeout);

        } else {
            this.desktopNavMenuTimeout = setTimeout(() => {
                this.setState({showDesktopNav: false});
            }, navFadeoutTimeout);
        }
    }

    getAndSet_CurrentSection(navTimeout) {
        let top = window.pageYOffset;
        let windowHeight = this.state.windowDimensions.height;
        let bot = top + windowHeight;
        let coords = this.state.sectionCoordinates;
        let currentSection;
        if (bot > coords.exterior.halfCheckDistance) {
            currentSection = 'exteriorServicesSection';
        }
        if (bot > coords.interior.halfCheckDistance) {
            currentSection = 'interiorServicesSection';
        }
        if (top < coords.exterior.bot) {
            currentSection = 'exteriorServicesSection';
        }
        if (bot > coords.contact.halfCheckDistance) {
            currentSection = 'contactSection';
        }
        if (top < coords.interior.bot) {
            currentSection = 'interiorServicesSection';
        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            currentSection = 'bottom';
        }
        if (top < coords.splash.bot) {
            currentSection = 'splash';
            this.setState({showDesktopNav: true})
        }
        this.setState({
            windowYOffset: top,
            currentSection: currentSection
        }, () => {
            if (navTimeout) {
                this.setDesktopNavTimeout();
            }
        });
    }

    onScroll() {
        let navTimeout = true;
        this.setState({showDesktopNav: true})
        this.getAndSet_CurrentSection(navTimeout);
    }

    setWindowDimensions() {
        let width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        let height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        let windowDimensions = {height: height, width: width}
        let showMobileNavButton = false;
        if (width < 800) {
            showMobileNavButton = true;
        }
        this.setState({
            windowDimensions: windowDimensions,
            showMobileNavButton: showMobileNavButton,
        });
    }

    updateCoords(section, coordObj) {
        let sectionCoordinates = this.state.sectionCoordinates;
        sectionCoordinates[section] = coordObj;
        this.setState({sectionCoordinates: sectionCoordinates});
    }

    scrollToSection(sectionID) {
        let offsetTop = document.getElementById(sectionID).offsetTop;


        if (this.state.mobileNavMenuOpen) {
            this.setState({mobileNavMenuOpen: false});
        }


        // eslint-disable-next-line no-restricted-globals
        scroll({
            top: offsetTop,
            currentSection: sectionID,
            behavior: "smooth"
        });
    }

    render() {

        let sectionCoords = this.state.sectionCoordinates;
        let reportDistances = (sectionCoords.forceReset || sectionCoords.splash.top_distanceFromTo !== 0);

        let isAtTop = this.state.currentSection === 'splash';

        let desktopNavClasses = (this.state.showDesktopNav || isAtTop) ? 'visible' : '';
        desktopNavClasses += isAtTop ? ' top' : '';
        return (

            <div
                className="App"
                onScroll={(e) => {
                    this.onScroll();
                }}
                onWheel={(e) => {
                    this.onScroll();
                }}
            >


                {!this.state.showMobileNavButton &&
                <div
                    id={'desktopNav'}
                    className={desktopNavClasses}
                    onClick={() => {
                        // this.props.openDesktopNav();
                    }}
                >
                    <div
                        className={'desktopNavLink'}
                        onClick={() => {
                            this.scrollToSection('exteriorServicesSection');
                        }}
                        onMouseEnter={() => {
                            this.setDesktopNavTimeout(1500);
                        }}
                        onMouseMove={() => {
                            this.setDesktopNavTimeout(1500);
                        }}
                    >
                        Exterior
                    </div>
                    <div
                        className={'desktopNavLink'}
                        onClick={() => {
                            this.scrollToSection('interiorServicesSection');
                        }}
                        onMouseEnter={() => {
                            this.setDesktopNavTimeout(1500);
                        }}
                        onMouseMove={() => {
                            this.setDesktopNavTimeout(1500);
                        }}
                    >
                        Interior
                    </div>
                    <div
                        className={'desktopNavLink'}
                        onClick={() => {
                            this.scrollToSection('contactSection');
                        }}
                        onMouseEnter={() => {
                            this.setDesktopNavTimeout(1500);
                        }}
                        onMouseMove={() => {
                            this.setDesktopNavTimeout(1500);
                        }}
                    >
                        Contact
                    </div>
                    <div
                        className={'desktopNavLink'}
                        onClick={() => {
                            window.open('http://google.com');
                        }}
                        onMouseEnter={() => {
                            this.setDesktopNavTimeout(1500);
                        }}
                        onMouseMove={() => {
                            this.setDesktopNavTimeout(1500);
                        }}
                    >
                        Blog
                    </div>
                    <div
                        className={'desktopNavLink'}
                        onClick={() => {
                            this.scrollToSection('splash');
                        }}
                        onMouseEnter={() => {
                            this.setDesktopNavTimeout(1500);
                        }}
                        onMouseMove={() => {
                            this.setDesktopNavTimeout(1500);
                        }}
                    >
                        Top
                    </div>

                </div>
                }
                {this.state.showMobileNavButton && !this.state.mobileNavMenuOpen &&
                <MobileNavButton
                    openNav={() => {
                        this.setState({mobileNavMenuOpen: true});
                    }}
                    currentSection={this.state.currentSection}
                />
                }
                {this.state.mobileNavMenuOpen && <MobileNavMenu
                    scrollToSection={this.scrollToSection}
                    currentSection={this.state.currentSection}

                />}

                <Splash
                    currentSection={this.state.currentSection}
                    sectionCoordinates={this.state.sectionCoordinates}
                    windowYOffset={this.state.windowYOffset}
                    forceReset={sectionCoords.forceReset}
                    windowDimensions={this.state.windowDimensions}
                    reportDistance={reportDistances}
                    updateCoords={(coordObj) => {
                        this.updateCoords('splash', coordObj);
                    }}
                />
                <Contact
                    currentSection={this.state.currentSection}
                    sectionCoordinates={this.state.sectionCoordinates}
                    windowYOffset={this.state.windowYOffset}
                    forceReset={sectionCoords.forceReset}
                    windowDimensions={this.state.windowDimensions}
                    stickyHeader={this.state.currentStickyHeader}
                    reportDistance={reportDistances}
                    updateCoords={(coordObj) => {
                        this.updateCoords('contactSection', coordObj);
                    }}
                />
                <ExteriorServices
                    currentSection={this.state.currentSection}
                    sectionCoordinates={this.state.sectionCoordinates}
                    windowYOffset={this.state.windowYOffset}
                    forceReset={sectionCoords.forceReset}
                    windowDimensions={this.state.windowDimensions}
                    stickyHeader={this.state.currentStickyHeader}
                    reportDistance={reportDistances}
                    updateCoords={(coordObj) => {
                        this.updateCoords('exteriorServicesSection', coordObj);
                    }}
                />
                <InteriorServices
                    currentSection={this.state.currentSection}
                    sectionCoordinates={this.state.sectionCoordinates}
                    windowYOffset={this.state.windowYOffset}
                    forceReset={sectionCoords.forceReset}
                    windowDimensions={this.state.windowDimensions}
                    stickyHeader={this.state.currentStickyHeader}
                    reportDistance={reportDistances}
                    updateCoords={(coordObj) => {
                        this.updateCoords('interiorServicesSection', coordObj);
                    }}
                />
                <BlogAndBTT
                    backToTop={() => {
                        this.scrollToSection('splash');
                    }}
                    openBlog={() => {
                        window.open('http://google.com');
                    }}
                />
                {/*<About/>*/}
                {/*<Blog/>*/}
            </div>
        );
    }
}

