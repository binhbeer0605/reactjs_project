import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Button } from '@/components';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h1>Hi, I am Nguyen Thanh Binh</h1>
                <h3>
                    <Typewriter
                        options={{
                            strings: [
                                'Full Stack Developer',
                                'Javascript, ReactJs, VueJS',
                                'Node js, Express Js',
                                'PHP, Laravel',
                                'Java',
                                'VB .Net, ASP .Net',
                                'SQL Server, MongoDB',
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 5,
                        }}
                    />
                </h3>

                <div className={cx('button-for-action')}>
                    <div to="contactsection" spy={true} smooth={true} duration={100} offset={-100}>
                        <Button button_type_one>Hire Me</Button>
                    </div>

                    <Button button_type_two>
                        <a href="fb.com" download="" target="_blank">
                            Get Resume
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;
