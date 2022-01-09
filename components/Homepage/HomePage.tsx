import { FC } from 'react';
import Layout from '../Layout/Layout';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

import styles from './Homepage.module.scss';

const cn = require('classnames');

const HomePage: FC = () => {
    return (
        <Layout user={false}>
            <div className={cn('container', styles.wrapper)}>
                <Login />
                <SignUp />
            </div>
        </Layout>
    );
};
export default HomePage;
