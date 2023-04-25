import React from 'react'

interface ITeam {
    img?:string;
    title?:string;
    name?:string;
}
export const Team : React.FC<ITeam> = ({img, title, name}) => {
    return (
        <div className="mb-24 md:mb-0 h-60">
            <div className="rounded-lg shadow-lg h-full block bg-white">
                <div className="flex justify-center">
                    <div className="flex justify-center" style={{ marginTop: '-75px' }}>
                        {
                            img ? <img src={img} className="rounded-full mx-auto shadow-lg" alt="" style={{ width: '150px' }} />
                                : <img src="https://static.thenounproject.com/png/2366460-200.png" className="rounded-full mx-auto shadow-lg" alt="" style={{ width: '150px' }} /> 
                        }
                    </div>
                </div>
                <div className="p-6">
                    <h5 className="text-lg font-bold mb-4">{name}</h5>
                    <p className="mb-6">{title}</p>
                </div>
            </div>
        </div>
    )
}
