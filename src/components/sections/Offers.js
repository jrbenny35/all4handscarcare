import React from 'react';

export default function Offers({dispatch, offersState, ACTIONS}) {

    return (
        <div id={'contactSectionLeft'} className={'sideSection'}>
            <div className={'headerHolder'}>
                <div className={'header'}>Special</div>
                <div className={'header second'}>Offers</div>
            </div>

            <div className={'offersList'}>
                <div id={'offersInstruction'}>Click on any offer to have it added to your contact message.</div>
                <ul>
                    {offersState.allOffers.map((offerObject, i) => {
                        let selected = offersState.selectedOffersByID[offerObject.id];
                        let classes = 'comboSpecial' + (selected ? ' selected' : '');
                        let action = {
                            offerObject: offerObject,
                            arrayIndex: i,
                            type: selected ? ACTIONS.REMOVE_OFFER : ACTIONS.SELECT_OFFER
                        }
                        return (
                            <li key={i} className={classes} onClick={() => {
                                dispatch(action);
                            }}>
                                <span className={'comboText'}>{offerObject.text}</span>
                                <span className={'discountedPrice'}>${offerObject.discountedPrice}</span>
                            </li>);
                    })}
                </ul>
            </div>
        </div>
    );
}



