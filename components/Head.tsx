import { FC } from 'react';
import NextHead from 'next/head';

interface HeadProps {
    pageTitle: string;
}

const Head: FC<HeadProps> = ({ pageTitle }) => {
    return (
        <NextHead>
            <title>{pageTitle}</title>
        </NextHead>
    );
};
export default Head;
