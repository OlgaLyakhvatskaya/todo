
class FirstWindow extends Component {
  state = {
    allTask: 10,
    doneTask: 3,
    progressTask: 1,
    watingTask: 5,
    nameUser: 'Olga'
  }

  render() {
    const { allTask, doneTask, progressTask, watingTask, nameUser } = this.state;
    return (
      <div className="wrap">
        <h1>Hello, {nameUser}</h1>
        <ul>
          <li>You have <strong>{allTask}</strong> tasks</li>
          <li>Done: <strong>{doneTask}</strong></li>
          <li>In progress: <strong>{progressTask}</strong></li>
          <li>Waiting: <strong>{watingTask}</strong></li>
        </ul>
        <a className="link" href="/">Go to the task list</a>
      </div>
    );
  }
}

export default FirstWindow;
