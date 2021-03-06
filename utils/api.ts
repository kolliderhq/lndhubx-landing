import axios from 'axios';
import each from 'lodash-es/each';
import isArray from 'lodash-es/isArray';
import isFunction from 'lodash-es/isFunction';

import { LOG3 } from 'utils/debug';
import { makeFetchUrl } from 'utils/fetchers';
import { apiRefiner } from 'utils/refiners/api';

import { API } from '../consts/api';
import { CustomError } from './error';

export const postRequest = (...args) => {
	const [apiName, params, bodyParams] = args;
	const url = makeFetchUrl(apiName, ...params);
	const body = bodyParamsValidation(apiName, bodyParams, API.API);
	return axios
		.post(url, body)
		.then(res => {
			const ret = apiRefiner(apiName, res.data);
			if (ret?.errObj) {
				return Promise.reject(ret);
			} else {
				return Promise.resolve(ret);
			}
		})
		.catch(ex => {
			// if (ex.response?.status === 500) {
				// TODO : do error handling
				// displayToast('Internal server error', 'error', { autoClose: 10000, position: 'top-right' }, 'Critical Error');
			// }
			LOG3(ex?.response, `[PostError - ${apiName}`);
			throw new CustomError('Post Error', ex);
		});
};

export const getRequest = (...args) => {
	const [apiName, params] = args;
	const url = makeFetchUrl(apiName, ...params);
	return axios
		.get(url, params)
		.then(res => {
			const ret = apiRefiner(apiName, res.data);
			if (ret?.errObj) {
				return Promise.reject(ret);
			} else {
				return Promise.resolve(ret);
			}
		})
		.catch(ex => {
			if (ex.response?.status === 500) {
				// TODO : do error handling
				// displayToast('Internal server error', 'error', { autoClose: 10000, position: 'top-right' }, 'Critical Error');
			}
			LOG3(ex?.response, `[PostError - ${apiName}`);
			throw new CustomError('Post Error', ex);
		});
};

export const bodyParamsValidation = (apiName: string, params: any, target: any) => {
	if (!isFunction(target[apiName]?.createBody))
		throw new Error(`${apiName} is missing createBody or is wrongly set as POST method`);
	if (isArray(target[apiName]?.requiredBodyParams)) {
		each(target[apiName]?.requiredBodyParams, param => {
			if (!params[param]) throw new Error(`${apiName} is missing a required param - ${param}`);
		});
	}
	return target[apiName].createBody(params) as Record<string, string>;
};
