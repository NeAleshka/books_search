import React, { FC } from 'react';
import './Header.css';
import SearchForm from '../SearchForm/SearchForm';

interface HeaderFormProps {
	onSearch: (args: dataTypes) => void;
}

interface dataTypes {
	search: string;
	sorting: string;
	category: string;
}

const Header: FC<HeaderFormProps> = ({ onSearch }) => {
	return (
		<header className='header'>
			<SearchForm onSearch={onSearch} />
		</header>
	);
}

export default Header;
