import {combineReducers} from 'redux';

function inputReducer(state = '', action){
  switch (action.type) {
    case 'changeInput':
      return action.payload
    default:
      return state;
  }
}

function offsetReducer(state = 0, action){
  switch (action.type) {
    case 'changeOffset':
      return action.payload
    default:
      return state;
  }
}

function gifListReducer(state = [], action){
  switch (action.type) {
    case 'setGifs':
      return action.payload
    case 'addGifs':
      return [...state, ...action.payload]
    default:
      return state;
  }
}

function favListReducer(state = [], action){
  switch (action.type) {
    case 'addFav':
      return [...new Set([...state, action.payload])]
    case 'dropFav':
      const index = state.indexOf(action.payload)
      if (index === -1) return state
      return [...state.slice(0, index), ...state.slice(index+1)]
    default:
      return state
  }
}

function loadingReducer(state = true, action){
  switch (action.type) {
    case 'setLoading':
      return action.payload
    default:
      return state
  }
}

function modalDataReducer(state = {}, action){
  switch (action.type) {
    case 'setModalData':
      return action.payload || {}
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  input: inputReducer,
  offset: offsetReducer,
  gifs: gifListReducer,
  loading: loadingReducer,
  favs: favListReducer,
  modalData: modalDataReducer
});
