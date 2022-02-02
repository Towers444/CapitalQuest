let perguntas = [
  {
    imagem: 'imgs/bandeira_russia.png',
    alternativaA: 'Moscou',
    alternativaB: 'São Petersburgo',
    alternativaC: 'Kiev',
    alternativaD: 'Pequim',
  },
  {
    imagem: 'imgs/bandeira_mexico.png',
    alternativaA: 'Manágua',
    alternativaB: 'Los Angeles',
    alternativaC: 'Cidade do México',
    alternativaD: 'San Diego',
  },
  {
    imagem: 'imgs/bandeira_estados_unidos.jpg',
    alternativaA: 'Nova York',
    alternativaB: 'Whashington D.C',
    alternativaC: 'Bogotá',
    alternativaD: 'Los Angeles',
  },
  {
    imagem: 'imgs/bandeira_franca.png',
    alternativaA: 'Lion',
    alternativaB: 'Berlin',
    alternativaC: 'Bruxelas',
    alternativaD: 'Paris',
  },
  {
    imagem: 'imgs/bandeira_italia.png',
    alternativaA: 'Roma',
    alternativaB: 'Nápoles',
    alternativaC: 'Vaticano',
    alternativaD: 'San Marino',
  },
  {
    imagem: 'imgs/bandeira_egito.png',
    alternativaA: 'Alexandria',
    alternativaB: 'Luxor',
    alternativaC: 'Luanda',
    alternativaD: 'Cairo',
  },
  {
    imagem: 'imgs/bandeira_japao.png',
    alternativaA: 'Tóquio',
    alternativaB: 'Kyoto',
    alternativaC: 'Nagasaki',
    alternativaD: 'Seul',
  },
  {
    imagem: 'imgs/bandeira_china.jpg',
    alternativaA: 'Shangai',
    alternativaB: 'Bangcoc',
    alternativaC: 'Hong Kong',
    alternativaD: 'Pequim',
  },
  {
    imagem: 'imgs/bandeira_alemanha.png',
    alternativaA: 'Munique',
    alternativaB: 'Varsóvia',
    alternativaC: 'Berlim',
    alternativaD: 'Colômbia',
  },
];

let contador = 0;
let pontuacao = 0;
let vidas = 3;
let tamanhoVetor = perguntas.length;
let variavelAuxiliar=0;
let $opcaoA = $('#opcaoA');
let $opcaoB = $('#opcaoB');
let $opcaoC = $('#opcaoC');
let $opcaoD = $('#opcaoD');
let $imagemBandeira = $('#imagemBandeira');
let $pontos = $('#score');
let $nomeJogador = $('.nomeJogador');
let $botaoModal = $('#botaoModal');
let $botaoJogarNovamente = $('#jogarNovamente');
let $botoesFecharModal = $('.fechar-modal');
let $nomeUsuario = $('#nomeUsuario');
let $pontuacaoFinal = $('.scoreFinal');

$('.opcoes').click(alternativaClicada);
$('#jogarNovamente').click(jogarNovamente);
$('#botaoModal').click(abrirModal);
$('.fechar-modal').click(fecharModal);
$('#jogar').click(trocarPagina);

$($nomeJogador).html(localStorage.getItem("nomeDoUsuario"));
$($pontuacaoFinal).html(localStorage.getItem("pontuacaoFinal"));

