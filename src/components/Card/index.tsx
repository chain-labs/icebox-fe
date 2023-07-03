import Image from 'next/image'

export interface CardProps {
    title: string
    sub: string
    showSub: boolean
    imgUrl: string
    bg: string
    children?: React.ReactNode
}

const Card = ({
    title,
    showSub,
    bg,
    imgUrl,
    children,
    sub,
}: CardProps): JSX.Element => {
    const getBackground = () => {
        return `bg-purple-600`
    }

    return (
        <div className="flex justify-center">
            <div
                className={`flex flex-col md:flex-row md:max-w-xl rounded-lg ${getBackground()} shadow-lg`}
            >
                <div className="w-full h-96 relative">
                    <Image
                        className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={imgUrl}
                        alt="image_prop"
                        fill
                    />
                </div>
                <div className="p-6 flex flex-col justify-center">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                        {title}
                    </h5>
                    {showSub && (
                        <p className="text-gray-500 text-sm mt-2">{sub}</p>
                    )}
                    <p className="text-gray-700 text-base mt-4 mb-4">
                        {children}
                    </p>

                    <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md"
                    >
                        Some action
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
