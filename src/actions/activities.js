import * as api from "../api";

// Action Creators
export const getDaily = () => async (dispatch) => {
  try {
    const { data } = await api.fetchDaily();
    dispatch({ type: "FETCH_ALL", data: data, timeframe: "daily"});
  } catch (error) {
    console.log(error.message);
  }
};
export const getWeekly = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWeekly();
    dispatch({ type: "FETCH_ALL", data: data, timeframe: "weekly" });
  } catch (error) {
    console.log(error.message);
  }
};
export const getMonthly = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMonthly();
    dispatch({ type: "FETCH_ALL", data: data, timeframe: "monthly" });
  } catch (error) {
    console.log(error.message);
  }
};
