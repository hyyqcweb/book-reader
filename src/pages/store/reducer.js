import { constants } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    SearchList: [],
    SearchLoading: true,
    DetailList: []
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
            console.log(action.item);
            let ai = action.item;
            let array = [];
            for (let i in ai) {
                let o = {};
                o[i] = ai[i];
                array.push(o)
            }
            return state.merge({
                DetailList: array
            });
        default:
            return state
    }
}