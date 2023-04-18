import { useState } from "react"

const SearchBar = ({handlerSubmit}) => {

    
    

  return (
    <div className='text-white w-full mx-auto px-1 pt-[10vh] relative z-40'>
        <form onSubmit={handlerSubmit}>
            <div className="flex justify-center">
                <input className='border w-[85%] bg-transparent border-green-300 max-w-lg placeholder:text-slate-400 placeholder:text-center' id="changeLocation" type="text" placeholder="Type a location Id..."/>

                <button className="w-9 p-1 bg-green-600 border border-green-300 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
<path d="M4.25001 0H12.5833V2H4.25001V0ZM2.16668 4V2H4.25001V4H2.16668ZM2.16668 12H0.0833435V4H2.16668V12ZM4.25001 14H2.16668V12H4.25001V14ZM12.5833 14V16H4.25001V14H12.5833ZM14.6667 12H12.5833V14H14.6667V16H16.75V18H18.8333V20H20.9167V18H18.8333V16H16.75V14H14.6667V12ZM14.6667 4H16.75V12H14.6667V4ZM14.6667 4V2H12.5833V4H14.6667Z" fill="#FBFBFB"/>
                </svg>
            </button>
            </div>
        </form>
    </div>
  )
}
export default SearchBar