import React, { useState, useEffect } from 'react';
import DisplayStyles from "../styles/display.module.scss";
import Header from '../components/Header';
import MainContainer from '../components/MainContainer';
import Loader from '../components/Loader.jsx';
import Footer from '../components/Footer.jsx';
import { fetchNews } from '../services/fetchNews.js';


export default function Display() {
  const [country, setCountry] = useState("in");
  const [field, setField] = useState("business");
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; 

  const handleCountry = (value) => {
    setCountry(value);
  };

  const handleSelectedField = (value) => {
    setField(value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchAndSetNews = async () => {
      setLoading(true);
      try {
        const data = await fetchNews(country, field, currentPage, pageSize);
        setArticles(data.articles);
        setTotalResults(data.totalResults);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetNews();
  }, [country, field, currentPage]);

  return (
    <div className={DisplayStyles.mainContainer}>
      {loading && <Loader />}
      <Header handleCountry={handleCountry} handleSelectedField={handleSelectedField} />
      <MainContainer articles={articles} />
      <Footer
        currentPage={currentPage}
        totalResults={totalResults}
        pageSize={pageSize}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
