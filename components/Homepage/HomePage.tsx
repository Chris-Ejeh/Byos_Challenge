import { FC } from 'react';
import Layout from '../Layout';

interface HomePageProps {
    title: string;
}

const HomePage: FC<HomePageProps> = ({ title }) => {
    return (
        <Layout>
            <h1>{title}</h1>
        </Layout>
    );
};
export default HomePage;
