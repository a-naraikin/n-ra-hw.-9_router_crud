import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import PostCard from './PostCard';

export default function Posts() {
  const { data, error } = useFetch(`${process.env.REACT_APP_URL}/posts`);

  return (
    <ul className='list'>
			<li className='card card_btn'>
				<Link to='/posts/new' className='btn'>Создать пост</Link>
			</li>
				{error && <li className='error'>Ошибка!</li>}
				{data && data.map((post) => <PostCard key={post.id} post={post} />)}  
    </ul> 
  );
}
