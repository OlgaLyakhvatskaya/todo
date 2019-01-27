import Navigation from '../navigation';
import './header.scss';

const Header = ({ user }) => (
  <header className="header">
    <div className="container">
      <strong><a href="/">Logo</a></strong>
      <div className="userLogin">
        {
          user
            ? (
              <nav className="index-menu">
                <a href="/">
                  {user.firstName}
                </a>
              </nav>
            )
            : (
              <Navigation list={['SignIn', 'SignUp']} />
            )
        }
      </div>
    </div>
  </header>
);

export default Header;
