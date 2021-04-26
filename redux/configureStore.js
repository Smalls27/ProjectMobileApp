import { createStore } from "redux";
import { reducer, initialState } from "./reducers";

export const ConfigureStore = () => {
    const store = createStore(reducer, initialState)
    return store
}