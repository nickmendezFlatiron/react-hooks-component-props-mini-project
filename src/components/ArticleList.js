import React from "react";
import Article from "./Article";

function ArticleList({posts}){
  const postsElement = posts.map(post => {
    const {title , date, preview,} = post;
    return (<Article key={post.id} title={title} date={date} preview={preview} />)
  })

  return (
    <main>
      {postsElement}
    </main>
  )
}

export default ArticleList;