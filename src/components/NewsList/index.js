import React, { useEffect, useState } from "react";
import NewsItem from "../NewsItem";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [isLoaging, setIsLoaging] = useState(false);

  useEffect(() => {
    getNewsList();
  }, []);

  const getNewsList = async () => {
    try {
      setIsLoaging(true);
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=521778060c2b423b83cfc77ba9c4bf45"
      );
      const data = await response.json();
      console.log(data);
      setNews(data.articles);
      setIsLoaging(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {!isLoaging &&
        news.map((news, index) => <NewsItem key={`news-${index}`} {...news} />)}
      {isLoaging && <p>로딩중입니다</p>}
    </div>
  );
};

export default NewsList;
