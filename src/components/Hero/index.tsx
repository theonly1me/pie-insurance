// styles
import classes from './Hero.module.css';
// assets
import svg from '../../assets/insurance-hero.svg';
//components
import AnchorButton from '../reusable/AnchorButton';

/**
 * Hero Component
 */
const Hero = () => {
  return (
    <section data-testid="hero" className={classes.heroContainer}>
      <div className={classes.hero}>
        <div className={classes.heroTextBox}>
          <h1 className={classes.headingPrimary}>
            Modular Insurance for everyone
          </h1>
          <p className={classes.heroDescription}>
            We'll help you get your coverage today, for all your assets. From A
            to Z.
          </p>
          <AnchorButton
            buttonText="View Modules"
            className={`${classes.marginRightSM} ${classes.marginBottomSM}`}
            type="full"
            href="#modules"
          />
          <AnchorButton
            buttonText="Learn More &darr;"
            type="outline"
            href="#details"
          />
        </div>
        <div className={classes.heroImgBox}>
          <img
            src={svg}
            className={classes.heroSVG}
            alt="A woman trying to purchase insurance on call"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
