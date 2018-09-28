import { constants } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    HomeList: [],
    SearchList: [],
    SearchLoading: true,
    DetailList: {},
    loading: false,
    text: true
});

const changeData = (state, action) => {
    return state.merge({
      SearchList: fromJS(action.SearchList),
      loading: action.loading
  })
};

export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.CHNAGE_LIST:
            return changeData(state, action);
        case constants.BACK:
            return state.merge({
                SearchList: []
            });
        case constants.DETAIL:
            return state.merge({
                DetailList: action.result
            });
        case constants.CLOSELOADING:
            return state.merge({
                loading:action.value
            });
        case constants.ADDBOOK:
            return state.merge({
                HomeList: state.get('HomeList').concat(action.item),
                text: action.value
            });
        case constants.REMOVEBOOK:
            return state.merge({
                text: action.value,
                HomeList:[] // fixme 统一删除 要修改
            });
        default:
            return state
    }
}