import { useReactiveVar } from '@apollo/client';
import Link from 'next/link';
import { FC } from 'react';
import { CurrentUserStore } from '../../apollo/apollo-cache';
import ProfileDetails from '../ProfileDetails/ProfileDetails';

import styles from './Navbar.module.scss';

export interface NavbarProps {
    user: boolean;
}

const Navbar: FC<NavbarProps> = ({ user }) => {
    const currentUser = useReactiveVar(CurrentUserStore);

    return (
        <nav className={styles.navbar}>
            {currentUser.password && <ProfileDetails registeredProfile={true} />}

            <div className={styles.navItems}>
                {currentUser.password && (
                    <div className={styles.navItem}>
                        <Link href="/userlist">
                            <a>Users</a>
                        </Link>
                    </div>
                )}

                <div className={styles.navItem}>
                    <Link href="/timepage">
                        <a>Time</a>
                    </Link>
                </div>
            </div>

            {currentUser.password ? (
                <div className={styles.navItem}>
                    <Link href="/">
                        <a
                            role={'button'}
                            onClick={() => {
                                CurrentUserStore({
                                    email: '',
                                    name: {
                                        first: '',
                                        last: '',
                                        title: '',
                                    },
                                    picture: {
                                        large: '',
                                        medium: '',
                                        thumbnail: '',
                                    },
                                    password: '',
                                });
                            }}>
                            Sign Out
                        </a>
                    </Link>
                </div>
            ) : (
                <div className={styles.navItem}>
                    <Link href="/">
                        <a>Login/Sign Up</a>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
