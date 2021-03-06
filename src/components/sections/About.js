import React from 'react';
import benPic from '../../assets/images/armsCrossedPepe.png';

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

                            <p>pinterest health goth. Skateboard master cleanse godard, put a bird on it dreamcatcher
                                aesthetic wayfarers you probably haven't heard of them cold-pressed. Williamsburg
                                flannel fashion axe, thundercats hammock pok pok poke you probably haven't heard of them
                                cliche skateboard truffaut vinyl pickled.

                                Activated charcoal yr mixtape migas coloring book authentic. Ethical single-origin
                                coffee palo santo forage wayfarers beard. Flannel mustache church-key tote bag
                                humblebrag viral. Leggings </p>
                            <div id={'aboutPic'}>
                                <img id={'benPic'} src={benPic}/>
                            </div>
                        </div>
                        <div id={'boldAboutText'}>
                            <p>in the sea of other things sometimes, some things shine brighter
                            than the sun </p></div>


                    </div>
                </div>
            </div>
        )
    }
}
