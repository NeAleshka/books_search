import React from 'react';
import './App.css';

/* REDUX */
import {
	requestSearch,
	addMoreBooks,
	addSearchConfig,
	updateSearchConfig,
} from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

/* КОМПОНЕНТЫ */
import Header from '../Header/Header';
import Books from '../Books/Books';
import BookPage from '../BookPage/BookPage';

/* ROUTES */
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';

function App() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [isBooksArray, setIsBooksArray] = React.useState<any[]>([]);

	interface RootState {
		search: any;
		cards: any;
		fullbook: any;
	}

	const { searchWord, sorting, category } = useSelector(
		(state: RootState) => state.search);

	const index = useSelector((state: RootState) => state.search.startIndex);

	const books = useSelector((state: RootState) => state.cards.fetchedCards.items);


	const { isLoading, isLoadMore, error } = useSelector((state: RootState) => state.cards);

	const { fullbook, showFullBook } = useSelector((state: RootState) => state.fullbook);

	/* Кнопка MORE добавляет больше книг */
	function handleClickMoreBooks(): void {


		if (books.length) {
			const startIndex: number = index + 10;

			interface searchConfigTypes {
				search: string;
				startIndex: number;
				sorting: string;
				category: string;
			}

			const searchConfig: searchConfigTypes = {
				search: searchWord,
				startIndex: startIndex,
				sorting: sorting,
				category: category,
			};
			dispatch(addMoreBooks(searchConfig));
			dispatch(updateSearchConfig(searchConfig));
		}
	}

	/* Поиск книг */
	interface dataTypes {
		search: string;
		sorting: string;
		category: string;
	}

	function handleSearchSubmit(searchString: dataTypes) {
		const searchWord: string = searchString.search;
		const sorting: string = searchString.sorting;
		const category: string = searchString.category;
		const startIndex: number = 0;

		interface searchConfigTypes {
			searchWord: string;
			startIndex: number;
			sorting: string;
			category: string;
		}
		const searchConfig: searchConfigTypes = { searchWord, startIndex, sorting, category };

		dispatch(requestSearch(searchConfig));
		dispatch(addSearchConfig(searchConfig));
		setIsBooksArray([]);
		history.push('/');
	}

	/* Вывод только конкретной категории или всех сразу */
	React.useEffect(() => {
		if (books) {
			const itemExist: Array<any[]> = books.filter((item: any) => {
				if (item.volumeInfo.categories && category) {
					return typeof item === 'object';
				}
				return null;
			});

			const array: Array<any[]> = itemExist.filter((item: any) => {
				function upFirst(str: any) {
					if (!str) return str;

					return str[0].toUpperCase() + str.slice(1);
				}

				return item.volumeInfo.categories.includes(upFirst(category));
			});

			if (category !== '') {
				setIsBooksArray(array);
			} else setIsBooksArray(books);
		}
	}, [books, category]);

	return (
		<div className='page'>
			<div className='page__container'>
				<Header onSearch={handleSearchSubmit} />
				<Switch>
					<Route exact path='/'>
						<Books
							books={isBooksArray}
							onClickMore={handleClickMoreBooks}
							isLoading={isLoading}
							isLoadMore={isLoadMore}
							error={error}
						/>
					</Route>
					<Route exact path='/book'>
						<BookPage fullbook={fullbook} />
					</Route>
				</Switch>
				<Route path='/'>
					{!showFullBook ? <Redirect to='/' /> : <Redirect to='/book' />}
				</Route>
			</div>
		</div>
	);
}

export default App;
