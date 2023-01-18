import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummeryCard from "../../Shared/NewsSummeryCard/NewsSummeryCard";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h1>this is category has news: {categoryNews.length}</h1>
      {categoryNews.map((news) => (
        <NewsSummeryCard key={categoryNews._id} news={news}></NewsSummeryCard>
      ))}
    </div>
  );
};

export default Category;
