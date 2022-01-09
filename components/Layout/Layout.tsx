import { FC } from 'react';
import Head from '../Head';
import Header from '../Header/Header';
import { NavbarProps } from '../Navbar/Navbar';
import styles from './Layout.module.scss';

const Layout: FC<NavbarProps> = ({ children, user }) => {
    return (
        <>
            <Head pageTitle="Byos Challenge" />
            <Header user={user} />
            <div className={styles.layoutChildren}>{children}</div>
        </>
    );
};
export default Layout;
