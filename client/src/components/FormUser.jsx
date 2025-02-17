import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const FormUser = () => {
  const { id } = useParams();
  const [userState, setUserState] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/persons/${id}`);
        if (response.ok) {
          const userData = await response.json();
          setUserState(userData);
        } else {
          console.error('Error al obtener datos del usuario:', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { name, birthday, role, salary } = userState;


  // Actualizar Usuario
  const handleUpdateUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/persons/${id}`, {
        method: 'PUT', // 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          birthday: birthday,
          role: role,
          salary: salary
        }),
      });

      if (response.ok) {
        console.log('Usuario actualizado con éxito.');
        alert('Usuario Actulizado')
      } else {
        console.error('Error al actualizar usuario:', response.statusText);
      }
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
    }
  };


  return (
    <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <div className="relative">
          <input
            name='name'
            type="text"
            value={name || ''}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="New Name"
          />
        </div>
      </div>

      <div>
        <div className="relative">
          <input
            name='birthday'
            type="date"
            value={birthday || ''}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="New Birthday"
          />
        </div>
      </div>

      <div>
        <div className="relative">
          <input
            name='role'
            type="text"
            value={role || ''}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="New Role"
          />
        </div>
      </div>

      <div>
        <div className="relative">
          <input
            name='salary'
            type="number"
            value={salary || ''}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="New Salary"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
      </div>
      <button onClick={handleUpdateUser} className="rounded bg-green-500 text-white px-4 py-2 my-4 hover:bg-green-600">
        Actualizar Usuario
      </button>
    </form>
  );
};
