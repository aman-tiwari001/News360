import React from 'react'

const NewsItem = (props) => {

    let { title, description, imgUrl, newsUrl, date, source } = props;
    return (
      <>
      {/* style={{height : "25vh", width: "100%"}} */}
        <div className="card my-3 mx-2">
          <img src={imgUrl} className="card-img-top" alt="NEWS-IMG" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='text-primary'><b>Published on</b>: {date} <br/>
            <b>Source</b>: {source}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sn btn-primary" rel="noreferrer">Read More</a>
          </div>
        </div>
      </>
    )
}

export default NewsItem 