export default function PageTitle({ title }) {

    return (
        <div className='flex justify-center mb-5 regular:mb-10'>
            <div className='items-center w-4/5'>
                <h1 className='text-4xl phone:text-6xl text-center font-garramond'>{title}</h1>
            </div>
        </div>
    )
}