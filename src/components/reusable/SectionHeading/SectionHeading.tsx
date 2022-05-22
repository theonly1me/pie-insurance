// styles
import classes from './SectionHeading.module.css';
// types
import { SectionHeadingProps } from '../../../types';

/**
 * Reusable SectionHeading Component
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  subheading,
}) => {
  return (
    <div className="container">
      <span className={classes.subheading}>{subheading}</span>
      <h2 className={classes.heading}>{heading}</h2>
    </div>
  );
};

export default SectionHeading;
