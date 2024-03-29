import logo from './logo.svg';
import './App.css'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';



function App() {
  return (
<BrowserRouter>
<div className="App">
      {/* <h1 id="page-title">My Awesome Blog</h1> */}
      <NavBar/>
      <div id="page-body">
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={ <AboutPage/>}/>
        <Route path="/articles" element={ <ArticleListPage/>} />
        <Route path="/articles/:articleId" element={  <ArticlePage/>}   /> 
        
            
        </Routes>
      </div>
    </div>
</BrowserRouter>
  );
}

export default App;
