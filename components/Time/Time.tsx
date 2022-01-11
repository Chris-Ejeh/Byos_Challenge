import { FC } from 'react';
import Layout from '../Layout/Layout';

import styles from './Time.module.scss';

///external libraries
import dayjs from 'dayjs';
const cn = require('classnames');
// this is not a good library
// Throwing error : react-dom.development.js?ac89:67 Warning: componentWillReceiveProps has been renamed, and is not recommended for use
// recommend using a new animation library
const Bounce = require('react-reveal/Bounce');

const Time: FC = () => {
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
