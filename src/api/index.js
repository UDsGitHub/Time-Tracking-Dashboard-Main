import axios from 'axios';

const url = "https://time-tracking-dashboard-ud.herokuapp.com/activities";

export const fetchDaily = () => axios.get(url+'/daily');
export const fetchWeekly = () => axios.get(url+'/weekly');
export const fetchMonthly = () => axios.get(url+'/monthly');