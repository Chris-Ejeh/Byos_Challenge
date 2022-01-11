import { GetStaticProps } from 'next';
import { FC } from 'react';
import HomePage from '../components/Homepage/HomePage';
import { UserListProps } from '../utils/types';

export interface indexProps {
    users: UserListProps[];
}

const index: FC<indexProps> = ({ users }) => {
    return <HomePage users={users} />;
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${process.env.BACKEND_URL}?seed=dbP0Jg1m`);
    const users = await res.json();

    if (!users) {
        return {
            notFound: true,
        };
    }

    return {
        props: { users: users.results },
        revalidate: 80,
    };
};

export default index;
