import clsx from 'clsx';

const OptionSize = (props) => {
  return(
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
  )
};

export default OptionSize;