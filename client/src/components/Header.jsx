import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import { getUserByName } from '../redux/actions';

export const Header = () => {
  
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleSearch = ()=> {
    dispatch(getUserByName(name));
    console.log(name);
    // setName('');
  }

    // Handle Input
    const handleChange = (event)=>{
      setName(event.target.value)
    }
  
    // HandleKeyPress
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSearch(); // Trigger search on Enter key press
      }
    };

  return (
   
  <header className="bg-blue-300">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center sm:justify-between sm:gap-4">
        <div className="relative hidden sm:block">
          <label className="sr-only" type="search"> Search </label>
  
          <input
            onChange={handleChange} onKeyPress={handleKeyPress} value={name}
            className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
            id="search"
            type="search"
            placeholder="Buscar Usuarios..."
          />
  
          <button
            type="button"
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
  
        <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
          
  
          <button type="button" className="group flex shrink-0 items-center rounded-lg transition">
            <span className="sr-only">Menu</span>
            <img
              alt="Man"
              src="https://media.licdn.com/dms/image/D4E03AQFcb9k5y4kZBw/profile-displayphoto-shrink_200_200/0/1703266653734?e=1709769600&v=beta&t=7XwBllgyGtkAeeord9J3tVA4HBGJr_MINNk-kpZ0_l8"
              className="h-10 w-10 rounded-full object-cover"
            />
  
            <p className="ms-2 hidden text-left text-xs sm:block">
              <strong className="block font-medium">Jeremy Fernández</strong>
  
              <span className="text-gray-600"> jeremyfernandez178@gmail.com </span>
            </p>
  
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
  
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Bienvenido, Jeremy!!😎</h1>
  
        <p className="mt-1.5 text-sm text-gray-500">
          Puedes crear, actualizar, eliminar y buscar usuarios en está sección 🚀
        </p>
      </div>
    </div>
  </header>
  )
}
