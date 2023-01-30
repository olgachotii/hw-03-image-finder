/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const KEY = "24287584-f260c6215a8f38269d114f00b";

export const fetchArticlesWithQuery = async (query, page = 1) => {
  const response =
    axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12
          `);

  return (await response).data.hits;
};

export default {
  fetchArticlesWithQuery,
};
