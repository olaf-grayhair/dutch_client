import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.scss'

const Header: React.FC = () => {
    return (
        <div className={style.header}>
            <Link to="/">home</Link>
            <Link to="/category">category</Link>
        </div>
    );
}

export default Header;
