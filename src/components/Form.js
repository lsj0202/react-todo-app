import React from 'react'

function Form({ handleSubmit, value, setValue }) {

	const handleChange = (e) => {
		e.preventDefault();
		
    console.log('e',e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{display: 'flex'}}>
        <input type="text" name="value" style={{ flex:'10', padding: '8px'}} placeholder="해야 할 일을 입력하세요." value={value} onChange={handleChange}/>
        <input type="submit" value="입력" className='btn' style={{flex:'1'}}></input>
      </form>
    </div>
  );
}

export default Form;