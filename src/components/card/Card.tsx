import React, { FC } from 'react';
import noImg from '../../utils/images';
import style from './card.module.scss'

interface wordProps {
    img: string,
    dutchWord: string,
    transcription: string,
    englishWord: string,
}

const Card: React.FC<wordProps> = ({ img, dutchWord, transcription, englishWord }) => {
    return (
        <div className={style.card}>
            <div className={style.img}>
                <img
                    src={img === "" ? noImg : img} alt=""
                />
            </div>
            <ul className={style.list}>
                <li>{dutchWord}</li>
                <li>{transcription}</li>
                <li>{englishWord}</li>
            </ul>
        </div>
    );
}

export default Card;
