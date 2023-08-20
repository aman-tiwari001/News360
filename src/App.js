import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';

const App = () => {

  let apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [Progress, setProgress] = useState(0);

    return (
      <>
      <Router>
      <NavBar />
      <LoadingBar
        color='#2c73e7'
        progress={Progress}
        height={3}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={9} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={9} country="in" category="entertainment"/>}></Route>
          {/* <Route exact path="/general" key="general" element={<News setProgress={this.setProgress}pageSize={10} country="in" category="general"/>}></Route> */}
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={9} country="in" category="health"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={9} country="in" category="sports"/>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={9} country="in" category="science"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={9} country="in" category="technology"/>}></Route>
          <Route exact path="/about" element={<About />}></Route>
          {/* <Route exact path="/searchResults" element={<SearchResults setProgress={setProgress} />}></Route> */}
        </Routes>
        <Footer />
      </Router>
      </>
    )
}

export default App;