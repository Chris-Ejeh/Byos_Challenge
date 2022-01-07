import { FC } from 'react';
import Head from './Head';

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Head pageTitle="Byos Challenge" />
            <div>{children}</div>
        </>
    );
};
export default Layout;
