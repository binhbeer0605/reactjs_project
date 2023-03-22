import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({ button_type_one, button_type_two, className, children }) {
    const classes = cx('button', {
        [className]: className,
        button_type_one,
        button_type_two,
    });
    return <button className={classes}>{children}</button>;
}

export default Button;
