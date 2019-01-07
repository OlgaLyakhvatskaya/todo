import { rest } from './rest';

const getTask = () => rest.get('tasks');

export { getTask };
