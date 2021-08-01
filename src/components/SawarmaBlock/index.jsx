import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';


function SawarmaBlock({ id, name, imageUrl, description, price, types, sizes, onClickAddSawarma, addedCount }) {
  
  const availableTypes = ['закрытая', 'открытая'];
  const availableSizes = [26, 32, 40, 48];

  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(0);
  const [activePrice, setActivePrice] = React.useState(price);


  // console.log(price);
  // console.log(activePrice);
  // console.log(activeSize);

  const onSelectType = (index) => {
    setActiveType(index);
    
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
    switch(index){
      case 0:setActivePrice(price);
      break;
      case 1:setActivePrice(price + 10);
      break;
      case 2:setActivePrice(price + 20);
      break;
      case 3:setActivePrice(price + 30);
      break;
      default: setActivePrice(price);
    };
    
  };

  const onAddSawarma = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price: activePrice,
      size: availableSizes[activeSize],
      type: availableTypes[activeType],
    };
    onClickAddSawarma(obj);
  };
console.log(addedCount);
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Sawarma" />
      <div className="pizza-block__content">
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <span>{description}</span>
          <ul>
            {availableTypes.map((type, index) => (
              <li
                key={type}
                onClick={() => onSelectType(index)}
                className={classNames({
                  active: activeType === index,
                  disabled: !types.includes(index),
                })}>
                {type}
              </li>
            ))}
          </ul>
          <ul>
            {availableSizes.map((size, index) => (
              <li
                key={size}
                onClick={() => onSelectSize(index)}
                className={classNames({
                  active: activeSize === index,
                  disabled: !sizes.includes(size),
                })}>
                {size} см.
              </li>
            ))}
          </ul>
        </div>

      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {activePrice} ₽</div>
        <Button onClick={onAddSawarma} className="button--add" outline>
          <span>{addedCount ? 'Добавлено' : 'Добавить' }</span>
          <svg
            className={addedCount ? 'button__visable' : 'button__hidden'}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
}

SawarmaBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  onClickAddSawarma: PropTypes.func,
  addedCount: PropTypes.number,
};

SawarmaBlock.defaultProps = {
  name: '-',
  description: '----',
  price: 0,
  types: [],
  sizes: [],
};

export default SawarmaBlock;
