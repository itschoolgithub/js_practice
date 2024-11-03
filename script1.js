function getTransactionData() {
    let transactions = [];
    let numberOfTransactions = +prompt("Введите количество транзакций:");

    for (let i = 0; i < numberOfTransactions; i++) {
        let amount = +prompt("Введите сумму транзакции #" + (i + 1) + ":");
        let type = prompt("Введите тип транзакции (вход/выход):");
        transactions[i] = [amount, type];
    }

    return transactions;
}

function calculateTotals(transactions) {
    let totalIncome = 0;
    let totalExpense = 0;

    for (let i = 0; i < transactions.length; i++) {
        let amount = transactions[i][0];
        let type = transactions[i][1];

        if (type === "вход") {
            totalIncome += amount;
        } else if (type === "выход") {
            totalExpense += amount;
        }
    }

    return [totalIncome, totalExpense];
}

function showReport(totals) {
    let totalIncome = totals[0];
    let totalExpense = totals[1];
    let netTotal = totalIncome - totalExpense;

    alert("Общий доход: " + totalIncome + "\nОбщий расход: " + totalExpense + "\nЧистая прибыль: " + netTotal);
}

function startAccounting() {
    let transactions = getTransactionData();
    let totals = calculateTotals(transactions);
    showReport(totals);
}

if (confirm("Хотите начать учет транзакций?")) {
    startAccounting();
} else {
    alert("Учет завершен.");
}