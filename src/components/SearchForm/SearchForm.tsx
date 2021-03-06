import React, {FC, useState} from 'react';
import './SearchForm.css';
import { useForm } from 'react-hook-form';
import axios from "axios";

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
	const [totalGetBooks,setTotalGetBooks]=useState<number|null>(null)

	const onSubmit = (data: any): void =>  {
		axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${data.search}`).then(res=>{
			setTotalGetBooks(res.data.totalItems)
		})
		onSearch(data);
		reset();
	};

	return (
		<form className='searchform' onSubmit={handleSubmit(onSubmit)} noValidate>
			<fieldset className='searchform__fieldset'>
				<input
	className='searchform__input'
	placeholder='Enter Book name'
	type='text'
					{...register('search', {required: true})}
	/>

				<button className='searchform__btn' type='submit' disabled={!isValid}>
					Search
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
			{totalGetBooks && <div style={{textAlign:'center',color:'white',fontSize:"20px"}}>Total found Books:{totalGetBooks}</div>}
		</form>

	);
};

export default SearchForm;
