import ButtonsActions from '../buttonsActions';

import './todoList.scss';


class TodoList extends Component {
  render() {
    const { items, getAllTasks, getInfoTasks } = this.props;
    console.log(items);
    return (
      <>
        <div>
          {
            items
              ? items.map(el => <div key={el.id} className={el.done ? 'done' : 'undone'}> {el.title} <ButtonsActions getInfoTasks={getInfoTasks} getAllTasks={getAllTasks} item={el} /></div>)
              : null
          }
        </div>
        <a className="add" href="#">Add new</a>
      </>
    );
  }
}

export default TodoList;
