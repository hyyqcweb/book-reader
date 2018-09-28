import { constants } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    SearchList: [],
    SearchLoading: true,
    DetailList: {}
});

const changeData = (state, action) => {
  return state.merge({
      SearchList: fromJS(action)
  })
};

export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.CHNAGE_LIST:
            return changeData(state, action.SearchList);
        case constants.BACK:
            return state.merge({
                SearchList: []
            });
        case constants.DETAIL:
            return state.merge({
                DetailList: action.item
            });
        default:
            return state
    }
}