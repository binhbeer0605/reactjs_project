import ProjectList from './ProjectList';
import styles from './Project.module.scss';
import classNames from 'classnames/bind';
import { images } from '@/assets';
import { Button } from '@/components';

const cx = classNames.bind(styles);

const data = [
    {
        name: 'Video-Streaming-Platform (MERN Stack)',
        des: 'This is a video streaming platform project, where user can register to this site and they can create video posts. This is a complete MERN Stack project with Typescript and AWS S3',
        projectlink: 'https://video-streaming-platform.vercel.app/',
        techused: [
            {
                techname: 'MERN Stack',
            },
            {
                techname: 'Typescript',
            },
            {
                techname: 'React Js',
            },
            {
                techname: 'Context API',
            },
        ],
    },

    {
        name: 'Multi-User-Portal (MERN Stack)',
        des: 'This is a Multi-User-Portal project. This is a complete MERN Stack project with Typescript and AWS S3',
        projectlink: 'https://multi-user-portal.vercel.app/',
        techused: [
            {
                techname: 'MERN Stack',
            },
            {
                techname: 'Typescript',
            },
            {
                techname: 'React Js',
            },
            {
                techname: 'Context API',
            },
            {
                techname: 'Context API',
            },
        ],
    },

    {
        name: 'Job Portal (MERN Stack)',
        des: "This is a job portal web app. Where company can publish their jobs and employees can apply for the job. It's a complete MERN stack project",
        projectlink: 'https://mern-job-portal.herokuapp.com/',
        techused: [
            {
                techname: 'MERN Stack',
            },

            {
                techname: 'React Js',
            },
            {
                techname: 'Context API',
            },

            {
                techname: 'Node JS',
            },
        ],
    },
    {
        name: 'Single Page Company Portfolio',
        des: 'This is a complete single page company portfolio web application using React JS',
        projectlink: 'https://react-company-profile.netlify.app/',
        techused: [
            {
                techname: 'Javascript',
            },
            {
                techname: 'React Js',
            },
            {
                techname: 'Git and Github',
            },
            {
                techname: 'Bootstrap',
            },
            {
                techname: 'Netlify',
            },
        ],
    },
    {
        name: 'Single Page Company Portfolio',
        des: 'This is a complete single page company portfolio web application using React JS',
        projectlink: 'https://react-company-profile.netlify.app/',
        techused: [
            {
                techname: 'Javascript',
            },
            {
                techname: 'React Js',
            },
            {
                techname: 'Git and Github',
            },
            {
                techname: 'Bootstrap',
            },
            {
                techname: 'Netlify',
            },
        ],
    },
    {
        name: 'Single Page Company Portfolio',
        des: 'This is a complete single page company portfolio web application using React JS',
        projectlink: 'https://react-company-profile.netlify.app/',
        techused: [
            {
                techname: 'Javascript',
            },
            {
                techname: 'React Js',
            },
            {
                techname: 'Git and Github',
            },
            {
                techname: 'Bootstrap',
            },
            {
                techname: 'Netlify',
            },
        ],
    },
];

function Projects() {
    return (
        <div className={cx('container', 'project-section')}>
            <div className={cx('card', 'project-item')}>
                <h5 className={cx('project-name')}>Name Project</h5>
                <ul className={cx('project-list-tech')}>
                    <li className={cx('project-item-tech')}>
                        <button>ReactJS</button>
                    </li>
                    <li>
                        <button>ReactJS</button>
                    </li>
                    <li>
                        <button>ReactJS</button>
                    </li>
                </ul>
                <img className={cx('project-image')} src={images.product1} width="200" alt="" />
                <div className={cx('project-buttons')}>
                    <Button button_type_one>View Source</Button>
                    <Button button_type_two>View Demo</Button>
                </div>
            </div>
        </div>
    );
}

export default Projects;
