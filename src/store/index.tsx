import { createStore } from "redux";
import reducerStore from "../reducer/reducerStore";

const store = createStore(reducerStore);

export default store
