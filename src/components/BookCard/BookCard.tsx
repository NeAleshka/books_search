import React, { FC } from 'react';
import './BookCard.css';
import { getFullBook } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { DEFAULTIMAGE } from '../../utils/config';

interface BookCardProps {
	item: any;
}

const BookCard: FC<BookCardProps> = ({ item }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { categories, title, authors } = item.volumeInfo;

	const { thumbnail } = item.volumeInfo.imageLinks || DEFAULTIMAGE;
	const [isCategory, setIsCategory] = React.useState<string>('');
	const [isAuthor, setIsAuthor] = React.useState<string>('');

	React.useEffect(() => {
		if (categories) {
			const category: string = categories.join(', ');
			setIsCategory(category);
		}
		if (authors) {
			const author: string = authors.join(', ');
			setIsAuthor(author);
		}
	}, [categories, authors]);

	function handleClickBook(): void {
		dispatch(getFullBook(item.selfLink))
		history.push('/book');
	}

	return (
		<li className='bookscard' onClick={handleClickBook}>
			<img
				className='bookscard__img'
				src={
					thumbnail
						? thumbnail
						: DEFAULTIMAGE
				}
				alt={title}
			></img>
			<div className='bookscard__footer'>
				{isCategory && (
					<p className='bookscard__text'>Категория: {isCategory}</p>
				)}
				<p className='bookscard__text'>Название: {title}</p>
				{isAuthor && <p className='bookscard__text'>Автор: {isAuthor}</p>}
			</div>
		</li>
	);
};

export default BookCard;
