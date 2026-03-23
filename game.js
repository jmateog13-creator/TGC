const cartasBD = [
    // 1. Cuerda Frotada — Resonancia: recupera PA al inicio de tu turno
    { id: 'c_02', nombre: 'Violín',      familia: 'Cuerda Frotada', costo: 2, ataque: 300, defensa: 200,  descripcion: 'Tropa base ágil. El más agudo de las cuerdas.', emoji: '🎻', imagen: 'img/cartas/cartaviolin.png',
      habilidad: { nombre: 'Resonancia', descripcion: 'Recupera 60 PA al inicio de tu turno.', tipo: 'regen', valor: 60 } },
    { id: 'c_03', nombre: 'Viola',       familia: 'Cuerda Frotada', costo: 3, ataque: 200, defensa: 500,  descripcion: 'Defensa media. Cuerda de sonido melancólico.', emoji: '🎻', imagen: 'img/cartas/cartaviola.png',
      habilidad: { nombre: 'Resonancia', descripcion: 'Recupera 90 PA al inicio de tu turno.', tipo: 'regen', valor: 90 } },
    { id: 'c_04', nombre: 'Violonchelo', familia: 'Cuerda Frotada', costo: 4, ataque: 400, defensa: 500,  descripcion: 'Luchador equilibrado. Instrumento grande con pica.', emoji: '🎻', imagen: 'img/cartas/cartacello.png',
      habilidad: { nombre: 'Resonancia', descripcion: 'Recupera 120 PA al inicio de tu turno.', tipo: 'regen', valor: 120 } },
    { id: 'c_06', nombre: 'Contrabajo',  familia: 'Cuerda Frotada', costo: 6, ataque: 300, defensa: 1000, descripcion: 'Tanque principal. El gigante de cuerdas graves.', emoji: '🎻', imagen: 'img/cartas/cartacontrabajo.png',
      habilidad: { nombre: 'Resonancia', descripcion: 'Recupera 180 PA al inicio de tu turno.', tipo: 'regen', valor: 180 } },

    // 1. Cuerda Pulsada — Punteo: primer ataque hace el doble de daño
    { id: 'c_01', nombre: 'Guitarra Clásica', familia: 'Cuerda Pulsada', costo: 2, ataque: 300, defensa: 200, descripcion: 'Daño temprano. Caja con seis cuerdas de nailon.', emoji: '🎸', imagen: 'img/cartas/cartaguitarra.png',
      habilidad: { nombre: 'Punteo', descripcion: 'Su primer ataque hace el doble de daño.', tipo: 'primer_ataque' } },
    { id: 'c_05', nombre: 'Arpa',         familia: 'Cuerda Pulsada', costo: 5, ataque: 300, defensa: 800,  descripcion: 'Muro defensivo. Gran marco de cuerdas tensadas.', emoji: '🎼', imagen: 'img/cartas/cartaarpa.png',
      habilidad: { nombre: 'Punteo', descripcion: 'Su primer ataque hace el doble de daño.', tipo: 'primer_ataque' } },
    { id: 'c_08', nombre: 'Ukelele',      familia: 'Cuerda Pulsada', costo: 1, ataque: 200, defensa: 100,  descripcion: 'Tropa barata. Instrumento pequeño hawaiano de cuatro cuerdas.', emoji: '🎸', imagen: 'img/cartas/cartaukelele.png',
      habilidad: { nombre: 'Punteo', descripcion: 'Su primer ataque hace el doble de daño.', tipo: 'primer_ataque' } },

    // 1. Cuerda Percutida — Impacto Total: daña a todos los enemigos en campo
    { id: 'c_07', nombre: 'Piano', familia: 'Cuerda Percutida', costo: 8, ataque: 700, defensa: 1000, descripcion: 'Rematador pesado. Teclado de cuerdas percutidas.', emoji: '🎹', imagen: 'img/cartas/cartapiano.png',
      habilidad: { nombre: 'Impacto Total', descripcion: 'Al atacar, daña a todos los instrumentos rivales en campo.', tipo: 'splash' } },

    // 2. Viento Madera — Ágil: puede atacar el mismo turno que se juega
    { id: 'v_01', nombre: 'Flauta Travesera', familia: 'Viento Madera', costo: 1, ataque: 200, defensa: 100, descripcion: 'Apertura rápida. Tubo cilíndrico de sonido agudo.', emoji: '🌬️', imagen: 'img/cartas/cartaflautatravesera.png',
      habilidad: { nombre: 'Ágil', descripcion: 'Puede atacar el mismo turno que se juega.', tipo: 'sin_cansancio' } },
    { id: 'v_02', nombre: 'Oboe',    familia: 'Viento Madera', costo: 2, ataque: 400, defensa: 100, descripcion: 'Ataque punzante, frágil. Lengüeta doble.', emoji: '🎋', imagen: 'img/cartas/cartaoboe.png',
      habilidad: { nombre: 'Ágil', descripcion: 'Puede atacar el mismo turno que se juega.', tipo: 'sin_cansancio' } },
    { id: 'v_03', nombre: 'Clarinete', familia: 'Viento Madera', costo: 3, ataque: 400, defensa: 300, descripcion: 'Tropa agresiva. Tubo de madera oscuro.', emoji: '🥖', imagen: 'img/cartas/cartaclarinete.png',
      habilidad: { nombre: 'Ágil', descripcion: 'Puede atacar el mismo turno que se juega.', tipo: 'sin_cansancio' } },
    { id: 'v_05', nombre: 'Saxofón', familia: 'Viento Madera', costo: 4, ataque: 500, defensa: 400, descripcion: 'Luchador versátil. Cuerpo metálico pero caña de madera.', emoji: '🎷', imagen: 'img/cartas/cartasaxofon.png',
      habilidad: { nombre: 'Ágil', descripcion: 'Puede atacar el mismo turno que se juega.', tipo: 'sin_cansancio' } },
    { id: 'v_06', nombre: 'Fagot',   familia: 'Viento Madera', costo: 5, ataque: 400, defensa: 700, descripcion: 'Soporte pesado. El bajo de la familia de madera.', emoji: '🪵', imagen: 'img/cartas/cartafagot.png',
      habilidad: { nombre: 'Ágil', descripcion: 'Puede atacar el mismo turno que se juega.', tipo: 'sin_cansancio' } },
    { id: 'v_11', nombre: 'Acordeón', familia: 'Viento Madera', costo: 3, ataque: 300, defensa: 400, descripcion: 'Luchador callejero. Fuelle portátil de sonido rústico.', emoji: '🪗', imagen: 'img/cartas/cartaacordeon.png',
      habilidad: { nombre: 'Ágil', descripcion: 'Puede atacar el mismo turno que se juega.', tipo: 'sin_cansancio' } },

    // 2. Viento Metal — Fanfarria: puede atacar al Director aunque haya rivales en campo
    { id: 'v_04', nombre: 'Trompeta', familia: 'Viento Metal', costo: 4, ataque: 700, defensa: 200,  descripcion: 'Daño explosivo (Cañón). Tubo de metal con válvulas.', emoji: '🎺', imagen: 'img/cartas/cartatrompeta.png',
      habilidad: { nombre: 'Fanfarria', descripcion: 'Puede atacar al Director rival aunque haya instrumentos en campo.', tipo: 'ataque_directo' } },
    { id: 'v_07', nombre: 'Trompa',  familia: 'Viento Metal', costo: 5, ataque: 500, defensa: 600,  descripcion: 'Metal equilibrado. Tubo circular muy enrollado.', emoji: '📯', imagen: 'img/cartas/cartatrompa.png',
      habilidad: { nombre: 'Fanfarria', descripcion: 'Puede atacar al Director rival aunque haya instrumentos en campo.', tipo: 'ataque_directo' } },
    { id: 'v_08', nombre: 'Trombón', familia: 'Viento Metal', costo: 6, ataque: 800, defensa: 500,  descripcion: 'Destructor de defensas. Metal con vara corredera.', emoji: '📯', imagen: 'img/cartas/cartatrombon.png',
      habilidad: { nombre: 'Fanfarria', descripcion: 'Puede atacar al Director rival aunque haya instrumentos en campo.', tipo: 'ataque_directo' } },
    { id: 'v_09', nombre: 'Tuba',    familia: 'Viento Metal', costo: 7, ataque: 500, defensa: 1000, descripcion: 'Muro acústico gigante. Soporte indispensable de vientos.', emoji: '📯', imagen: 'img/cartas/cartatuba.png',
      habilidad: { nombre: 'Fanfarria', descripcion: 'Puede atacar al Director rival aunque haya instrumentos en campo.', tipo: 'ataque_directo' } },

    // 2. Viento Especial — Acorde Mayor: al entrar inflige daño directo al Director rival
    { id: 'v_10', nombre: 'Órgano', familia: 'Viento Especial', costo: 10, ataque: 1000, defensa: 1100, descripcion: 'Jefe Final. El rey de los instrumentos, tubos gigantes.', emoji: '⛪', imagen: 'img/cartas/cartaorgano.png',
      habilidad: { nombre: 'Acorde Mayor', descripcion: 'Al entrar en escena, inflige 500 de daño al Director rival.', tipo: 'entrada_dano', valor: 500 } },

    // 3. Percusión Determinada — Melodía: al atacar, da +ataque a un aliado
    { id: 'p_03', nombre: 'Xilófono',   familia: 'Percusión Determinada', costo: 3, ataque: 500, defensa: 200, descripcion: 'Ataque preciso. Láminas de madera percutidas.', emoji: '🎹', imagen: 'img/cartas/cartaxilofono.png',
      habilidad: { nombre: 'Melodía', descripcion: 'Al atacar, da +100 de ataque a un instrumento aliado.', tipo: 'buff_aliado', valor: 100 } },
    { id: 'p_04', nombre: 'Metalófono', familia: 'Percusión Determinada', costo: 4, ataque: 600, defensa: 300, descripcion: 'Daño contundente. Vibráfono o campanas metálicas.', emoji: '🔔', imagen: 'img/cartas/cartametalofono.png',
      habilidad: { nombre: 'Melodía', descripcion: 'Al atacar, da +100 de ataque a un instrumento aliado.', tipo: 'buff_aliado', valor: 100 } },
    { id: 'p_07', nombre: 'Timbales',   familia: 'Percusión Determinada', costo: 7, ataque: 700, defensa: 800, descripcion: 'Tropa de élite. Calderos de cobre afinables.', emoji: '🥁', imagen: 'img/cartas/cartatimbales.png',
      habilidad: { nombre: 'Melodía', descripcion: 'Al atacar, da +150 de ataque a un instrumento aliado.', tipo: 'buff_aliado', valor: 150 } },

    // 3. Percusión Indeterminada — Golpe Final: al ser destruido, inflige daño al Director rival
    { id: 'p_01', nombre: 'Triángulo', familia: 'Percusión Indeterminada', costo: 1, ataque: 100, defensa: 200, descripcion: 'Utilidad barata. Varilla metálica doblada.', emoji: '🔺', imagen: 'img/cartas/cartatriangulo.png',
      habilidad: { nombre: 'Golpe Final', descripcion: 'Al ser destruido, inflige su Ataque al Director que lo destruyó.', tipo: 'muerte_dano' } },
    { id: 'p_02', nombre: 'Pandereta', familia: 'Percusión Indeterminada', costo: 2, ataque: 200, defensa: 300, descripcion: 'Defensa ligera. Marco con sonajas metálicas.', emoji: '🪇', imagen: 'img/cartas/cartapandereta.png',
      habilidad: { nombre: 'Golpe Final', descripcion: 'Al ser destruido, inflige su Ataque al Director que lo destruyó.', tipo: 'muerte_dano' } },
    { id: 'p_05', nombre: 'Platos',    familia: 'Percusión Indeterminada', costo: 5, ataque: 900, defensa: 200, descripcion: 'Ataque suicida masivo. Dos discos chocando.', emoji: '💿', imagen: 'img/cartas/cartaplatos.png',
      habilidad: { nombre: 'Golpe Final', descripcion: 'Al ser destruido, inflige su Ataque al Director que lo destruyó.', tipo: 'muerte_dano' } },
    { id: 'p_06', nombre: 'Bombo',     familia: 'Percusión Indeterminada', costo: 6, ataque: 400, defensa: 900, descripcion: 'Absorbedor de daño. El tambor más grave.', emoji: '🥁', imagen: 'img/cartas/cartabombo.png',
      habilidad: { nombre: 'Golpe Final', descripcion: 'Al ser destruido, inflige su Ataque al Director que lo destruyó.', tipo: 'muerte_dano' } },
    { id: 'p_08', nombre: 'Batería',   familia: 'Percusión Indeterminada', costo: 8, ataque: 800, defensa: 900, descripcion: 'El motor del ritmo. Conjunto masivo de tambores y platos.', emoji: '🥁', imagen: 'img/cartas/cartabateria.png',
      habilidad: { nombre: 'Golpe Final', descripcion: 'Al ser destruido, inflige su Ataque al Director que lo destruyó.', tipo: 'muerte_dano' } },

    // 4. Electrónicos — Amplificación: al entrar, da +ataque a todos los aliados en campo
    { id: 'e_01', nombre: 'Teclado MIDI',      familia: 'Electrónico', costo: 3, ataque: 300, defensa: 400, descripcion: 'Soporte flexible. Controlador digital silencioso por sí mismo.', emoji: '⌨️', imagen: 'img/cartas/cartatecladomidi.png',
      habilidad: { nombre: 'Amplificación', descripcion: 'Al entrar, da +80 de ataque a todos tus instrumentos en campo.', tipo: 'amplificar', valor: 80 } },
    { id: 'e_02', nombre: 'Sintetizador',      familia: 'Electrónico', costo: 4, ataque: 500, defensa: 400, descripcion: 'Daño constante. Creador de ondas artificiales.', emoji: '🎛️', imagen: 'img/cartas/cartasintetizador.png',
      habilidad: { nombre: 'Amplificación', descripcion: 'Al entrar, da +100 de ataque a todos tus instrumentos en campo.', tipo: 'amplificar', valor: 100 } },
    { id: 'e_03', nombre: 'Bajo Eléctrico',    familia: 'Electrónico', costo: 5, ataque: 400, defensa: 700, descripcion: 'Base rítmica sólida. Sostiene el groove de la banda.', emoji: '🎸', imagen: 'img/cartas/cartabajoelectrico.png',
      habilidad: { nombre: 'Amplificación', descripcion: 'Al entrar, da +100 de ataque a todos tus instrumentos en campo.', tipo: 'amplificar', valor: 100 } },
    { id: 'e_04', nombre: 'Guitarra Eléctrica', familia: 'Electrónico', costo: 6, ataque: 800, defensa: 500, descripcion: 'Rematador eléctrico. Melodías desgarradoras y distorsión.', emoji: '⚡', imagen: 'img/cartas/cartaguitarraelectrica.png',
      habilidad: { nombre: 'Amplificación', descripcion: 'Al entrar, da +150 de ataque a todos tus instrumentos en campo.', tipo: 'amplificar', valor: 150 } },
];

