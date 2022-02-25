import { BASE_URL, GAPI_KEY } from '../utils/config';
export async function fetchBooks(searchConfig: any) {
    const {
        searchWord = searchConfig.searchConfig.search,
        startIndex,
        sorting,
        category,
    } = searchConfig.searchConfig;

    const response = await fetch(`${BASE_URL}=${searchWord}&subject:${category}&orderBy=${sorting}&startIndex=${startIndex}&key=${GAPI_KEY}`);
    return await response.json();
}

export async function getFullBook(data: any) {
    const { selfLink } = data;

    const response = await fetch(selfLink);
    return await response.json();
}