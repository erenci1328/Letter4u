/* =========================
   OPEN LETTER
========================= */

function openLetter() {

  const intro = document.getElementById("intro");
  const letter = document.getElementById("letter");

  intro.style.display = "none";
  letter.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================
   RANDOM MESSAGE
========================= */

const messages = [

  "Hei, kamu gak harus selalu kelihatan baik-baik aja. Bahkan WiFi aja kadang reconnect sendiri. 😭",

  "Kalau hari ini kamu cuma berhasil bangun dan menjalani hari, that's enough. Gak semua progress harus kelihatan keren.",

  "Jangan terlalu percaya sama overthinking. Dia kerjaannya memang bikin masalah dari sesuatu yg bahkan belum terjadi.",

  "Kamu boleh istirahat. Dunia gak akan kiamat cuma karena kamu offline beberapa jam.",

  "Mungkin kamu bukan sendirian. Mungkin kamu cuma belum menemukan orang yg satu frekuensi. Pelan-pelan.",

  "Real talk: kamu sudah melewati banyak hari yg dulu kamu pikir gak akan bisa kamu lewati. Lihat? Kamu masih di sini.",

  "Healing itu gak selalu pergi jauh. Kadang healing cuma tidur cukup, makan, mandi, lalu berhenti mikirin hidup selama 20 menit.",

  "Jangan cap dirimu sebagai 'gagal' cuma karena satu bagian hidupmu lagi berantakan. Kamu manusia, bukan spreadsheet Excel.",

  "Kalau gak ada yg bilang malam ini: makasih karena masih bertahan sejauh ini. 🤍"

];


function randomMessage() {

  const box = document.getElementById("randomMessage");

  const randomIndex =
    Math.floor(Math.random() * messages.length);

  box.style.opacity = "0";

  setTimeout(() => {

    box.textContent = messages[randomIndex];

    box.style.opacity = "1";

  }, 200);

}


/* =========================
   COPY QUOTE
========================= */

function copyQuote() {

  const quote =
    "Kalau hari ini kamu merasa gak punya siapa-siapa, setidaknya jangan ikut meninggalkan dirimu sendiri.";

  navigator.clipboard.writeText(quote)
    .then(() => {

      alert("Quote berhasil dicopy 🤍");

    })
    .catch(() => {

      alert("Gagal copy. Tapi quote-nya tetap boleh kamu simpan di hati hehe.");

    });

}


/* =========================
   MUSIC
========================= */

const music = document.getElementById("music");

let musicPlaying = false;


function toggleMusic() {

  /*
    Kalau belum ada file musik,
    browser tidak akan memainkan apa-apa.
  */

  if (!music.src) {

    alert(
      "Tambahkan file musik MP3 di index.html dulu ya 🎵"
    );

    return;
  }


  if (musicPlaying) {

    music.pause();

    musicPlaying = false;

    document.querySelector(".music-btn").textContent = "🎵";

  } else {

    music.play();

    musicPlaying = true;

    document.querySelector(".music-btn").textContent = "⏸️";

  }

}
