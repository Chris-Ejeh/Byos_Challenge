import { GetStaticProps } from 'next';
import { FC } from 'react';
import Time from '../../components/Time/Time';
import { UserListProps } from '../../utils/types';

const BACKENDAPI = `${process.env.BACKEND_URL}?nat=gb,us,ca&results=50&exc=login`;

interface indexProps {
    users: UserListProps[];
}

const timepage: FC<indexProps> = ({ users }) => {
    return <Time users={users} />;
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
export default timepage;
