import styles from './About.module.scss';
import classNames from 'classnames/bind';
import { images } from '@/assets';

const cx = classNames.bind(styles);

const About = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={images.avatar} alt="avatar" />
            </div>

            <div className={cx('content')}>
                <h4>Nice to meet you</h4>
                <h5>Frontend Web Developer who creates amazing digital experiences!</h5>
                <p>
                    My unique blend of technical expertise, creative thinking, and background in
                    psychology allows me to approach each project with a deep understanding of the
                    end user's perspective, resulting in highly effective user-centred digital
                    products.
                </p>
            </div>
        </div>
    );
};

export default About;
