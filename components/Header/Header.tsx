import { FC } from 'react';

import styles from './Header.module.scss';
import Navbar, { NavbarProps } from '../Navbar/Navbar';

const cn = require('classnames');

interface headerProps extends NavbarProps {
    className?: string;
}

const Header: FC<headerProps> = ({ className, user }) => {
    return (
        <header role="banner" className={cn(styles.header, className)}>
            <Navbar user={user} />
        </header>
    );
};
export default Header;
