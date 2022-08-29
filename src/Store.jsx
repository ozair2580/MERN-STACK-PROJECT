
import { createStore } from 'redux';
import rootReducer from './reducer/Indreducer';

const store=createStore(rootReducer)

export default store;