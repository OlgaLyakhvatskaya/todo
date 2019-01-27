import Aside from '../aside';
import Login from '../../pages/login';
import Home from '../../pages/home';
import Todo from '../../pages/todo';

import './main.scss';

class Main extends Component {
  renderContent() {
    const { user, onLogin, tasks, info } = this.props;
    return (
      <>
        <h2>{user ? `Hello, ${user.firstName}` : 'Login'}</h2>
        {
          user
            ? <><Home user={user} tasks={tasks} info={info} /><Todo /></>
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
