// styles
import classes from './Footer.module.css';
//assets
import logo from '../../assets/pie-insurance.svg';

/**
 * Footer Component
 */
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container grid gridCol3">
        <div className="logo" />
        <p className={classes.copy}>
          Copyright &copy; 2022, Pie Insurance, Inc. All rights reserved.
        </p>
        <div className={classes.address} />
      </div>
    </footer>
  );
};

export default Footer;
