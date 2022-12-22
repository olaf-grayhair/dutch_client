import { iteratorSymbol } from 'immer/dist/internal';
import React, { FC, useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCategory, fetchContent } from '../../store/actions/ContentAction';
import { openSubCategory } from '../../store/reducers/CategorySlice';

import style from './categories.module.scss'


const Categories: React.FC = () => {

    const dispatch = useAppDispatch()
    // const content = useAppSelector(state => state)
    const { content, category } = useAppSelector(state => state)

    useEffect(() => {
        dispatch(fetchContent())
        dispatch(fetchCategory())
        console.log(content, 'content', category);
    }, []);

    const [categoryValue, setCategoryValue] = useState('')

    function handleClick(item: string) {
        dispatch(openSubCategory(item))
        // console.log(item);

    }



    return (
        <div className={style.main}>
            <div className={style.categories}>
                {category.category.map((el: { category: string, subCategory: [] }) =>
                    <div
                        // onClick={(e) => 
                        //     console.log(e.target.childNodes[0], el.category, (e.target as HTMLInputElement).value)
                        // }

                        onClick={() => handleClick(el.category)}

                        className={style.items}
                        key={el.category}
                    >
                        {el.category}
                        <div
                            className={el.bool === false ? style.subCategories : style.activeSubCategorie}
                        >
                            {el.subCategory.map((item: string) =>
                                <div
                                    key={item}
                                    // style={{el.bool === false ?  : }}
                                    className={style.subItems}>
                                    {item}
                                    {/* {console.log(el.bool)
                                    } */}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className={style.list}>
                {content.content.map(el =>
                    <Card {...el} key={el._id} />
                )}
            </div>

        </div>
    );
}

export default Categories;
