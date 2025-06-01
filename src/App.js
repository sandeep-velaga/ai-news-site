import React, { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/ai-news-site/data/ai_news.json')
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  const filteredNews = news
    .filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 3);

  return (
    <div className="App">
      <header>
        <h1>🧠 Top AI News</h1>
        <p>
          Curated by Sandeep |{' '}
          <a
            href="https://www.linkedin.com/in/sandeep-velaga-04080219b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} style={{ verticalAlign: 'middle' }} /> LinkedIn
          </a>
        </p>
        <div className="controls">
          <input
            type="text"
            placeholder="Search news..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <div className="news-list">
        {filteredNews.map((item, index) => (
          <div key={index} className="news-card">
            <h2>{item.title}</h2>
            <p><strong>Category:</strong> {item.category}</p>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">Read More</a>
            <p className="date">{item.date}</p>
          </div>
        ))}
      </div>

      <footer>
        <p>
          © 2025 AI News by Sandeep |{' '}
          <a
            href="https://www.linkedin.com/in/sandeep-velaga-04080219b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} style={{ verticalAlign: 'middle' }} /> LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;