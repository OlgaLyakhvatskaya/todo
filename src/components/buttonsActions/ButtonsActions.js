import './buttonsActions.scss';

class ButtonsActions extends Component {
  render() {
    const { item, delTask, putTask } = this.props;
    return (
      <>
        <a href="#" onClick={() => delTask(item.id)} className="taskDelete">Х</a>
        <a
          href="#"
          onClick={() => {
            item.done = true;
            return putTask(item);
          }}
          className="taskDone"
        >
            V
        </a>
        <a href="#" className="taskWating">~</a>
      </>
    );
  }
}
export default ButtonsActions;
