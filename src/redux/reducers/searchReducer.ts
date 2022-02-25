import { ADD_SEARCCONFIG, SEARCCONFIG_UPDATE } from '../types';

interface SearchState {
	searchWord: string,
	startIndex: number,
	sorting: string,
	category: string,
}

interface SearchAction {
	type: string;
	payload?: any;
}


const initialState = {
	searchWord: '',
	startIndex: 0,
	sorting: '',
	category: '',
};

export const searchReducer = (state = initialState, action: SearchAction): SearchState => {
	switch (action.type) {
		case ADD_SEARCCONFIG:
			return {
				...state,
				searchWord: action.payload.searchWord,
				startIndex: action.payload.startIndex,
				sorting: action.payload.sorting,
				category: action.payload.category,
			};
		case SEARCCONFIG_UPDATE:
			debugger
			return {
				...state,
				searchWord: action.payload.search,
				startIndex: (state.startIndex += 30),
				sorting: action.payload.sorting,
				category: action.payload.category,
			};

		default:
			return state;
	}
};
