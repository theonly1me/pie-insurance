// types
import { StepProps } from '../../types';
// styles
import classes from './Step.module.css';

/**
 * Reusable Step Component
 */
const Step: React.FC<StepProps> = ({
  stepNumber,
  stepHeading,
  children,
  type = 'foward',
  image,
  altText,
}) => {
  return (
    <div className="container grid gridCol2 gridCenterVertical">
      <div
        className={classes.step}
        style={type === 'reverse' ? { order: 1 } : { order: 0 }}
      >
        <p className={classes.stepNumber}>{stepNumber}</p>
        <h3 className={classes.stepHeading}>{stepHeading}</h3>
        <p className={classes.stepDescription}>{children}</p>
      </div>
      <div className={classes.stepImgContainer}>
        <img src={image} className={classes.stepImg} alt={altText} />
      </div>
    </div>
  );
};

export default Step;
