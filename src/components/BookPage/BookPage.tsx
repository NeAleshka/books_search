import React, { FC } from 'react';
import './BookPage.css';
import FullBook from '../FullBook/FullBook';

interface BookPageProps {
	fullbook: []
}

const BookPage: FC<BookPageProps> = ({ fullbook }) => {
	return (
		<section className="bookpage">
			<ul className='bookpage__list'>
				{fullbook && fullbook.map((item: any) =>
					<FullBook item={item} key={item.id} />
				)}
			</ul>
		</section>
	);
};

export default BookPage;
