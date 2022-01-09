import { useRouter } from 'next/router';
import { FC, FormEvent } from 'react';
import { FormStore } from '../../apollo/apollo-cache';
import useForm from '../../utils/useForm';

import styles from './Login.module.scss';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
    const router = useRouter();

    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        name: '',
        password: '',
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        FormStore(inputs);
        resetForm();
        router.push('/userlist');
    };

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Login </h1>

            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Enter your name"
                    required
                    value={inputs.name}
                    onChange={handleChange}
                />
            </div>

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
