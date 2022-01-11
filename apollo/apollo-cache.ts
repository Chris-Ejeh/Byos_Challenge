import { makeVar, ReactiveVar } from '@apollo/client';
import { CurrentUserProps, FormDataProps, UserListProps } from '../utils/types';

export const FormStore: ReactiveVar<FormDataProps> = makeVar<FormDataProps>({
    email: '',
    name: '',
    password: '',
});

export const CurrentUserStore: ReactiveVar<CurrentUserProps> = makeVar<CurrentUserProps>({
    email: '',
    name: {
        first: '',
        last: '',
        title: '',
    },
    picture: {
        large: '',
        medium: '',
        thumbnail: '',
    },
    password: '',
});

export const UserStore: ReactiveVar<UserListProps> = makeVar({
    cell: '',
    dob: {
        age: 0,
        date: '',
    },
    email: '',
    gender: '',
    id: {
        name: '',
        value: '',
    },
    name: {
        first: '',
        last: '',
        title: '',
    },
    nat: '',
    phone: '',
    picture: {
        large: '',
        medium: '',
        thumbnail: '',
    },
    registered: {
        age: 0,
        date: '',
    },
    login: {
        uuid: '',
        username: '',
        password: '',
        salt: '',
        md5: '',
        shal: '',
        sha256: '',
    },
});
