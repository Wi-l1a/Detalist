import React from 'react';
import s from './header.module.css'
const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
            <div className={s.boxLogo}>
                <img src="" alt="logo" />
                <h2>Деталист</h2>
            </div>
            </div>
        </header>
    );
};

export default Header;