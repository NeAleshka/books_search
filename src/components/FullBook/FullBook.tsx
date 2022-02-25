import React, { FC } from 'react';
import './FullBook.css';

interface FullBookProps {
	item: any;
}

const FullBook: FC<FullBookProps> = ({ item }) => {

	interface itemTypes {
		title: string;
		authors: any[];
		categories: any[];
		imageLinks: any;
		description: string;
	}

	const { 
		title, 
		authors, 
		categories, 
		imageLinks, 
		description 
	}: itemTypes = item.volumeInfo;

	const [isCategory, setIsCategory] = React.useState<string>('');
	const [isAuthor, setIsAuthor] = React.useState<string>('');

	React.useEffect(() => {
		if (categories) {
			const category: string = categories.join(' / ');
			setIsCategory(category);
		}
		if (authors) {
			const author: string = authors.join(', ');
			setIsAuthor(author);
		}
	}, [categories, authors]);

	const imageSmall: string = imageLinks.small;
	const imageLarge: string = imageLinks.large;

	return (
		<li className='fullbook'>
			<div className='fullbook__container-img'>
				<img
					className='fullbook__img'
					src={imageSmall ? imageSmall : imageLarge}
					alt={title}
				></img>
			</div>

			<div className='fullbook__container'>
				{isCategory && <p className='fullbook__category'>{isCategory}</p>}
				<h3 className='fullbook__title'>{title}</h3>
				{isAuthor && <p className='fullbook__author'>{isAuthor}</p>}
				<p className='fullbook__description'>{description}</p>
			</div>
		</li>
	);
};

export default FullBook;
