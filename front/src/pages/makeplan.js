// pages/makeplan.js
import React, { useState } from 'react';
import styles from '../styles/MakePlan.module.css';

const MakePlan = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = () => {
    // 검색 및 추천 로직 구현
  };

  return (
    <div className={styles.container}>
      <h1>Plan Your Ultimate Trip</h1>
      <div className={styles.searchSection}>
        <input 
          type="text" 
          placeholder="Search for a destination..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="beach">Beach</option>
          <option value="mountain">Mountain</option>
          <option value="city">City</option>
          <option value="culture">Culture</option>
          <option value="adventure">Adventure</option>
        </select>
        <input 
          type="date" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
        />
        <input 
          type="date" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Budget" 
          value={budget} 
          onChange={(e) => setBudget(e.target.value)} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className={styles.resultsSection}>
        {/* 추천 결과 표시 */}
      </div>
    </div>
  );
};

export default MakePlan;
