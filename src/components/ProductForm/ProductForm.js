import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import styles from './ProductForm.module.scss';
import Button from '../Button/Button';

const ProductForm = ({productInfo, newColor}) => {
  // console.log(props.productInfo)
  // console.log('sizes: ',props.sizes);
  // console.log('colors',props.color);

  const [currentColor, setCurrentColor] = useState(productInfo.colors[0]);
  const [currentSize, setCurrentSize] = useState(productInfo.sizes[0].name);

  const getPrice = () => {
    let finalPrice = productInfo.basePrice;
    const mySize = productInfo.sizes.find( size => size.name === 'S'); // nie zapomnieć zmienić na 'S' 
    return finalPrice +  mySize.additionalPrice;
  };

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.slice(1)];
  };

  useEffect(() => {
    newColor(currentColor);
  })
  

  // const productData = {
  //   name: props.title,
  //   price: getPrice(),
  //   size: currentSize,
  //   color: currentColor
  // }

  return (
    <div>
        <header>
          <h2 className={styles.name}>{productInfo.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {productInfo.sizes.map(size => 
                <li key={uuidv4()}>
                  <button type="button" className={clsx(size.name === currentSize && styles.active)}>
                    {size.name}
                  </button>
                </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {productInfo.colors.map(color => 
                <li key={uuidv4()}>
                  <button  type="button" className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} />
                </li>)}
            </ul>
          </div>
          {/* <Button className={styles.button} productInfo={productData}>
            <span className="fa fa-shopping-cart" />
          </Button> */}
        </form>
      </div>
  );
}

export default ProductForm;


/*<form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {productInfo.sizes.map(size => 
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
        </form> */