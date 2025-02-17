
export function getUsers(){
    return async function (dispatch){
        try {
            const response = await fetch('http://localhost:3000/api/v1/persons/');
            const api = await response.json();
            dispatch({
                type: "GET_USERS",
                payload: api.data
            })
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    }
}

export function getUserByName(name){
    return async function (dispatch){
        try {
            const response = await fetch(`http://localhost:3000/api/v1/persons/?name=${name}`);
            const api = await response.json();
            if (api.name) {
                return dispatch({
                    type: "GET_USER_NAME",
                    payload: api
                }) 
            }
            dispatch({
                type: "GET_USER_NAME",
                payload: api.data
            })
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    }
}




// export function deleteUser(id){
//     return async function(dispatch){
//         try {
//             const response = await fetch(`http://localhost:3000/api/v1/persons/${id}`, {
//                 method: 'DELETE',
//                 });
//             dispatch({
//                 type: "DELETE_USER",
//                 payload: response.id
//             });
//         } catch (error) {
//             console.error('Error al eliminar usuario:');
//         }
//     }
// }


// export function createUser(){
//     return async function(dispatch){
//         try {
//             const response = await fetch('http://localhost:3000/api/v1/persons/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name,
//                     birthday,
//                     role,
//                     salary: parseFloat(salary),
//                 }),
//             });
//         } catch (error) {
            
//         }
//     }
// }