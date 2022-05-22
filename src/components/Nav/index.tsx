import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// styles
import classes from './Nav.module.css';
// assets
import cart from '../../assets/cart.svg';
import cartcorrect from '../../assets/cartcorrect.svg';
// state
import { AppContext } from '../../store/appContext';
import Modal from '../Modal';
import ModalContent from '../ModalContent';

/**
 * Nav Component
 */
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isCartEmpty } = useContext(AppContext);

  const onCloseHandler = () => {
    setIsOpen(false);
  };

  const onOpenHandler = () => {
    setIsOpen(true);
  };

  const emptyCartNotification = () =>
    toast('Please add one or more modules to cart first');

  return (
    <>
      <nav className={classes.mainNav}>
        <ul className={classes.mainNavList}>
          <li
            className={classes.mainNavItem}
            onClick={isCartEmpty ? emptyCartNotification : onOpenHandler}
          >
            <img
              src={isCartEmpty ? cart : cartcorrect}
              className={classes.cartImg}
              alt="Go to Cart"
            />
          </li>
        </ul>
        <ToastContainer
          autoClose={2000}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          style={{
            fontSize: '1.6rem',
            fontFamily: 'Rubik, sans-serif',
            textAlign: 'center',
            letterSpacing: 1,
          }}
        />
      </nav>
      <Modal onClose={onCloseHandler} isOpen={isOpen}>
        <ModalContent />
      </Modal>
    </>
  );
};

export default Nav;
