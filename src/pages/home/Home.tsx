import React, { FC, useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import Btn from '../../components/button/Btn';
import CreateItem from '../../components/createItem/CreateItem';
import SelectItem from '../../components/createItem/SelectItem';
import { useInput } from '../../hooks/input';
import { useAppSelector } from '../../hooks/redux';
import { createCategory, createWord, fetchCategory } from '../../store/actions/ContentAction';

import style from './home.module.scss'

const Home: React.FC = () => {
    const [valueCategory, setValueCategory] = useState<string>('')
    const [valueSubCategory, setValueSubCategory] = useState<string>('')
    const [newItems, setNewItems] = useState([])
    const dispatch = useDispatch()
    const { content, category } = useAppSelector(state => state)

    useEffect(() => {
        dispatch(fetchCategory())
    }, [])
    //word
    const setDutchWord = useInput('', 'letters')
    const setTranscription = useInput('', 'letters')
    const setEnglishWord = useInput('', 'letters')
    const setImg = useInput('', 'minLength')
    //category
    const setCreateCategory = useInput('', 'letters')
    const setCreateSubCategory = useInput('', 'letters')

    const createItem = () => {
        const item = {
            "dutchWord": setDutchWord.value,
            "transcription": setTranscription.value,
            "englishWord": setEnglishWord.value,
            "category": valueCategory,
            "subCategory": valueSubCategory,
            "img": setImg.value,
        }     

        if (!setDutchWord.minLength && !setEnglishWord.minLength && !setTranscription.minLength) {
            dispatch(createWord(item))
        }
    }

    const createItemCategory = () => {
        const item = {
            "category": setCreateCategory.value,
            "subCategory": setCreateSubCategory.value.split(','),
        }

        if (!setCreateCategory.minLength && !setCreateSubCategory.minLength) {
            dispatch(createCategory(item))

        }
    }

    const onChange = (name: string) => {
        setValue(name)
    }

    const sortCategory = () => {
        category.category.map(el =>
            el.category === category.categoryValue
                ? el.subCategory
                : el
        )
    }
    useMemo(() => {
        let obj = category.category.filter(el =>
            el.category === category.categoryValue
        )

        if (obj.length > 0) {
            setNewItems(obj[0].subCategory)
        }
    }, [category.categoryValue])


    return (
        <div className={style.home}>
            <div className={style.word}>
                <h2>Create new word</h2>
                <div className={style.itemWrap}>
                    <CreateItem
                        item={setDutchWord}
                        name={'dutch Word'}
                    />
                    <CreateItem
                        item={setTranscription}
                        name={'transcription'}
                    />
                    <CreateItem
                        item={setEnglishWord}
                        name={'english Word'}
                    />

                    <SelectItem
                        array={category.category}
                        name={'category'}
                        action={setValueCategory}
                    />

                    <SelectItem
                        array={newItems}
                        name={'sub Category'}
                        action={setValueSubCategory}
                    />

                    <CreateItem
                        item={setImg}
                        name={'image url'}
                    />
                    <Btn name='create' action={createItem} />

                </div>
            </div>

            <div className={style.word}>
                <h2>Create new category</h2>
                <div className={style.itemWrap}>
                    <CreateItem
                        item={setCreateCategory}
                        name={'category'}
                    />
                    <CreateItem
                        item={setCreateSubCategory}
                        name={'sub category'}
                    />
                    <Btn name='create ' action={createItemCategory} />

                </div>
            </div>

        </div >
    );
}

export default Home;
