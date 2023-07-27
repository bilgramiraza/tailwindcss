import PropTypes from 'prop-types';

const FormInput = ({ type, id, label, placeholder, value, onChange, required, isValid }) => {
  return (
    <div className='block items-center'>
      <label htmlFor={id} className="block text-sm font-medium items-start text-gray-300 ">
        {label}
      </label>
      <div className="flex items-center mt-1">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
          @
        </span>
        <input
          type={type}
          id={id}
          className={`block w-full text-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border text-black ${
            isValid ? 'border-gray-300' : 'border-red-500'
          } rounded-r-md`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
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
	isValid:PropTypes.bool.isRequired,
};
