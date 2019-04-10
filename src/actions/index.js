import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchData = () => dispatch => {
    dispatch({type: FETCH_START});

    const request = axios.get('https://swapi.co/api/people/');

    request.then(({data}) => {
        dispatch({type: FETCH_SUCCESS, payload: data.results});
    }).catch(error => {
        dispatch({type: FETCH_FAIL, error: error});
    });
};