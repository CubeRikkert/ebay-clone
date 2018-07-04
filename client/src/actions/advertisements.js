import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const FETCHED_ALL_ADVERTISEMENTS = 'FETCHED_ALL_ADVERTISEMENTS'
export const FETCHED_DETAILED_ADVERTISEMENT = 'FETCHED_DETAILED_ADVERTISEMENT'

export const fetchAdvertisement = (advertisementId) => (dispatch) => {
    request
        .get(`${baseUrl}/advertisements/${advertisementId}`)
        .then(response => dispatch({
            type: FETCHED_DETAILED_ADVERTISEMENT,
            payload: response.body
        }))
        .catch(err => alert(err))
}

export const fetchAdvertisements = () => (dispatch) => {
    request
        .get(`${baseUrl}/advertisements`)
        .then(response => dispatch({
            type: FETCHED_ALL_ADVERTISEMENTS,
            payload: response.body
        }))
        .catch(err => alert(err))
}