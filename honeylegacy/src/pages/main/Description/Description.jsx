import React from 'react';
import styles from './Description.module.css'
import paseka from '../../../paseka.jpg'

const Description = () => {
    return (
        <div className={styles.root}>
            <div className={styles.textBlock}>
                    <h1 className={styles.title}>
                        Домашний мед наивысшего качества
                    </h1>

                    <span></span>

                    <div className={styles.text}>
                        Пчелиный мед - это не просто сладкий продукт, это символ природы, энергии и труда пчелиных семей. Этот уникальный продукт создан природой, когда пчелы собирают нектар с различных цветов и превращают его в мед. Мед обладает неповторимым вкусом, который может варьироваться от тонкого и нежного до насыщенного и сладкого, в зависимости от вида цветка, с которого был собран нектар
                    </div>
            </div>
            <img draggable="false" src={paseka} alt=""/>
        </div>
    );
};

export default Description;