import Link from "next/link"

const ErrorPage = () => {
  return (
    <section className="error-page flex items-center text-center  min-h-content-body">
      <div className="container">
        <h1 className="text-[44px]">Error 404</h1>
        <p className="text-[15px] mb-[40px] ">Woops. Looks like this page doesn't exist</p>
          <Link href="/" className="btn btn--rounded btn--yellow">Go to home</Link>
      </div>
    </section>
  )
}

export default ErrorPage
