export const TabNav = ({ tabs, selectedIndex, selectTab }) => {
  const day = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  return (
    <div className="nav-tab">
      <div className="lists">
        {
          tabs.map((task, index) => (
            <div
              key={index}
              className={(selectedIndex === index) ? 'active' : ''}
            >
              <a
                href="#"
                onClick={event => selectTab(event, index)}
              >
                {day[index]}
              </a>
            </div>
          ))
        }
      </div>
    </div>
  );
};
