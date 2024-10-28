import { createStore } from 'redux';
import reducer from './redux/reducer';

const storePureRedux = createStore(reducer);

export default storePureRedux;