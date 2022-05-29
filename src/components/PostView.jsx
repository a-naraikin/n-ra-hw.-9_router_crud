import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import CardContext from "../context/CardContext";
import User from './User';

export default function PostView() {
  const create = useContext(CardContext);
  const [clickDel, setClickDel] = useState(false);
  const [clickEdit, setClickEdit] = useState(false);

  const onEdit = () => {
    setClickEdit(true);
  };

  const onDelete = () => {
    try {
      fetch(`${process.env.REACT_APP_URL}/posts/${create.id}`, {method: 'DELETE'})
        .then((response) => response)
        .then((result) => setClickDel(true))
        .catch((err) => console.log(err))
    } catch (err) {
      console.log(err);
    }
  };
        
  return (
    <div className='list'>
      <div className='card'>
        <User />
        <p className='content'>{create.content}</p>
        <div className='control'>
          <button className='btn' onClick={onEdit}>Изменить</button>
          <button className='btn' onClick={onDelete}>Удалить</button>
          {clickDel ? <Redirect to='/' /> : null}
          {clickEdit ? <Redirect to='/posts/edit' /> : null}
        </div>
      </div>
    </div>
  );
}
