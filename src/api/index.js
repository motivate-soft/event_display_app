// @ts-nocheck
import axios from 'axios';
import { DrupalJsonApiParams } from 'drupal-jsonapi-params';

const API_URL =
    process.env.NODE_ENV === 'production'
        ? `${process.env.REACT_APP_API_URL}`
        : 'http://localhost:5000';

// @ts-ignore
export const getProgramDay = async (id) => {
    console.log('getProgramDay', API_URL);
    let res = await axios.get(
        `${API_URL}/jsonapi/paragraph/program_day/${id}?jsonapi_include=true`
    );

    return handleResponse(res);
};

// @ts-ignore
export const getDaySessions = async (event_id, date) => {
    const apiParams = new DrupalJsonApiParams();
    apiParams.addInclude(['field_livestream', 'field_people', 'field_event']);
    apiParams.addFilter('field_event.field_grid_event_id', event_id);
    apiParams.addFilter('field_start_end.value', date, 'STARTS_WITH');
    apiParams.addSort('field_start_end.value', 'asc');
    console.log(
        `Query: ${API_URL}/jsonapi/node/session?jsonapi_include=true&`.concat(
            decodeURIComponent(apiParams.getQueryString())
        )
    );

    const res = await axios.get(
        `${API_URL}/jsonapi/node/session?jsonapi_include=true&`.concat(
            decodeURIComponent(apiParams.getQueryString())
        )
    );

    return handleResponse(res);
};

const handleResponse = (res) => {
    if (res.status === 200) {
        console.log('handleResponse', res);
        return res.data;
    }
    if (res.status > 300) {
        return {
            error: 'Error'
        };
    }
    if (res.status > 400) {
        return {
            error: 'Server Error'
        };
    }
};
