import React from 'react';
import styles from './Facts.module.css'
import pchela from '../../../pchela.png'
import pchelka from '../../../pchelka.png'

const Facts = () => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>

                <h1>Факты о мёде</h1>

                <br/>
                <hr/>
                <br/>

                <div className={styles.facts}>
                    <div className={styles.factsPlaceholder}>
                        <img src={pchela} alt=""/>
                        <div className={styles.textBlock}>
                            <div className={styles.text}>
                                <h2>низкий гликемический индекс</h2>
                                <div>Он не так быстро попадает в кровь, как обычный сахар</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.factsPlaceholder}>
                        <img src={pchelka} alt=""/>
                        <div className={styles.textBlock}>
                            <div className={styles.text}>
                                <h2>Улучшает память</h2>
                                <div>Мед обладает антиоксидантными свойствами и может улучшать память, поскольку антиоксиданты поддерживают работу клеток головного мозга</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Facts;