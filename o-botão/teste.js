// Elementos do html
const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("botao");
const disclick = document.getElementById("numero");
const cheatBar = document.getElementById("cheat-bar");
const cheatInput = document.getElementById("cheat-input");
const tituloint = document.getElementById("tituloint");
const telaFinal = document.getElementById('tela-final');
const elementoTexto = document.getElementById('texto-final');
const contadordis = document.getElementById("contador");
const obs = document.getElementById("aviso");

// Variaveis
const pop = new Audio("soms/pop_7e9Is8L.mp3");
const som1 = new Audio("soms/auughhh_DPgW9J1.mp3");
const som2 = new Audio("soms/susto-grito.mp3");
const som3 = new Audio("soms/mamboman-bo-shi-ge-ju-matikanetannhauser.mp3");
const cuscuz = new Audio("soms/oxente-cuscuz.mp3");
const gta = new Audio("soms/gta-cheat-sound.mp3")
const cucaracha = new Audio("soms/la-cucaracha-loud.mp3");
const glitch = new Audio("soms/glitch-sound-effect_FugN82U.mp3");


let contador = 0;
let to = "";
let cliquesNoTitulo = 0; // Conta os cliques no título secreto
let cheatCuscuzAtivo = false; // Estado do cheat cuscuz
let jumpscarecheck = false; // estado do check do jumpscare
let checkcucaracha = false; // estado do check do LA CUCARACHA-


//SISTEMA DE SALVAMENTO DE FINAIS!!!

//procura o progresso salvo,transforma o texto salvo num array e se nao tiver nenhum progresso, cria uma lista vazio.
let finaisDesbloqueados = JSON.parse(
    localStorage.getItem("finaisDesbloqueados")
) || [];
//fim de explicação

//essa função verifica se o jogador já possui o final. se nao possuir, adiciona e salva.
function desbloquearFinal(nome) {
    if (!finaisDesbloqueados.includes(nome)) {
        finaisDesbloqueados.push(nome);

        localStorage.setItem(
            "finaisDesbloqueados",
            JSON.stringify(finaisDesbloqueados)
        );

        console.log("Novo final desbloqueado: " + nome);
    }
}
//fim de explicação

//faz a galeria funcionar
const menuFinais = document.getElementById("menu-finais");
const abrirFinais = document.getElementById("abrir-finais");
const fecharFinais = document.getElementById("fechar-finais");

const listaFinais = document.getElementById("lista-finais");
const progressoFinais = document.getElementById("progresso-finais");

// Todos os finais existentes no jogo
const todosFinais = [
    "cuscuz",
    "jumpscare",
    "100 cliques",
    "la CUCARACHA-🌮",
    "comando destruidor",
    "pontos resetados",
    "trapaça para conseguir pontos",
];

// Abrir a galeria
abrirFinais.addEventListener("click", () => {
    atualizarGaleria();
    menuFinais.classList.remove("escondido");
});

// Fechar a galeria
fecharFinais.addEventListener("click", () => {
    menuFinais.classList.add("escondido");
});

// Atualizar os finais mostrados
function atualizarGaleria() {
    listaFinais.innerHTML = "";

    todosFinais.forEach(nome => {
        const desbloqueado =
            finaisDesbloqueados.includes(nome);

        const item = document.createElement("div");

        item.className = desbloqueado
            ? "final-item"
            : "final-item bloqueado";

        item.textContent = desbloqueado
            ? "🏆 " + nome
            : "🔒 ????????";

        listaFinais.appendChild(item);
    });

    const quantidade = todosFinais.filter(nome =>
        finaisDesbloqueados.includes(nome)
    ).length;

    progressoFinais.textContent =
        `${quantidade}/${todosFinais.length} finais`;
}
//fim de explicação

//desbloquearFinal() em final == salvar


// 🛠️ NOVO: Clique no título secreto para abrir a Cheat Bar
tituloint.addEventListener("click", () => {
	cliquesNoTitulo++;
	
	if (cliquesNoTitulo === 5) {
		gta.currentTime = 0;
		gta.play();
		cheatBar.classList.remove("escondido"); // Abre a barra!
		cheatInput.focus(); // Foca o cursor na caixa
		cliquesNoTitulo = 0; // Reseta o contador
	}
});

