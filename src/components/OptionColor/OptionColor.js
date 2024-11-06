import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

const OptionColor = ({colors, getCurrentColor, currentColor}) => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.slice(1)];
  };

  const setCurrentColor = (color) => {
    getCurrentColor(color);
  }

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {colors.map(color => 
            <li key={uuidv4()}>
              <button  type="button" className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} onClick={() => setCurrentColor(color)}/>
            </li>)}
        </ul>
    </div>
  )
}

export default OptionColor;