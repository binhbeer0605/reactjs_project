import { images } from '@/assets';
import Navbar from '../Navbar';

import { FaHome } from 'react-icons/fa';
import { AiFillProject, AiFillContacts, AiFillInfoCircle } from 'react-icons/ai';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const navbarList = [
    {
        to: '/',
        title: 'Home',
        image: images.logo,
        icon: '',
    },
    {
        to: '/',
        title: 'Home',
        icon: FaHome,
    },
    {
        to: '/about',
        title: 'About',
        icon: AiFillInfoCircle,
    },

    {
        to: '/projects',
        title: 'Projects',
        icon: AiFillProject,
    },
    {
        to: '/contacts',
        title: 'Contacts',
        icon: AiFillContacts,
    },
];

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Navbar navbarList={navbarList} />
        </div>
    );
}

export default Header;
