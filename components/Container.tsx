import React from 'react'

interface IContainer {
    title?: string;
    children?: React.ReactNode;
    col?: number;
    grid?: boolean;
    className?: any;
}
export const Container: React.FC<IContainer> = ({ title, children, grid, className}) => {
    return (
        <div className={`container px-6 mx-auto m-6`}>
            <section className="text-gray-800 text-center">
                <h2 className="text-3xl font-bold mb-12 pb-4 text-center">{title}</h2>

                {
                    grid ?
                    (
                        <div className={`grid lg:grid-cols-4 gap-6 xl:gap-x-12 ${className}`}>
                            {children}
                        </div>
                    )

                        :
                    
                    (
                        <div className={className}>
                            {children}
                        </div>
                    )
                }

            </section>
        </div>
    )
}
