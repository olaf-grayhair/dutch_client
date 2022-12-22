import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveCategory } from '../../store/reducers/CategorySlice';
import style from './createitem.module.scss'


interface Iprops {
    array: any[],
    name: string,
    action: React.Dispatch<React.SetStateAction<string>>///useState
}

const SelectItem: React.FC<Iprops> = ({ array, name, action }) => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const onChange = (name: string) => {
        console.log('onchange', name);
        setValue(name)
        dispatch(saveCategory(name))
        action(name)
    }

    let result


    if (array.some(el => el.bool === false)) {
        ///it can be a bug in el.bool !!!
        result = array.map(el =>
            <option
                key={el._id}
                value={el.category}>{el.category}
            </option>)
    }

    else {
        result = array.map(sub =>
            <option
                key={sub}
                value={sub}>{sub}
            </option>)
    }


    return (
        <>
            <label htmlFor="name">{name + ': '}</label>
            <select
                value={value !== '' ? value : 'none'}
                onChange={(e) => onChange(e.target.value)}
                className={style.select}>

                <option value="none">none</option>
                {result}
                {/* {array.map(el =>
                <option
                    key={el._id}
                    value={el.category}>{el.category}
                </option>)} */}
            </select>
        </>
    );
}

export default SelectItem;
