import { putTask, delTask } from '../../services';

import './buttonsActions.scss';

class ButtonsActions extends Component {
  deleteTask = (id) => {
    const { getAllTasks } = this.props;

    delTask(id)
      .then(() => {
        getAllTasks();
      });
  }

  updateTask = (item) => {
    const { getInfoTasks, getAllTasks } = this.props;

    item.done = true;
    putTask(item.id, item)
      .then(() => {
        getAllTasks();
        getInfoTasks();
      });
  }

  render() {
    const { item } = this.props;

    return (
      <>
        <a href="#" onClick={() => this.deleteTask(item.id)} className="taskDelete">Х</a>
        <a
          href="#"
          onClick={() => this.updateTask(item)}
          className="taskDone"
        >
          V
        </a>
        <a href="#" className="taskWating">~</a>
      </>
    );
  }
}
export default ButtonsActions;
