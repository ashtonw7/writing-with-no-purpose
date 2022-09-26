export default function PageTitle({ title }) {
    title = title.toLowerCase();
    return (
        <div className='flex justify-center verticalindex:mt-5 mb-5 verticalindex:mb-10'>
            <div className='flex justify-center items-center w-4/5'>
                <h1 className='text-4xl verticalindex:text-7xl verticalindex:w-full text-center font-dominique verticalindex:pb-5  border-gray-200'>{title}</h1>
            </div>
        </div>
    )
}