import React, {useEffect, useState} from 'react';
import styles from './Messengers.module.css'
import telegram from '../../telegram.png'
import whatsup from '../../whatsup.png'
import messenger from "../../messager.png";
import {CSSTransition} from "react-transition-group";

const Messengers = () => {

    const [menuActive, setMenuActive] = useState(false)


    return (
        <>

            <div className={styles.container}>

                <CSSTransition
                    in={menuActive}
                    timeout={300}
                    classNames={{
                        enterActive: styles.messengers_enter_active,
                        exitActive: styles.messengers_exit_active,}}
                    unmountOnExit
                    mountOnEnter
                >
                    <div className={styles.messenger}>
                        <div>
                            <a href="#" target="_blank">
                                <img src={telegram} alt="telegram"/>
                            </a>
                        </div>
                        <div>
                            <a href="#" target="_blank">
                                <img src={whatsup} alt="whatsup"/>
                            </a>
                        </div>
                    </div>
                </CSSTransition>


                <div
                    className={!menuActive ? styles.menu : styles.menu_active}
                ></div>

                <div
                    className={styles.bigCircle}
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <div className={styles.circle}>
                        <img src={messenger} alt=""/>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Messengers;