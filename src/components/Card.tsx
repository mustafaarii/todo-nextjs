import Link from 'next/link';
import React from 'react'

interface ICard {
    title?: string;
    id?: string | number;
    body?:string;
    author?:string|number;
}

export const Card: React.FC<ICard> = ({ title, id, body, author }) => {
    return (
        <div className="mb-6 lg:mb-0">
            <div className="relative block bg-white rounded-lg shadow-lg">
                <div className="flex">
                </div>
                <div className="p-6">
                    <h5 className="font-bold text-lg mb-3">{title}</h5>
                    <p className="text-gray-500 mb-4">
                        <small>Published <u>12.01.2022</u> by <a className="text-gray-900">{author}</a></small>
                    </p>
                    <p className="mb-4 pb-2">
                        {body}
                    </p>
                    {
                        id &&
                        <Link href={`/posts/${id}`}>
                            <span className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                Read more
                            </span>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}
