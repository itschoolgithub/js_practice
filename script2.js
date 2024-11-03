function getUserData() {
    let health = +prompt("Введите здоровье персонажа:");
    let attackPower = +prompt("Введите силу атаки:");
    let defensePower = +prompt("Введите силу защиты:");
    return [health, attackPower, defensePower];
}

function enemyEncounter() {
    let enemyHealth = 50;
    let enemyAttack = 10;
    return [enemyHealth, enemyAttack];
}

function calculateDamage(attack, defense) {
    let damage = attack - defense;
    if (damage > 0) {
        return damage;
    } else {
        return 0
    }
}

function battle(playerData, enemyData) {
    let playerHealth = playerData[0];
    let playerAttack = playerData[1];
    let playerDefense = playerData[2];
    let enemyHealth = enemyData[0];
    let enemyAttack = enemyData[1];

    while (playerHealth > 0 && enemyHealth > 0) {
        enemyHealth -= calculateDamage(playerAttack, enemyAttack);
        alert("Вы атаковали врага! Осталось здоровья врага: " + enemyHealth);
        if (enemyHealth <= 0) {
            alert("Вы победили врага!");
            break;
        }
        playerHealth -= calculateDamage(enemyAttack, playerDefense);
        alert("Враг атаковал вас! Осталось вашего здоровья: " + playerHealth);
        if (playerHealth <= 0) {
            alert("Вы погибли в бою!");
            break;
        }
    }
    return playerHealth;
}

function startGame() {
    let playerData = getUserData();
    let playerHealth = playerData[0];

    let enemyData = enemyEncounter();
    let enemyHealth = enemyData[0];
    let enemyAttack = enemyData[1];

    alert("Вы встретили врага с " + enemyHealth + " здоровья и " + enemyAttack + " силы атаки.");
    playerHealth = battle(playerData, enemyData);

    if (playerHealth > 0) {
        alert("Поздравляем! Вы вышли из боя с " + playerHealth + " здоровья.");
    }
}

if (confirm("Хотите начать игру?")) {
    startGame();
} else {
    alert("Игра завершена.");
}