import './App.css'
import { useState } from 'react';
import {HiMiniPencil} from 'react-icons/hi2'
import FormInput from './components/InputGroup';

function App() {
  const [username, setUsername] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      setIsUsernameValid(false);
      return;
    }
    setIsUsernameValid(true);
    // Process the form submission here (e.g., API call, etc.)
  };


  return (<>
    <h1 className='text-3xl font-bold underline'>Vite + React</h1>
    <HiMiniPencil className=''/>
    <form className="grid grid-cols-1 md:grid-cols-4 gap-4 " noValidate onSubmit={handleSubmit}>
      <div className="col-span-4 md:col-span-1">
        <FormInput
          type="email"
          id="validationCustomUsername"
          label="Username"
          placeholder="John Doe"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          isValid={isUsernameValid}
        />
      </div>
      <div className="col-span-4">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit form
        </button>
      </div>
    </form>
  </>);
}

export default App


/*
<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
*/


