import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { tabReducer } from "./reducers/tabReducer";
import { todoReducers } from "./reducers/todoReducer";


const reducer = combineReducers({
    todos: todoReducers,
    currerntTab:tabReducer
})



const middleWare = [thunk]



const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)


export default store