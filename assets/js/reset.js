((() => {
    const $counter = document.getElementById('js-counter');

    const clickHandler = (e) => {
        $counter.textContent = 0;
    };

    document.getElementById('js-reset-button')
        .addEventListener('click', (e) => clickHandler(e));
})());
