import Head from 'next/head';

export default function HeadTag({ title, description, link, image }) {
    return (
        <Head>
            <title>{title}</title>

            <meta charset="utf-8" />
            <meta name="description" content={description} />
            <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34=" />

            <meta property="og:title" content={title} />
            <meta property="og:url" content={"https://fatpuppet.com/" + link} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={'/assets/images/' + image + ".png"} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@fatpuppet" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={'/assets/images/' + image + ".png"} />
            
        </Head>
    )
}