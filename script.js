var marcaColgate = {
  nome: "colgate",
  imagem:
    "https://www.publicitarioscriativos.com/wp-content/uploads/2017/08/colgate-adiciona-um-sorriso-e-altera-sutilmente-marca-img-2.gif",
  respostas: {
    "Coca-Cola": 0,
    Clorets: 0,
    Colgate: 7,
    Chipotle: 0
  }
};

var marcaRuffles = {
  nome: "ruffles",
  imagem:
    "https://freight.cargo.site/t/original/i/a174d113169467f01e25fd265693a739c8758bb4147dfc0dd476d425f0c2012e/Ruffles---post_Harry-Potter---varinha.gif",
  respostas: {
    Rusty: 0,
    Ruffles: 7,
    Rolex: 0,
    Waffles: 0
  }
};

var marcaCheetos = {
  nome: "cheetos",
  imagem: "https://media4.giphy.com/media/lOZay5u8AHx1limNhc/giphy.gif",
  respostas: {
    Chipotle: 0,
    Chicco: 0,
    Cheetos: 7,
    Colcci: 0
  }
};

var marcaConsul = {
  nome: "consul",
  imagem:
    "https://andradeshop.webnode.com.br/_files/system_preview_detail_200000022-ca27ccb212-public/consul.gif",
  respostas: {
    Consul: 7,
    Chiclets: 0,
    Chicco: 0,
    Colcci: 0
  }
};

var marcaRayban = {
  nome: "rayban",
  imagem:
    "https://cdn.dribbble.com/users/766394/screenshots/3126664/ray-ban-logo-2.gif",
  respostas: {
    Reebok: 0,
    Randall: 0,
    Rusty: 0,
    RayBan: 7
  }
};

var marcaCoke = {
  nome: "coke",
  imagem: "https://media2.giphy.com/media/quOstjhvNaRSO0zL63/200w.gif",
  respostas: {
    "Coca(Coke)": 7,
    "Cocco Miami": 0,
    Coach: 0,
    Code: 0
  }
};

var marcaPalmolive = {
  nome: "palmolive",
  imagem: "https://media0.giphy.com/media/SXNyD3EdoRKRybwGyu/giphy-preview.gif",
  respostas: {
    Pantene: 0,
    Palmolive: 7,
    "Palm Angels": 0,
    Pringles: 0
  }
};

exibirOpcaoColgate();
exibirOpcaoRayban();
exibirOpcaoRuffles();
exibirOpcaoCheetos();
exibirOpcaoConsul();
exibirOpcaoCoke();
exibirOpcaoPalmolive();

function exibirOpcaoColgate() {
  var exibir = document.getElementById("exibirColgate");
  var opcoesTexto = "";
  for (var resposta in marcaColgate.respostas) {
    opcoesTexto +=
      "<input type='radio' name='respostasColgate' value='" +
      resposta +
      "'>" +
      resposta +
      "<br>";
  }
  exibir.innerHTML = opcoesTexto;
}

function exibirOpcaoRayban() {
  var exibir = document.getElementById("exibirRayban");
  var opcoesTexto = "";
  for (var resposta in marcaRayban.respostas) {
    opcoesTexto +=
      "<input type='radio' name='respostasRayban' value='" +
      resposta +
      "'>" +
      resposta +
      "<br>";
  }
  exibir.innerHTML = opcoesTexto;
}

function exibirOpcaoRuffles() {
  var exibir = document.getElementById("exibirRuffles");
  var opcoesTexto = "";
  for (var resposta in marcaRuffles.respostas) {
    opcoesTexto +=
      "<input type='radio' name='respostasRuffles' value='" +
      resposta +
      "'>" +
      resposta +
      "<br>";
  }
  exibir.innerHTML = opcoesTexto;
}

