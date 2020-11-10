series();

function series() {
  fetch("/api/series")
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      console.log(datos);
      let series = "";
      for (let i = 0; i < datos.length; i++) {
        series += `
            <div>
                <p>Título: ${datos[i].titulo}</p>
                <p>Plataforma: ${datos[i].plataforma}</p>
                <p>Puntuación: ${datos[i].puntuacion}</p>
            </div>
          `;
      }
      document.getElementById("div1").innerHTML = series;
    });
}

function buscarSerie() {
  let titulo = document.getElementById("titulo").value;

  fetch("/api/serie/" + titulo)
    .then(function cogerRespuesta(respuesta) {
      return respuesta.json();
    })
    .then(function cogerDatos(datos) {
      console.log(datos);
    });
}

function anyadir() {
  let titulo = document.getElementById("nombre").value;
  let plataforma = document.getElementById("plataforma").value;
  let puntuacion = document.getElementById("puntuacion").value;

  let serie = {
    titulo,
    plataforma,
    puntuacion,
  };

  fetch("/api/nuevaSerie", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serie),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      console.log(datos);
      series();
    });
}
