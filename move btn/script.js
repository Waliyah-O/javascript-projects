const downMove = () => {
  let id = null;
  const elem = document.getElementById("animation");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos === 350) {
      clearInterval(id);
    } else {
      pos += 1;
      elem.style.bottom = pos + "px";
      elem.style.left = 0;
    }
  }
};

document.getElementById("down-btn").addEventListener("click", downMove);

