import { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import newsData from "../../assets/json/conservation.json";
import "./Conservation.css";

function Conservation() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData);
  }, []);

  return (
    <>
      <div className="conservation-body">
        <Header />
        <div className="conservation-list">
          <div className="conservation-heading">
            <h1>Conservation Efforts</h1>
            <p>
              Learn more about recent developments in wildlife conservation and
              restoration efforts.
            </p>
            <div className="rss">
              <a href="/rss/conservation.xml">
                Also available in RSS!
                <img src="../../img/rss.png" alt="RSS Icon"></img>
              </a>
            </div>
          </div>
          <div className="news-section">
            {news.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="news-card"
              >
                <img src={article.image} alt={article.title} />
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Conservation;
