import { makeVar, ReactiveVar } from '@apollo/client';
import { FormDataProps, UserListProps } from '../utils/types';

export const FormStore: ReactiveVar<FormDataProps> = makeVar<FormDataProps>({
    email: '',
    name: '',
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
});
