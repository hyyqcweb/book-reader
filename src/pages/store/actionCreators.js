import axios from 'axios';
import { constants } from './index';
import { ApiUrl } from '../../config'

const changeList = (result) => ({
    type: constants.CHNAGE_LIST,
    SearchList: result
});

export const back = () => ({
   type: constants.BACK
});

export const getList = (value) => {
    return (dispatch) => {
        axios.get(`${ApiUrl}/search?keyword=${value}`)
            .then(res => {
                const result = res.data.books;
                dispatch(changeList(result))
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