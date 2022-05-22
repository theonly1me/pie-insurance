//styles
import classes from './Header.module.css';
//assets
import logo from '../../assets/pie-insurance.svg';
//components
import Nav from '../Nav';
//custom hooks
import useSticky from '../../hooks/useSticky';

/**
 * Header Component
 */
const Header = () => {
  const sticky = useSticky();
  return (
    <>
      <header
        id="header"
        className={`${classes.header} ${sticky ? classes.sticky : ''}`}
      >
        <div className={classes.logoContainer}>
          <img src={logo} className={classes.logo} alt="logo" />
          <span className={classes.logoText}>Pie Insurance</span>
        </div>
        <Nav />
      </header>
    </>
  );
};

export default Header;
