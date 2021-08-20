import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsContent from './components/NewsContent';
import NavDrawer from './components/NavDrawer';
import apiToken from './data/secrets';

function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [topic, setTopic] = useState("breaking-news")

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://gnews.io/api/v4/top-headlines?&token=${apiToken}&lang=en&topic=${topic}`
      );
      // console.log(news.data);
      setNewsArray(news.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [topic]);

  return (
    <div className="App">
      <NavDrawer setTopic={setTopic} />
      <NewsContent newsArray={newsArray} />
    </div>
  );
}

export default App;