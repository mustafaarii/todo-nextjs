import React from 'react'

interface IAlert {
    title?:string;
    type:AlertType;
}

export enum AlertType {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}
export const Alert : React.FC<IAlert> = ({title, type}) => {
  return (
    <div>
        {
            type === AlertType.SUCCESS ?
                <div className="rounded-lg bg-green-700 px-6 py-5 text-base text-white">
                    {title}
                </div>
            :
                <div className="rounded-lg bg-red-700 px-6 py-5 text-base text-white">
                    {title}
                </div>
        }
    </div>
  )
}
