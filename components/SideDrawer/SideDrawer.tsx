import { FC, useContext } from 'react';
import ProfileDetails from '../ProfileDetails/ProfileDetails';

import styles from './SideDrawer.module.scss';
import dayjs from 'dayjs';
import { AppContext } from '../../Context/AppContex';
import { useReactiveVar } from '@apollo/client';
import { UserStore } from '../../apollo/apollo-cache';

const SideDrawer: FC = () => {
    const { sideDrawerOpen, setSideDrawerOpen } = useContext(AppContext);
    const user = useReactiveVar(UserStore);

    return !sideDrawerOpen ? null : (
        <div className={styles.container}>
            <div className={styles.background}>
                <ProfileDetails registeredProfile={false} className={styles.profile} />
            </div>

            <div className={styles.infoContainer}>
                <p className={styles.title}>Email Address</p>
                <p className={styles.subTitle}>{user.email}</p>
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.title}>Date of Birth</p>
                <p className={styles.subTitle}>{dayjs(user.dob.date).format('DD/MM/YYYY')}</p>
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.title}>Nationality</p>
                <p className={styles.subTitle}>{user.nat}</p>
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.title}>Phone Number</p>
                <p className={styles.subTitle}>{user.phone}</p>
            </div>

            <button role="button" className={styles.button} onClick={() => setSideDrawerOpen(false)}>
                Close
            </button>
        </div>
    );
};
export default SideDrawer;
