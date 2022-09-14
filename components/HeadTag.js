import Head from 'next/head';

export default function HeadTag({ title }) {

    return (
        <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}