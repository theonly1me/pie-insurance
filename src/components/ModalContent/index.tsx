import { useContext, Fragment } from 'react';
//state
import { AppContext } from '../../store/appContext';

// styles
import classes from './ModalContent.module.css';

const ModalContent = () => {
  const appContext = useContext(AppContext);

  const calculateTotal = () => {
    let total = 0;
    for (let module of appContext.modulesInCart) {
      total += module.price;
    }
    return total;
  };

  const renderCheckoutModules = () =>
    appContext.modulesInCart.map(module => (
      <Fragment key={module.id}>
        <div className={classes.moduleSummary}>
          <p className={classes.title}>Coverage for {module.title}</p>
          <p className={classes.coverage}>
            Covered{' '}
            <span className={classes.coverageSpan}>
              {module.selectedCoverage}.00 €
            </span>
          </p>
        </div>
        <div className={classes.modulePrice}>{module.price}.00 €</div>
      </Fragment>
    ));

  return (
    <summary className={classes.modal}>
      <h2 className={classes.checkoutHeader}>Cart Summary</h2>
      <span className={classes.checkoutsDisabled}>
        * Checkouts temporarily disabled due to scheduled maintenance
      </span>
      <div className={`container grid gridCol2 ${classes.parentContainer}`}>
        {renderCheckoutModules()}
        <div>
          <hr className={classes.hr} />
          <span className={classes.total}>Total Premium</span>
        </div>
        <div>
          <hr className={classes.hr} />
          <span className={classes.modulePrice}>{calculateTotal()}.00 €</span>
        </div>
      </div>
    </summary>
  );
};

export default ModalContent;
