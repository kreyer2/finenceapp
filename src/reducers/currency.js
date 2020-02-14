const initialState = {
  currencyType: 'usd',
  data: [],
  amount: 0,
  filters: ["today"]
};

export const currencyReducer = (state = initialState, action) => {
  //Function which filter data by object key name
  const filtered = (data, filters) => Object.keys(data)
    .filter(key => filters.includes(key))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});

  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        data: filtered(action.data, state.filters)
      };
    case "CHANGE_AMOUNT":
      return {
        ...state,
        amount: action.amount
      };
    case "CHOOSE_CURRENCY":
      return {
        ...state,
        currencyType: action.curType
      };
    case "SET_FILTER":
      return {
        ...state,
        filters: state.filters.concat(action.value)
      };
    case "DELETE_FILTER":
      return {
        ...state,
        filters: state.filters.filter(elem => {
          return elem !== action.filterType
        })
      };
    default:
      return state;
  }
};