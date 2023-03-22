import { Header } from '../components/Header';

import styles from './NoSidebarLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NoSidebarLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default NoSidebarLayout;
