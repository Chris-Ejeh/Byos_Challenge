import { GetStaticProps } from 'next';
import { FC } from 'react';
import Time from '../../components/Time/Time';
import { UserListProps } from '../../utils/types';

interface indexProps {
    users: UserListProps[];
}

const timepage: FC<indexProps> = ({ users }) => {
    return <Time />;
};

export default timepage;
