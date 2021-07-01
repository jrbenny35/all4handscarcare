import React from 'react';
import benPic from '../../assets/images/portrait.jpg';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {current: this.props.current};
    }

    render() {

        return (
            <div
                id={'aboutSection'}
                className="separator contact"
                ref={this.entireSection}

            >

                <div id={'aboutBody'}>
                    <div className={'headerHolder'}
                         ref={this.headerHolder}>
                        <div className={'header'}>About</div>
                    </div>
                    <div id={'aboutContent'}>
                        <div id={'aboutTextAndImg'}>

                            <p>All 4 Hands Car Care provides high end detailing services to those who want to protect 
                                and maintain their automotive purchases for years to come. Using only the best 
                                techniques and products, we make sure to only enhance your vehicle with the utmost care 
                                and precision. Let us take care of your investment!
                            </p>
                            <div id={'aboutPic'}>
                                <img id={'benPic'} src={benPic} alt={'Ben Forehand'}/>
                            </div>
                        </div>
                        <div id={'boldAboutText'}>
                            <p>Specializing in Paint Correction and Ceramic Coatings. IDA Certified. Insured.</p></div>


                    </div>
                </div>
            </div>
        )
    }
}
