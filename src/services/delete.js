import { rest } from './rest';

const delTask = id => rest.delete(`tasks/${id}`);

export { delTask };
