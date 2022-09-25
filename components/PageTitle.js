export default function PageTitle({ title }) {

    return (
        <div className='flex justify-center mb-5 regular:mt-5 regular:mb-7'>
            <div className='items-center w-4/5'>
                <h1 className='text-4xl phone:text-5xl verticalindex:text-6xl text-center'>{title}</h1>
            </div>
        </div>
    )
}