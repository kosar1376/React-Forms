import React from 'react';
import styles from "./navbar.module.css";
import icon1 from "../icons/instagram.png";
import icon2 from "../icons/phone.png";
import icon3 from "../icons/user-male.png"

const Navbar = () => {
    return (
        <header className={styles.header1}>
            <div className={styles.container1}>
                <ul className={styles.ul1}>
                    <li><a href=''>Home page</a></li>
                    <li><a href=''>Products</a></li>
                    <li><a href=''>About Us</a></li>

                </ul>
                
            </div>

            <div className={styles.container2}>
               <a href=''> <img src={icon1}/></a>
               <a href=''> <img src={icon2}/></a>
               <a href=''> <img src={icon3}/></a>

            </div>
            
        </header>
    );
};

export default Navbar;