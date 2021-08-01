import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="rule">
                    <h4>Правовые акты</h4>
                    <a href="http://">Условия обработки персональных данных</a>
                    <a href="http://">Пользовательское соглашение</a>
                    <a href="http://">Публичная оферта о продаже товаров дистанционным способом</a>
                    <a href="http://">Правила оплаты Сервиса</a>
                </div>
                <div className="information">
                    <h4>Дополнительная информация</h4>
                    <a href="http://">О компании</a>
                    <a href="http://">Информация о точках</a>
                </div>
            </div>

        </div>
    )
}

export default Footer;
