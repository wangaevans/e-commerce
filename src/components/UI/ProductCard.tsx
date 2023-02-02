import React from 'react'

type Props = {
    title: string
    banner: string
    alt?: string
    className?:string
}

function ProductCard({title,banner,alt,className}: Props) {
    return (
      <div className={`${className} shadow-lg dark:bg-slate-700 h-fit  pb-5 rounded w-full  border-b border-primary`}>
          <img src={banner} className='object-cover h-[35vh] min-w-full' alt={alt} />
          <div className="flex items-center justify-between gap-5 p-3">
              <div className='grid flex-[.95]'>
                  <p className='text-xl font-semibold'>{title}</p>
                  <a className='text-sm text-gray-500 underline' href="">Mark Johnson</a>
              </div>
          </div>
      </div>
  )
}

export default ProductCard