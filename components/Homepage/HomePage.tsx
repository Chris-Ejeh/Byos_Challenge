import { FC } from 'react';
import { indexProps } from '../../pages';
import Layout from '../Layout/Layout';
import Login from '../Login/Login';

import styles from './Homepage.module.scss';

const cn = require('classnames');

const HomePage: FC<indexProps> = ({ users }) => {
    return (
        <Layout user={false}>
            <div className={cn('container', styles.wrapper)}>
                {users.map((user, index) => (
                    <Login key={index} person={user} />
                ))}
            </div>
        </Layout>
    );
};
export default HomePage;
