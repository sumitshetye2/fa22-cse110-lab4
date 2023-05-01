let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 45,
    raceCars: 5,
    blackCars: 5,
    rareCars: 2
};

for (car in statistics) {
    if(car.startsWith('r') || statistics[car] % 2 == 1){
        console.log(statistics[car]);
    }
    
}