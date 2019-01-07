import Header from './components/header';
import Main from './components/main';
import { checkUser, getTask, putTask, delTask, getInfo } from './services';

import './app.scss';

class AppComp extends Component {
  state = {
    user: null,
    task: [],
    info: null,
    loading: true
  }

  componentDidMount() {
    checkUser()
      .then(user => this.setState({ loading: false, user }))
      .catch(() => this.setState({ loading: false }));

    getInfo()
      .then(info => this.setState({ info }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.user && this.state.user) {
      getTask()
        .then(task => this.setState({ task }));
    }
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  deleteTask = (id) => {
    delTask(id)
      .then(() => {
        getTask()
          .then(task => this.setState({ task }));
        getInfo()
          .then(info => this.setState({ info }));
      });
  }

  updateTask = (data) => {
    putTask(data.id, data)
      .then(() => {
        getTask()
          .then(task => this.setState({ task }));
        getInfo()
          .then(info => this.setState({ info }));
      });
  }

  render() {
    const { user, task, loading, info } = this.state;

    return (
      <>
        <Header user={user} task={task} />
        <Main
          user={user}
          info={info}
          task={task}
          delTask={this.deleteTask}
          putTask={this.updateTask}
          onLogin={this.onLogin}
          loading={loading}
        />
      </>
    );
  }
}

export default AppComp;