function exibirOpcaoCheetos() {
  var exibir = document.getElementById("exibirCheetos");
  var opcoesTexto = "";
  for (var resposta in marcaCheetos.respostas) {
    opcoesTexto +=
      "<input type='radio' name='respostasCheetos' value='" +
      resposta +
      "'>" +
      resposta +
      "<br>";
  }
  exibir.innerHTML = opcoesTexto;
}

function exibirOpcaoConsul() {
  var exibir = document.getElementById("exibirConsul");
  var opcoesTexto = "";
  for (var resposta in marcaConsul.respostas) {
    opcoesTexto +=
      "<input type='radio' name='respostasConsul' value='" +
      resposta +
      "'>" +
      resposta +
      "<br>";
  }
  exibir.innerHTML = opcoesTexto;
}

function exibirOpcaoCoke() {
  var exibir = document.getElementById("exibirCoke");
  var opcoesTexto = "";
  for (var resposta in marcaCoke.respostas) {
    opcoesTexto +=
      "<input type='radio' name='respostasCoke' value='" +
      resposta +
      "'>" +
      resposta +
      "<br>";
  }
  exibir.innerHTML = opcoesTexto;
}

function exibirOpcaoPalmolive() {
  var exibir = document.getElementById("exibirPalmolive");
  var opcoesTexto = "";
  for (var resposta in marcaPalmolive.respostas) {
    opcoesTexto +=
      "<input type='radio' name='respostasPalmolive' value='" +
      resposta +
      "'>" +
      resposta +
      "<br>";
  }
  exibir.innerHTML = opcoesTexto;
}