const estado = {
    turnoActual: 1,
    jugadorActual: 'player',
    playerHpMax: 5000,
    aiHpMax: 8000,
    player: {
        nombre: 'Tu Director',
        hp: 8000, tempoMax: 1, tempoActual: 1,
        mazo: [], mano: [], escenario: []
    },
    ai: {
        hp: 8000, tempoMax: 1, tempoActual: 1,
        mazo: [], mano: [], escenario: []
    }
};

let draggingCard = null;
let cardCounter = 0;
let rachaVictorias = 0;
let atacanteSeleccionado = null;
const bossNames = ["Aprendiz", "Promesa", "Titular", "Virtuoso", "Maestro"];

// ALBUM & ECONOMY STATE
let cartasDescubiertas = JSON.parse(localStorage.getItem('symphonicClashAlbum')) || [];
let notasDeOro = parseInt(localStorage.getItem('symphonicClashOro')) || 100; // Start with 100 to open a pack!
let mazoJugador = JSON.parse(localStorage.getItem('symphonicClashMazo')) || [];

function descubrirCarta(baseId) {
    if (!cartasDescubiertas.includes(baseId)) {
        cartasDescubiertas.push(baseId);
        localStorage.setItem('symphonicClashAlbum', JSON.stringify(cartasDescubiertas));
    }
}

function actualizarEconomia() {
    localStorage.setItem('symphonicClashOro', notasDeOro);
    const mDisplay = document.getElementById('player-gold-display');
    const sDisplay = document.getElementById('store-gold-display');
    if (mDisplay) mDisplay.innerText = notasDeOro;
    if (sDisplay) sDisplay.innerText = notasDeOro;
}

function actualizarMazoContador() {
    const cDisplay = document.getElementById('menu-deck-count');
    if (cDisplay) cDisplay.innerText = mazoJugador.length;
}

// ========================
// TOAST NOTIFICATION SYSTEM
// ========================
function mostrarToast(mensaje, tipo = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensaje;
    container.appendChild(toast);
    setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 2800);
}

// ========================
// FLOATING DAMAGE NUMBERS
// ========================
function mostrarDano(targetElem, cantidad, esHeal = false) {
    const rect = targetElem.getBoundingClientRect();
    const dmg = document.createElement('div');
    dmg.className = 'floating-damage' + (esHeal ? ' heal' : '');
    dmg.textContent = (esHeal ? '+' : '-') + formatStat(cantidad);
    dmg.style.left = (rect.left + rect.width / 2 - 30) + 'px';
    dmg.style.top = (rect.top + rect.height / 3) + 'px';
    document.body.appendChild(dmg);
    
    // Pass visual feedback
    if (cantidad >= 500) aplicarShake();

    setTimeout(() => {
        if (dmg.parentNode) dmg.parentNode.removeChild(dmg);
    }, 1300);
}

function aplicarShake() {
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 400);
}

function aplicarFlash(elemento) {
    elemento.classList.add('damage-flash');
    setTimeout(() => elemento.classList.remove('damage-flash'), 150);
}

// ========================
// STAT FORMATTING
// ========================
function formatStat(valor) {
    if (valor >= 1000) {
        const k = valor / 1000;
        return Number.isInteger(k) ? k + 'K' : k.toFixed(1) + 'K';
    }
    return valor.toString();
}

const elems = {
    player: {
        hp: document.getElementById('player-hp'),
        tempo: document.getElementById('player-tempo'),
        maxTempo: document.getElementById('player-max-tempo'),
        hand: document.getElementById('player-hand'),
        stage: document.getElementById('player-stage'),
        deckCount: document.getElementById('player-deck-count'),
        deckBtn: document.getElementById('player-deck'),
        hpBar: document.getElementById('player-hp-bar'),
        hpText: document.getElementById('player-hp-text')
    },
    ai: {
        hp: document.getElementById('ai-hp'),
        tempo: document.getElementById('ai-tempo'),
        maxTempo: document.getElementById('ai-max-tempo'),
        hand: document.getElementById('ai-hand'),
        stage: document.getElementById('ai-stage'),
        deckCount: document.getElementById('ai-deck-count'),
        hpBar: document.getElementById('ai-hp-bar'),
        hpText: document.getElementById('ai-hp-text')
    },
    playerNameDisplay: document.getElementById('player-director-name'),
    btnEndTurn: document.getElementById('btn-end-turn')
};

function init() {
    actualizarEconomia();
    actualizarMazoContador();

    // Check first time playing
    if (!localStorage.getItem('sc_hasPlayed')) {
        document.getElementById('welcome-modal').classList.remove('hidden');
    }

    // Welcome Screen listeners
    document.getElementById('btn-open-welcome-pack').addEventListener('click', startWelcomeFlow);
    document.getElementById('btn-close-welcome').addEventListener('click', () => {
        document.getElementById('welcome-modal').classList.add('hidden');
        localStorage.setItem('sc_hasPlayed', 'true');
    });

    // Menu listeners
    document.getElementById('btn-play').addEventListener('click', () => {
        if(mazoJugador.length < 10) {
            mostrarToast("⚠️ Necesitas construir tu mazo (10 cartas) primero.", "danger");
            return;
        }
        iniciarPartida();
    });
    document.getElementById('btn-menu-help').addEventListener('click', () => {
        document.getElementById('instructions-modal').classList.remove('hidden');
    });
    document.getElementById('btn-close-help').addEventListener('click', () => {
        document.getElementById('instructions-modal').classList.add('hidden');
    });
    document.getElementById('btn-reset-data').addEventListener('click', () => {
        if(confirm("⚠️ ¿Estás seguro de que quieres BORRAR TODA TU PARTIDA? Perderás tus cartas, tus mazos y tus Notas de Oro. Esta acción es irreversible.")) {
            localStorage.clear();
            location.reload();
        }
    });
    document.getElementById('btn-help').addEventListener('click', () => {
        document.getElementById('instructions-modal').classList.remove('hidden');
    });

    // Quiz listeners
    document.getElementById('btn-menu-quiz').addEventListener('click', abrirQuiz);
    document.getElementById('btn-close-quiz').addEventListener('click', () => {
        document.getElementById('quiz-modal').classList.add('hidden');
    });
    document.getElementById('btn-claim-quiz-reward').addEventListener('click', () => {
        document.getElementById('quiz-modal').classList.add('hidden');
        notasDeOro += 100;
        actualizarEconomia();
        abrirSobre(); // jump explicitly to booster pack opening
    });

    // Store & Deckbuilder
    document.getElementById('btn-menu-store').addEventListener('click', () => {
        actualizarEconomia();
        document.getElementById('store-modal').classList.remove('hidden');
    });
    document.getElementById('btn-close-store').addEventListener('click', () => {
        document.getElementById('store-modal').classList.add('hidden');
        actualizarEconomia();
    });
    document.getElementById('btn-buy-pack').addEventListener('click', abrirSobre);
    document.getElementById('btn-finish-opening').addEventListener('click', () => {
        document.getElementById('pack-opening-modal').classList.add('hidden');
        document.getElementById('opened-cards-container').innerHTML = '';
        document.getElementById('pack-opening-title').classList.add('hidden');
        document.getElementById('btn-finish-opening').classList.add('hidden');
        actualizarEconomia();
    });

    document.getElementById('btn-menu-deck').addEventListener('click', abrirDeckbuilder);
    document.getElementById('btn-close-deckbuilder').addEventListener('click', () => {
        document.getElementById('deckbuilder-modal').classList.add('hidden');
        actualizarMazoContador();
    });
    document.getElementById('btn-save-deck').addEventListener('click', guardarMazo);

    // Album listeners
    document.getElementById('btn-menu-album').addEventListener('click', abrirAlbum);
    document.getElementById('btn-close-album').addEventListener('click', () => {
        document.getElementById('album-modal').classList.add('hidden');
    });

    // Game result modal
    document.getElementById('btn-result-ok').addEventListener('click', () => {
        document.getElementById('game-result-modal').classList.add('hidden');
    });

    // Game listeners
    elems.btnEndTurn.addEventListener('click', terminarTurno);
    elems.player.deckBtn.addEventListener('click', robarCartaJugador);

    document.getElementById('ai-director-area').addEventListener('click', (e) => {
        e.stopPropagation();
        atacarObjetivo(null, 'director');
    });

    document.body.addEventListener('click', (e) => {
        if (!e.target.closest('.card') && !e.target.closest('#ai-director-area')) {
            deseleccionarAtacante();
        }
    });

    setupDragAndDrop();
    actualizarRachaNodos();
}

function iniciarPartida() {
    let aiHpBase = 3500 + (rachaVictorias * 1000);
    let aiTempoBase = 3 + rachaVictorias;

    const inputNombre = document.getElementById('player-name-input').value.trim();
    estado.player.nombre = inputNombre || 'Tu Director';
    elems.playerNameDisplay.textContent = estado.player.nombre;

    estado.turnoActual = 1;
    estado.jugadorActual = 'player';
    estado.playerHpMax = 5000;
    estado.aiHpMax = aiHpBase;
    estado.player = { ...estado.player, hp: 5000, tempoMax: 5, tempoActual: 5, mazo: [], mano: [], escenario: [] };
    estado.ai = { hp: aiHpBase, tempoMax: aiTempoBase, tempoActual: aiTempoBase, mazo: [], mano: [], escenario: [] };

    estado.player.mazo = generarMazo(true);
    estado.ai.mazo = generarMazo(false);

    for (let i = 0; i < 5; i++) {
        robarCartaInterno('player');
        robarCartaInterno('ai');
    }

    document.getElementById('main-menu').classList.add('hidden');
    
    // Show dialogue intercepting the board rendering
    showBossDialogue(rachaVictorias);
}

function proceedToBoard() {
    document.getElementById('dialogue-overlay').classList.add('hidden');
    document.getElementById('game-board').classList.remove('hidden');

    elems.btnEndTurn.disabled = false;
    elems.btnEndTurn.textContent = "Fin de Turno";

    actualizarUI();
    renderizarMano('player');
    renderizarMano('ai');
    renderizarEscenario('player');
    renderizarEscenario('ai');
    actualizarTurnIndicator();
}

function generarMazo(isPlayer) {
    let mazo = [];
    if (isPlayer && mazoJugador.length === 10) {
        for (let i = 0; i < 30; i++) {
            let cardId = mazoJugador[i % 10];
            let cardDef = cartasBD.find(c => c.id === cardId);
            if(cardDef) mazo.push({ ...cardDef, instanceId: `card_${cardCounter++}`, sleeping: false });
        }
        mazo.sort(() => Math.random() - 0.5);
    } else {
        for (let i = 0; i < 30; i++) {
            let randomCard = cartasBD[Math.floor(Math.random() * cartasBD.length)];
            mazo.push({ ...randomCard, instanceId: `card_${cardCounter++}`, sleeping: false });
        }
    }
    return mazo;
}

function robarCartaInterno(jugadorKey) {
    const jugador = estado[jugadorKey];
    if (jugador.mazo.length > 0) {
        if (jugador.mano.length < 10) {
            const cartaRobada = jugador.mazo.pop();
            jugador.mano.push(cartaRobada);
            if (jugadorKey === 'player') {
                descubrirCarta(cartaRobada.id);
            }
        } else {
            jugador.mazo.pop();
        }
    } else {
        jugador.hp -= 500;
    }
}

function robarCartaJugador() {
    if (estado.jugadorActual !== 'player') return;
    if (estado.player.tempoActual >= 1) {
        estado.player.tempoActual -= 1;
        robarCartaInterno('player');
        actualizarUI();
        renderizarMano('player');
    } else {
        mostrarToast("⚠️ No tienes Tempo suficiente para robar. (Cuesta 1)", "danger");
    }
}

function actualizarUI() {
    elems.player.hp.textContent = estado.player.hp;
    elems.player.tempo.textContent = estado.player.tempoActual;
    elems.player.maxTempo.textContent = estado.player.tempoMax;
    elems.player.deckCount.textContent = estado.player.mazo.length;

    elems.ai.hp.textContent = estado.ai.hp;
    elems.ai.tempo.textContent = estado.ai.tempoActual;
    elems.ai.maxTempo.textContent = estado.ai.tempoMax;
    elems.ai.deckCount.textContent = estado.ai.mazo.length;

    document.getElementById('player-streak-ingame').textContent = rachaVictorias;
    actualizarRachaNodos();
    actualizarHPBars();
}

