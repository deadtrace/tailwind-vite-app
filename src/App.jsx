import React, { Fragment } from "react";

import articles from "./data/articles";
import ArticleCard from "./components/ArticleCard";

const App = () => {
  console.log(articles);
  return (
    <Fragment>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </Fragment>
  );
};

export default App;
