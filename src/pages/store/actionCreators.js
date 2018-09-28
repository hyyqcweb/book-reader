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
        axios.get(`https://novel.juhe.im/search?keyword=${value}`)
            .then(res => {
                const result = res.data.books;
                console.log(result);
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