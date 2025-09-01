import {useEffect} from "react"
import {useState} from "react"
import NewsItem from "./NewsItem"
const NewsBoard = ({category}) => {
    const[articles,setArticles]=useState([]);

    useEffect(()=>{
        let url='https://newsapi.org/v2/everything?q=tesla&from=2025-08-01&sortBy=publishedAt&apiKey=6851c7391348453c9237252ee377abcb';
        fetch(url).then(respone=> respone.json()).then(data=> setArticles(data.articles));
    
    },[])
  return (
    <div>
      <h2 className="text-center">News -Top General Headlines</h2>
      {articles.map((news,index)=>{
        return<NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
