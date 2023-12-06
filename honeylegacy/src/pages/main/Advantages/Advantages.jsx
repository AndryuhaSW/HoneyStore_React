import React from 'react';
import styles from './Advantages.module.css'

const Advantages = () => {
    return (
        <div className={styles.root}>
            <div>
                <h1>01</h1>
                <div>Богат витаминами и минералами</div>
            </div>
            <div>
                <h1>02</h1>
                <div>Поддерживает иммунитет</div>
            </div>
            <div>
                <h1>03</h1>
                <div>Улучшает пищеварение</div>
            </div>
        </div>
    );
};

export default Advantages;