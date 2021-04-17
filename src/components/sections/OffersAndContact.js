import React, {useReducer} from 'react';
import Offers from './Offers';
import Contact from './Contact';


export default function OffersAndContact() {
    const [offersState, dispatch] = useReducer(reducer_selectedServices, initialState);
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

    return (
        <div id={'contactSection'} className="separator contact">
            <div className={'mainBody'}>
                <Offers
                    dispatch={dispatch}
                    offersState={offersState}
                    ACTIONS={ACTIONS}
                />
                <Contact
                    selectedOffers={offersState.allOffers.filter(offer=>{return offer.selected})}
                />
            </div>
        </div>
    )
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
    selectedOffersByID: {},
    selectedOffersArray: []
};