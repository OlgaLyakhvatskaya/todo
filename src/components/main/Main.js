import './main.scss';
import Aside from '../aside';
import { Tabs } from '../tabs';
import Login from '../../pages/login';
import Home from '../../pages/home';


class Main extends Component {
  renderContent() {
    const { user, onLogin, task, info, delTask, putTask } = this.props;
    return (
      <>
        <h2>{user ? `Hello, ${user.firstName}` : 'Login'}</h2>
        {
          user
            ? <><Home user={user} task={task} info={info} /><Tabs tabs={task} delTask={delTask} putTask={putTask} /></>
            : <Login onLogin={onLogin} />
        }
      </>
    );
  }

  render() {
    const { loading } = this.props;

    return (
      <div className="wrapper">
        <Aside />
        <main className="main">
          <div className="container">
            { loading ? 'Loading...' : this.renderContent() }
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
