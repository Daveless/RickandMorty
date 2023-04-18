import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResidentInfo = ({ resident }) => {
  const [character, setCharacter] = useState();

  const URL = resident;
  axios
    .get(resident)
    .then((res) => setCharacter(res?.data))
    .catch((err) => console.log(err));

  return (
    <div className="border border-lime-600 text-white flex flex-col justify-center relative">
      <img src={character?.image} alt="" />
      <div className="p-3">
        <p className="text-xl">{character?.name}</p>
        <div className="grid grid-cols-2 justify-items-start">
          <div>
            <p className="text-gray-500">Species</p>
          </div>
          <div>{character?.species}</div>
        </div>
        <div className="grid grid-cols-2 justify-items-start">
          <div>
            <p className="text-gray-500">Origin</p>
          </div>
          <div>{character?.origin.name}</div>
        </div>
        <div className="grid grid-cols-2 justify-items-start">
          <div>
            <p className="text-gray-500">Times Appear</p>
          </div>
          <div>{character?.episode.length}</div>
        </div>
        
      </div>
      <div className="w-full flex justify-center">
      <div className="flex bg-black/50 align-center space-around w-36 py-1 px-5 border border-lime-400 absolute bottom-[9.5rem]">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke={`${character?.status==='Dead'?'red':'green'}`}
            fill={`${character?.status==='Dead'?'red':'green'}`}
            stroke-linecap="round"
            stroke-linejoin="round"
            >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
          </svg>
          <p className="ml-2">{character?.status}</p>
        </div>
      </div>
    </div>
  );
};
export default ResidentInfo;
