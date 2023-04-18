import ResidentInfo from "./ResidentInfo"

const ResidentList = ({locationUniverse}) => {
  const residents = locationUniverse?.residents
    return (
    <div className='w-full px-5 mt-[20vh] grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
        {residents?.map(resident => <ResidentInfo resident={resident}/>)}
    </div>
  )
}
export default ResidentList