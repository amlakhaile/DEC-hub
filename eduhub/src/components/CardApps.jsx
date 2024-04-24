import React from 'react'

const CardApps = ({title, description}) => {
  return (
    <div>
    <div className="w-[400px] h-[200px] bg-blue-600 flex flex-col items-center justify-center rounded overflow-hidden shadow-lg">

      <div className="px-6 py-4 text-center text-white">
        <div className="font-bold text-3xl mb-2">{title}</div>
        <p className=" text-base text-white">
          {description}
        </p>
      </div>
     
    </div>
    </div>
  )
}

export default CardApps
