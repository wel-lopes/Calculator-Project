function adicionar(valor) {
    document.getElementById('display').value += valor;
}
function limpar() {
    document.getElementById('display').value = '';
}
function removerUltimo(){
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calcular() {
    try {
        let expressao = document.getElementById('display').value;
        let resultado = Function(`return ${expressao}`)();
        document.getElementById('display').value = resultado;
    } catch {
        document.getElementById('display').value = 'Erro';
    }
}

document.addEventListener('keydown', function (e) {
    const tecla = e.key;
    const permitido = "0123456789+-*/.";

    // Conecta tecla física com botão visual:
    const botao =document.querySelector(`button[data-tecla="${tecla}"]`);

    if (botao) {
        botao.classList.add("ativo");
    setTimeout(() => botao.classList.remove("ativo"), 150)
    }
    //Funções da calculadora:
    if (!isNaN(tecla) || permitido.includes(tecla)) {
        adicionar(tecla);
    } else if (tecla === 'Enter') {
        calcular();
    } else if (tecla === 'Backspace') {
        removerUltimo();
    } else if (tecla === 'Escape') {
        limpar();
    }
});