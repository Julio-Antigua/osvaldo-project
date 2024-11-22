import { useEffect, useState } from "react"

import { Article } from "./Article"

import img1 from '../assets/images/chicas.jpg'
import img2 from '../assets/images/hitman.jpg'
import img3 from '../assets/images/subasta.jpeg'

//
const apiKey = 'a72213c8e55c47188ee952f90113dd8b'
//   

export const ArticlesContainer = () => {

  const [articles, setArticles] = useState([])

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  }, [])

  return (
    <section className="md:flex md:flex-wrap md:place-content-between md:gap-10 md:justify-center"> 

    {
      // articles.map(article => 
      //   <Article 
      //     key={article.publishedAt}
      //     img={article.urlToImage}
      //     number='01'
      //     title={article.title}
      //     text={article.description}
      //   />)
    }

      <Article
        img={img1}
        number='01'
        title='Live Girls'
        text='See the best of the best.'
      />
      <Article
        img={img2}
        number='02'
        title='Live Hitmen'
        text='Are you sure you want to enter?'
      />
      <Article
        img={img3}
        number='03'
        title='Auctions'
        text='Everything you can imagine, you will find.'
      />

    </section>
  )
}
