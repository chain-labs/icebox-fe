import Head from 'next/head'
import Image from 'next/image'
import { BRANDING } from '../modules/navigation/Navbar'

export const APP_VERSION = 'v1.0.0'

const LOGO_URL =
    'https://ik.imagekit.io/chainlabs/Icebox/logo_NfwqdttFw.svg?updatedAt=1688371769348'

export default function Home(): JSX.Element {
    return (
        <>
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
            <main className="w-screen bg-white min-h-screen flex items-center justify-center fixed top-0 left-0 -z-10">
                <div>
                    <Image
                        width={500}
                        height={100}
                        src={BRANDING}
                        alt="brand"
                        style={{ objectFit: 'contain' }}
                    />
                    <div className="text-black font-bold text-8xl text-center">
                        Coming Soon...
                    </div>
                </div>
            </main>
        </>
    )
}
