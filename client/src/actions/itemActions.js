import { GET_ITEMS, DELETE_ITEM, ADD_ITEMS } from './types';

export const getItems = () => {
  return {
    type: GET_ITEMS,
  }
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id
  }
}

export const addItem = (item) => {
  return {
    type: ADD_ITEMS,
    payload: item
  }
}