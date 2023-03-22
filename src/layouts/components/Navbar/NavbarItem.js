import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function NavbarItem({ item }) {
    const Icon = item.icon ? item.icon : Fragment;
    return (
        <NavLink className={(navData) => cx('nav-item', { active: navData.isActive })} to={item.to}>
            {item.image ? (
                <img className={cx('logo-branch')} src={item.image} alt="logo_branch" />
            ) : (
                <Fragment>
                    <Icon className={cx('icon')} size={20} />
                    {item.title}
                </Fragment>
            )}
        </NavLink>
    );
}

export default NavbarItem;
