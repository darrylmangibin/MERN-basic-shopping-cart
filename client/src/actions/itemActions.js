import { GET_ITEMS, DELETE_ITEM, ADD_ITEMS, ITEMS_LOADING } from './types';
import axios from 'axios';

export const getItems = () => {
  return (dispatch) => {
    dispatch(itemsLoading());
    axios.get('/api/items').then((response) => {
      dispatch({
        type: GET_ITEMS,
        payload: response.data
      })
    })
  }
}

export const deleteItem = (id) => {
  return (dispatch) => {
    axios.delete(`/api/items/${id}`).then((response) => {
      console.log(response)
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    })
  }
}

export const addItem = (item) => {
  return (dispatch) => {
    axios.post('/api/items', item).then((response) => {
      dispatch({
        type: ADD_ITEMS,
        payload: response.data.item
      })
    })
  }
}

export const itemsLoading = () => {
  return {
    type: ITEMS_LOADING,

  }
}