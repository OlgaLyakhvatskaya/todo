import ButtonsActions from '../buttonsActions';

import './todoList.scss';


class TodoList extends Component {
  render() {
    const { task, delTask, putTask } = this.props;
    return (
      <>
        <div>
          {
            task
              ? task.map(el => <div key={el.id} className={el.done ? 'done' : 'undone'}> {el.title} <ButtonsActions item={el} delTask={delTask} putTask={putTask} /></div>)
              : null
          }
        </div>
        <a className="add" href="#">Add new</a>
      </>
    );
  }
}

export default TodoList;
