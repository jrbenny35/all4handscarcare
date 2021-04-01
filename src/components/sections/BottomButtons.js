import React from 'react';


export default function BottomButtons({openBlog, backToTop}) {
    return (
        <div
            id={'blogAndBTT'}
            className="separator">
            <div className={'mainBody'}>
                <div className={'bottomButton'}
                     onClick={openBlog}
                > Visit Our Blog
                </div>
                <div className={'bottomButton'}
                     onClick={backToTop}
                > Back to Top
                </div>
            </div>
        </div>
    )
}