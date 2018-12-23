import './main.scss';
import Aside from '../aside';
import FirstWindow from '../firstWindow';
import TodoList from '../todoList';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Aside />
        <main className="main">
          <div className="container">
            <FirstWindow />
            <TodoList />
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
