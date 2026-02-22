tailwind.config = {
    theme: {
        extend: {
            fontFamily: { sans: ['Montserrat', 'sans-serif'] },
            colors: {
                brand: {
                    red: '#DC2626',      /* Vermelho Principal */
                    redDark: '#B91C1C',  /* Hover do Botão */
                    dark: '#1F2937',     /* Cinza Base */
                    darker: '#111827'    /* Footer */
                }
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {

    AOS.init({
        once: true,
        offset: 100,
        duration: 1000,
        delay: 100,
        easing: 'ease-out-quart',
        mirror: false
    });

});