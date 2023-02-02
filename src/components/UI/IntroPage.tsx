import React, { FC } from 'react'
import { FaWallet, FaShippingFast, FaUserFriends } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

const data = [
  {
    title: "Free Delivery",
    description: "within Bara Cee",
    icon: FaUserFriends,
  },
  {
    title: "99% Satisfied Customers",
    description: "Our clients' opinions speak for themselves",
    icon: FaShippingFast,
  },
  {
    title: "Originality Guaranteed",
    description: "30 days warranty for each product from our store",
    icon: FaWallet,
  },
]


export const DataIcon:FC<{Icon:IconType}> = ({ Icon }) => {
  return (
    <div>
      {Icon && <Icon size={34} />}
    </div>
  )
}
function IntroPage() {
  return (
      <div>
        <h1 className="text-xl font-bold text-center py-4 text-primary">Why Choose Us?</h1>
        <ul className="grid md:grid-cols-3 gap-5">
          {data.map(({ description, icon, title }, index) => (
            <li key={index} className='grid place-items-center shadow min-w-48 text-center h-44 rounded bg-[whitesmoke] dark:bg-gray-600 hover:scale-105 transition-all'>
              <div className='grid place-items-center p-3'>
                {/* <i className="icon-shipping"></i> */}
                <DataIcon Icon={icon} />
                <div className="data-item__content pt-5">
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            </li>
          ))}

        </ul>
      </div>
  )
}

export default IntroPage