import { FC } from 'react';
import HomePage from '../components/Homepage/HomePage';

interface indexProps {}

const index: FC<indexProps> = () => {
    return <HomePage title="Homepage" />;
};
export default index;
