import { getInfo } from '../../services';

import './home.scss';

class Home extends Component {
  state = {
    info: null,
  }

  componentDidMount() {
    getInfo()
      .then(info => this.setState({ info }));
  }

  render() {
    const { user = {} } = this.props;
    const { info } = this.state;

    return (
      <div className="wrap">
        <h1>Hello, {user.firstName}</h1>
        {
          info
            && (
              <ul>
                <li>You have <strong>{info.total}</strong> tasks</li>
                <li>Done: <strong>{info.done}</strong></li>
                <li>In progress: <strong>{info.inProgress}</strong></li>
                <li>Waiting: <strong>{info.waiting}</strong></li>
              </ul>
            )
        }
        <a className="link" href="/">Go to categories</a>
      </div>
    );
  }
}

export default Home;
