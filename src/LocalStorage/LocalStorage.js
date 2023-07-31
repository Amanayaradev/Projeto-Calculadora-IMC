
function salvarNoLocalStorage(chave, novoValor) {
    // try {
    //     // Recupera os valores existentes (se houver)
    //     let valoresExistentes = JSON.parse(localStorage.getItem(chave)) || [];

    //     // Adiciona o novo valor à lista
    //     valoresExistentes.push(novoValor);

    //     // Salva a lista completa no Local Storage
    localStorage.setItem(chave, JSON.stringify(novoValor));

    //     console.log(`Valor adicionado em cascata! Chave: ${chave}, Novo valor: ${novoValor}`);
    // } catch (e) {
    //     console.error(`Erro ao salvar valor em cascata: ${e.message}`);
    // }
}

export default salvarNoLocalStorage;