const section1 = document.querySelector(".quiz .section1");
const section2 = document.querySelector(".quiz .section2");

const jumlahSoal = document.getElementById("jumlah-soal");

const section1Jawaban1 = section1.querySelector(".jawaban #jawaban1");
const section1Jawaban2 = section1.querySelector(".jawaban #jawaban2");

const section2Jawaban1 = section2.querySelector(".jawaban #jawaban1");
const section2Jawaban2 = section2.querySelector(".jawaban #jawaban2");

const hasil1 = document.querySelector(".section1 #hasil");
const hasil2 = document.querySelector(".section2 #hasil");

section1Jawaban1.addEventListener("click", function () {
  hasil1.innerText = "Yeayy, Jawaban kamu tepat sekali ✅";

  section1Jawaban1.style.backgroundColor = "green";
  section1Jawaban2.style.backgroundColor = "red";
  section1Jawaban1.style.color = "white";
  section1Jawaban2.style.color = "white";
});

section1Jawaban2.addEventListener("click", function () {
  hasil1.innerText = "Yahh, Jawaban kamu kurang tepat ❌";

  section1Jawaban1.style.backgroundColor = "green";
  section1Jawaban2.style.backgroundColor = "red";
  section1Jawaban1.style.color = "white";
  section1Jawaban2.style.color = "white";
});

section2Jawaban1.addEventListener("click", function () {
  hasil2.innerText = "Yahh, Jawaban kamu kurang tepat ❌";

  section2Jawaban1.style.backgroundColor = "red";
  section2Jawaban2.style.backgroundColor = "green";
  section2Jawaban1.style.color = "white";
  section2Jawaban2.style.color = "white";
});

section2Jawaban2.addEventListener("click", function () {
  hasil2.innerText = "Yeayy, Jawaban kamu tepat sekali ✅";

  section2Jawaban1.style.backgroundColor = "red";
  section2Jawaban2.style.backgroundColor = "green";
  section2Jawaban1.style.color = "white";
  section2Jawaban2.style.color = "white";
});

section1.querySelector(".next button").addEventListener("click", function () {
  jumlahSoal.innerText = "2/2";
  section1.style.display = "none";
  section2.style.display = "block";
});

section2.querySelector(".next button").addEventListener("click", function () {
  jumlahSoal.style.display = "none";
  section2.style.display = "none";

  const giveThanks = document.getElementById("give-thanks");

  const pBaru = document.createElement("p");
  const textPbaru = document.createTextNode("Terima kasih atas partisipasinya :)");

  pBaru.appendChild(textPbaru);
  giveThanks.appendChild(pBaru);

  giveThanks.style.display = "block";
});
