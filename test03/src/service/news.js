import { articles_url, apikey } from '../config/rest_consfig';

export async function getArticles(section='home') {

    try {
        let articles = await fetch(`${articles_url}articlesearch.json?q=react&api-key=${apikey}`)

        
        let result = await articles.json();
        articles = null;
        // console.log(result.response.docs);

        return result.response.docs;
    }
    catch(error) {
        throw error;
    }
}

export async function searchArticles(query) {

    try {
        let articles = await fetch(`${articles_url}articlesearch.json?q=${query}&api-key=${apikey}`)

        
        let result = await articles.json();
        articles = null;
        // console.log(result.response.docs);

        return result.response.docs;
    }
    catch(error) {
        throw error;
    }
}