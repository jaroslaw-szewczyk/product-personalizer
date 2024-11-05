const OptionColor = (props) => {
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {productInfo.colors.map(color => 
            <li key={uuidv4()}>
              <button  type="button" className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} onClick={() => setCurrentColor(color)}/>
            </li>)}
        </ul>
    </div>
  )
}

export default OptionColor;