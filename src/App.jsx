import './App.css'
import {HiMiniPencil} from 'react-icons/hi2'

function App() {
  return (<>
    <h1 className='text-3xl font-bold underline'>Vite + React</h1>
    <label htmlFor='test' className='block text-sm font-medium leading-6 text-gray-900'>Test</label>
    <input className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          id='test' 
          type='text' 
          name='test' 
          disabled=''
        />
    <input type="text" placeholder="John Doe" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-red-400 bg-white px-5 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-red-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300" />
    <HiMiniPencil className=''/>
  </>);
}

export default App
