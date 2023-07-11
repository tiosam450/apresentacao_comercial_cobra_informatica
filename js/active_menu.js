export default function activeMenu() {

    const header = document.querySelector('header')
    // Verifica se o menu (header) está ativo e executa a função
    if (header) {
        const sessao = document.querySelectorAll("section[id]");

        window.addEventListener("scroll", menuHighLight);

        function menuHighLight() {


            let scrollY = window.pageYOffset;

            sessao.forEach(current => {
                const sessaoHeight = current.offsetHeight;
                const sessaoTop = current.offsetTop - 50;
                const idSessao = current.getAttribute("id");

                if (scrollY > sessaoTop && scrollY <= sessaoTop + sessaoHeight) {
                    document.querySelector(".menu a[href*=" + idSessao + "]").classList.add("menuAtivo");
                } else {
                    document.querySelector(".menu a[href*=" + idSessao + "]").classList.remove("menuAtivo");
                }
            });
        }
    }

}

