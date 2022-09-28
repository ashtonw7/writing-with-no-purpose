export default function PageTitle({ title }) {
    title = title.toLowerCase();
    return (
        <div className='flex justify-center verticalindex:mt-5 pt-3 verticalindex:pt-10 mb-5 verticalindex:mb-10'>
            <div className='flex justify-center items-center w-4/5'>
                <h1 className='text-3xl verticalindex:text-[3.5rem] verticalindex:w-full text-center font-dominique underline decoration decoration-2 underline-offset-[6px] verticalindex:pb-5'>{title}</h1>
            </div>
        </div>
    )
}