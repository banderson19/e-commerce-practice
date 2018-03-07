const initialState = {
  fetching: false,
  data: [],
  error: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'GET_PRODUCTS_PENDING':
      return { ...state, fetching: true }
    case 'GET_PRODUCTS_FULFILLED':
      return { ...state, data: action.payload.data, fetching: false }
    case 'GET_PRODUCTS_REJECTED':
      return { ...state, error: action.payload, fetching: false }

    case 'UPDATE_PRODUCT_PENDING':
      return { ...state, fetching: true }
    case 'UPDATE_PRODUCT_FULFILLED':
      return { ...state, data: action.payload.data, fetching: false }
    case 'UPDATE_PRODUCT_REJECTED':
      return { ...state, error: action.payload, fetching: false }

    default:
      return state;
  }
}