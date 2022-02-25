import React, { FC } from 'react';
import './Books.css';
import BookCard from '../BookCard/BookCard';
import Preloader from '../Preloader/Preloader';

interface BooksProps {
	books: any[];
	onClickMore: () => void;
	isLoading: boolean;
	isLoadMore: boolean;
	error: boolean;
}

const Books: FC<BooksProps> = ({ books, onClickMore, isLoading, isLoadMore, error }) => {

	function handleMoreBooks(): void {
		onClickMore();
	}

	return (
		<section className='books'>
			{error ? <p className="books__error">Произошла ошибка. Попробуйте еще раз или повторите поиск позже.</p> : ''}
			{isLoading
				? <Preloader />
				: <ul className='books-items'>
					{books && books.map((item: any) => <BookCard item={item} key={item.id} />)}
				</ul>}

			{isLoadMore && books.length && (
				<button
					type='button'
					className='books__btn'
					onClick={handleMoreBooks}
					disabled={!isLoadMore}
				>
					more
				</button>)}
		</section>
	);
};

export default Books;
