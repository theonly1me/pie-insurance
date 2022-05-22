//styles
import classes from './Details.module.css';
//graphics
import browse from '../../assets/step1-browse.svg';
import choose from '../../assets/step2-choose.svg';
import checkout from '../../assets/step3-checkout.svg';

// components
import Step from '../Step';
import SectionHeading from '../reusable/SectionHeading/SectionHeading';

/**
 * Details Component
 */
const Details = () => {
  return (
    <section id="details" className={classes.details}>
      <SectionHeading
        subheading="Our simple 3 step process"
        heading="Get your cover today"
      />
      <Step
        stepHeading="Browse through our modules"
        image={browse}
        altText="Browse modules"
        stepNumber="01"
      >
        We currently offer 4 different modules basing on your requirements. Each
        module is custom designed to meet your special needs, providing you all
        the benefits while still being super affordable.
      </Step>
      <Step
        stepHeading="Select modules that fit your needs"
        stepNumber="02"
        type="reverse"
        image={choose}
        altText="Choose one or more modules"
      >
        You can select one or more modules as per your requirements. Each module
        is fully customizable in terms of the amount of covered sum you're
        looking for.
      </Step>
      <Step
        stepHeading="Add to cart, checkout and done!"
        stepNumber="03"
        image={checkout}
        altText="Add to cart and checkout"
      >
        Once you select your modules and coverage, you simply have to add them
        to cart and checkout. In case you have any queries, our customer service
        reps are available 24/7.
      </Step>
    </section>
  );
};

export default Details;
