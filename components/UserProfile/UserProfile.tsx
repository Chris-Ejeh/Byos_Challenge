import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IName } from '../../utils/types';
import styles from './UserProfile.module.scss';

const cn = require('classnames');

interface UserProfileProps {
    name: IName;
    picture: string;
}

const ProfileNav = [
    {
        pathname: 'Users',
        path: '/userlist',
    },
    {
        pathname: 'Current Time',
        path: '/timepage',
    },
    {
        pathname: 'Sign Out',
        path: '/',
    },
];

const UserProfile: FC<UserProfileProps> = ({ name, picture }) => {
    return (
        <div className={styles.userProfile}>
            <Image alt={name.first} src={picture} width={120} height={120} className={styles.img} />

            <div className={styles.info}>
                <p className={styles.first}>{name.first}</p>
                <p className={styles.last}>{name.last}</p>
            </div>

            <ul className={cn('unstyled-list', styles.navItems)}>
                {ProfileNav.map((navItem, index) => (
                    <li className={styles.navItem} key={index}>
                        <Link href={navItem.path}>
                            <a>{navItem.pathname}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default UserProfile;
