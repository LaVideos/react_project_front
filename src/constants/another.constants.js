import {apiKey} from "./apiKey";

const language = 'en-US';
const with_genres = 'with_genres';

const params = {
    api_key: `${apiKey}`,
    language: `${language}`,
}

export {
    language,
    with_genres,
    params
}