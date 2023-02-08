import React from 'react'
import "../styles/article-card.scss"
import { Link } from "react-router-dom";

const ArticleCard = ({title, prefice, photo}) => {
  return (
    <div className="article__card">
        <div className="article__card__header">
            <img src={process.env.PUBLIC_URL + "environment.jpg"} alt="article" className="article__card__photo" />
            <div className="article__card__button">
                <img src={process.env.PUBLIC_URL + 'right-arrow5.png'} alt="header arrow" className="article__card__arrow"/>
            </div>
        </div>
        <div className="article__card__content">
            <p className="article__card__title">{title}</p>
            <p className="article__card__prefice">{prefice}</p>
            <div className="article__card__link">
                <Link to="/blog-post"><p>Read post</p></Link>
                <Link to="/blog-post"><img src={process.env.PUBLIC_URL + "right-arrow5.png"} alt="arrow" /></Link>
            </div>
        </div>
    </div>    
  )
}

export default ArticleCard