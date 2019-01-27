import Header from './components/header';
import Main from './components/main';
import { checkUser, getTasks, getInfo } from './services';

import './app.scss';

class AppComp extends Component {
  state = {
    user: null,
    loading: true
  }

  componentDidMount() {
    checkUser()
      .then(user => this.setState({ loading: false, user }))
      .catch(() => this.setState({ loading: false }));
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  render() {
    const { user, loading } = this.state;

    return (
      <>
        <Header user={user} />
        <Main
          user={user}
          onLogin={this.onLogin}
          loading={loading}
        />
      </>
    );
  }
}

export default AppComp;
