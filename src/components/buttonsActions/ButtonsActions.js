import './buttonsActions.scss';

class ButtonsActions extends Component {
  state = {
    buttonClose: false,
    buttonWating: false,
    buttonDone: false
  }

  render() {
    const { buttonClose, buttonWating, buttonDone } = this.state;

    return (
      <>
        <button type="button" prop={buttonClose} className="taskClose">Х</button>
        <button type="button" prop={buttonDone} className="taskDone">V</button>
        <button type="button" prop={buttonWating} className="taskWating">~</button>
      </>
    );
  }
}
export default ButtonsActions;
