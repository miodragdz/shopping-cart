import axios from 'axios';

const BASE_URL = 'https://private-3efa8-products123.apiary-mock.com';

export const getProducts = () => {
	return axios.get(`${BASE_URL}/products`)
		.then(response => response.data);
}
