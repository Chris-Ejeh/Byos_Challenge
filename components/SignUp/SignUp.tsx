import { useRouter } from 'next/router';
import { FC, FormEvent } from 'react';
import { FormStore } from '../../apollo/apollo-cache';
import useForm from '../../utils/useForm';

import styles from './SignUp.module.scss';

interface SignUpProps {}

const SignUp: FC<SignUpProps> = ({}) => {
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
            <h1 className={styles.title}>Create Account</h1>

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
                    placeholder="Enter email"
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
                    placeholder="Enter password"
                    required
                    value={inputs.password}
                    onChange={handleChange}
                />
            </div>
            <button title="Submit" className={styles.button}>
                Sign Up
            </button>
        </form>
    );
};
export default SignUp;
