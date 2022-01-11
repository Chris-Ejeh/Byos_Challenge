export interface UserListProps {
    gender: string;
    name: IName;
    email: string;
    dob: {
        date: string;
        age: number;
    };
    registered: {
        date: string;
        age: number;
    };

    phone: string;
    cell: string;
    id: { name: string; value: string };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
    login: LoginProps;
}

export interface IName {
    title: string;
    first: string;
    last: string;
}

export interface ILocation {
    street: string;
    city: string;
    state: string;
    country: string;
    postcode: number;

    timezone: {
        offset: string;
        description: string;
    };
}

export interface FormDataProps {
    name: string;
    email: string;
    password: string;
}

export interface LoginProps {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    shal: string;
    sha256: string;
}

export interface CurrentUserProps {
    email: string;
    name: IName;
    password: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}
