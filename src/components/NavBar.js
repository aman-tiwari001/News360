import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import News from './News';
import './activeMenu.css';

  const NavBar = () => {

    let apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const [Progress, setProgress] = useState(0)

    // document.getElementById("myButton").addEventListener("click", function(event) {
    //   event.preventDefault(); // Prevent the default form submission behavior
    //   // Your custom logic here, e.g., performing an AJAX request or other actions
    // });
    const searchResults = (event) => {
      event.preventDefault();
      let q = document.getElementById('search-box').value;
      console.log(q);
      return (<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country="in" category="" query={q}/>)
    }

    const handleMenuClick = (menu) => { // to highlight active menu
      Array.from(document.getElementsByClassName("active-menu")).forEach((element)=>{
        element.classList.remove("active-menu");
      })
      document.getElementById(menu).classList.add("active-menu");
    };

		return (
			<nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" id="nav" data-bs-theme="dark">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/"><strong>News360</strong> </Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item active-menu" id="Home" onClick={() => handleMenuClick('Home')}><Link className="nav-link" aria-current="page" to="/">Home </Link></li>
							<li className="nav-item" id="Business" onClick={() => handleMenuClick('Business')}><Link className="nav-link" to="/business">Business </Link></li>
							<li className="nav-item" id="Entertainment" onClick={() => handleMenuClick('Entertainment')}><Link className="nav-link" to="/entertainment">Entertainment </Link></li>
							{/* <li className="nav-item"><Link className="nav-link" to="/general">General </Link></li> */}
							<li className="nav-item" id="Health" onClick={() => handleMenuClick('Health')}><Link className="nav-link" to="/health">Health </Link></li>
							<li className="nav-item" id="Scinece" onClick={() => handleMenuClick('Scinece')}><Link className="nav-link" to="/science">Science </Link></li>
							<li className="nav-item" id="Sports" onClick={() => handleMenuClick('Sports')}><Link className="nav-link" to="/sports">Sports </Link></li>
							<li className="nav-item" id="Technology" onClick={() => handleMenuClick('Technology')}><Link className="nav-link" to="/technology">Technology </Link></li>
							<li className="nav-item" id="About" onClick={() => handleMenuClick('About')}><Link className="nav-link" to="/about">About </Link></li>
						</ul>
						
						<form className="d-flex" role="search">
							<input id="search-box" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
							<button onClick={searchResults} className="btn btn-primary" type="submit">Search</button>
						</form>
					</div>
				</div>
			</nav>
		)
}

export default NavBar;