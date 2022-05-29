import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CardContext from '../context/CardContext';
import User from './User';

export default function PostCard(props) {
	const { post } = props;
	const create = useContext(CardContext);

	const onClick = () => {
		create.id = post.id;
		create.content = post.content;
		create.created = post.created;
	}

  return (
		<Link to={`/posts/${post.id}`}>
			<li className='card' onClick={onClick}>
				<User />
				<p className='content'>{post.content}</p>
			</li>
	  </Link>
  );
}
