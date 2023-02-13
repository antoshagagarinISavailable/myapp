import React from "react";
import { NavLink } from "react-router-dom";
import s from './aside.module.css'

const Aside = () => {
    return (
        <div className={s.asideWrapper}>
            <nav className={s.asideNav}>
                <ul className={s.asideNavList}>
                   <li className={s.asideNavListItem}><NavLink to="/wall" className={navData => navData.isActive ? s.asideLinkActive : s.asideLink}>Profile</NavLink></li>
                   <li className={s.asideNavListItem}><NavLink to="/dialogs" className={navData => navData.isActive ? s.asideLinkActive : s.asideLink}>Messages</NavLink></li>

                </ul>
            </nav>
        </div>
    )
}

export default Aside