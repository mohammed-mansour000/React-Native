import { combineReducers } from "redux";
import { auth } from './auth';
import { posts } from './post';

const Reducers = combineReducers({
    auth,
    posts
})

export default Reducers;