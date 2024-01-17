function calcular(){
    let valorEquipamento = parseFloat(document.getElementById("valorEquipamento").value)
    let valorSucata = parseFloat(document.getElementById("valorSucata").value)
    let vidaUtil = parseFloat(document.getElementById("vidaUtil").value)
    let tempoDeUso = parseFloat(document.getElementById("tempoDeUso").value)
    let valorDepreciado = (valorEquipamento - valorSucata) / vidaUtil * tempoDeUso
    document.getElementById("valorDepreciado").value = valorDepreciado.toFixed(2)
    console.log(valorDepreciado)
}