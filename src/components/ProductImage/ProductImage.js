import styles from './ProductImage.module.scss';

const ProductImage = (props) => {
  return (
    <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.imgData.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.imgData.name}--${props.imgData.color}.jpg`} />
      </div>
  )
}

export default ProductImage;