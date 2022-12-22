import React, { FC } from 'react';
import style from './btn.module.scss'

interface Iprops {
    name: string,
    action: any///useState
}

const Btn: React.FC<Iprops> = ({ name, action }) => {
    return (
        <>
            <button
                className={style.btn}
                onClick={action}>{name}
            </button>
        </>
    );
}

export default Btn;
