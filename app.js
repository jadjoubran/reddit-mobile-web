const wait = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

const init = async () => {
  await wait(500);
  document.querySelector("#loading").innerHTML =
    "Just kidding. Waiting for artificial delay to finish.";
  await wait(1500);
  document.querySelector("#loading").innerHTML +=
    "<br />Freezing your browser for a couple of seconds";
  await wait(1500);
  document.querySelector("#loader").style.display = "none";
  document.querySelector("#app").style.display = "block";
};

init();
