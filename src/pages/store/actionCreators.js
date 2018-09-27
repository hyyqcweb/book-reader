import axios from 'axios';
import { constants } from './index';

const changeList = (result) => ({
    type: constants.CHNAGE_LIST,
    SearchList: result
});

export const back = () => ({
   type: constants.BACK
});

export const getList = (value) => {
    return (dispatch) => {
        axios.get(`https://www.apiopen.top/novelInfoApi?name=${value}`)
            .then(res => {
                const result = res.data.data;
                dispatch(changeList(result.data))
            })
            .catch(err => {
                console.log(err)
            });
    }
};

export const getDetail = (item) => ({
    type: constants.DETAIL,
    item
});