import { FC } from 'react';
import { UserListProps } from '../../utils/types';
import Layout from '../Layout/Layout';

import styles from './Time.module.scss';

///external libraries
import dayjs from 'dayjs';
const cn = require('classnames');
const Bounce = require('react-reveal/Bounce');

interface TimeProps {
    users: UserListProps[];
}

const Time: FC<TimeProps> = () => {
    const date = new Date();

    return (
        <Layout user={true}>
            <div className={cn('container', styles.timeContainer)}>
                <Bounce top>
                    <h1 className={styles.animate}>Today's date is: {dayjs(date).format('DD/MM/YYYY')}</h1>
                    <h1>Today's time is: {dayjs(date).format('hh:mm:ss')}</h1>
                </Bounce>
            </div>
        </Layout>
    );
};
export default Time;
