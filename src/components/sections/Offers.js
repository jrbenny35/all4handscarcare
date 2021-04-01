import React, {useReducer} from 'react';

export default function Offers() {
    const [offersState, dispatch] = useReducer(reducer_selectedServices, initialState);

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
                                <span className={'comboPrice'}>{offerObject.price}</span>
                                <span className={'discountedPrice'}>{offerObject.discountedPrice}</span>
                            </li>);
                    })}
                </ul>
            </div>
        </div>
    );
}

const offersArray = [
    {
        text: 'this is deal text',
        price: 500,
        discountedPrice: 0,
        id: 1
    }, {
        text: 'this is deal text',
        price: 500,
        discountedPrice: 0,
        id: 2

    },
    {
        text: 'this is deal text',
        price: 500,
        discountedPrice: 0,
        id: 3
    },
    {
        text: 'this is deal text',
        price: 500,
        discountedPrice: 0,
        id: 4
    }, {
        text: 'this is deal text',
        price: 500,
        discountedPrice: 0,
        id: 5

    },
    {
        text: 'this is deal text',
        price: 500,
        discountedPrice: 0,
        id: 6
    }
];


const ACTIONS = {
    SELECT_OFFER: 'selectOffer',
    REMOVE_OFFER: 'removeService'
}
const initialState = {
    allOffers: offersArray,
    selectedOffersByID: {}
};

function reducer_selectedServices(state, action) {
    switch (action.type) {
        case ACTIONS.SELECT_OFFER:
            state.allOffers[action.arrayIndex].selected = true;
            state.selectedOffersByID[action.offerObject.id] = true;
            return {...state};
        case ACTIONS.REMOVE_OFFER:
            state.allOffers[action.arrayIndex].selected = false;
            state.selectedOffersByID[action.offerObject.id] = false;
            return {...state};
        default:
            return state;
    }
}

