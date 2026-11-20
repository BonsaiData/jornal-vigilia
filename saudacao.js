var diaDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

function saudacao() {
  var nome = "Gabriel Cedraschi Dias de Araujo";
  var cidadeCurso = "São Paulo/ADS";
  var universidade = "Universidade Presbiteriana Mackenzie";

  var agora = new Date();
  var hora = agora.getHours();
  var cumprimento;

  if (hora >= 5 && hora < 12) {
    cumprimento = "Bom Dia!";
  } else if (hora >= 12 && hora < 18) {
    cumprimento = "Boa Tarde!";
  } else {
    cumprimento = "Boa Noite!";
  }

  alert(nome + "\n" + cidadeCurso + " – " + universidade + "\n" + cumprimento + " Hoje é " + diaDaSemana[agora.getDay()]);
}
