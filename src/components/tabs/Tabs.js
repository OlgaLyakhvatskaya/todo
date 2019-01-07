import { TabNav } from './TabNav';
import TodoList from '../todoList';

import './tabs.scss';

export class Tabs extends Component {
  state = {
    selectedIndex: 0
  }

  selectTab = (event, selectedIndex) => {
    event.preventDefault();
    this.setState({ selectedIndex });
  }

  render() {
    const { tabs, delTask, putTask } = this.props;
    const { selectedIndex } = this.state;

    return (
      <div className="tabs">
        <TabNav
          tabs={tabs}
          selectedIndex={selectedIndex}
          selectTab={this.selectTab}
        />
        <div className="tab-content">
          <TodoList task={tabs[selectedIndex]} delTask={delTask} putTask={putTask} />
        </div>
      </div>
    );
  }
}
