import '@/styles/globals.css'
import Navbar from '@/modules/navigation/Navbar'
import Head from 'next/head'
import { LOGO_URL } from '@/common/constants'


export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Icebox</title>
                <meta
                    name="description"
                    content="Icebox app for Ordinals Lending"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href={LOGO_URL} />
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </div>
    )
}
