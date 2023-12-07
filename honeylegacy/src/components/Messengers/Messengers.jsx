import React, {useEffect, useState} from 'react';
import styles from './Messengers.module.css'
import telegram from '../../telegram.png'
import whatsup from '../../whatsup.png'
import messenger from "../../messager.png";
import {CSSTransition} from "react-transition-group";
import close from '../../close.png'

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
                                <img draggable="false" src={telegram} alt="telegram"/>
                            </a>
                        </div>
                        <div>
                            <a href="#" target="_blank">
                                <img draggable="false" src={whatsup} alt="whatsup"/>
                            </a>
                        </div>
                    </div>
                </CSSTransition>







                <div
                    className={!menuActive ? styles.menu : ''}
                ></div>

                <div
                    className={menuActive ? styles.bigCircle_menuActive : styles.bigCircle}
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <div className={menuActive ? styles.circle_menuActive : styles.circle}>
                        <CSSTransition
                            in={menuActive}
                            classNames={{
                                enterDone: styles.menu_enter_done,
                                exitDone: styles.menu_exit_done
                            }}
                        >
                            {menuActive
                                ?<img draggable="false" src={close} alt=""/>
                                :<img draggable="false" src={messenger} alt=""/>
                            }
                        </CSSTransition>
                    </div>
                </div>



                {/*<div*/}
                {/*    className={!menuActive ? styles.menu : styles.menu_active}*/}
                {/*></div>*/}

                {/*<div*/}
                {/*    className={menuActive ? styles.bigCircle_menuActive : styles.bigCircle}*/}
                {/*    onClick={() => setMenuActive(!menuActive)}*/}
                {/*>*/}
                {/*    <div className={menuActive ? styles.circle_menuActive : styles.circle}>*/}
                {/*        <img draggable="false" src={messenger} alt=""/>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>

        </>
    );
};

export default Messengers;