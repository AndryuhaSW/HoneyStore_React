import React, {useEffect} from 'react';
import styles from './MenuModal.module.css'
import {CSSTransition} from "react-transition-group";

const MenuModal = ({menuActive}) => {
    // отключить скрол при активном меню
    useEffect(() => {
        if (menuActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuActive]);

    return (
        <>
            <CSSTransition
                in={menuActive}
                unmountOnExit
                mountOnEnter
            >
                <div className={styles.root}>
                    <div>
                        <div>1234567890</div><br/>
                        <div>1234567890</div><br/>
                        <div>1234567890</div><br/>
                        <div>1234567890</div><br/>
                        <div>1234567890</div><br/>
                        <div>1234567890</div><br/>
                        <div>1234567890</div><br/>
                    </div>
                </div>
            </CSSTransition>
        </>
    );
};

export default MenuModal;