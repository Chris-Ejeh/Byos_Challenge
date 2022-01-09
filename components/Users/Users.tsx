import Image from 'next/image';
import { FC, useContext } from 'react';
import { UserStore } from '../../apollo/apollo-cache';
import { AppContext } from '../../Context/AppContex';
import { UserListProps } from '../../utils/types';
import Layout from '../Layout/Layout';
import SideDrawer from '../SideDrawer/SideDrawer';

import styles from './Users.module.scss';

export interface UsersProps {
    users: UserListProps[];
}

const Users: FC<UsersProps> = ({ users }) => {
    const { setSideDrawerOpen } = useContext(AppContext);

    return (
        <Layout user={true}>
            <div className={styles.container}>
                <div className={styles.users}>
                    <h1 className={styles.title}>Userlist</h1>
                    <div className={styles.wrapper}>
                        {users.map((user, index) => (
                            <button
                                className={styles.usersContainer}
                                role={'button'}
                                key={index}
                                onClick={() => {
                                    setSideDrawerOpen(true);
                                    UserStore(user);
                                    scroll({
                                        top: 2,
                                    });
                                }}>
                                <div className={styles.imgContainer}>
                                    <Image
                                        alt={user.name.first}
                                        src={user.picture.thumbnail}
                                        width={100}
                                        height={100}
                                        className={styles.img}
                                    />
                                </div>

                                <p className={styles.first}>{user.name.first}</p>
                                <p className={styles.last}>{user.name.last}</p>
                            </button>
                        ))}
                    </div>
                </div>
                <SideDrawer />
            </div>
        </Layout>
    );
};
export default Users;
