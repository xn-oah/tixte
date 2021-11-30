import '../styles/globals.css';
import '../styles/layout.css';
import Layout from '../components/layout';
import Head from 'next/head';

export default function render({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <script async src='https://arc.io/widget.min.js#3gbCMTjB'></script>
                <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
                <meta property='og:description' content="Here you can read through a unoficial Tixte documentation." />
                <meta property='og:title' content='Tixte help house' />
                <meta property='og:type' content='website' />
                <meta name='theme-color' content='#2A78F5' />
                <title>
                    Tixte help house | by Luna
                </title>
                <link rel='shortcut icon' type='image/x-icon' href='https://tixte.com/static/media/logo_mark.d3b45ae2.png' />
            </Head>
            <Layout>
                <body>
                    <Component {...pageProps} />
                </body>
            </Layout>
        </>
    );
};