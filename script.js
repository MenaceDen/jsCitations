const startButton = document.querySelector("#btnStart");
const container = document.querySelector("#citation_container");
const citationText = document.querySelector("#citation_text");
startButton.addEventListener("click", startProgram);
const citations = [
  "Nikad nemoj odustati, jer uvek postoji vreme i mesto kada će se plima promeniti.",
  "Kreativan čovek motivisan je željom da postigne, a ne željom da pobedi druge.",
  "Neka ti udica bude uvek bačena. U jezeru u kojem najmanje očekuješ, pojaviće se riba.",
  "Preko noći postaje slavan samo onaj ko je danima neumorno radio.",
  "Velika je nesreća kad čovek ne zna šta hoće, a prava katastrofa kad ne zna šta može.",
];
function startProgram() {
  let broj = 0;
  while (true) {
    broj = prompt("Unesite broj od 1 do 5");
    if (!parseInt(broj)) {
      alert("Niste uneli broj");
    } else if (broj < 1 || broj > 5) {
      alert("Unesen broj mora biti izmedju 1 i 5!");
    } else {
      showCitation(broj);
      break;
    }
  }
}
function showCitation(broj) {
  startButton.style.visibility = "hidden";
  citationText.innerHTML = citations[broj - 1];
  container.style.opacity = "1";
}
