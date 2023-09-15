
// https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d396f9741

export const categories = [
    {
      code: "",
      pic: "https://img.icons8.com/fluent/96/000000/news.png",
      name: "general",
    },
    {
      code: "",
      pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
      name: "business",
    },
    {
      code: "",
      pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
      name: "entertainment",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
      name: "health",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
      name: "science",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
      name: "sports",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
      name: "technology",
    },
  ];
  
  export const country = [
    {
      code: "in",
      name: "India",
    },
    {
      code: "us",
      name: "USA",
    },
    {
      code: "au",
      name: "Australia",
    },
    {
      code: "ru",
      name: "Russia",
    },
    {
      code: "fr",
      name: "France",
    },
    {
      code: "gb",
      name: "United Kingdom",
    },
  ];
  
  export const sources = [
    {
      id: "bbc-news",
      name: "BBC News",
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
    },
    {
      id: "cnn",
      name: "CNN",
      // pic: "https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png",
      pic:"data:image/png;base64,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"
    },
    {
      id: "fox-news",
      name: "Fox News",
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
    },
    {
      id: "google-news",
      name: "Google News",
      pic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
    },
  ];
  
  export const BASE_URL = "https://saurav.tech/NewsAPI/";
  
  export const getNewsAPI = (category, country = "in") => {
    return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
  };
  
  export const getSourceAPI = (source) => {
    return `${BASE_URL}/everything/${source}.json`;
  };