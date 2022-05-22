// styles
import classes from './Modules.module.css';
// components
import SectionHeading from '../reusable/SectionHeading/SectionHeading';
import Card from '../reusable/Card';
// assets
import bike from '../../assets/bike.svg';
import jewelry from '../../assets/jewelry.svg';
import electronics from '../../assets/electronics.svg';
import sports from '../../assets/sports.svg';

// data
/* Currently stored in a local JSON file, ideally should come from an API */
import moduleData from '../../data/data.json';

/**
 * Modules Component
 */
const Modules = () => {
  const images: { [key: string]: string } = {
    bike,
    jewelry,
    electronics,
    sports,
  };

  const renderCard = () =>
    moduleData.map(data => (
      <Card
        key={data.id}
        id={data.id}
        attributes={data.attributes}
        coverage={data.coverage}
        image={images[data.img]}
        title={data.title}
        range={data.range}
        risk={data.risk}
      />
    ));
  return (
    <section id="modules" className={classes.modules}>
      <SectionHeading
        subheading="Browse through our offerings"
        heading="Modules"
      />
      <div className={`container grid gridCol2`}>{renderCard()}</div>
    </section>
  );
};

export default Modules;
