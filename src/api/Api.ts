import { create } from 'apisauce';

export const ROUTES = {
  FETCH_TODO: `/todos`,
};

export const API = create({
  baseURL: process.env.REACT_APP_API_URL,
});
