import avatar from '../img/avatar.jpg';

export default function User() {
  return (
    <header>
      <div className='img'>
        <img src={avatar} alt='person'></img>
      </div>
      <h3 className='user'>Ivan Ivanov</h3>
    </header>
  );
}
