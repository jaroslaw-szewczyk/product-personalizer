import { useState } from 'react';
import styles from './Product.module.scss';
import clsx from 'clsx';
import ProductImage from '../ProductImage/ProductImage';
import Button from '../Button/Button';
import PropTypes from 'prop-types'; 
import { v4 as uuidv4 } from 'uuid';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.slice(1)];
  };

  const getPrice = () => {
    let finalPrice = props.basePrice;
    const mySize = props.sizes.find( size => size.name === currentSize);
    return finalPrice +  mySize.additionalPrice;
  };

  const productData = {
    name: props.title,
    price: getPrice(),
    size: currentSize,
    color: currentColor
  }

  const imgInfo = {
    title: props.title,
    name: props.name,
    color: currentColor
  }

  return (
    <article className={styles.product}>
      <ProductImage imgData={imgInfo}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => 
                <li key={uuidv4()}>
                  <button type="button" className={clsx(size.name === currentSize && styles.active)} onClick={() => setCurrentSize(size.name)}>
                    {size.name}
                  </button>
                </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => 
                <li key={uuidv4()}>
                  <button  type="button" className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} onClick={() => setCurrentColor(color)}/>
                </li>)}
            </ul>
          </div>
          <Button className={styles.button} productInfo={productData}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
}

export default Product;