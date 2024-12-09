function calculateWaterUsage() {
    const showers = parseInt(document.getElementById("showers").value) || 0;
    const toothbrush = parseInt(document.getElementById("toothbrush").value) || 0;
    const dishes = parseInt(document.getElementById("dishes").value) || 0;
    const laundry = parseInt(document.getElementById("laundry").value) || 0;

    // Valores médios de consumo (em litros)
    const waterPerShower = 60;
    const waterPerToothbrush = 2;
    const waterPerDishes = 20;
    const waterPerLaundry = 150;

    // Cálculo do consumo diário
    const dailyConsumption = (showers * waterPerShower) + (toothbrush * waterPerToothbrush) + (dishes * waterPerDishes) + (laundry * waterPerLaundry / 7);
    const monthlyConsumption = dailyConsumption * 30;

    // Exibição do resultado
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>Consumo diário aproximado: <strong>${dailyConsumption.toFixed(1)} litros</strong></p>
        <p>Consumo mensal aproximado: <strong>${monthlyConsumption.toFixed(1)} litros</strong></p>
        <h3>Dicas para economizar:</h3>
        <ul>
            <li>Reduza o tempo de banho para economizar água.</li>
            <li>Feche a torneira enquanto escova os dentes ou lava a louça.</li>
            <li>Acumule roupas para lavar de uma só vez.</li>
        </ul>
    `;
}
