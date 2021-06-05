import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logoSvg from '../assets/img/Logo.png';
import Button from './Button';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="100" src={logoSvg} alt="Sawarma logo" />
            <div className="header__description">
              <h1>Sawerma</h1>
            </div>

          </div>
        </Link>

        <div className="header__email">
          <a href="mailto:shb196@yandex.ru"><MailOutlineIcon />shb196@yandex.ru</a>
        </div>
        <div className="header__phone">
          <span><PhoneAndroidIcon/></span>
          <p><strong><a href="tel:+79126555777">+7 (912) 6 555 777</a></strong></p>
          <p><strong><a href="tel:+73433177731">+7 (343) 31 777 31</a></strong></p>
        </div>

        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--cart">
              <div className="button__count">
                <ShoppingCartIcon />
                <span>{totalCount}</span>
              </div>
              <div className="button__prise">
                <span>{totalPrice} ₽</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