// Clique no botão principal
botao.addEventListener("click", () => {
	pop.currentTime = 0;
	pop.play();
	contador++;
	disclick.textContent = contador;

	// Se o cheat estiver ativo, o próximo clique faz a magica HAHAHA
	if (cheatCuscuzAtivo) {
		mensagem.textContent = "oxente";
		botao.style.fontSize = "108.8px";
		botao.style.height = "310px";
		botao.style.width = "400px";
		botao.style.backgroundImage = "url('imagens/cuscuz.jpg')";
		botao.textContent = "CUSCUZ";
        elementoTexto.innerText = "cuscuz :D 🌽";
        elementoTexto.style.color = "#ffd700"; // Amarelo cuscuz
        // Dispara o gatilho após 3 segundos (3000 milissegundos)
        setTimeout(() => {
            telaFinal.classList.add('ativa');
            }, 3000);
		cheatCuscuzAtivo = false;

	} else if (jumpscarecheck) {
		mensagem.textContent = "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH";
        botao.style.fontSize = "108.8px";
        botao.style.height = "1000px";
        botao.style.width = "800px";
        botao.style.backgroundImage = "url('imagens/OIP-538902560.jpg')";
        botao.textContent = "🈵🈵🈵🈵🈵🈵🈵🈵🈵";
        som2.currentTime = 0;
        som2.play();
        elementoTexto.innerText = "Fim de Jogo. Você não sobreviveu... 💀";
        elementoTexto.style.color = "#ff4d4d"; // Vermelho sangue
        // Dispara o gatilho no fim do áudio
        som2.addEventListener('ended', () => {
            telaFinal.classList.add('ativa');
        });
        jumpscarecheck = false;
	} else if (contador >= 100) {
        mensagem.textContent = "rapaz, ja clicou bastante né?"
        setTimeout(() => {
            telaFinal.classList.add('ativa');
            }, 3000);
        elementoTexto.innerText = "você conseguiu clicar 100 vezes!";
        elementoTexto.style.color = "white";

        setTimeout(() => {
            telaFinal.classList.add("escondido");
        }, 6000);
        desbloquearFinal("100 cliques");
    } else if (checkcucaracha) {
        botao.style.backgroundImage = "url('imagens/OIP-1045207200.jpg')";
        botao.style.backgroundPosition = "center";
        botao.style.backgroundRepeat = "no-repeat";
        botao.style.backgroundSize = "contain";
        mensagem.textContent = "soy mexicano mi amigo";
        cucaracha.currentTime = 0;
        cucaracha.play();
        checkcucaracha = false;
        elementoTexto.innerText = "LA CUCARACHA-🌮";
        elementoTexto.style.color = "white";
        cucaracha.addEventListener('ended', () => {
            telaFinal.classList.add('ativa');
        });
    } else {
        mensagem.textContent = "botão clicado!";
    }
});

// 2. Mouse Enter (Quando passa o mouse)
botao.addEventListener("mouseenter", () => {
    // 🔍 SÓ MUDA O TEXTO SE O CHEAT ESTIVER ATIVADO!
    if (cheatCuscuzAtivo) {
        cuscuz.currentTime = 0;
        cuscuz.play();
        to = botao.textContent;
        botao.textContent = "CUSCUZ"; 
    }
    // Se o cheat não estiver ativo, o mouse passa por cima e não muda nada no texto!
});

// 3. Mouse Leave (Quando tira o mouse)
botao.addEventListener("mouseleave", () => {
    // 🔍 SÓ RESTAURA O TEXTO SE O CHEAT ESTAVA ATIVADO!
    if (botao.textContent === "CUSCUZ") {
        botao.textContent = to;
        som3.currentTime = 0;
        som3.play();
    }
});
// 🛠️ NOVO: Validação dos Cheats digitados na barra
cheatInput.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        const codigo = cheatInput.value.toLowerCase().trim();
        
        if (codigo === "cuscuz") {
            cheatCuscuzAtivo = true; 
            mensagem.textContent = "dê o próximo clique no botão principal.";
            desbloquearFinal("cuscuz");
        } else if (codigo === "points") {
            contador += 500;
            disclick.textContent = contador;
            mensagem.textContent = "+500 cliques injetados!";
            desbloquearFinal("trapaça para conseguir pontos");
        } else if (codigo == "reset") {
            contador = 0;
            cheatCuscuzAtivo = false;
            disclick.textContent = contador;
            mensagem.textContent = "Sistema resetado.";
            botao.style = ""; // Limpa estilos injetados pelo cheat
            botao.textContent = "me clique!";
            desbloquearFinal("pontos resetados");
        } else if (codigo === "jumpscare") {
            jumpscarecheck = true;
            desbloquearFinal("jumpscare");
        } else if (codigo == "la cucaracha") {
            desbloquearFinal("la CUCARACHA-🌮");
            checkcucaracha = true;
            mensagem.textContent = "me sinto um pouco mexicano... dé um clique..";
        } else if (codigo == "sudo rm -rf /") {
            desbloquearFinal("comando destruidor");
            glitch.currentTime = 0;
            glitch.play();
            botao.style.backgroundColor = "purple";
            disclick.style.color = "purple";
            contadordis.style.color = "purple";
            mensagem.textContent = "10101010100100010101001010";
            botao.textContent = "FATAL ERROR";
            setTimeout(() => {
                botao.classList.add("escondido");
                disclick.classList.add("escondido");
                contadordis.classList.add("escondido");
                tituloint.classList.add("escondido");
                mensagem.classList.add("escondido");               
            }, 1000);
            glitch.addEventListener('ended', () => {
                telaFinal.classList.add('ativa')
                elementoTexto.innerText = "v0cê n10 d3ver1a t3r f31t0 1ss0...";
                setTimeout(() => {
                      elementoTexto.classList.add("escondido");
                      obs.innerText = "(AVISO: esse comando que você acabou de digitar, nao apaga ou baixa nenhum arquivo, mas nao execute esse comando num Sistema linux real, pois esse comando executado num Sistema real, pode deletar o diretorio root e inutilizar o Sistema, eu NÃO me responsabilizo por qualquer dano num Sistema linux causado pelo esse comando.";
                      obs.classList.add("visivel");
                  }, 2000);
            });
            elementoTexto.style.color = "purple";
            obs.style.color = "red";
        } else {
            mensagem.textContent = "Código inválido!";
        }
        
        cheatInput.value = ""; 
        cheatBar.classList.add("escondido"); // Fecha a barra automaticamente
    }
});
