export default function botaoFechar() {
    const btnFechar = document.querySelector('.fechar');

    if (btnFechar) {

        function fechar() {
            // window.location = '../index.html#solucoesItad';
            window.history.back();
        }

        btnFechar.addEventListener('click', fechar);
    }
}