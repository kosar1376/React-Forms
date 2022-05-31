import React from 'react';
import styles from "./Banner.module.css";
import banner from "../images/im2.webp"
import Form from './Form';

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} className={styles.banner1}/>
            <div className={styles.BannerTextContainer}>
                <h1>Programming</h1>
                <p className={styles.BannerP}>An Exercise of developing <span>React.js</span></p>
            </div>
               <Form/>
           </div>
           
      
    );
};

export default Banner;