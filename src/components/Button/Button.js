import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {

  const addToCart = (event) => {
    event.preventDefault();
    console.log(props.productInfo);
  };

    return (<button className={clsx(styles.button, props.className)} onClick={addToCart}>{props.children}</button>);
};

export default Button;