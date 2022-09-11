import articles from './articles.json';

export const handler = async (event) => {
    return {
        articles
    }
}