import styles from './TitlePage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function TitlePage({ title }) {
    return (
        <>
            {title ? (
                <div className={cx('title')}>
                    <h5>{title}</h5>
                    <span className="line"></span>
                </div>
            ) : null}
        </>
    );
}

export default TitlePage;
