import React from 'react';
import s from './output.module.css';

const Output = ({ filteredSuggestions }) => {

  const columnCount = 3;
  const itemsPerColumn = Math.ceil(filteredSuggestions.length / columnCount);
  const sortedSuggestions = filteredSuggestions.sort((a, b) => a.price - b.price);

  // Создаем массив колонок с равным количеством элементов
  const columns = Array.from({ length: columnCount }, (_, columnIndex) =>
    filteredSuggestions.slice(
      columnIndex * itemsPerColumn,
      (columnIndex + 1) * itemsPerColumn
    )
  );

  // Дополнительные элементы, если не хватает для равного распределения
  const extraItems = filteredSuggestions.length % columnCount;
  
  const calculateColor = (price) => {
    const minPrice = sortedSuggestions[0].price;
    const maxPrice = sortedSuggestions[sortedSuggestions.length - 1].price;
    const normalizedPrice = (price - minPrice) / (maxPrice - minPrice);
  
    // Вычисляем  цвет  палитры
    const color = minColor.map((min, index) =>
      Math.round(min + normalizedPrice * (maxColor[index] - min))
    );
  
    const minWidth = 30; // Мин ширина зеленых элементов в %
    const maxWidth = 100; // Макс ширина красных элементов в %
    const width = minWidth + normalizedPrice * (maxWidth - minWidth);
  
    return {
      color: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
      width: `${width}%`,
    };
  };
  
  const minColor = [0, 255, 0]; // Зеленый цвет 
  const maxColor = [255, 0, 0]; // Красный цвет 
  
    // задний фон для дней 

    // const calculateDayColor = (day) => {
    //   const normalizedDay = (day - minDay) / (maxDay - minDay);
    
    //   if (normalizedDay >= 0.8) {
    //     return 'red';
    //   } else if (normalizedDay >= 0.4) {
    //     return 'yellow';
    //   } else {
    //     return 'green';
    //   }
    // };
    
  

    // const minDay = Math.min(...filteredSuggestions.map(item => item.day));
    // const maxDay = Math.max(...filteredSuggestions.map(item => item.day));
    

    return (
      <div className={s.container}>
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className={s.column}>
            {column.map((item, index) => (
              <div key={index} className={s.item}>
                <div className={s.boxPrice}>
                <span
                  style={{
                    background: calculateColor(item.price).color,
                    width: calculateColor(item.price).width,
                  }}
                >
                  {item.price}
                </span>
              </div>
              <span
                className={s.day}
                // style={{ background: calculateDayColor(item.day, maxDay) }}
                style={{background:item.dayColor}}
              >
                {item.day}
              </span>
              <span className={s.brand} style={{color:item.supplierColor}}>{item.supplier}</span>
            </div>
          ))}
          {/* Если есть дополнительные элементы, добавляем их в последнюю колонку */}
          {columnIndex === columnCount - 1 && extraItems > 0 && (
            <div className={s.item} style={{ visibility: 'hidden' }}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Output;
