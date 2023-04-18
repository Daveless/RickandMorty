import { useEffect, useState } from 'react'
import './App.css'
import Location from './components/Location'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import ResidentList from './components/ResidentList'
import style from './styles/firstSection.module.css'
import Section1 from './components/Section1'

function App() {
 


const getRandomDimension = () => {
  return Math.floor((Math.random() * 126)+1)
}
const [locationUniverse, setLocationUniverse] = useState()

const handlerSubmit = (e) => {
  e.preventDefault()
  const newLocation = e.target.changeLocation.value
  const URL =`https://rickandmortyapi.com/api/location/${newLocation}`

  axios.get(URL)
  .then(res => setLocationUniverse(res.data))
  .catch(err => console.log(err))
} 


useEffect(() => {
  const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
  axios.get(URL).then((res)=> setLocationUniverse(res.data))
  .catch((err)=>console.log(err))
}, [])


console.log(locationUniverse)

  return (
    <div>
      <Section1 locationUniverse={locationUniverse}/>
      
      <SearchBar handlerSubmit={handlerSubmit}/>
      <p className='text-lime-400 w-full text-center my-5'>¡Welcome to the crazy universe!</p>
      <ResidentList locationUniverse={locationUniverse}/>
    </div>
  )
}

export default App
