import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

const OptionSize = ({sizes, currentSize, getCurrentSize}) => {
  
  const setCurrentSize = (newSize) => {
    getCurrentSize(newSize);
  }

  return(
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map(size => 
          <li key={uuidv4()}>
            <button type="button" className={clsx(size.name === currentSize && styles.active)} onClick={() => setCurrentSize(size.name)}>
              {size.name}
            </button>
          </li>)}
      </ul>
    </div>
  )
};

export default OptionSize;