import { GetStaticProps } from 'next';
import { FC } from 'react';
import Users from '../../components/Users/Users';
import { UserListProps } from '../../utils/types';

const BACKENDAPI = `${process.env.BACKEND_URL}?nat=gb,us,ca&results=50&exc=login`;

interface UserProps {
    users: UserListProps[];
}

const userlist: FC<UserProps> = ({ users }) => {
    return <Users users={users} />;
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(BACKENDAPI);
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

export default userlist;
