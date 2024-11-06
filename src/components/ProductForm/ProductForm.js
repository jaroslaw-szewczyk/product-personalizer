import { useEffect, useState } from 'react';

import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';


const ProductForm = ({productInfo, newColor}) => {


  const [currentColor, setCurrentColor] = useState(productInfo.colors[0]);
  const [currentSize, setCurrentSize] = useState(productInfo.sizes[0].name);

  const getPrice = () => {
    let finalPrice = productInfo.basePrice;
    const mySize = productInfo.sizes.find( size => size.name === currentSize); 
    return finalPrice +  mySize.additionalPrice;
  };

  const getCurrentSize = (newSize) => {
    setCurrentSize(newSize);
  }

  const getCurrentColor = (newColor) => {
    setCurrentColor(newColor);
  }

  useEffect(() => {
    newColor(currentColor);
  },[currentColor])

  const productData = {
    name: productInfo.title,
    price: getPrice(),
    size: currentSize,
    color: currentColor
  }

  return (
    <div>
        <header>
          <h2 className={styles.name}>{productInfo.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <OptionSize sizes={productInfo.sizes} currentSize={currentSize} getCurrentSize={getCurrentSize}/>
          <OptionColor colors={productInfo.colors} currentColor={currentColor} getCurrentColor={getCurrentColor}/>
          <Button className={styles.button} productData={productData}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
  );
}

export default ProductForm;