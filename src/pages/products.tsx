import { getSession} from 'next-auth/react'
import React from 'react'
import ProductCard from '../components/UI/ProductCard'
const Items=[
  { banner: '/images/featured-1.jpg', title:"Hoodies Collection"},
  { banner: '/images/featured-2.jpg', title:"T-shirts"},
  { banner: '/images/featured-3.jpg', title:"Trending Outfits"},
  { banner: '/images/slide-2.jpg', title:"Summer Collection"},
]
function Products() {

  return (
    <div>
      <h1 className='text-2xl font-bold text-primary'>New Arrivals This Month</h1>
      <div className="grid md:grid-cols-2 my-5  gap-5 items-center">
        {Items.map((item,index) => (
          <ProductCard className="my-3" key={index} banner={item.banner} title={item.title} />
        ))}
      </div>
    </div>
  )
}

export default Products

export async function getServerSideProps({ req }:any){
  const session = await getSession({ req })

  if(!session){
    return {
      redirect : {
        destination: '/auth/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}
