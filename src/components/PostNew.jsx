import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';

export default function PostNew() {
  const [value, setValue] = useState('');
  const [click, setClick] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) return;

    const body = {id: 0, content: value};
    
    try {
      fetch(`${process.env.REACT_APP_URL}/posts`, { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
        .then(response => response)
        .then(result => {
          setValue('');
          setClick(true);
        })
        .catch(err => console.log(err));
    } catch (err) {
      console.log(err);
    }
    
  };

  return (
    <div className='postNew'>
      <div className='postNew_wrap'>
        <Link to="/" className='btn_close'>&#10006;</Link>
        <form className='form' onSubmit={onSubmit}>
          <textarea className='textarea' value={value} onChange={onChange}></textarea>
          <button type='submit' className='btn'>Опубликовать
            {click ? <Redirect to='/' /> : null}
          </button>
        </form>
      </div> 
    </div>
  );
}
