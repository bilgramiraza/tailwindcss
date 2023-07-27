import {HiMiniPencil} from 'react-icons/hi2'
import PropTypes from 'prop-types';
import { useState } from 'react';

const FormInput = ({ type, id, label, placeholder, value, onChange, required}) => {
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    onChange(e);
    setIsValid(e.target.validity.valid);
  };
  return (
    <div className='block items-start'>
      <label htmlFor={id} className="block text-start items-start text-sm font-medium text-gray-300 ">
        {label}
      </label>
      <div className="flex items-center mt-1">
        <span className="inline-flex items-center p-2.5 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
        <HiMiniPencil />
        </span>
        <input
          type={type}
          id={id}
          className={`block w-full px-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border text-black ${
            isValid ? 'border-gray-300' : 'border-red-500'
          } rounded-r-md`}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          required={required}
        />
      </div>
      {!isValid && <div className="text-red-600 text-sm mt-1">Please choose a {label.toLowerCase()}.</div>}
    </div>
  );
};

export default FormInput;

FormInput.propTypes = {
  type:PropTypes.string.isRequired,
	id:PropTypes.string.isRequired,
	label:PropTypes.string.isRequired,
	placeholder:PropTypes.string.isRequired,
	value:PropTypes.string.isRequired,
	onChange:PropTypes.string.isRequired,
	required:PropTypes.string.isRequired,
};
