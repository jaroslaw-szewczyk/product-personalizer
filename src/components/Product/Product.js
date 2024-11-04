import { useState } from 'react';
import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types'; 

const Product = props => {

  // console.log(props);
  const [color, setColor] = useState('');
  const getCurrentColor = (myColor) => {
    setColor(myColor);
  }

  const imgInfo = {
    title: props.title,
    name: props.name,
    color: color
  }

  return (
    <article className={styles.product}>
      <ProductImage imgData={imgInfo}/>
      <ProductForm productInfo={props} newColor={getCurrentColor}/>
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