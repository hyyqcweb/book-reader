import axios from 'axios';
import { constants } from './index';
import { ApiUrl } from '../../config'

const changeList = (result,loading) => ({
    type: constants.CHNAGE_LIST,
    SearchList: result,
    loading
});

const changeDetail = (result) => ({
    type: constants.DETAIL,
    result
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

export const getDetail = (item) => {
    return (dispatch) => {
        axios.get(`${ApiUrl}/book-info/${item._id}`)
            .then(res => {
                const result = res.data;
                dispatch(changeDetail(result))
            })
            .catch(err => {
                console.log(err)
            })
    }
};