import Navigation from '../navigation';
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="container">
      <strong><a href="/">TODO</a></strong>
      <Navigation list={['Вход', 'Регистрация']} />
    </div>
  </header>
);

export default Header;
