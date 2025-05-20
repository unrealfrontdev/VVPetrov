import React, { useState } from 'react';
import Timer from './Timer';
import Slider from './Slider';
import Article from './Article';
import './App.css';

const NewsApp = () => {
  const [articles] = useState([
    { title: 'Статья 1', content: 'Содержание статьи 1', image: 'https://avatars.mds.yandex.net/i?id=796f9b054564ad95530fb35a706d591b_l-9097048-images-thumbs&n=13' },
    { title: 'Статья 2', content: 'Содержание статьи 2', image: 'https://frankfurt.apollo.olxcdn.com/v1/files/k63qclynhi5z1-UZ/image;s=1000x700' },
  ]);

  return (
    <div className="news-app">
      
      <Timer />
      <Slider />
      {articles.map((article, index) => (
        <Article key={index} title={article.title} content={article.content} image={article.image} />
      ))}
    </div>
  );
};

export default NewsApp;