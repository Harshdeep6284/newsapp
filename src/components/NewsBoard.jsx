import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = "6851c7391348453c9237252ee377abcb"; 
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles || []);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, [category]); 

  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-4">
        News - Top {category.charAt(0).toUpperCase() + category.slice(1)} Headlines
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
