import React from 'react'

function Footer() {
    return (
        <footer className="z-10 w-full grid place-items-center border-t border-gray-300 dark:border-gray-600 bg-slate-200 dark:bg-gray-900 dark:text-white  min-h-[60px] ">
            <p>Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer