/*--- menu mobile ---*/
const MENU = document.querySelector('#menu-mobile')
const ICONE_MENU = document.querySelector('.icone-menu')
const EXIT = document.querySelector('#menu-exit')

function abrirMenuMobile() {
    MENU.classList.remove('display-menu')
}

function fecharMenuMobile() {
    MENU.classList.add('display-menu')
}

ICONE_MENU.onclick = abrirMenuMobile
EXIT.onclick = fecharMenuMobile

/*--- habilidades ---*/
const LISTA_HABILIDADES = document.querySelectorAll('.icones-habilidades')

for(let i = 0; i < LISTA_HABILIDADES.length; i++) {
    const HABILIDADE = LISTA_HABILIDADES[i]
    let idHabilidade = HABILIDADE.id
    
    HABILIDADE.onclick = function() {
        mostraTexto(idHabilidade)
    }
}

const descricoesHabilidades = {
    'habilidade-ux': 'UX Writing, Textos Simples e Conversacionais',
    'habilidade-dialogflow': 'Dialog Flow',
    'habilidade-voiceflow': 'Voice Flow',
    'habilidade-html-css': 'HTML e CSS',
    'habilidade-javascript': 'JavaScript (Back e Front End)',
    'habilidade-canva': 'Canva',
    'habilidade-search-google': 'Social e Search Listening',
    'habilidade-lego': 'Facilitação Criativa com LEGO Serious Play',
    'habilidade-design-thinking': 'Oficinas de Design Thinking e Prototipação'
}

function mostraTexto (idHabilidade) {
    let texto = document.querySelector('#texto-habilidades')
    let caixaDisplay = document.querySelector('#caixa-texto-habilidades')

    caixaDisplay.classList.remove('display-informacoes-habilidades')

    texto.innerHTML = descricoesHabilidades[idHabilidade] || ''
}



/*--- interesses ---*/
const LISTA_INTERESSES = document.querySelectorAll('.icones-interesses')

for(let i = 0; i < LISTA_INTERESSES.length; i++) {
    const INTERESSE = LISTA_INTERESSES[i]
    let idInteresse = INTERESSE.id
    
    INTERESSE.onclick = function() {
        mostraTexto(idInteresse)
    }
}

const descricoesInteresses = {
    'interesse-chatbot': 'Chatbots, Voicebots e plataformas conversacionais',
    'interesse-documentos': 'Documentos Simples e Fáceis de Ler (Plain Languagem e Design Law)',
    'interesse-programacao': 'Programação Back e Front End e Programação Low Code',
    'interesse-ux-ui': 'Experiência do Usuário (UX e UI)',
    'interesse-cafe': 'Um cafézinho bem feito alegra qualquer pessoa'
}

function mostraTexto (idInteresse) {
    let texto = document.querySelector('#texto-interesse')
    let caixaDisplay = document.querySelector('#caixa-texto-interesses')

    caixaDisplay.classList.remove('display-informacoes-interesses')

    texto.innerHTML = descricoesInteresses[idInteresse] || ''
}

