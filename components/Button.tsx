
type ButtonProps = {
    children: JSX.Element
}

export const Button = ({ children } : ButtonProps) => {
    return (
        <button className='transition-all bg-blue-500 hover:ring-1 px-4 py-2 rounded text-white'>
            { children }
        </button>
    )
}

