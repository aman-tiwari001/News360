import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types'
import SearchResults from './SearchResults';

const News = (props) => {
	
	// states using hook in React
	const [Articles, setArticles] = useState([])
	const [Loading, setLoading] = useState(true)
	const [Page, setPage] = useState(1)
	const [TotalResults, setTotalResults] = useState(0)
	const [NoOfPages, setNoOfPages] = useState(0)
	const [query, setQuery] = useState('');
	

	const updateNews = async () => {
    	props.setProgress(5);
    	setLoading(true);
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&pageSize=${props.pageSize}`;
		let data = await fetch(url);
    	props.setProgress(40);
		let parsedData = await data.json();
    	props.setProgress(70);
		setArticles(parsedData.articles);
		setTotalResults(parsedData.totalResults);
		setNoOfPages(Math.floor(TotalResults/props.pageSize));
		setLoading(false);
		props.setProgress(100);
	}
	 
	// works similiar to componentDidMount() - runs only one time since [empty arr] is passed
	useEffect(() => {
    updateNews();
    document.title = "News360 - "+props.category[0].toUpperCase()+props.category.slice(1)+" - A Daily News App";
	}, [])
	
	const fetchMoreData = async () => {
		setPage(Page + 1);
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${Page+1}&pageSize=${props.pageSize}`;
		let data = await fetch(url);
		let parsedData = await data.json();
		setArticles(Articles.concat(parsedData.articles));
		setTotalResults(parsedData.totalResults)
	  };

		return (
			<>
				<h2 className='text-center' style={{marginTop: "70px"}}>Top Headlines - {props.category[0].toUpperCase()+props.category.slice(1)}</h2>
				{/* {this.state.loading && <Spinner />} */}
				{/* <SearchResults /> */}
				<InfiniteScroll
					dataLength={Articles.length}
					next={fetchMoreData}
					hasMore={Articles.length < TotalResults}
					loader={<Spinner />}>
				<div className='container my-3'>
					<div className="row">
						{/* !(this.state.loading) &&  */}
						{Articles.map((element, index)=>{
							return(
								<div key={index} className="col-md-4">
									<NewsItem title={element.title?element.title.slice(0,100):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage?element.urlToImage:"https://reactjsexample.com/content/images/2021/11/Snipaste_2021-11-28_13-55-49.jpg"} newsUrl={element.url} date={new Date(element.publishedAt).toGMTString().slice(0,22)} source={element.source.name}/>
								</div>
								)
							})
						}
					</div>
				</div>
				</InfiniteScroll>
			</>
		)
}

News.defaultProps = {
	country : "in",
	pageSize : 9
}

News.propsTypes = {
	country : PropTypes.string,
	pageSize : PropTypes.number
}

export default News