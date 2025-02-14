// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Esta canción es para ti.", time: 5 },
  { text: "Nunca dejes de brillar,", time: 15 },
  { text: "porque eres una persona increíble y especial.", time: 25 },
  { text: "No lo olvides, por favor.", time: 35 },
  { text: "El tiempo que he compartido contigo", time: 45 },
  { text: "ha sido maravilloso,", time: 55 },
  { text: "y aunque no estoy en mi mejor momento,", time: 65 },
  { text: "sigo esforzándome por ser funcional", time: 75 },
  { text: "y ser un pequeño apoyo para ti.", time: 85 },
  { text: "Me encantas,", time: 95 },
  { text: "y cada momento que paso contigo me hace feliz.", time: 105 },
  { text: "Espero que,", time: 115 },
  { text: "con esos hermosos ojos tuyos,", time: 125 },
  { text: "hayas visto lo mucho que significas para mí.", time: 135 },
  { text: "En la inmensidad del tiempo y el espacio,", time: 145 },
  { text: "me siento profundamente agradecido", time: 155 },
  { text: "por haber coincidido contigo.", time: 165 },
  { text: "P.D. Tuve que improvisar,", time: 175 },
  { text: "ya que tu sorpresa original era otra,", time: 185 },
  { text: "pero algunas cosas cambiaron tus planes para hoy.", time: 195 },
  { text: "Te mando besos.", time: 205 },
  { text: "Te amo.", time: 215 }
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 270000);