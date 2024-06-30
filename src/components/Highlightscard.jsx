import React, { useState, useEffect } from 'react';
import highlightsData from '../Data/highlights.json';
import './Hcard.css';

const HighlightCards = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filteredHighlights, setFilteredHighlights] = useState(highlightsData);

  useEffect(() => {
    const results = highlightsData.filter(highlight => {
      const matchesSearchQuery = highlight.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 highlight.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDateFilter = filterDate ? highlight.date === filterDate : true;
      return matchesSearchQuery && matchesDateFilter;
    });
    setFilteredHighlights(results);
  }, [searchQuery, filterDate]);

  return (
    <div>

      <h1>MATCH HIGHLIGHTS</h1> 
      <div className='bars'>
      <input
        type="search"
        placeholder="Search by name or title..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className='srch'
      />
      <input
        type="date"
        placeholder="Filter by date..."
        value={filterDate}
        onChange={e => setFilterDate(e.target.value)}
        className='fltr'
      />

      </div>
      
      
      <div className="cards-container">
        {filteredHighlights.map((highlight, index) => (
          <div key={index} className="cardss">
            <div><img src={highlight.eventImage} alt={highlight.eventName} className='Imgcrd'/></div>
            <div><p>{highlight.eventName}</p></div>
            <div><h2>{highlight.title}</h2></div>
            <div><p>{highlight.date}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightCards;
