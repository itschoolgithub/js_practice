function getTravelData() {
    let trips = [];
    let numberOfTrips = +prompt("Введите количество поездок:");

    for (let i = 0; i < numberOfTrips; i++) {
        let destination = prompt(`Введите место назначения #${i + 1}:`);
        let travelMethod = prompt("Введите вид транспорта (автомобиль/поезд/самолет):");
        let travelCost = 0;

        if (travelMethod === "автомобиль") {
            let fuelCost = +prompt("Введите стоимость бензина:");
            let distance = +prompt("Введите расстояние в километрах:");
            let fuelConsumption = +prompt("Введите расход бензина на 100 км:");
            travelCost = (fuelConsumption / 100) * distance * fuelCost;
        } else if (travelMethod === "поезд") {
            travelCost = +prompt("Введите стоимость билета на поезд:");
        } else if (travelMethod === "самолет") {
            travelCost = +prompt("Введите стоимость авиабилета:");
        }

        let accommodationCost = +prompt("Введите стоимость проживания:");
        let dailyExpenses = +prompt("Введите суточные расходы:");
        let duration = +prompt("Введите количество дней:");

        trips[i] = [destination, travelCost, accommodationCost, dailyExpenses, duration];
    }

    return trips;
}

function calculateTotalExpenses(trips) {
    let totalExpenses = 0;

    for (let i = 0; i < trips.length; i++) {
        let travelCost = trips[i][1];
        let accommodationCost = trips[i][2];
        let dailyExpenses = trips[i][3];
        let duration = trips[i][4];

        totalExpenses += travelCost + accommodationCost + (dailyExpenses * duration);
    }

    return totalExpenses;
}

function showTravelReport(totalExpenses) {
    alert("Общие затраты на отпуск: " + totalExpenses);
}

function startTravelBudgeting() {
    let trips = getTravelData();
    let totalExpenses = calculateTotalExpenses(trips);
    showTravelReport(totalExpenses);
}

if (confirm("Хотите начать учет затрат на отпуск?")) {
    startTravelBudgeting();
} else {
    alert("Учет завершен.");
}