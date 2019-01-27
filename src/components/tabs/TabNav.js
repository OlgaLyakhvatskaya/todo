export const TabNav = ({ weekDays, selectedIndex, selectTab }) => {

  return (
    <div className="nav-tab">
      <div className="lists">
        {
          weekDays.map((day, index) => (
            <div
              key={index}
              className={(selectedIndex === index) ? 'active' : ''}
            >
              <a
                href="#"
                onClick={event => selectTab(event, index)}
              >
                {day}
              </a>
            </div>
          ))
        }
      </div>
    </div>
  );
};
