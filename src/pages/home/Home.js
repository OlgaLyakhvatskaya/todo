import './home.scss';

class Home extends Component {
  render() {
    const { user = {}, info } = this.props;

    return (
      <div className="wrap">
        <h1>Hello, {user.firstName}</h1>
        {
          info
            ? (
              <ul>
                <li>You have <strong>{info.total}</strong> tasks</li>
                <li>Done: <strong>{info.done}</strong></li>
                <li>In progress: <strong>{info.inProgress}</strong></li>
                <li>Waiting: <strong>{info.waiting}</strong></li>
              </ul>
            )
            : null
        }
        <a className="link" href="/">Go to categories</a>
      </div>
    );
  }
}

export default Home;
