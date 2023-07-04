import { BRANDING } from '@/common/constants'
import Image from 'next/image'

export const APP_VERSION = 'v1.0.0'

export default function Home(): JSX.Element {
    return (
        <>
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
