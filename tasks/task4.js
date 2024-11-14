function getMostFuelEfficientCars(cars, brand) {
  // Перевіряємо, чи всі машини в масиві мають витрату палива менше 6 л/100 км
  const allEfficient = cars.every(car => car.fuelConsumption < 6);

  if (!allEfficient) {
    return []; // Якщо є машини з витратою більше або рівно 6 л, повертаємо порожній масив
  }

  // Фільтруємо автомобілі по бренду і витраті палива
  const filteredCars = cars.filter(car => car.brand === brand && car.fuelConsumption < 6);

  // Сортуємо за витратою палива (від найменшої до найбільшої)
  return filteredCars.sort((a, b) => a.fuelConsumption - b.fuelConsumption);
}

// Приклад використання:
const cars = [
  { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
  { brand: 'Honda', model: 'Civic', fuelConsumption: 5.9 },
  { brand: 'Toyota', model: 'Camry', fuelConsumption: 5.5 },
  { brand: 'Ford', model: 'Focus', fuelConsumption: 6.1 },
  { brand: 'Honda', model: 'Accord', fuelConsumption: 5.8 },
  { brand: 'Audi', model: 'A3', fuelConsumption: 5.4 },
  { brand: 'Audi', model: 'Q5', fuelConsumption: 5.7 },
  { brand: 'Dodge', model: 'Charger', fuelConsumption: 5.8 },
  { brand: 'Dodge', model: 'Durango', fuelConsumption: 5.6 },
];

console.log(getMostFuelEfficientCars(cars, 'Toyota')); // Виведе автомобілі Toyota з витратою палива < 6 л/100 км, відсортовані за витратою палива
console.log(getMostFuelEfficientCars(cars, 'Honda'));  // Виведе автомобілі Honda з витратою палива < 6 л/100 км, відсортовані за витратою палива
console.log(getMostFuelEfficientCars(cars, 'Audi'));   // Виведе автомобілі Audi з витратою палива < 6 л/100 км, відсортовані за витратою палива
console.log(getMostFuelEfficientCars(cars, 'Dodge'));  // Виведе автомобілі Dodge з витратою палива < 6 л/100 км, відсортовані за витратою палива
console.log(getMostFuelEfficientCars(cars, 'Ford'));   // Виведе порожній масив, оскільки є автомобіль Ford з витратою палива >= 6 л/100 км
