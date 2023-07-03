import React, { useState, useEffect } from 'react';
import s from './home.module.css';
import { suggestions } from '../components/backendServer';
import Output from './output';
import { Autocomplete, TextField, List,Slider,Box } from '@mui/material';
import { styled } from '@mui/system';


const Home = () => {

  const [article, setArticle] = useState('');
  const [brand, setBrand] = useState('');
  const [filterValue, setFilterValue] = useState([0, 1000]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleArticleChange = (event) => {
    setArticle(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleFilterChange = (event, newValue) => {
    setFilterValue(newValue);
  };

  useEffect(() => {
    const updatedSuggestions = suggestions.filter(
      (item) =>
        item.article.toLowerCase().includes(article.toLowerCase()) &&
        item.brand.toLowerCase().includes(brand.toLowerCase()) &&
        item.day >= filterValue[0] &&
        item.day <= filterValue[1]
    );

    setFilteredSuggestions(updatedSuggestions);
  }, [article, brand, filterValue]);


  // убрать повторение в подсказказ у инпута
  const uniqueBrands = Array.from(new Set(suggestions.map((item) => item.brand)));
  const uniqueArticle = Array.from(new Set(suggestions.map((item) => item.article)));



// день дня дней ...
  const getDayLabel = (days) => {
    const lastDigit = days % 10;
    const lastTwoDigits = days % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
      return 'день';
    } else if (
      (lastDigit === 2 && lastTwoDigits !== 12) ||
      (lastDigit === 3 && lastTwoDigits !== 13) ||
      (lastDigit === 4 && lastTwoDigits !== 14)
    ) {
      return 'дня';
    } else {
      return 'дней';
    }
  };

  const formattedDays = `${getDayLabel(filterValue[0])}`;


  return (
    <section className={s.container}>
      <h1 className={s.title}>Dash Board</h1>
      <div className={s.boxFilter}>
        <Autocomplete
         ListboxComponent={CustomListbox}
          className={s.filterText}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={uniqueArticle}
          inputValue={article}
          onInputChange={(event, value) => {
            setArticle(value);
          }}
          renderInput={(params) => (
            <TextField
              className={s.inpText}
              {...params}
              onChange={handleArticleChange}
              value={article}
              label="ARTICLE"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
        <Autocomplete
          className={s.filterText}
         ListboxComponent={CustomListbox}

          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={uniqueBrands}
          inputValue={brand}
          onInputChange={(event, value) => {
            setBrand(value);
          }}
          renderInput={(params) => (
            <TextField
              className={s.inpText}
              {...params}
              onChange={handleBrandChange}
              value={brand}
              label="BRAND"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
        <div className={s.filterDay}>
          <span className={s.dayVisible}>{filterValue[0]} {formattedDays}</span>
          <Box className={s.boxDay} >
            <Slider

              value={filterValue}
              onChange={handleFilterChange}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              getAriaLabel={() => 'Day range'}
              getAriaValueText={(value) => `${value} день`}
              sx={{
                '& .MuiSlider-thumb': {
                  backgroundColor: '#DB0001',
                },
                '& .MuiSlider-track': {
                  backgroundColor: '#DB0001',
                  border:'none',
                },
             
              }}
            />
          </Box>
          <span className={s.dayVisible}>{filterValue[1] <= 1 ?'поставка сегодня':`${filterValue[1]} дней`}</span>
        </div>
      </div>
      <div>
        <Output filteredSuggestions={filteredSuggestions} />
      </div>
    </section>
  );
};

export default Home;




  /*стили для скролла */
const CustomListbox = styled(List)`
  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
    
  }
  ::-webkit-scrollbar-thumb {
    background-color: #DB0001;
    border-radius: 5px;
  }
`;
