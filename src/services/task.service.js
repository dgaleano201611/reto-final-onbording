import { URLROOT } from '../constants/constants';
import { ENDPOINT } from '../constants/constants';

export const taskService = {
	getTasks: async () => {
		try {
			const response = await fetch(URLROOT + ENDPOINT);
			const data = await response.json();
			return data.result;
		} catch (error) {
			return error;
		}
	},

	/**
	 * @param {number} id
	 * @returns
	 */
	getTask: async (id) => {
		try {
			const response = await fetch(URLROOT + ENDPOINT + id);
			const data = await response.json();
			return data;
		} catch (error) {
			return error;
		}
	},

	/**
	 * @param {{task:string}} task
	 * @returns
	 */
	postTask: async (task) => {
		try {
			const response = await fetch(URLROOT + ENDPOINT, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(task),
			});
			const data = await response.json();
			return data;
		} catch (error) {
			return error;
		}
	},

	/**
	 *
	 * @param {{task:string, id: number}} param0
	 * @returns
	 */
	putTask: async (task) => {
		try {
			const response = await fetch(URLROOT + ENDPOINT + task.id, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(task),
			});
			const data = await response.json();
			return data;
		} catch (error) {
			return error;
		}
	},

	/**
	 *
	 * @param {number} id
	 * @returns
	 */

	deleteTask: async (id) => {
		try {
			const response = await fetch(URLROOT + ENDPOINT + id, {
				method: 'DELETE',
			});
			const data = await response.json();
			return data;
		} catch (error) {
			return error;
		}
	},
};
