import { rest } from './rest';

const getTasks = () => rest.get('tasks');

const delTask = id => rest.delete(`tasks/${id}`);

const putTask = (id, data) => rest.put(`tasks/${id}`, data);

export { getTasks, delTask, putTask };
