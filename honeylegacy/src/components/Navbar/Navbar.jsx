import React, {useState} from 'react';
import classes from './Navbar.module.css'
import logo from "../../med.png";
import close from "../../close.png";
import menu from "../../menu.png";
import MenuModal from "./MenuModal/MenuModal";

const Navbar = ({visible}) => {

    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            <div className={classes.navbar_visible}></div>

            <>

                <div className={visible ? classes.navbar_visible : classes.navbar}>

                    {/*LOGO*/}
                    <div
                        className={classes.logo}
                    >
                        <img
                            draggable="false"
                            src={logo}
                            alt="1"
                        />
                        <h1>HoneyLegacy</h1>
                    </div>

                    {/*PHONE*/}
                    <div
                        className={classes.phone}
                    >
                        +(7)921-111-11-11
                    </div>

                    {/*MENU*/}
                    <div
                        className={classes.menuPanel}
                    >
                        {menuActive
                            ? (
                                <div
                                    className={classes.menu}
                                >
                                    <img
                                        draggable="false"
                                        className={classes.closeButton}
                                        src={close}
                                        alt="close menu"
                                        onClick={() => setMenuActive(!menuActive)}
                                    />
                                </div>
                            )
                            :(
                                <div
                                    className={classes.menu}
                                >
                                    <img
                                        draggable="false"
                                        className={classes.menuButton}
                                        src={menu}
                                        alt="open menu"
                                        onClick={() => setMenuActive(!menuActive)}
                                    />
                                </div>
                            )
                        }

                    </div>
                </div>

                <MenuModal menuActive={menuActive}/>
            </>

        </>
    );
};

export default Navbar;