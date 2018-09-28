import axios from 'axios';
import { constants } from './index';
import { ApiUrl } from '../../config'

const changeList = (result,loading) => ({
    type: constants.CHNAGE_LIST,
    SearchList: result,
    loading
});

export const back = () => ({
   type: constants.BACK
});

export const closeLoading = (value) => ({
    type: constants.CLOSELOADING,
    value
});

export const getList = (value,loading) => {
    return (dispatch) => {
        axios.get(`${ApiUrl}/search?keyword=${value}`)
            .then(res => {
                const result = res.data.books;
                dispatch(changeList(result,loading))
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