
// (function printOmen() {
//     const omens = [
//         "What are you doing here?",
//         "It was too big to be called a sword",
//         "In life, there's roadblocks",
//         "Updated from inside your house!",
//         "Flint and steel!",
//         "Do not turn around.",
//         "Are you trying to give me a heart attack?"
//     ];

//     var chosenOmen = Math.floor(Math.random() * omens.length);
//     document.getElementById('omenDisplay').innerHTML = omens[chosenOmen];
// })();

function printOmen() {
  const omens = [
    "What are you doing here?",
    "It was too big to be called a sword",
    "In life, there's roadblocks",
    "Updated from inside your house!",
    "Flint and steel!",
    "Do not turn around.",
    "Are you trying to give me a heart attack?"
  ];

  const chosenOmen = Math.floor(Math.random() * omens.length);
  const omenDisplay = document.getElementById('omenDisplay');
  if (omenDisplay) {
    omenDisplay.innerHTML = omens[chosenOmen];
  }
}
