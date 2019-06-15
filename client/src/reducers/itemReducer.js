import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'Eggs' },
    { id: uuid(), name: 'Milk' },
    { id: uuid(), name: 'Steak' },
    { id: uuid(), name: 'Water' },
  ]
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => action.payload !== item.id)
      }
    case ADD_ITEMS:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload,
        ]
      }
    default:
      return state;
  }
}

