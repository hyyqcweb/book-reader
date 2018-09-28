import { constants } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    SearchList: [],
    SearchLoading: true,
    DetailList: {},
    loading: false
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
                DetailList: action.item
            });
        case constants.CLOSELOADING:
            return state.merge({
                loading:action.value
            });
        default:
            return state
    }
}