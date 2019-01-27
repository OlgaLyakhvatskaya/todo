import { TabNav } from './TabNav';
import { Tab } from './Tab';

import './tabs.scss';

export class Tabs extends Component {
  state = {
    selectedIndex: 0
  }

  componentDidMount() {
    const date = new Date().getDay();
    if (date === 0) {
      this.setState({ selectedIndex: 6 });
    } else {
      this.setState({ selectedIndex: date - 1 });
    }
  }

  selectTab = (event, selectedIndex) => {
    event.preventDefault();
    this.setState({ selectedIndex });
  }

  render() {
    const tabs = this.props.children.filter(child => child.type === Tab);
    const { selectedIndex } = this.state;
    const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    const weekDays = tabs && tabs.map((el, index) => days[index]);

    return (
      <div className="tabs">
        <TabNav
          weekDays={weekDays}
          selectedIndex={selectedIndex}
          selectTab={this.selectTab}
        />
        <div className="tab-content">
          {tabs[selectedIndex] && tabs[selectedIndex].props.children}
        </div>
      </div>
    );
  }
}
