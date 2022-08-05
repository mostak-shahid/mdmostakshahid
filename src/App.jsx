import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Blog from "./layouts/Blog/Blog";
import BlogSingle from "./layouts/BlogSingle/BlogSingle";
import Home from "./layouts/Home/Home";
import NotFound from "./layouts/NotFound/NotFound";
import Search from "./layouts/Search/Search";
import Single from "./layouts/Single/Single";
function App() {
  const pages = ["icon-box", "article-box"];
  return (
    <div className="App">
      <Header />
      {/* <Router basename="/getweb-react"> */}
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogSingle />} />
        <Route path="/search">
          <Route index element={<Search />} />
          <Route path=":keyword" element={<Search />} />
        </Route>
        <Route path="/about" element={<Single />} />
        {
        pages.map((item, index)=>(
          <Route path={["/", item].join('')} element={<Single slug={item} />} key={index} />
        ))
        }
        {/* <Route path="/icon-box" element={<Single slug="icon-box" />} />
        <Route path="/article-box" element={<Single slug="article-box" />} /> */}
        {/*pages.map((item, index) => (
          <Route
            path={item.post_name}
            element={<Single id={item.ID} />}
            key={index}
          />
        ))*/}

        <Route path="*" element={<NotFound />} />
      </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
