import React, { FC } from 'react';
import style from './createitem.module.scss'

const CreateItem: React.FC<any> = ({ item, name }) => {


    // console.log(item.value, 'e.preventDefault()');
    return (
        <div className={style.createItem}>
            <label htmlFor="name">{name + ': '}</label>
            <input
                // className={style.input}
                type='text'
                value={item.value}
                onChange={item.onChange}
            />
        </div>
    );
}

export default CreateItem;
