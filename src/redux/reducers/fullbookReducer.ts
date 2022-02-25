import { WRITE_FULLBOOK } from '../types';

interface BookState {
	fullbook: any;
	showFullBook: boolean;
}

interface BookAction {
	type: string;
	payload?: any;
}



const initialState = {
	fullbook: [],
	showFullBook: false,
};

export const fullbookReducer = (state = initialState, action: BookAction): BookState => {
	switch (action.type) {
		case WRITE_FULLBOOK:
			const arrayFullBook = [];
			arrayFullBook.push(action.payload);
			return {
				...state,
				fullbook: arrayFullBook,
				showFullBook: true,
			};

		default:
			return state;
	}
};
