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
