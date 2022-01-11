import { useReactiveVar } from '@apollo/client';
import { useRouter } from 'next/router';
import { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { CurrentUserStore, FormStore, UserStore } from '../../apollo/apollo-cache';
import { UserListProps } from '../../utils/types';
import useForm from '../../utils/useForm';

import styles from './Login.module.scss';

interface LoginProps {
    person: UserListProps;
}

const Login: FC<LoginProps> = ({ person }) => {
    const router = useRouter();
    const [error, setError] = useState(false);
    const errorRef = useRef<number>();
    const loginInfo = useReactiveVar(CurrentUserStore);

    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        name: '',
        password: '',
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputs.password === person.login.password && inputs.email === person.email) {
            router.push('/userlist');
            CurrentUserStore({
                email: person.email,
                picture: person.picture,
                name: person.name,
                password: person.login.password,
            });

            resetForm();
        } else {
            setError(true);
            errorRef.current = window.setTimeout(() => {
                setError(false);
            }, 2500);
        }
    };

    useEffect(() => {
        return () => clearTimeout(errorRef.current);
    }, []);

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Login </h1>
            {error && (
                <div className={styles.errorContainer}>
                    <h3 className={styles.errorText}>Incorrect Password or Email</h3>
                    <h3 className={styles.errorText}>Please try again</h3>
                </div>
            )}

            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Email Address"
                    required
                    value={inputs.email}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                    value={inputs.password}
                    onChange={handleChange}
                />
            </div>
            <button title="Submit" className={styles.button}>
                Login
            </button>
        </form>
    );
};
export default Login;
