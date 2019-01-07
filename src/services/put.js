import { rest } from './rest';

const putTask = (id, data) => rest.put(`tasks/${id}`, data);

export { putTask };
