import React from 'react'

function Form({ handleSubmit, value, setValue }) {

	const handleChange = (e) => {
		e.preventDefault();
		
    console.log('e',e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex pt-2">
        <input type="text" name="value" placeholder="해야 할 일을 입력하세요." value={value} onChange={handleChange} className='w-full px-3 py-2 mr-4 text-gray-500 border rounded'/>
        <input type="submit" value="입력" className='p-2 text-blue-300 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200'></input>
      </form>
    </div>
  );
}

export default Form;