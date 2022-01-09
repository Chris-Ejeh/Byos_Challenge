import { GetStaticPaths } from 'next';
import { FC } from 'react';
import { UserListProps } from '../../utils/types';

const BACKENDAPI = `${process.env.BACKEND_URL}?nat=gb,us,ca&results=50&exc=login`;

interface userlistProps {

}

const userlist: FC<userlistProps> = ({}) => {
        return ();
}

export const getStaticPaths: GetStaticPaths = async () => {

    const res = await fetch(BACKENDAPI);
    const users = await res.json();

    if (!users) {
        return {
            notFound: true,
        };
    }

    const pathsData = (users?.results ?? []).map((user: UserListProps ) => ({
        params: { slug: user.id.name },
    }));

    return {
        paths: pathsData,
        fallback: true,
    };
};

export default userlist