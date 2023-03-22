import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import NavbarItem from './NavbarItem';

const cx = classNames.bind(styles);

function Navbar({ navbarList }) {
    return (
        <nav className={cx('nav-list')}>
            {navbarList.map((item, index) => (
                <NavbarItem key={index} item={item} />
            ))}
        </nav>
    );
}

export default Navbar;