function alternativaClicada(event) {

  let alternativaSelecionada = event.currentTarget;
  switch (contador) {
    case 0: 
    if(alternativaSelecionada.id === 'opcaoB'){
      pontuacao += 100;
    } else {
      if(vidas === 3) {
      $('#coracao3').addClass('menosVida');
      }
      if(vidas === 2) {
        $('#coracao2').addClass('menosVida');
      }
      if(vidas === 1) {
        $('#coracao1').addClass('menosVida');
      }
      vidas--;
    }
    break;
    case 1: 
    if(alternativaSelecionada.id === 'opcaoA'){
      pontuacao += 100;
    } else {
      if(vidas === 3) {
        $('#coracao3').addClass('menosVida');
        }
        if(vidas === 2) {
          $('#coracao2').addClass('menosVida');
        }
        if(vidas === 1) {
          $('#coracao1').addClass('menosVida');
        }
        vidas--;
    }
    break;
    case 2: 
    if(alternativaSelecionada.id === 'opcaoC'){
      pontuacao += 100;
    } else {
      if(vidas === 3) {
        $('#coracao3').addClass('menosVida');
        }
        if(vidas === 2) {
          $('#coracao2').addClass('menosVida');
        }
        if(vidas === 1) {
          $('#coracao1').addClass('menosVida');
        }
        vidas--;
    }
    break;
    case 3: 
    if(alternativaSelecionada.id === 'opcaoB'){
      pontuacao += 100;
    } else {
      if(vidas === 3) {
        $('#coracao3').addClass('menosVida');
        }
        if(vidas === 2) {
          $('#coracao2').addClass('menosVida');
        }
        if(vidas === 1) {
          $('#coracao1').addClass('menosVida');
        }
        vidas--;
    }
    break;
    case 4: 
    if(alternativaSelecionada.id === 'opcaoD'){
      pontuacao += 100;
    } else {
      if(vidas === 3) {
        $('#coracao3').addClass('menosVida');
        }
        if(vidas === 2) {
          $('#coracao2').addClass('menosVida');
        }
        if(vidas === 1) {
          $('#coracao1').addClass('menosVida');
        }
        vidas--;
    }
    break;
    case 5: 
    if(alternativaSelecionada.id === 'opcaoA'){
      pontuacao += 100;
    } else {
      if(vidas === 3) {
        $('#coracao3').addClass('menosVida');
        }
        if(vidas === 2) {
          $('#coracao2').addClass('menosVida');
        }
        if(vidas === 1) {
          $('#coracao1').addClass('menosVida');
        }
        vidas--;
    }
    break;
    case 6: 
    if(alternativaSelecionada.id === 'opcaoD'){
      pontuacao += 100;
    } else {
      if(vidas === 3) {
        $('#coracao3').addClass('menosVida');
        }
        if(vidas === 2) {
          $('#coracao2').addClass('menosVida');
        }
        if(vidas === 1) {
          $('#coracao1').addClass('menosVida');
        }
        vidas--;
    }
    break;
    case 7: 
    if(alternativaSelecionada.id === 'opcaoA'){
      pontuacao += 100;
    } else {
      if(vidas === 3) {
        $('#coracao3').addClass('menosVida');
        }
        if(vidas === 2) {
          $('#coracao2').addClass('menosVida');
        }
        if(vidas === 1) {
          $('#coracao1').addClass('menosVida');
        }
        vidas--;
    }
    break;
    case 8: 
    if(alternativaSelecionada.id === 'opcaoD'){
      pontuacao += 100;
    } else {
      if(vidas === 3) {
        $('#coracao3').addClass('menosVida');
        }
        if(vidas === 2) {
          $('#coracao2').addClass('menosVida');
        }
        if(vidas === 1) {
          $('#coracao1').addClass('menosVida');
        }
        vidas--;
    }
    break;
    case 9: 
    variavelAuxiliar=1;
    if(alternativaSelecionada.id === 'opcaoC'){
      pontuacao += 100;
    } else {
      if(vidas === 3) {
        $('#coracao3').addClass('menosVida');
        }
        if(vidas === 2) {
          $('#coracao2').addClass('menosVida');
        }
        if(vidas === 1) {
          $('#coracao1').addClass('menosVida');
        }
        vidas--;
          }
    break;
  }

  $($pontos).html(pontuacao);

  if  (variavelAuxiliar===1 & vidas >= 1) {

    localStorage.setItem("pontuacaoFinal", pontuacao);
    window.location.href = 'vitoria.html';

  }
  if(vidas===0) {

    localStorage.setItem("pontuacaoFinal", pontuacao);
    window.location.href = 'derrota.html';

  }

  $($imagemBandeira).attr("src", perguntas[contador].imagem);
  $($opcaoA).html(perguntas[contador].alternativaA);
  $($opcaoB).html(perguntas[contador].alternativaB);
  $($opcaoC).html(perguntas[contador].alternativaC);
  $($opcaoD).html(perguntas[contador].alternativaD);
  
  if (contador <= tamanhoVetor) {
    contador++;
  }

}

function jogarNovamente () {

  window.location.href = 'index.html';

}

function abrirModal () {

  
  $('.modal').addClass('visivel');

}

function fecharModal () {

  $('.modal').removeClass('visivel');

}

function trocarPagina() {
  let valorNomeUsuario = $nomeUsuario.val();
  if(!valorNomeUsuario) {
      alert("Digite seu nome!");
      return;
  }
  localStorage.setItem("nomeDoUsuario", valorNomeUsuario);
  window.location.href = 'capitalQuest.html';

}
