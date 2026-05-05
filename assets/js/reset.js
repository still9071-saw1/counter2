(() => {
    const $counter = document.getElementById('js-counter');

    const clickHandler = () => {
        $counter.textContent = 0;
        $counter.classList.remove("is-multiple-of-10"); 
    };

    document.getElementById('js-reset-button')
        .addEventListener('click', clickHandler);
})();
