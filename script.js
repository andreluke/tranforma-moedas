function converter() {
    const valorReais = parseFloat(document.getElementById('valor').value);
    const resultadoDiv = document.getElementById('resultado');
    
    if (isNaN(valorReais) || valorReais < 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um valor válido.";
        resultadoDiv.classList.remove('hidden'); 
        return;
    }

    let totalCentavos = Math.round(valorReais * 100);

    const moedasDe25 = Math.floor(totalCentavos / 25);
    totalCentavos %= 25;
    
    const moedasDe10 = Math.floor(totalCentavos / 10);
    totalCentavos %= 10;
    
    const moedasDe5 = Math.floor(totalCentavos / 5);
    totalCentavos %= 5;
    
    const moedasDe1 = totalCentavos;

    document.getElementById('resultado').innerHTML = `
        <p>Total de centavos: ${Math.round(valorReais * 100)}</p>
        <p>Moedas de 25 centavos: ${moedasDe25}</p>
        <p>Moedas de 10 centavos: ${moedasDe10}</p>
        <p>Moedas de 5 centavos: ${moedasDe5}</p>
        <p>Moedas de 1 centavo: ${moedasDe1}</p>
    `;
}
