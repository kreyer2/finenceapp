import axios from 'axios';

const API = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?';


//Converting date to YYYYMMDD format
const convertDate = (date) =>
  date.toISOString().slice(0,10).replace(/-/g,"");


const getTimePoints = () => {
  //Creating time points for API requests
  let today = new Date();
  let sevenDaysAgo = new Date();
  let thirtyDaysAgo = new Date();
  let oneYearAgo = new Date();

  //Setting Dates for further usage
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return {
      today: convertDate(today),
      sevenDaysAgo: convertDate(sevenDaysAgo),
      thirtyDaysAgo: convertDate(thirtyDaysAgo),
      oneYearAgo: convertDate(oneYearAgo)
    }
};

export const getData = (type = 'usd') => async dispatch => {
  try {
    const timePoints = getTimePoints();
    //Fetching data from API with axios library

    const today = await axios.get(`${API}valcode=${type}&date=${timePoints.today}&json`)
      .then(res => res.data);
    const sevenDaysAgo = await axios.get(`${API}valcode=${type}&date=${timePoints.sevenDaysAgo}&json`)
      .then(res => res.data);
    const thirtyDaysAgo = await axios.get(`${API}valcode=${type}&date=${timePoints.thirtyDaysAgo}&json`)
      .then(res => res.data);
    const oneYearAgo = await axios.get(`${API}valcode=${type}&date=${timePoints.oneYearAgo}&json`)
      .then(res => res.data);

    dispatch({
      type: `GET_DATA`,
      data: {
        today: {...today[0]},
        seven: {...sevenDaysAgo[0]},
        thirty: {...thirtyDaysAgo[0]},
        year: {...oneYearAgo[0]}
      }
    });
  } catch (err) {
    console.log(err);
    throw Error `Something went wrong! Check your console message...`
  }
};

//Action creator for changing amount from text input
export const changeAmount = (amount) => dispatch => {
  dispatch({
    type: "CHANGE_AMOUNT",
    amount
  })
};

//Action creator which sets checkbox ID as filter type
export const setFilter = (filterType, currencyType) => dispatch => {
  let value = filterType ? filterType : [];

  dispatch({
    type: "SET_FILTER",
    value
  });
  //Making new request for data update
  dispatch(getData(currencyType))
};

export const deleteFilter = (filterType, currencyType) => dispatch => {
    dispatch({
    type: "DELETE_FILTER",
    filterType
  });
  dispatch(getData(currencyType))
};


//Action creator which sets currency type
export const chooseCurrency = (type) => dispatch => {
  dispatch({
    type: "CHOOSE_CURRENCY",
    curType: type
  });
  //Making new request for data update
  dispatch(getData(type))
};