function obtemRespostaSelecionadaColgate() {
  var radioAtributos = document.getElementsByName("respostasColgate");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function obtemRespostaSelecionadaRayban() {
  var radioAtributos = document.getElementsByName("respostasRayban");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function obtemRespostaSelecionadaRuffles() {
  var radioAtributos = document.getElementsByName("respostasRuffles");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function obtemRespostaSelecionadaCheetos() {
  var radioAtributos = document.getElementsByName("respostasCheetos");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function obtemRespostaSelecionadaConsul() {
  var radioAtributos = document.getElementsByName("respostasConsul");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function obtemRespostaSelecionadaCoke() {
  var radioAtributos = document.getElementsByName("respostasCoke");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function obtemRespostaSelecionadaPalmolive() {
  var radioAtributos = document.getElementsByName("respostasPalmolive");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function botaoReproduzirColgate() {
  var somColgate = new Audio(
    "https://cdn.discordapp.com/attachments/750028167225540648/892093755283341392/colgate.mp3"
  );
  somColgate.play();
}

function botaoReproduzirRayban() {
  var somRayban = new Audio(
    "https://cdn.discordapp.com/attachments/750028167225540648/892104156775592026/Rayban_online-audio-converter.com.mp3"
  );
  somRayban.play();
}

function botaoReproduzirRuffles() {
  var somRuffles = new Audio(
    "https://cdn.discordapp.com/attachments/750028167225540648/892105174573797386/Ruffles.mp3"
  );
  somRuffles.play();
}

function botaoReproduzirCheetos() {
  var somCheetos = new Audio(
    "https://cdn.discordapp.com/attachments/750028167225540648/892105176025018458/cheetos.mp3"
  );
  somCheetos.play();
}

function botaoReproduzirConsul() {
  var somConsul = new Audio(
    "https://cdn.discordapp.com/attachments/750028167225540648/892105180739411999/consul.mp3"
  );
  somConsul.play();
}

function botaoReproduzirCoke() {
  var somCoke = new Audio(
    "https://cdn.discordapp.com/attachments/750028167225540648/892105178189287424/coke.mp3"
  );
  somCoke.play();
}

function botaoReproduzirPalmolive() {
  var somPalmolive = new Audio(
    "https://cdn.discordapp.com/attachments/750028167225540648/892105168882139136/palmolive.mp3"
  );
  somPalmolive.play();
}

function botaoFinalizar() {
  var respostaSelecionadaColgate = obtemRespostaSelecionadaColgate();
  var respostaSelecionadaRayban = obtemRespostaSelecionadaRayban();
  var respostaSelecionadaRuffles = obtemRespostaSelecionadaRuffles();
  var respostaSelecionadaCheetos = obtemRespostaSelecionadaCheetos();
  var respostaSelecionadaConsul = obtemRespostaSelecionadaConsul();
  var respostaSelecionadaCoke = obtemRespostaSelecionadaCoke();
  var respostaSelecionadaPalmolive = obtemRespostaSelecionadaPalmolive();

  var count = 0;

  console.log(respostaSelecionadaColgate);
  console.log(respostaSelecionadaRayban);
  console.log(respostaSelecionadaRuffles);
  console.log(respostaSelecionadaCheetos);
  console.log(respostaSelecionadaConsul);
  console.log(respostaSelecionadaCoke);
  console.log(respostaSelecionadaPalmolive);

  if (respostaSelecionadaColgate != null) {
    if (respostaSelecionadaColgate == "Colgate") {
      console.log("O miserável é um gênio! - Acertou");
      exibirImagemColgate();
      count++;
    }
    if (respostaSelecionadaRayban == "RayBan") {
      console.log("acertou rayban");
      exibirImagemRayban();
      count++;
    }
    if (respostaSelecionadaRuffles == "Ruffles") {
      console.log("acertou ruffles");
      exibirImagemRuffles();
      count++;
    }
    if (respostaSelecionadaCheetos == "Cheetos") {
      console.log("acertou cheetos");
      exibirImagemCheetos();
      count++;
    }
    if (respostaSelecionadaConsul == "Consul") {
      console.log("Acertou Consul");
      exibirImagemConsul();
      count++;
    }
    if (respostaSelecionadaCoke == "Coca(Coke)") {
      console.log("Acertou Coke");
      exibirImagemCoke();
      count++;
    }
    if (respostaSelecionadaPalmolive == "Palmolive") {
      console.log("Acertou Palmolive");
      exibirImagemPalmolive();
      count++;
    }
  }
  document.getElementById("btnFinalizar").disabled = true;
  console.log(count);

  var resultado = document.getElementById("resultadoFinal");
  if (count == 7) {
    var elementoResultado =
      "<p class='resultado-final'>Parabéns! Você acertou " +
      count +
      " de 7 perguntas!</p>";
    resultado.innerHTML = elementoResultado;
  } else if (count >= 5 && count < 7) {
    var elementoResultado2 =
      "<p class='resultado-final'>Você acertou " +
      count +
      " de 7 perguntas, você teve um bom resultado!</p>";
    resultado.innerHTML = elementoResultado2;
  } else if (count <= 4) {
    var elementoResultado3 =
      "<p class='resultado-final'>Que pena, você só acertou " +
      count +
      " de 7 perguntas, estude mais e tente novamente!</p>";
    resultado.innerHTML = elementoResultado3;
  }
}

function exibirImagemColgate() {
  var img = document.querySelector("#imagemProdutoColgate");
  img.setAttribute("src", marcaColgate.imagem);
}

function exibirImagemRayban() {
  var img = document.querySelector("#imagemProdutoRayban");
  img.setAttribute("src", marcaRayban.imagem);
}

function exibirImagemRuffles() {
  var img = document.querySelector("#imagemProdutoRuffles");
  img.setAttribute("src", marcaRuffles.imagem);
}

function exibirImagemCheetos() {
  var img = document.querySelector("#imagemProdutoCheetos");
  img.setAttribute("src", marcaCheetos.imagem);
}

function exibirImagemConsul() {
  var img = document.querySelector("#imagemProdutoConsul");
  img.setAttribute("src", marcaConsul.imagem);
}

function exibirImagemCoke() {
  var img = document.querySelector("#imagemProdutoCoke");
  img.setAttribute("src", marcaCoke.imagem);
}

function exibirImagemPalmolive() {
  var img = document.querySelector("#imagemProdutoPalmolive");
  img.setAttribute("src", marcaPalmolive.imagem);
}