import { lazy, useState, useContext } from 'react';
import Select from 'react-select';
// styles
import classes from './Card.module.css';
// types
import { CardProps, Module, Option } from '../../../types';
//state
import { AppContext } from '../../../store/appContext';
//utils
import { calculatePrice } from '../../../utils';
// components
import AnchorButton from '../AnchorButton';

/**
 * Reusable Card Component
 */
const Card: React.FC<CardProps> = ({
  id,
  image,
  coverage,
  title,
  attributes,
  range,
  risk,
}) => {
  const [selected, setSelected] = useState<Option>();
  const [added, setAdded] = useState<boolean>(false);
  const appContext = useContext(AppContext);

  const options = range.map(r => {
    return {
      value: r,
      label: `${r} €`,
    };
  });

  const renderAtrributes = () => {
    return attributes.map((attribute: string) => (
      <li key={attribute} className={classes.attribute}>
        <span className={classes.listItem}>+</span>
        {attribute}
      </li>
    ));
  };

  const handleAddToCart = () => {
    const currentValue = selected ? selected.value : 0;
    const module: Module = {
      id,
      title,
      selectedCoverage: currentValue,
      price: calculatePrice(currentValue, risk),
    };
    appContext.addToCart(module);
    setAdded(true);
  };

  const handleRemoveFromCart = () => {
    appContext.removeFromCart(id);
    setAdded(false);
  };

  return (
    <div className={classes.module}>
      <img src={image} className={classes.moduleImg} alt={title} />
      <span className={classes.coverage}>{coverage}</span>
      <div className={classes.cardContent}>
        <p className={classes.cardTitle}>{title}</p>
        <span className={classes.covered}>Coverage Includes:</span>
        <ul className={classes.attributes}>{renderAtrributes()}</ul>
        <Select
          className="customSelect"
          options={options}
          onChange={selectedOption =>
            selectedOption && setSelected(selectedOption)
          }
          placeholder="Select Coverage..."
          value={selected}
          isDisabled={added}
        />
        {selected && (
          <AnchorButton
            buttonText={`${!added ? 'Add to' : 'Remove from'} cart`}
            type="full"
            onClick={e => {
              e.preventDefault();
              !added ? handleAddToCart() : handleRemoveFromCart();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
