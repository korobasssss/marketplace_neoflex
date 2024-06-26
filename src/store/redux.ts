import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {cartReducer} from "@/store/reducers/cartReducer";
import {productsReducer} from "@/store/reducers/productsReducer";
import {thunk} from "redux-thunk"
import {contactsReducer} from "@/store/reducers/contactsReducer";
import {favouritesReducer} from "@/store/reducers/favouritesReducer";

let reducers = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    contacts: contactsReducer,
    favourites: favouritesReducer
})

export const redux = createStore(reducers, applyMiddleware(thunk))