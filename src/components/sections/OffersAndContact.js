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
        text: 'Basic Interior/Exterior (New Client)',
        // price: 225 + '+',
        discountedPrice: 225 + '+',
        id: 1
    }, {
        text: 'Basic Exterior + Deep Clean Interior',
        //price: 300 + '+',
        discountedPrice: 300 + '+',
        id: 2

    },
    {
        text: 'Deep clean Interior/Exterior',
        //price: 500,
        discountedPrice: 375 + '+',
        id: 3
    },
    {
        text: '1 Yr Ceramic Coating (includes a deep interior/exterior clean)',
        // price: 500,
        discountedPrice: 500 + '+',
        id: 4
    }, {
        text: 'Paint Correction or Enhancement',
        // price: 500,
        discountedPrice: 600 + '+',
        id: 5

    },
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