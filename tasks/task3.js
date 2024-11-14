function addSuccessPercent(olympicRepresentation) {
  return olympicRepresentation.map(item => {
    // Розрахунок відсотка медалей
    const percent = ((item.medals / item.athletes) * 100).toFixed(1);
    
    // Додавання нового поля до кожного об'єкта
    return {
      ...item,
      percentOfSuccess: parseFloat(percent) // Перетворюємо в число для точності
    };
  });
}

const olympicRepresentation = [
  { sport: 'Swimming', athletes: 20, medals: 6 },
  { sport: 'Gymnastics', athletes: 10, medals: 2 },
  { sport: 'Boxing', athletes: 15, medals: 5 },
  { sport: 'Athletics', athletes: 25, medals: 3 }
];

console.log(addSuccessPercent(olympicRepresentation));
