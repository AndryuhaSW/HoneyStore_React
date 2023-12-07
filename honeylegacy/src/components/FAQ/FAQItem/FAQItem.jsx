import React, {useState} from 'react';
import styles from './FAQItem.module.css'
import close from './../../../close.png'
import telegram from "../../../telegram.png";
import whatsup from "../../../whatsup.png";
import {CSSTransition} from "react-transition-group";
import description from "../../../pages/main/Description/Description";
import plus from '../../../plus.png'


const FaqItem = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>

            <p
                onClick={() => setIsOpen(!isOpen)}
                className={styles.root}
            >
                <h2>{question}</h2>
                <div></div>
            </p>

            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames={{
                    enterActive: styles.answer_enter_active,
                    exitDone: styles.answer_exit,
                    enterDone: styles.answer_enter,
                    exitActive: styles.answer_exit_active
                }}
                unmountOnExit
                mountOnEnter
            >
                <p className={styles.answer}>{answer}</p>
            </CSSTransition>

        </>
    );
};

export default FaqItem;