function actualizarHPBars() {
    const playerPercent = Math.max(0, (estado.player.hp / estado.playerHpMax) * 100);
    const aiPercent = Math.max(0, (estado.ai.hp / estado.aiHpMax) * 100);

    elems.player.hpBar.style.width = playerPercent + '%';
    elems.ai.hpBar.style.width = aiPercent + '%';

    elems.player.hpText.textContent = estado.player.hp;
    elems.ai.hpText.textContent = estado.ai.hp;

    // Low HP warning
    elems.player.hpBar.classList.toggle('low', playerPercent <= 25);
    elems.ai.hpBar.classList.toggle('low', aiPercent <= 25);
}

function actualizarTurnIndicator() {
    document.getElementById('player-director-area').classList.toggle('active-turn', estado.jugadorActual === 'player');
    document.getElementById('ai-director-area').classList.toggle('active-turn', estado.jugadorActual === 'ai');
}

function actualizarRachaNodos() {
    for (let i = 0; i < 5; i++) {
        let node = document.getElementById(`boss-${i}`);
        if (!node) continue;
        node.classList.remove('current', 'beaten');
        if (i < rachaVictorias) {
            node.classList.add('beaten');
        } else if (i === rachaVictorias) {
            node.classList.add('current');
        }
    }
    let currentName = bossNames[Math.min(rachaVictorias, 4)];
    document.getElementById('menu-streak-name').textContent = currentName;
}

function mostrarResultado(victoria) {
    const modal = document.getElementById('game-result-modal');
    const icon = document.getElementById('result-icon');
    const title = document.getElementById('result-title');
    const message = document.getElementById('result-message');

    if (victoria) {
        if (rachaVictorias >= 5) {
            icon.textContent = '🏆';
            title.textContent = '¡CAMPAÑA COMPLETADA!';
            title.style.color = '#ffdd44';
            message.textContent = 'Has derrotado a la IA 5 veces consecutivas y eres un Maestro Director. ¡La orquesta es tuya!';
        } else {
            icon.textContent = '🎵';
            title.textContent = '¡Concierto un Éxito!';
            title.style.color = '#55ee55';
            message.textContent = `Has vencido al Director rival. Racha actual: ${rachaVictorias}/5.`;
        }
    } else {
        icon.textContent = '💀';
        title.textContent = '¡Has Perdido!';
        title.style.color = '#ff5555';
        message.textContent = 'Tus Puntos de Audiencia llegaron a 0. Tu racha vuelve a cero. ¡Inténtalo de nuevo!';
    }

    modal.classList.remove('hidden');
}

function terminarPartida(victoria) {
    const modal = document.getElementById('game-result-modal');
    const msj = document.getElementById('result-message');
    const icon = document.getElementById('result-icon');
    const titulo = document.getElementById('result-title');

    modal.classList.remove('hidden');

    if (victoria) {
        rachaVictorias++;
        notasDeOro += 50;
        actualizarEconomia();

        let defeatedBoss = bossNames[rachaVictorias - 1] || 'Director Vencido';
        icon.className = 'result-icon win';
        titulo.innerText = '¡Gran Actuación!';
        msj.innerText = `Tu sinfonía ha silenciado al ${defeatedBoss}.\n\n💰 Has ganado 50 Notas de Oro.`;

        if (rachaVictorias >= 5) {
            titulo.innerText = '¡Campaña Superada!';
            msj.innerText = `¡Eres el nuevo Maestro Supremo de la Sinfonía!\n\n💰 Has ganado 50 Notas de Oro.`;
            rachaVictorias = 0;
        }
    } else {
        rachaVictorias = 0;
        mostrarResultado(false);
    }

    document.getElementById('player-streak-ingame').textContent = rachaVictorias;
    actualizarRachaNodos();
}

function getFamilyClass(familia) {
    if (familia.includes('Frotada') || familia.includes('Pulsada') || familia.includes('Percutida')) return 'family-cuerda-frotada';
    if (familia === 'Viento Madera') return 'family-viento-madera';
    if (familia === 'Viento Metal' || familia === 'Viento Especial') return 'family-viento-metal';
    if (familia === 'Percusión Determinada' || familia === 'Percusión Indeterminada') return 'family-percusion-teclado';
    if (familia.includes('Electrónico')) return 'family-electronico';
    return '';
}

function crearElementoCarta(carta, ubicacion, dueño = 'player') {
    const div = document.createElement('div');
    div.classList.add('card');

    if (carta.familia) {
        div.classList.add(getFamilyClass(carta.familia));
    }

    if (dueño === 'ai' && ubicacion === 'mano') {
        div.classList.add('face-down');
    } else {
        if (carta.imagen) {
            const photo = document.createElement('div');
            photo.className = 'card-photo';
            photo.style.backgroundImage = `url('${carta.imagen}')`;
            div.appendChild(photo);
        } else if (carta.emoji) {
            div.innerHTML = `<div class="card-emoji">${carta.emoji}</div>`;
        }

        div.innerHTML += `
            <div class="card-cost">${carta.costo}</div>
            <div class="card-info">
                <div class="card-title">${carta.nombre}</div>
                <div class="card-family">${carta.familia}</div>
                ${carta.habilidad ? `<div class="card-ability">✨ ${carta.habilidad.nombre}</div>` : ''}
            </div>
            <div class="card-stats">
                <div class="card-atk">${formatStat(carta.ataque)}</div>
                <div class="card-def">${formatStat(carta.defensa)}</div>
            </div>
            </div>
            <div class="card-tooltip">
                ${carta.descripcion ? `<i>"${carta.descripcion}"</i><br><br>` : ''}
                ${carta.habilidad ? `<b>✨ ${carta.habilidad.nombre}</b>: ${carta.habilidad.descripcion}` : ''}
            </div>
        `;
    }

    if (carta.sleeping && ubicacion === 'escenario') div.classList.add('sleeping');

    if (ubicacion === 'album') {
        if (!carta.descubierta) {
            div.classList.add('locked');
        } else {
            div.addEventListener('click', () => abrirInspectorPedagogico(carta));
            div.style.cursor = 'pointer';
            div.style.transition = 'transform 0.2s';
            div.onmouseover = () => div.style.transform = 'scale(1.05)';
            div.onmouseout = () => div.style.transform = 'scale(1)';
        }
        return div;
    }

    if (ubicacion === 'mano' && dueño === 'player') {
        div.setAttribute('draggable', true);
        div.addEventListener('dragstart', handleDragStart);
        div.addEventListener('dragend', handleDragEnd);
        // Touch support
        div.addEventListener('touchstart', handleTouchStart, { passive: false });
        div.addEventListener('touchmove', handleTouchMove, { passive: false });
        div.addEventListener('touchend', handleTouchEnd);
    } else if (ubicacion === 'escenario' && dueño === 'player') {
        div.addEventListener('click', (e) => { e.stopPropagation(); seleccionarAtacante(carta, div); });
    } else if (ubicacion === 'escenario' && dueño === 'ai') {
        div.addEventListener('click', (e) => { e.stopPropagation(); atacarObjetivo(carta, 'carta'); });
    }

    div.dataset.id = carta.instanceId;
    div.dataset.costo = carta.costo;

    return div;
}

function renderizarMano(jugadorKey) {
    const handElem = elems[jugadorKey].hand;
    handElem.innerHTML = '';
    estado[jugadorKey].mano.forEach(carta => {
        handElem.appendChild(crearElementoCarta(carta, 'mano', jugadorKey));
    });
}

function renderizarEscenario(jugadorKey = 'player') {
    const stageElem = elems[jugadorKey].stage;
    stageElem.innerHTML = '';
    estado[jugadorKey].escenario.forEach(carta => {
        const cardEl = crearElementoCarta(carta, 'escenario', jugadorKey);
        stageElem.appendChild(cardEl);
    });
}

function abrirAlbum() {
    const modal = document.getElementById('album-modal');
    const container = document.getElementById('album-grid-container');
    const countSpan = document.getElementById('album-count');
    const totalSpan = document.getElementById('album-total');

    container.innerHTML = '';
    let count = 0;

    const familias = {};
    cartasBD.forEach(baseCarta => {
        if (!familias[baseCarta.familia]) {
            familias[baseCarta.familia] = [];
        }
        familias[baseCarta.familia].push(baseCarta);
    });

    for (const [nombreFamilia, cartas] of Object.entries(familias)) {
        const section = document.createElement('div');
        section.classList.add('album-family-section');

        const title = document.createElement('h3');
        title.classList.add('album-family-title');
        title.textContent = nombreFamilia;
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.classList.add('album-grid');

        cartas.forEach(baseCarta => {
            const isDiscovered = cartasDescubiertas.includes(baseCarta.id);
            if (isDiscovered) count++;

            let albumCard = { ...baseCarta, descubierta: isDiscovered };
            grid.appendChild(crearElementoCarta(albumCard, 'album', 'player'));
        });

        section.appendChild(grid);
        container.appendChild(section);
    }

    countSpan.textContent = count;
    totalSpan.textContent = cartasBD.length;
    modal.classList.remove('hidden');
}

// ========================
// DRAG AND DROP
// ========================
function setupDragAndDrop() {
    const stage = elems.player.stage;
    stage.addEventListener('dragover', (e) => { e.preventDefault(); stage.classList.add('drag-over'); });
    stage.addEventListener('dragleave', () => { stage.classList.remove('drag-over'); });
    stage.addEventListener('drop', (e) => {
        e.preventDefault();
        stage.classList.remove('drag-over');
        if (!draggingCard) return;
        jugarCartaDesdeMano(draggingCard.dataset.id, parseInt(draggingCard.dataset.costo));
    });
}

function jugarCartaDesdeMano(cardId, costo) {
    if (costo > estado.player.tempoActual) {
        mostrarToast(`⚠️ Necesitas ${costo} de Tempo (tienes ${estado.player.tempoActual})`, "danger");
        return;
    }

    estado.player.tempoActual -= costo;
    const cartaIndex = estado.player.mano.findIndex(c => c.instanceId === cardId);
    if (cartaIndex !== -1) {
        const cartaJugada = estado.player.mano.splice(cartaIndex, 1)[0];

        // Viento Madera: sin cansancio de afinación
        cartaJugada.sleeping = cartaJugada.habilidad?.tipo !== 'sin_cansancio';
        // Cuerda Pulsada: marcar primer ataque
        if (cartaJugada.habilidad?.tipo === 'primer_ataque') cartaJugada.primerAtaque = true;

        estado.player.escenario.push(cartaJugada);

        renderizarMano('player');
        renderizarEscenario('player');
        actualizarUI();

        // Play animation on the last added stage card
        const stageCards = elems.player.stage.querySelectorAll('.card');
        if (stageCards.length > 0) {
            stageCards[stageCards.length - 1].classList.add('card-played');
        }

        // Viento Especial: daño al entrar
        if (cartaJugada.habilidad?.tipo === 'entrada_dano') {
            estado.ai.hp -= cartaJugada.habilidad.valor;
            if (estado.ai.hp < 0) estado.ai.hp = 0;
            const targetEl = document.getElementById('ai-director-area');
            mostrarDano(targetEl, cartaJugada.habilidad.valor);
            aplicarFlash(targetEl);
            mostrarToast(`⛪ ¡Acorde Mayor! ${cartaJugada.nombre} inflige ${cartaJugada.habilidad.valor} al Director rival`, "success");
            actualizarUI();
            if (estado.ai.hp <= 0) { setTimeout(() => terminarPartida(true), 300); return; }
        }

        // Electrónicos: amplificar aliados en campo
        if (cartaJugada.habilidad?.tipo === 'amplificar') {
            const aliados = estado.player.escenario.filter(c => c.instanceId !== cartaJugada.instanceId);
            aliados.forEach(c => { c.ataque += cartaJugada.habilidad.valor; });
            if (aliados.length > 0) {
                mostrarToast(`🎛️ Amplificación: tus instrumentos ganan +${cartaJugada.habilidad.valor} de ataque`, "success");
                renderizarEscenario('player');
            }
        }

        mostrarToast(`🎵 ${cartaJugada.nombre} entra al escenario`, "success");
    }
}

function handleDragStart(e) {
    if (estado.jugadorActual !== 'player') { e.preventDefault(); return; }
    draggingCard = this;
    this.classList.add('dragging');
    setTimeout(() => {
        this.style.opacity = '0.5';
    }, 0);
}

function handleDragEnd() {
    this.style.opacity = '1';
    this.classList.remove('dragging');
    draggingCard = null;
}

// ========================
// TOUCH SUPPORT
// ========================
let touchDragCard = null;
let touchClone = null;

function handleTouchStart(e) {
    if (estado.jugadorActual !== 'player') return;
    e.preventDefault();
    touchDragCard = this;
    const touch = e.touches[0];

    touchClone = this.cloneNode(true);
    touchClone.style.position = 'fixed';
    touchClone.style.zIndex = '99999';
    touchClone.style.pointerEvents = 'none';
    touchClone.style.opacity = '0.8';
    touchClone.style.width = this.offsetWidth + 'px';
    touchClone.style.height = this.offsetHeight + 'px';
    touchClone.style.left = (touch.clientX - this.offsetWidth / 2) + 'px';
    touchClone.style.top = (touch.clientY - this.offsetHeight / 2) + 'px';
    document.body.appendChild(touchClone);

    this.style.opacity = '0.3';
}

function handleTouchMove(e) {
    if (!touchClone) return;
    e.preventDefault();
    const touch = e.touches[0];
    touchClone.style.left = (touch.clientX - touchClone.offsetWidth / 2) + 'px';
    touchClone.style.top = (touch.clientY - touchClone.offsetHeight / 2) + 'px';

    // Check if over stage area
    const stageRect = elems.player.stage.getBoundingClientRect();
    if (touch.clientX >= stageRect.left && touch.clientX <= stageRect.right &&
        touch.clientY >= stageRect.top && touch.clientY <= stageRect.bottom) {
        elems.player.stage.classList.add('drag-over');
    } else {
        elems.player.stage.classList.remove('drag-over');
    }
}

function handleTouchEnd(e) {
    if (!touchDragCard || !touchClone) return;
    const touch = e.changedTouches[0];
    const stageRect = elems.player.stage.getBoundingClientRect();

    elems.player.stage.classList.remove('drag-over');

    if (touch.clientX >= stageRect.left && touch.clientX <= stageRect.right &&
        touch.clientY >= stageRect.top && touch.clientY <= stageRect.bottom) {
        jugarCartaDesdeMano(touchDragCard.dataset.id, parseInt(touchDragCard.dataset.costo));
    }

    touchDragCard.style.opacity = '1';
    if (touchClone.parentNode) touchClone.parentNode.removeChild(touchClone);
    touchDragCard = null;
    touchClone = null;
}

// ========================
// TURNS
// ========================
function terminarTurno() {
    if (estado.jugadorActual !== 'player') return;
    estado.jugadorActual = 'ai';
    elems.btnEndTurn.disabled = true;
    elems.btnEndTurn.textContent = "Turno Rival...";
    actualizarTurnIndicator();
    setTimeout(turnoDeIA, 1000);
}

function turnoDeIA() {
    if (estado.ai.tempoMax < 10) estado.ai.tempoMax++;
    estado.ai.tempoActual = estado.ai.tempoMax;

    robarCartaInterno('ai');
    estado.ai.escenario.forEach(c => c.sleeping = false);

    // Cuerda Frotada: regen IA al inicio de su turno
    let aiRegen = 0;
    estado.ai.escenario.forEach(c => { if (c.habilidad?.tipo === 'regen') aiRegen += c.habilidad.valor; });
    if (aiRegen > 0) estado.ai.hp = Math.min(estado.aiHpMax, estado.ai.hp + aiRegen);

    actualizarUI();
    renderizarMano('ai');

    // AI plays cards
    let canPlay = true;
    while (canPlay && estado.ai.mano.length > 0 && estado.ai.escenario.length < 7) {
        let affordableCards = estado.ai.mano.filter(c => c.costo <= estado.ai.tempoActual);

        if (affordableCards.length === 0) {
            canPlay = false;
        } else {
            let cardToPlay;

            if (rachaVictorias <= 1) {
                let randomIndex = Math.floor(Math.random() * affordableCards.length);
                cardToPlay = affordableCards[randomIndex];
            } else {
                affordableCards.sort((a, b) => b.costo - a.costo);
                cardToPlay = affordableCards[0];
            }

            estado.ai.tempoActual -= cardToPlay.costo;

            let handIndex = estado.ai.mano.findIndex(c => c.instanceId === cardToPlay.instanceId);
            const playedCard = estado.ai.mano.splice(handIndex, 1)[0];
            // Viento Madera: sin cansancio
            playedCard.sleeping = playedCard.habilidad?.tipo !== 'sin_cansancio';
            // Cuerda Pulsada: marcar primer ataque
            if (playedCard.habilidad?.tipo === 'primer_ataque') playedCard.primerAtaque = true;
            estado.ai.escenario.push(playedCard);

            // On-play triggers para IA
            if (playedCard.habilidad?.tipo === 'entrada_dano') {
                estado.player.hp -= playedCard.habilidad.valor;
                if (estado.player.hp < 0) estado.player.hp = 0;
            }
            if (playedCard.habilidad?.tipo === 'amplificar') {
                estado.ai.escenario.filter(c => c.instanceId !== playedCard.instanceId)
                    .forEach(c => { c.ataque += playedCard.habilidad.valor; });
            }

            actualizarUI();
            renderizarMano('ai');
            renderizarEscenario('ai');
        }
    }

    // AI attack phase
    const atacantes = estado.ai.escenario.filter(c => !c.sleeping);
    atacantes.forEach(aiCard => {
        aiCard.sleeping = true;

        const puedeAtacarDirector = aiCard.habilidad?.tipo === 'ataque_directo';

        if (estado.player.escenario.length > 0 && !puedeAtacarDirector) {
            let randomIndex = Math.floor(Math.random() * estado.player.escenario.length);
            let targetCard = estado.player.escenario[randomIndex];

            // Cuerda Pulsada: doble daño en primer ataque
            let ataqueReal = aiCard.ataque;
            if (aiCard.habilidad?.tipo === 'primer_ataque' && aiCard.primerAtaque) {
                ataqueReal *= 2;
                aiCard.primerAtaque = false;
            }

            // Cuerda Percutida: splash a todos los jugadores
            if (aiCard.habilidad?.tipo === 'splash') {
                estado.player.escenario.forEach(c => { c.defensa -= ataqueReal; });
                aiCard.defensa -= targetCard.ataque;
            } else {
                targetCard.defensa -= ataqueReal;
                aiCard.defensa -= targetCard.ataque;
            }

            // Show damage on player cards
            const playerCards = elems.player.stage.querySelectorAll('.card');
            if (playerCards[randomIndex]) {
                mostrarDano(playerCards[randomIndex], ataqueReal);
                aplicarFlash(playerCards[randomIndex]);
            }

            // Muertes de cartas del jugador
            const deadPlayer = estado.player.escenario.filter(c => c.defensa <= 0);
            deadPlayer.forEach(dead => {
                if (dead.habilidad?.tipo === 'muerte_dano') {
                    estado.ai.hp -= dead.ataque;
                    if (estado.ai.hp < 0) estado.ai.hp = 0;
                }
            });
            estado.player.escenario = estado.player.escenario.filter(c => c.defensa > 0);

            // Muerte de la carta IA atacante
            if (aiCard.defensa <= 0) {
                if (aiCard.habilidad?.tipo === 'muerte_dano') {
                    estado.player.hp -= aiCard.ataque;
                    if (estado.player.hp < 0) estado.player.hp = 0;
                }
                estado.ai.escenario = estado.ai.escenario.filter(c => c.instanceId !== aiCard.instanceId);
            }

            // Percusión Determinada: buff aliado IA tras atacar
            if (aiCard.defensa > 0 && aiCard.habilidad?.tipo === 'buff_aliado') {
                const aliados = estado.ai.escenario.filter(c => c.instanceId !== aiCard.instanceId);
                if (aliados.length > 0) {
                    aliados[Math.floor(Math.random() * aliados.length)].ataque += aiCard.habilidad.valor;
                }
            }
        } else {
            // Ataque directo al director (Viento Metal o campo vacío)
            let ataqueReal = aiCard.ataque;
            if (aiCard.habilidad?.tipo === 'primer_ataque' && aiCard.primerAtaque) {
                ataqueReal *= 2;
                aiCard.primerAtaque = false;
            }
            estado.player.hp -= ataqueReal;
            if (estado.player.hp < 0) estado.player.hp = 0;
            const targetEl = document.getElementById('player-director-area');
            mostrarDano(targetEl, ataqueReal);
            aplicarFlash(targetEl);
        }
    });

    actualizarUI();
    renderizarEscenario('ai');
    renderizarEscenario('player');

    if (estado.player.hp <= 0) {
        setTimeout(() => terminarPartida(false), 600);
        return;
    }

    setTimeout(iniciarTurnoJugador, 1500);
}

function iniciarTurnoJugador() {
    estado.turnoActual++;
    estado.jugadorActual = 'player';

    if (estado.player.tempoMax < 10) estado.player.tempoMax++;
    estado.player.tempoActual = estado.player.tempoMax;
    estado.player.escenario.forEach(c => c.sleeping = false);

    // Cuerda Frotada: regen jugador al inicio de su turno
    let playerRegen = 0;
    estado.player.escenario.forEach(c => { if (c.habilidad?.tipo === 'regen') playerRegen += c.habilidad.valor; });
    if (playerRegen > 0) {
        estado.player.hp = Math.min(estado.playerHpMax, estado.player.hp + playerRegen);
        mostrarToast(`🎻 Resonancia: recuperas ${playerRegen} PA`, "success");
    }

    robarCartaInterno('player');

    elems.btnEndTurn.disabled = false;
    elems.btnEndTurn.textContent = "Fin de Turno";

    actualizarUI();
    actualizarTurnIndicator();

    if (estado.player.hp <= 0) {
        setTimeout(() => terminarPartida(false), 300);
        return;
    }

    renderizarMano('player');
    renderizarEscenario('player');
    renderizarEscenario('ai');
}

// ========================
// COMBAT
// ========================
function seleccionarAtacante(carta, divElem) {
    if (estado.jugadorActual !== 'player') return;
    if (carta.sleeping) {
        mostrarToast("💤 Cansancio de Afinación: no puede atacar aún.", "info");
        return;
    }

    if (atacanteSeleccionado === carta) {
        deseleccionarAtacante();
        return;
    }

    deseleccionarAtacante();
    atacanteSeleccionado = carta;
    divElem.classList.add('attacker-selected');
    document.body.classList.add('targeting-mode');

    // Targeting line
    const svgOverlay = document.getElementById('targeting-overlay');
    const svgLine = document.getElementById('targeting-line');
    if (svgOverlay && svgLine) {
        const rect = divElem.getBoundingClientRect();
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;

        svgOverlay.classList.remove('hidden');
        svgLine.setAttribute('x1', startX);
        svgLine.setAttribute('y1', startY);
        svgLine.setAttribute('x2', startX);
        svgLine.setAttribute('y2', startY);

        window.actualizarLineaTarget = function (e) {
            svgLine.setAttribute('x2', e.clientX);
            svgLine.setAttribute('y2', e.clientY);
        };
        document.addEventListener('mousemove', window.actualizarLineaTarget);
    }

    mostrarToast(`⚔️ ${carta.nombre} listo para atacar. Elige objetivo.`, "info");
}

function deseleccionarAtacante() {
    atacanteSeleccionado = null;
    document.body.classList.remove('targeting-mode');
    document.querySelectorAll('.attacker-selected').forEach(el => el.classList.remove('attacker-selected'));

    const svgOverlay = document.getElementById('targeting-overlay');
    if (svgOverlay) svgOverlay.classList.add('hidden');
    if (window.actualizarLineaTarget) {
        document.removeEventListener('mousemove', window.actualizarLineaTarget);
        window.actualizarLineaTarget = null;
    }
}

function atacarObjetivo(objetivo, tipo) {
    if (!atacanteSeleccionado) return;
    if (estado.jugadorActual !== 'player') return;

    if (tipo === 'director') {
        // Viento Metal puede ignorar la protección del director
        if (estado.ai.escenario.length > 0 && atacanteSeleccionado.habilidad?.tipo !== 'ataque_directo') {
            mostrarToast("🛡️ ¡Debes destruir los instrumentos rivales primero!", "danger");
            deseleccionarAtacante();
            return;
        }

        let ataqueReal = atacanteSeleccionado.ataque;
        if (atacanteSeleccionado.habilidad?.tipo === 'primer_ataque' && atacanteSeleccionado.primerAtaque) {
            ataqueReal *= 2;
            atacanteSeleccionado.primerAtaque = false;
        }

        estado.ai.hp -= ataqueReal;
        if (estado.ai.hp < 0) estado.ai.hp = 0;
        const targetEl = document.getElementById('ai-director-area');
        mostrarDano(targetEl, ataqueReal);
        aplicarFlash(targetEl);
        mostrarToast(`💥 ${atacanteSeleccionado.nombre} golpea al Director por ${formatStat(ataqueReal)}`, "success");

    } else if (tipo === 'carta') {
        let ataqueReal = atacanteSeleccionado.ataque;
        if (atacanteSeleccionado.habilidad?.tipo === 'primer_ataque' && atacanteSeleccionado.primerAtaque) {
            ataqueReal *= 2;
            atacanteSeleccionado.primerAtaque = false;
        }

        // Cuerda Percutida: Impacto Total — daña a todos los rivales en campo
        if (atacanteSeleccionado.habilidad?.tipo === 'splash') {
            estado.ai.escenario.forEach(c => { c.defensa -= ataqueReal; });
            atacanteSeleccionado.defensa -= objetivo.ataque; // solo el objetivo contraataca
            mostrarToast(`🎹 ¡Impacto Total! ${atacanteSeleccionado.nombre} golpea a todos los rivales`, "success");
        } else {
            objetivo.defensa -= ataqueReal;
            atacanteSeleccionado.defensa -= objetivo.ataque;
        }

        // Show damage on the target card
        const aiCards = elems.ai.stage.querySelectorAll('.card');
        const targetIdx = estado.ai.escenario.findIndex(c => c.instanceId === objetivo.instanceId);
        if (aiCards[targetIdx]) {
            mostrarDano(aiCards[targetIdx], ataqueReal);
            aplicarFlash(aiCards[targetIdx]);
        }

        // Muertes de cartas IA
        const deadAi = estado.ai.escenario.filter(c => c.defensa <= 0);
        deadAi.forEach(dead => {
            if (dead.habilidad?.tipo === 'muerte_dano') {
                estado.player.hp -= dead.ataque;
                if (estado.player.hp < 0) estado.player.hp = 0;
                mostrarToast(`💥 ¡Golpe Final! ${dead.nombre} inflige ${dead.ataque} a tu Director`, "danger");
            } else {
                mostrarToast(`💥 ¡${dead.nombre} destruido!`, "success");
            }
        });
        estado.ai.escenario = estado.ai.escenario.filter(c => c.defensa > 0);

        // Muerte del atacante jugador
        const atacanteVivo = atacanteSeleccionado.defensa > 0;
        if (!atacanteVivo) {
            if (atacanteSeleccionado.habilidad?.tipo === 'muerte_dano') {
                estado.ai.hp -= atacanteSeleccionado.ataque;
                if (estado.ai.hp < 0) estado.ai.hp = 0;
                mostrarToast(`💥 ¡Golpe Final! Tu ${atacanteSeleccionado.nombre} inflige ${atacanteSeleccionado.ataque} al Director rival`, "success");
            } else {
                mostrarToast(`😵 ¡Tu ${atacanteSeleccionado.nombre} ha caído!`, "danger");
            }
            estado.player.escenario = estado.player.escenario.filter(c => c.instanceId !== atacanteSeleccionado.instanceId);
        }

        // Percusión Determinada: Melodía — buff a aliado tras atacar
        if (atacanteVivo && atacanteSeleccionado.habilidad?.tipo === 'buff_aliado') {
            const aliados = estado.player.escenario.filter(c => c.instanceId !== atacanteSeleccionado.instanceId);
            if (aliados.length > 0) {
                const aliado = aliados[Math.floor(Math.random() * aliados.length)];
                aliado.ataque += atacanteSeleccionado.habilidad.valor;
                mostrarToast(`🎵 Melodía: ${aliado.nombre} gana +${atacanteSeleccionado.habilidad.valor} de ataque`, "success");
            }
        }
    }

    atacanteSeleccionado.sleeping = true;
    deseleccionarAtacante();

    actualizarUI();
    renderizarEscenario('player');
    renderizarEscenario('ai');

    if (estado.ai.hp <= 0) {
        setTimeout(() => terminarPartida(true), 600);
    }
    if (estado.player.hp <= 0) {
        setTimeout(() => terminarPartida(false), 600);
    }
}

/* ========================================================= */
/* PEDAGOGICAL ALBUM INSPECTOR */
/* ========================================================= */

const infoPedagogicaDB = {
    "Violín": {
        historia: "El violín surgió en Italia a principios del siglo XVI. Su forma actual se consolidó gracias a legendarios luthiers como Stradivari y Guarneri en Cremona.",
        timbre: "Posee un registro agudo, brillante y extremadamente expresivo. Es considerado la columna vertebral tímbrica y melódica de la orquesta sinfónica.",
        mecanica: "Al estar diseñado para fraseos ágiles y agudos, cuenta con un alto Tempo de ataque, pero baja Defensa debido a su frágil y delgada caja de resonancia."
    },
    "Trompeta": {
        historia: "Con orígenes en la antigüedad como instrumento de señales militares, la trompeta adquirió pistones en el siglo XIX, permitiéndole tocar toda la escala cromática.",
        timbre: "Su sonido es brillante, penetrante, heroico y majestuoso. Puede sobresalir por encima de toda la orquesta combinada.",
        mecanica: "El inmenso volumen generado por la vibración de los labios en la boquilla le otorga un Ataque devastador en el juego."
    },
    "Timbales": {
        historia: "Tienen su origen en Oriente Medio y fueron introducidos en Europa en el siglo XV. Son los únicos tambores de la orquesta de tono definido (afinados).",
        timbre: "Producen un sonido rotundo, profundo y percusivo, capaz de imitar truenos o marcar resoluciones armónicas absolutas.",
        mecanica: "Sus pesados calderos de cobre otorgan una Resonancia suprema (Defensa), haciéndolos verdaderos tanques en el escenario."
    },
    "Arpa": {
        historia: "Es uno de los instrumentos más antiguos de la humanidad. El arpa de pedales moderna fue patentada por Sébastien Érard en 1810.",
        timbre: "Ofrece un sonido celestial, arpegiado y acuático. Es famosa por sus elegantes glissandos que añaden polvo de estrellas a cualquier composición.",
        mecanica: "Su naturaleza mágica se traduce en mecánicas de curación al líder y un equilibrio místico de estadísticas defensivas."
    }
};

function getInfoPedagogica(nombre) {
    if (infoPedagogicaDB[nombre]) return infoPedagogicaDB[nombre];
    return {
        historia: "Instrumento fundamental en la orquesta moderna, su diseño acústico ha evolucionado a lo largo de los siglos para aportar su color único al gran tejido sinfónico.",
        timbre: "Posee un color sonoro inconfundible y vital para su respectiva familia orquestal, combinándose en perfectos armónicos con sus compañeros.",
        mecanica: "Sus estadísticas en batalla reflejan el balance realista entre su capacidad de generar volumen inicial (Ataque) y la resonancia natural de su cuerpo acústico (Defensa)."
    };
}

const modalPedagogico = document.getElementById('pedagogical-modal');
const btnCloseInspector = document.getElementById('btn-close-inspector');

if (btnCloseInspector) {
    btnCloseInspector.addEventListener('click', () => {
        modalPedagogico.classList.add('hidden');
    });
}

function abrirInspectorPedagogico(carta) {
    document.getElementById('inspector-title').innerText = carta.nombre;
    document.getElementById('inspector-family').innerText = carta.familia;
    
    const info = getInfoPedagogica(carta.nombre);
    document.getElementById('inspector-history').innerText = info.historia;
    document.getElementById('inspector-timbre').innerText = info.timbre;
    document.getElementById('inspector-mechanic').innerText = info.mecanica;
    
    // Render visual clone
    const cardContainer = document.getElementById('inspector-card-container');
    cardContainer.innerHTML = '';
    
    const clone = crearElementoCarta(carta, 'inspector', 'player');
    clone.style.pointerEvents = 'none';
    clone.style.zIndex = '5';
    
    const sweep = document.createElement('div');
    sweep.className = 'holo-sweep';
    
    cardContainer.appendChild(clone);
    clone.appendChild(sweep); // put the sweep inside the card overlay
    
    modalPedagogico.classList.remove('hidden');
}

// Iniciar Motor
init();

/* ========================================================= */
/* BOOSTER PACKS & DECKBUILDER */
/* ========================================================= */

function abrirSobre() {
    if (notasDeOro < 100) {
        mostrarToast("❌ No tienes suficientes Notas de Oro (Cuesta 100)", "danger");
        return;
    }
    
    // Find locked cards
    const lockedCards = cartasBD.filter(c => !cartasDescubiertas.includes(c.id));
    if (lockedCards.length === 0) {
        mostrarToast("✨ ¡Ya tienes todas las cartas de esta expansión!", "info");
        return;
    }

    notasDeOro -= 100;
    actualizarEconomia();

    let newCards = [];
    let pool = [...lockedCards];
    for(let i=0; i<3; i++) {
        if(pool.length > 0) {
            let idx = Math.floor(Math.random() * pool.length);
            newCards.push(pool[idx]);
            pool.splice(idx, 1);
        } else {
            // Give duplicates if almost all collected
            newCards.push(cartasBD[Math.floor(Math.random() * cartasBD.length)]);
        }
    }

    const modal = document.getElementById('pack-opening-modal');
    const container = document.getElementById('opened-cards-container');
    const btnFinish = document.getElementById('btn-finish-opening');
    const title = document.getElementById('pack-opening-title');
    
    container.innerHTML = '';
    title.classList.add('hidden');
    btnFinish.classList.add('hidden');
    modal.classList.remove('hidden');

    // Create the 3 cards hidden
    newCards.forEach((carta, i) => {
        descubrirCarta(carta.id); // Add to player collection
        
        const cardEl = crearElementoCarta(carta, 'inspector', 'player');
        cardEl.style.transitionDelay = `${i * 0.3}s`;
        
        const holo = document.createElement('div');
        holo.className = 'holo-sweep';
        cardEl.appendChild(holo);
        
        container.appendChild(cardEl);
        
        // Reveal
        setTimeout(() => {
            cardEl.classList.add('revealed');
        }, 500 + i * 400);
    });

    setTimeout(() => {
        title.classList.remove('hidden');
        btnFinish.classList.remove('hidden');
    }, 500 + 3 * 400 + 500);
}

let currentDeckDraft = [];

function abrirDeckbuilder() {
    currentDeckDraft = [...mazoJugador]; // Copy current deck
    renderizarDeckbuilder();
    document.getElementById('deckbuilder-modal').classList.remove('hidden');
}

function renderizarDeckbuilder() {
    const grid = document.getElementById('deckbuilder-grid-container');
    const list = document.getElementById('deckbuilder-list-container');
    const countDisplay = document.getElementById('deckbuilder-selected-count');
    const btnSave = document.getElementById('btn-save-deck');
    
    countDisplay.innerText = currentDeckDraft.length;
    btnSave.disabled = currentDeckDraft.length !== 10;
    
    grid.innerHTML = '';
    list.innerHTML = '';
    
    // Available cards
    const unlockedCards = cartasBD.filter(c => cartasDescubiertas.includes(c.id));
    unlockedCards.forEach(carta => {
        const cardEl = crearElementoCarta(carta, 'album', 'player');
        cardEl.style.cursor = 'pointer';
        
        const countInDeck = currentDeckDraft.filter(id => id === carta.id).length;
        if (countInDeck >= 2) {
            cardEl.classList.add('deck-selected');
        }
        
        cardEl.onclick = () => {
            if (currentDeckDraft.length < 10 && currentDeckDraft.filter(id => id === carta.id).length < 2) {
                currentDeckDraft.push(carta.id);
                renderizarDeckbuilder();
            } else if (currentDeckDraft.length >= 10) {
                mostrarToast("El mazo ya tiene 10 cartas.", "danger");
            } else {
                mostrarToast("Máximo 2 copias por carta.", "danger");
            }
        };
        
        grid.appendChild(cardEl);
    });
    
    // Selected list
    const deckCards = currentDeckDraft.map(id => cartasBD.find(c => c.id === id));
    deckCards.sort((a,b) => a.costo - b.costo);
    
    deckCards.forEach((carta, i) => {
        const item = document.createElement('div');
        item.className = 'decklist-item';
        item.innerHTML = `
            <div class="decklist-item-cost">${carta.costo}</div>
            <div class="decklist-item-name">${carta.nombre}</div>
            <div style="color: #ff5555; font-weight: bold; cursor: pointer; padding: 0 1vw;">✖</div>
        `;
        
        item.onclick = () => {
            const removeIdx = currentDeckDraft.indexOf(carta.id);
            if (removeIdx > -1) {
                currentDeckDraft.splice(removeIdx, 1);
            }
            renderizarDeckbuilder();
        };
        
        list.appendChild(item);
    });
}

function guardarMazo() {
    if (currentDeckDraft.length === 10) {
        mazoJugador = [...currentDeckDraft];
        localStorage.setItem('symphonicClashMazo', JSON.stringify(mazoJugador));
        mostrarToast("✅ Mazo guardado correctamente", "success");
        actualizarMazoContador();
        document.getElementById('deckbuilder-modal').classList.add('hidden');
    }
}

/* ========================================================= */
/* WELCOME FLOW & BOSS DIALOGUES */
/* ========================================================= */

function startWelcomeFlow() {
    const starterIds = ['c_01', 'c_06', 'c_07', 'v_01', 'v_06', 'v_07', 'p_01', 'p_06', 'e_01', 'e_03'];
    
    // Conceder automáticamente el mazo inicial
    mazoJugador = [...starterIds];
    localStorage.setItem('symphonicClashMazo', JSON.stringify(mazoJugador));
    actualizarMazoContador();
    
    // Hide the welcome box so the pack opening cinematic takes full focus
    document.getElementById('welcome-modal').classList.add('hidden');
    
    const container = document.getElementById('opened-cards-container');
    const title = document.getElementById('pack-opening-title');
    const btnFinish = document.getElementById('btn-finish-opening');
    const modal = document.getElementById('pack-opening-modal');
    
    container.innerHTML = '';
    title.innerText = "¡Tu Primera Orquesta!";
    title.classList.remove('hidden');
    btnFinish.classList.add('hidden');
    modal.classList.remove('hidden');
    
    // Customize opened cards container for 10 cards to wrap nicely
    container.style.flexWrap = 'wrap';
    container.style.justifyContent = 'center';

    starterIds.forEach((id, i) => {
        descubrirCarta(id);
        const cartaDef = cartasBD.find(c => c.id === id);
        if(!cartaDef) return;
        
        const cardEl = crearElementoCarta(cartaDef, 'inspector', 'player');
        cardEl.style.transitionDelay = `${(i%5) * 0.1}s`;
        cardEl.style.transform = 'scale(0) rotateY(180deg)'; // reset
        
        container.appendChild(cardEl);
        
        setTimeout(() => {
            // override the revealed size because 10 is too many for scale 1.5
            cardEl.style.transform = 'scale(1) rotateY(0deg)';
            cardEl.style.opacity = '1';
        }, 300 + i * 200);
    });

    setTimeout(() => {
        btnFinish.classList.remove('hidden');
        btnFinish.onclick = () => {
            modal.classList.add('hidden');
            // Revert inline styles
            container.style.flexWrap = '';
            container.style.justifyContent = '';
            btnFinish.onclick = null; // reset
            
            // Mark as played and return to main menu
            localStorage.setItem('sc_hasPlayed', 'true');
        };
    }, 300 + 10 * 200 + 500);
}

const dialogosDeJefes = [
    { nombre: "El Aprendiz", texto: "M-mis manos están sudando un poco... pero he practicado mis escalas. ¡Prepárate para escuchar mi esfuerzo!", imgClase: 'bg-aprendiz' },
    { nombre: "La Promesa", texto: "El Conservatorio me ha dado una técnica perfecta. Tú solo eres ruido de fondo para mi gran debut.", imgClase: 'bg-promesa' },
    { nombre: "El Titular", texto: "Afinación y volumen. La orquesta principal no acepta a novatos. Te voy a aplastar con mi contrapunto.", imgClase: 'bg-titular' },
    { nombre: "El Virtuoso", texto: "Cien notas por segundo. Mi música vuela más rápido de lo que tus ojos pueden seguir. Intenta seguir mi Tempo, si atreves.", imgClase: 'bg-virtuoso' },
    { nombre: "El Maestro Supremo", texto: "Silencio total en la sala. La Batuta del Destino me pertenece. ¡Toda la creación es una sinfonía, y yo soy su dueño absoluto!", imgClase: 'bg-maestro' }
];

let typeWriterInterval = null;

function showBossDialogue(bossIndex) {
    const dialogData = dialogosDeJefes[bossIndex] || dialogosDeJefes[0];
    const overlay = document.getElementById('dialogue-overlay');
    const txtEl = document.getElementById('dialogue-text');
    const avatarInfo = document.getElementById('dialogue-avatar');
    
    document.getElementById('dialogue-name').innerText = dialogData.nombre;
    avatarInfo.className = 'boss-avatar-large ' + dialogData.imgClase; // inherits background classes
    txtEl.innerText = "";
    overlay.classList.remove('hidden');
    
    if (typeWriterInterval) clearInterval(typeWriterInterval);
    
    let i = 0;
    typeWriterInterval = setInterval(() => {
        txtEl.innerHTML += dialogData.texto.charAt(i);
        i++;
        if (i >= dialogData.texto.length) {
            clearInterval(typeWriterInterval);
        }
    }, 40);

    overlay.onclick = () => {
        clearInterval(typeWriterInterval);
        overlay.onclick = null;
        proceedToBoard();
    };
}


/* ========================================================= */
/* QUIZ PEDAGÓGICO */
/* ========================================================= */

let aciertosQuiz = 0;
let preguntaActual = null;

function abrirQuiz() {
    aciertosQuiz = 0;
    document.getElementById('quiz-score').innerText = aciertosQuiz;
    document.getElementById('quiz-reward-container').classList.add('hidden');
    document.getElementById('quiz-question-container').classList.remove('hidden');
    document.getElementById('quiz-modal').classList.remove('hidden');
    generarPregunta();
}

function generarPregunta() {
    const optionsGrid = document.getElementById('quiz-options');
    optionsGrid.innerHTML = '';
    
    // Pick 1 correct and 3 wrong distinct card IDs
    let pool = cartasBD.filter(c => getInfoPedagogica(c.nombre)); // Ensure it has info
    pool.sort(() => Math.random() - 0.5);
    
    const correctCard = pool[0];
    const wrongCards = pool.slice(1, 4);
    
    const infoCorrectFn = getInfoPedagogica(correctCard.nombre);
    
    // Pick a random fact category: historia, timbre, or mecanica
    const categories = ['historia', 'timbre', 'mecanica'];
    const selectedCategory = categories[Math.floor(Math.random() * categories.length)];
    const factText = infoCorrectFn[selectedCategory];
    
    const questionText = document.getElementById('quiz-question');
    questionText.innerText = `"${factText}"\n\n¿A qué instrumento pertenece esta afirmación?`;
    
    const chosenOptions = [correctCard, ...wrongCards].sort(() => Math.random() - 0.5);
    
    chosenOptions.forEach(carta => {
        const btn = document.createElement('button');
        btn.className = 'btn-quiz-option';
        btn.innerText = carta.nombre;
        btn.onclick = () => comprobarRespuesta(carta.id === correctCard.id, btn);
        optionsGrid.appendChild(btn);
    });
}

function comprobarRespuesta(isCorrect, btnElement) {
    const btns = document.querySelectorAll('.btn-quiz-option');
    btns.forEach(b => b.onclick = null); // disable all
    
    if (isCorrect) {
        btnElement.classList.add('correct');
        aciertosQuiz++;
        document.getElementById('quiz-score').innerText = aciertosQuiz;
        
        if (aciertosQuiz >= 5) {
            setTimeout(() => {
                document.getElementById('quiz-question-container').classList.add('hidden');
                document.getElementById('quiz-reward-container').classList.remove('hidden');
            }, 1000);
        } else {
            setTimeout(generarPregunta, 1200);
        }
    } else {
        btnElement.classList.add('incorrect');
        aciertosQuiz = 0; // reset
        document.getElementById('quiz-score').innerText = aciertosQuiz;
        setTimeout(generarPregunta, 1500);
    }
}
