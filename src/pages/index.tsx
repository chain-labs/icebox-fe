import { BRANDING, LANDING_IMAGE } from '@/common/constants'
import Image from 'next/image'

export const APP_VERSION = 'v1.0.0'

export default function Home(): JSX.Element {
    return (
        <>
            <main className="w-screen bg-white min-h-screen flex items-center justify-center fixed top-0 left-0 -z-10">
                <Image
                    src={LANDING_IMAGE}
                    alt="landing_image"
                    height={600}
                    width={600}
                />
                <div>
                    <Image
                        width={250}
                        height={50}
                        src={BRANDING}
                        alt="brand"
                        style={{ objectFit: 'contain' }}
                    />
                    <div className="text-black font-bold text-6xl text-center mt-10">
                        Coming Soon...
                    </div>
                </div>
            </main>
        </>
    )
}
