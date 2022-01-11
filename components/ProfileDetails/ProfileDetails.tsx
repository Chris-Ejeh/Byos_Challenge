import { useReactiveVar } from '@apollo/client';
import Image from 'next/image';
import { FC } from 'react';
import { CurrentUserStore, UserStore } from '../../apollo/apollo-cache';

import styles from './ProfileDetails.module.scss';

const cn = require('classnames');

interface ProfileDetailsProps {
    className?: string;
    registeredProfile: boolean;
}

const ProfileDetails: FC<ProfileDetailsProps> = ({ className, registeredProfile }) => {
    const registeredUser = useReactiveVar(CurrentUserStore);
    const user = useReactiveVar(UserStore);

    return (
        <div className={cn(styles.container, className)}>
            {registeredUser.password && registeredProfile === true && (
                <>
                    <div>
                        <Image
                            alt={registeredUser?.name.first}
                            src={registeredUser?.picture?.thumbnail}
                            width={100}
                            height={100}
                            className={styles.img}
                        />
                    </div>
                    <div className={styles.info}>
                        <p className={styles.first}>{registeredUser?.name.first}</p>
                        <p className={styles.last}>{registeredUser?.name.last}</p>
                    </div>
                </>
            )}

            {user.name.first && registeredProfile === false && (
                <>
                    <div>
                        <Image
                            alt={user.name.first}
                            src={user.picture.thumbnail}
                            width={100}
                            height={100}
                            className={styles.img}
                        />
                    </div>
                    <div className={styles.info}>
                        <p className={styles.first}>{user?.name?.first}</p>
                        <p className={styles.last}>{user?.name?.last}</p>
                    </div>
                </>
            )}
        </div>
    );
};
export default ProfileDetails;
