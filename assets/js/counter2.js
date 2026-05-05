(() => {
  const $counter = document.getElementById("js-counter");
  const buttons = document.getElementsByClassName("js-button");
  const resetButton = document.getElementById("js-reset-button");

  // カウンター更新処理
  const updateCounter = (delta) => {
    let current = parseInt($counter.textContent, 10);
    let next = current + delta;

    // カウンターの値が0未満にならないようにする
    // 10以下で-10を押したときに、-10ではなく0になるようにするため
    if (next < 0) {
      next = 0;
    }

    $counter.textContent = next;

    if (next !== 0 && next % 10 === 0) {
      $counter.classList.add("is-multiple-of-10");
    } else {
      $counter.classList.remove("is-multiple-of-10");
    }
  };

  // ボタン押下
  const clickHandler = (e) => {
    const delta = parseInt(e.currentTarget.dataset.delta, 10);
    updateCounter(delta);
  };

  // イベント登録
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", clickHandler);
  }

  // リセットボタン押下
  resetButton.addEventListener("click", () => {
    $counter.textContent = "0";
  });
})();
