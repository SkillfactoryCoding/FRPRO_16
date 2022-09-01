let id = null;

function start() {
  const elem = document.getElementById("textBlock");

  let index = 1;

  // id = requestAnimationFrame(frame);
  id = setInterval(frame, 20);

  function frame() {
    if (index === 150) {
      clearInterval(id);

      // id = requestAnimationFrame(frameRevert)
      id = setInterval(frameRevert, 20);
    } else {
      elem.style.fontSize = `${index}px`;

      index += 1;

      // requestAnimationFrame(frame);
    }
  }

  function frameRevert() {
    if (index === 10) {
      clearInterval(id);
      // cancelAnimationFrame(id);
    } else {
      elem.style.fontSize = `${index}px`;

      index += -1;

      // requestAnimationFrame(frameRevert);
    }
  }
}
