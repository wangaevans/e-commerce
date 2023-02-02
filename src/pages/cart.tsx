import { getSession } from 'next-auth/react'
import React from 'react'

function cart() {
  return (
    <div>cart</div>
  )
}

export default cart

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}
