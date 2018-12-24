import './todoList.scss';
import ButtonsActions from '../buttonsActions';


class TodoList extends Component {
  state = {
    originTodos: [],
    todos: []
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
      .then(response => response.json())
      .then((originTodos) => {
        this.setState({
          originTodos
        });
        this.setState({
          todos: this.state.originTodos
        });
      });
  }

  onChangeInput = (event) => {
    const { originTodos } = this.state;
    if (event.target.value.length > 1) {
      this.setState({
        todos: originTodos.filter(el => el.title.toLowerCase().includes(event.target.value.toLowerCase()))
      });
    } else {
      this.setState({
        todos: originTodos
      });
    }
  }

  render() {
    const { todos } = this.state;
    const allList = todos.map(el => <div key={el.id} className={el.completed ? 'done' : 'undone'}>{el.title}<ButtonsActions /></div>);

    return (
      <>
        <input type="search" onChange={this.onChangeInput} />
        <div>{allList}</div>
      </>
    );
  }
}

export default TodoList;
