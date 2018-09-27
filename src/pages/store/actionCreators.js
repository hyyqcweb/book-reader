import axios from 'axios';
import { constants } from './index';
import { fromJS } from 'immutable'

const changeList = (result) => ({
    type: constants.CHNAGE_LIST,
    SearchList: result
});

export const getList = (value) => {
    return (dispatch) => {
        axios.get(`https://www.apiopen.top/novelSearchApi?name=${value}`)
            .then(res => {
                const result = res.data.data;
                dispatch(changeList(result))
            })
            .catch(err => {
                console.log(err)
            });
    }
};