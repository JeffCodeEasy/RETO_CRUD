import React, { useEffect, useState } from 'react'
import { User } from './User'
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../redux/actions'


export const Users = () => {


    const dispatch = useDispatch();
    const allUsers = useSelector(state=> state.allUsers)
    console.log(allUsers);


    
    useEffect(() => {
      dispatch(getUsers());

    }, [dispatch])


  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [role, setRole] = useState('');
  const [salary, setSalary] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'birthday':
        setBirthday(value);
        break;
      case 'role':
        setRole(value);
        break;
      case 'salary':
        setSalary(value);
        break;
      default:
        break;
    }
  };

   async function deleteUser(id){
        try {
            const response = await fetch(`http://localhost:3000/api/v1/persons/${id}`, {
                method: 'DELETE',
              });

              if (response.ok) {
                console.log('Eliminar usuario con éxito');
               
                dispatch(getUsers()); // Recargar los usuarios después de la eliminación
              } else {
                console.error('Error al crear usuario:', response.status, response.statusText);
              }
        } catch (error) {
            console.error('Error al eliminar usuario:');
        }
}


  const handleAddUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/persons/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          birthday,
          role,
          salary: parseFloat(salary),
        }),
      });

      if (response.ok) {
        console.log('Nuevo usuario creado con éxito');
        setName('');
        setBirthday('');
        setRole('');
        setSalary('')
        dispatch(getUsers()); // Recargar los usuarios después de la eliminación
      } else {
        console.error('Error al crear usuario:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };


  return (
    <div className="overflow-x-auto">

        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
            <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Fecha de Cumpleaños</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salario</th>
                <th className="px-4 py-2"></th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">

            {Array.isArray(allUsers) && allUsers.length > 0 ? (
              allUsers.map((user) => (
                <User
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  birthday={user.birthday}
                  role={user.role}
                  salary={user.salary}
                  onDelete={deleteUser}
                />
              ))
            ) : (
              <User
                key={allUsers.id}
                id={allUsers.id}
                name={allUsers.name}
                birthday={allUsers.birthday}
                role={allUsers.role}
                salary={allUsers.salary}
                onDelete={deleteUser}
              />
            )}

                {/* {allUsers?.map((user) =>(
                    <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        birthday={user.birthday}
                        role={user.role}
                        salary={user.salary}
                        onDelete={deleteUser}
                    />
                ))} */}

              <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <input type="text" className='border border-solid border-gray-500' name='name' value={name} onChange={handleInputChange}/>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <input type="date" className='border border-solid border-gray-500' name='birthday' value={birthday} onChange={handleInputChange}/>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <input type="text" className='border border-solid border-gray-500' name='role' value={role} onChange={handleInputChange}/>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">$
                  <input type="number" className='border border-solid border-gray-500' name='salary' value={salary} onChange={handleInputChange}/>
                  </td>

                  <td className="whitespace-nowrap px-4 py-2">
                  <button
                    onClick={handleAddUser}
                    className="rounded bg-green-500 text-white px-4 py-2 my-4 hover:bg-green-600"           onChange={handleInputChange}

                  >
                    Agregar Usuario
                  </button>
                  </td>
                  
                </tr>

            </tbody>
        </table>

        

    </div>
  )
}
