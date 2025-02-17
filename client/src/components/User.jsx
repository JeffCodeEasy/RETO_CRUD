import React from 'react'
import { Link } from 'react-router-dom';

export const User = ({id, name, birthday, role, salary, onDelete }) => {


  return (
    <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{name}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{birthday}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{role}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">${salary}</td>
        <td className="whitespace-nowrap px-4 py-2">
        <Link
            to={`/user/${id}`}
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
            Actualizar
        </Link>
        <a
            onClick={()=>onDelete(id)}
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 ml-3 cursor-pointer"
        >
            Eliminar
        </a>
        </td>
    </tr>
  )
}
