import { FormUser } from '../components/FormUser';
import { Link } from 'react-router-dom';

export const UserUpdate = () => {




  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <Link 
            to='/'
            className="  bg-indigo-600 px-4 py-2  font-medium text-white hover:bg-indigo-700"
            >
            Back
        </Link>

            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Actuliza  Usuario!! 🎆</h1>
            </div>

            <FormUser/>
    
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
                alt="Welcome"
                src="https://www.faronics.com/assets/MC-October-1-01.png"
                className="absolute inset-0 h-full w-full object-cover"
            />
        </div>
    </section>
  )
}
