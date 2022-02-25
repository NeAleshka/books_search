import React, { FC } from 'react';
import './SearchForm.css';
import { useForm } from 'react-hook-form';

interface SearchFormProps {
	onSearch: (args: dataTypes) => void;
}

interface dataTypes {
	search: string;
	sorting: string;
	category: string;
}

const SearchForm: FC<SearchFormProps> = ({ onSearch }) => {
	const form = useForm({ mode: 'onChange' });
	const { reset, register, handleSubmit } = form;
	const { isValid } = form.formState;

	
	const onSubmit = (data: any): void =>  {
		onSearch(data);
		reset();
	};

	return (
		<form className='searchform' onSubmit={handleSubmit(onSubmit)} noValidate>
			<fieldset className='searchform__fieldset'>
				<input
	className='searchform__input'
	placeholder='Название книги'
	type='text'
					{...register('search', {required: true})}
	/>

				<button className='searchform__btn' type='submit' disabled={!isValid}>
					Поиск
				</button>
			</fieldset>
			<fieldset className='searchform__fieldset searchform__fieldset_select-resize'>
				<label className='searchform__label-select' htmlFor='sorting'>
					Sorting by:{' '}
				</label>
				<select
					className='searchform__select'
					id='sorting'
					{...register('sorting')}
				>
					<option value='relevance'>relevance</option>
					<option value='newest'>newest</option>
				</select>
				<label className='searchform__label-select' htmlFor='category'>
					Category:{' '}
				</label>
				<select
					className='searchform__select'
					id='category'
					{...register('category')}
				>
					<option value=''>all</option>
					<option value='art'>art</option>
					<option value='biography'>biography</option>
					<option value='computers'>computers</option>
					<option value='history'>history</option>
					<option value='medical'>medical</option>
					<option value='poetry'>poetry</option>
				</select>
			</fieldset>
		</form>
	);
};

export default SearchForm;
