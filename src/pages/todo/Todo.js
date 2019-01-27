import { Tabs, Tab } from '../../components/tabs';
import TodoList from '../../components/todoList';
import { getTasks } from '../../services';

class Todo extends Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    getTasks()
      .then(tasks => this.setState({ tasks }));
  }

  render() {
    const { tasks } = this.state;

    return (
      <Tabs>
        {
          tasks.map((todo, index) => (
            <Tab key={index}>
              <TodoList items={todo} />
            </Tab>
          ))
        }
      </Tabs>
    );
  }
}

export default Todo;
