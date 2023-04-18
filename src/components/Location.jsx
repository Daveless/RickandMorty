const Location = ({locationUniverse}) => {
  return (
    <div className="text-white relative w-[90%] mx-auto text-center mt-[80vh]">
      <h2 className="text-2xl">{locationUniverse?.name}</h2>
      <div className="flex space-around mx-auto align-center justify-center mt-3">
        <p className="mx-4 text-sm text-center align center">Type: {locationUniverse?.type}</p>
        <p className="mx-4 text-sm text-center align center">Dimension: {locationUniverse?.dimension}</p>
        <p className="mx-4 text-sm text-center align center">Population: {locationUniverse?.residents.length}</p>
      </div>
    </div>
  )
}

export default Location