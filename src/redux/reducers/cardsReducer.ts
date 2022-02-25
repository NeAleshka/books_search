import { FETCH_BOOKS, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR, ADD_MOREBOOKS } from '../types';

interface CardState {
	fetchedCards: any;
	isLoadMore: boolean;
	isLoading: boolean,
	error: boolean
}

interface CardsAction {
	type: string;
	payload?: any;
}

const initialState: CardState = {
	fetchedCards: [],
	isLoadMore: true,
	isLoading: false,
	error: false
};

export const cardsReducer = (state = initialState, action: CardsAction): CardState => {
	switch (action.type) {
		case FETCH_BOOKS:
			return {
				...state,
				fetchedCards: [],
				isLoadMore: true,
				isLoading: true,
				error: false
			};
		case FETCH_BOOKS_SUCCESS:
			if (action.payload.items.length < 10) {
				state.isLoadMore = false;
			}

			const array = [
				...new Map(action.payload.items.map((item: any) => [item.id, item])).values(),
			];

			return {
				...state,
				fetchedCards: {
					items: array,
					kind: action.payload.kind,
					totalItems: action.payload.totalItems,
				},
				isLoading: false,
				error: false
			};


		case FETCH_BOOKS_ERROR:
			return {
				...state,
				fetchedCards: [],
				isLoadMore: true,
				isLoading: false,
				error: true
			};

		case ADD_MOREBOOKS:
			if (action.payload.items.length < 10) {
				state.isLoadMore = false;
			}

			const concatArray = state.fetchedCards.items.concat(action.payload.items);
			const newArray = [
				...new Map(concatArray.map((item: any) => [item.id, item])).values(),
			];

			return {
				...state,
				fetchedCards: {
					items: newArray,
					kind: action.payload.kind,
					totalItems: action.payload.totalItems,
				},
			};

		default:
			return state;
	}
};
