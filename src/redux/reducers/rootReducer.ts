import { combineReducers } from 'redux';
import { cardsReducer } from './cardsReducer';
import { searchReducer } from './searchReducer';
import { fullbookReducer } from './fullbookReducer';

export const rootReducer = combineReducers({
	cards: cardsReducer,
	search: searchReducer,
	fullbook: fullbookReducer,
});
