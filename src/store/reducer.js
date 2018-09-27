import { combineReducers } from 'redux-immutable';
import HomeReducer from '../pages/store/reducer';

// combineReducers 数据拆分

export default combineReducers({
    header: HomeReducer
})