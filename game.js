const cartasBD = [
    // 1. Corda Fregada — Ressonància: recupera PA a l'inici del teu torn
    { id: 'c_02', nombre: 'Violí',      familia: 'Corda Fregada', costo: 2, ataque: 300, defensa: 200,  descripcion: 'Tropa base àgil. El més agut de les cordes.', emoji: '🎻', imagen: 'img/cartas/cartaviolin.png',
      habilidad: { nombre: 'Ressonància', descripcion: 'Recupera 60 PA a l\'inici del teu torn.', tipo: 'regen', valor: 60 } },
    { id: 'c_03', nombre: 'Viola',       familia: 'Corda Fregada', costo: 3, ataque: 200, defensa: 500,  descripcion: 'Defensa mitjana. Corda de so melancòlic.', emoji: '🎻', imagen: 'img/cartas/cartaviola.png',
      habilidad: { nombre: 'Ressonància', descripcion: 'Recupera 90 PA a l\'inici del teu torn.', tipo: 'regen', valor: 90 } },
    { id: 'c_04', nombre: 'Violoncel', familia: 'Corda Fregada', costo: 4, ataque: 400, defensa: 500,  descripcion: 'Lluitador equilibrat. Instrument gran amb pica.', emoji: '🎻', imagen: 'img/cartas/cartacello.png',
      habilidad: { nombre: 'Ressonància', descripcion: 'Recupera 120 PA a l\'inici del teu torn.', tipo: 'regen', valor: 120 } },
    { id: 'c_06', nombre: 'Contrabaix',  familia: 'Corda Fregada', costo: 6, ataque: 300, defensa: 1000, descripcion: 'Tanc principal. El gegant de cordes greus.', emoji: '🎻', imagen: 'img/cartas/cartacontrabajo.png',
      habilidad: { nombre: 'Ressonància', descripcion: 'Recupera 180 PA a l\'inici del teu torn.', tipo: 'regen', valor: 180 } },

    // 1. Corda Pulsada — Punteig: primer atac fa el doble de dany
    { id: 'c_01', nombre: 'Guitarra Clàssica', familia: 'Corda Pulsada', costo: 2, ataque: 300, defensa: 200, descripcion: 'Dany primerenc. Caixa amb sis cordes de niló.', emoji: '🎸', imagen: 'img/cartas/cartaguitarra.png',
      habilidad: { nombre: 'Punteig', descripcion: 'El seu primer atac fa el doble de dany.', tipo: 'primer_ataque' } },
    { id: 'c_05', nombre: 'Arpa',         familia: 'Corda Pulsada', costo: 5, ataque: 300, defensa: 800,  descripcion: 'Mur defensiu. Gran marc de cordes tensades.', emoji: '🎼', imagen: 'img/cartas/cartaarpa.png',
      habilidad: { nombre: 'Punteig', descripcion: 'El seu primer atac fa el doble de dany.', tipo: 'primer_ataque' } },
    { id: 'c_08', nombre: 'Ukelele',      familia: 'Corda Pulsada', costo: 1, ataque: 200, defensa: 100,  descripcion: 'Tropa barata. Instrument petit hawaià de quatre cordes.', emoji: '🎸', imagen: 'img/cartas/cartaukelele.png',
      habilidad: { nombre: 'Punteig', descripcion: 'El seu primer atac fa el doble de dany.', tipo: 'primer_ataque' } },

    // 1. Corda Percudida — Impacte Total: danya a tots els enemics al camp
    { id: 'c_07', nombre: 'Piano', familia: 'Corda Percudida', costo: 8, ataque: 700, defensa: 1000, descripcion: 'Rematador pesat. Teclat de cordes percudides.', emoji: '🎹', imagen: 'img/cartas/cartapiano.png',
      habilidad: { nombre: 'Impacte Total', descripcion: 'En atacar, danya a tots els instruments rivals al camp.', tipo: 'splash' } },

    // 2. Vent Fusta — Àgil: pot atacar el mateix torn que es juga
    { id: 'v_01', nombre: 'Flauta Travessera', familia: 'Vent Fusta', costo: 1, ataque: 200, defensa: 100, descripcion: 'Obertura ràpida. Tub cilíndric de so agut.', emoji: '🌬️', imagen: 'img/cartas/cartaflautatravesera.png',
      habilidad: { nombre: 'Àgil', descripcion: 'Pot atacar el mateix torn que es juga.', tipo: 'sin_cansancio' } },
    { id: 'v_02', nombre: 'Oboè',    familia: 'Vent Fusta', costo: 2, ataque: 400, defensa: 100, descripcion: 'Atac punyent, fràgil. Llengüeta doble.', emoji: '🎋', imagen: 'img/cartas/cartaoboe.png',
      habilidad: { nombre: 'Àgil', descripcion: 'Pot atacar el mateix torn que es juga.', tipo: 'sin_cansancio' } },
    { id: 'v_03', nombre: 'Clarinet', familia: 'Vent Fusta', costo: 3, ataque: 400, defensa: 300, descripcion: 'Tropa agressiva. Tub de fusta fosc.', emoji: '🥖', imagen: 'img/cartas/cartaclarinete.png',
      habilidad: { nombre: 'Àgil', descripcion: 'Pot atacar el mateix torn que es juga.', tipo: 'sin_cansancio' } },
    { id: 'v_05', nombre: 'Saxofon', familia: 'Vent Fusta', costo: 4, ataque: 500, defensa: 400, descripcion: 'Lluitador versàtil. Cos metàl·lic però canya de fusta.', emoji: '🎷', imagen: 'img/cartas/cartasaxofon.png',
      habilidad: { nombre: 'Àgil', descripcion: 'Pot atacar el mateix torn que es juga.', tipo: 'sin_cansancio' } },
    { id: 'v_06', nombre: 'Fagot',   familia: 'Vent Fusta', costo: 5, ataque: 400, defensa: 700, descripcion: 'Suport pesat. El baix de la família de fusta.', emoji: '🪵', imagen: 'img/cartas/cartafagot.png',
      habilidad: { nombre: 'Àgil', descripcion: 'Pot atacar el mateix torn que es juga.', tipo: 'sin_cansancio' } },
    { id: 'v_11', nombre: 'Acordió', familia: 'Vent Fusta', costo: 3, ataque: 300, defensa: 400, descripcion: 'Lluitador de carrer. Manxa portàtil de so rústic.', emoji: '🪗', imagen: 'img/cartas/cartaacordeon.png',
      habilidad: { nombre: 'Àgil', descripcion: 'Pot atacar el mateix torn que es juga.', tipo: 'sin_cansancio' } },

    // 2. Vent Metall — Fanfàrria: pot atacar al Director tot i que hi hagi rivals al camp
    { id: 'v_04', nombre: 'Trompeta', familia: 'Vent Metall', costo: 4, ataque: 700, defensa: 200,  descripcion: 'Dany explosiu (Canó). Tub de metall amb vàlvules.', emoji: '🎺', imagen: 'img/cartas/cartatrompeta.png',
      habilidad: { nombre: 'Fanfàrria', descripcion: 'Pot atacar al Director rival tot i que hi hagi instruments al camp.', tipo: 'ataque_directo' } },
    { id: 'v_07', nombre: 'Trompa',  familia: 'Vent Metall', costo: 5, ataque: 500, defensa: 600,  descripcion: 'Metall equilibrat. Tub circular molt enrotllat.', emoji: '📯', imagen: 'img/cartas/cartatrompa.png',
      habilidad: { nombre: 'Fanfàrria', descripcion: 'Pot atacar al Director rival tot i que hi hagi instruments al camp.', tipo: 'ataque_directo' } },
    { id: 'v_08', nombre: 'Trombó', familia: 'Vent Metall', costo: 6, ataque: 800, defensa: 500,  descripcion: 'Destructor de defenses. Metall amb vara corredissa.', emoji: '📯', imagen: 'img/cartas/cartatrombon.png',
      habilidad: { nombre: 'Fanfàrria', descripcion: 'Pot atacar al Director rival tot i que hi hagi instruments al camp.', tipo: 'ataque_directo' } },
    { id: 'v_09', nombre: 'Tuba',    familia: 'Vent Metall', costo: 7, ataque: 500, defensa: 1000, descripcion: 'Mur acústic gegant. Suport indispensable de vents.', emoji: '📯', imagen: 'img/cartas/cartatuba.png',
      habilidad: { nombre: 'Fanfàrria', descripcion: 'Pot atacar al Director rival tot i que hi hagi instruments al camp.', tipo: 'ataque_directo' } },

    // 2. Vent Especial — Acord Major: en entrar infligeix dany directe al Director rival
    { id: 'v_10', nombre: 'Orgue', familia: 'Vent Especial', costo: 10, ataque: 1000, defensa: 1100, descripcion: 'Cap Final. El rei dels instruments, tubs gegants.', emoji: '⛪', imagen: 'img/cartas/cartaorgano.png',
      habilidad: { nombre: 'Acord Major', descripcion: 'En entrar en escena, infligeix 500 de dany al Director rival.', tipo: 'entrada_dano', valor: 500 } },

    // 3. Percussió Determinada — Melodia: en atacar, dóna +atac a un aliat
    { id: 'p_03', nombre: 'Xilòfon',   familia: 'Percussió Determinada', costo: 3, ataque: 500, defensa: 200, descripcion: 'Atac precís. Làmines de fusta percudides.', emoji: '🎹', imagen: 'img/cartas/cartaxilofono.png',
      habilidad: { nombre: 'Melodia', descripcion: 'En atacar, dóna +100 d\'atac a un instrument aliat.', tipo: 'buff_aliado', valor: 100 } },
    { id: 'p_04', nombre: 'Metal·lòfon', familia: 'Percussió Determinada', costo: 4, ataque: 600, defensa: 300, descripcion: 'Dany contundent. Vibràfon o campanes metàl·liques.', emoji: '🔔', imagen: 'img/cartas/cartametalofono.png',
      habilidad: { nombre: 'Melodia', descripcion: 'En atacar, dóna +100 d\'atac a un instrument aliat.', tipo: 'buff_aliado', valor: 100 } },
    { id: 'p_07', nombre: 'Timbales',   familia: 'Percussió Determinada', costo: 7, ataque: 700, defensa: 800, descripcion: 'Tropa d\'elit. Calders de coure afinables.', emoji: '🥁', imagen: 'img/cartas/cartatimbales.png',
      habilidad: { nombre: 'Melodia', descripcion: 'En atacar, dóna +150 d\'atac a un instrument aliat.', tipo: 'buff_aliado', valor: 150 } },

    // 3. Percussió Indeterminada — Colp Final: en ser destruït, infligeix dany al Director rival
    { id: 'p_01', nombre: 'Triangle', familia: 'Percussió Indeterminada', costo: 1, ataque: 100, defensa: 200, descripcion: 'Utilitat barata. Vareta metàl·lica doblegada.', emoji: '🔺', imagen: 'img/cartas/cartatriangulo.png',
      habilidad: { nombre: 'Colp Final', descripcion: 'En ser destruït, infligeix el seu Atac al Director que l\'ha destruït.', tipo: 'muerte_dano' } },
    { id: 'p_02', nombre: 'Pandereta', familia: 'Percussió Indeterminada', costo: 2, ataque: 200, defensa: 300, descripcion: 'Defensa lleugera. Marc amb sonalles metàl·liques.', emoji: '🪇', imagen: 'img/cartas/cartapandereta.png',
      habilidad: { nombre: 'Colp Final', descripcion: 'En ser destruït, infligeix el seu Atac al Director que l\'ha destruït.', tipo: 'muerte_dano' } },
    { id: 'p_05', nombre: 'Plats',    familia: 'Percussió Indeterminada', costo: 5, ataque: 900, defensa: 200, descripcion: 'Atac suïcida massiu. Dos discos xocant.', emoji: '💿', imagen: 'img/cartas/cartaplatos.png',
      habilidad: { nombre: 'Colp Final', descripcion: 'En ser destruït, infligeix el seu Atac al Director que l\'ha destruït.', tipo: 'muerte_dano' } },
    { id: 'p_06', nombre: 'Bombo',     familia: 'Percussió Indeterminada', costo: 6, ataque: 400, defensa: 900, descripcion: 'Absorbidor de dany. El tambor més greu.', emoji: '🥁', imagen: 'img/cartas/cartabombo.png',
      habilidad: { nombre: 'Colp Final', descripcion: 'En ser destruït, infligeix el seu Atac al Director que l\'ha destruït.', tipo: 'muerte_dano' } },
    { id: 'p_08', nombre: 'Bateria',   familia: 'Percussió Indeterminada', costo: 8, ataque: 800, defensa: 900, descripcion: 'El motor del ritme. Conjunt massiu de tambors i plats.', emoji: '🥁', imagen: 'img/cartas/cartabateria.png',
      habilidad: { nombre: 'Colp Final', descripcion: 'En ser destruït, infligeix el seu Atac al Director que l\'ha destruït.', tipo: 'muerte_dano' } },

    // 4. Electrònics — Amplificació: en entrar, dóna +atac a tots els aliats al camp
    { id: 'e_01', nombre: 'Teclat MIDI',      familia: 'Electrònic', costo: 3, ataque: 300, defensa: 400, descripcion: 'Suport flexible. Controlador digital silenciós per si mateix.', emoji: '⌨️', imagen: 'img/cartas/cartatecladomidi.png',
      habilidad: { nombre: 'Amplificació', descripcion: 'En entrar, dóna +80 d\'atac a tots els teus instruments al camp.', tipo: 'amplificar', valor: 80 } },
    { id: 'e_02', nombre: 'Sintetitzador',      familia: 'Electrònic', costo: 4, ataque: 500, defensa: 400, descripcion: 'Dany constant. Creador d\'ones artificials.', emoji: '🎛️', imagen: 'img/cartas/cartasintetizador.png',
      habilidad: { nombre: 'Amplificació', descripcion: 'En entrar, dóna +100 d\'atac a tots els teus instruments al camp.', tipo: 'amplificar', valor: 100 } },
    { id: 'e_03', nombre: 'Baix Elèctric',    familia: 'Electrònic', costo: 5, ataque: 400, defensa: 700, descripcion: 'Base rítmica sòlida. Sosté el groove de la banda.', emoji: '🎸', imagen: 'img/cartas/cartabajoelectrico.png',
      habilidad: { nombre: 'Amplificació', descripcion: 'En entrar, dóna +100 d\'atac a tots els teus instruments al camp.', tipo: 'amplificar', valor: 100 } },
    { id: 'e_04', nombre: 'Guitarra Elèctrica', familia: 'Electrònic', costo: 6, ataque: 800, defensa: 500, descripcion: 'Rematador elèctric. Melodies desgarradores i distorsió.', emoji: '⚡', imagen: 'img/cartas/cartaguitarraelectrica.png',
      habilidad: { nombre: 'Amplificació', descripcion: 'En entrar, dóna +150 d\'atac a tots els teus instruments al camp.', tipo: 'amplificar', valor: 150 } },
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
let rachaVictorias = parseInt(localStorage.getItem('symphonicClashRacha')) || 0;
let atacanteSeleccionado = null;
const bossNames = ["Aprenent", "Promesa", "Titular", "Virtuós", "Mestre"];

// ARENA STATE
let arenaMode = false;
let arenaDeck = [];   // IDs de cartes triades (10)
let arenaStreak = 0;  // victòries consecutives en la run actual

// TUTORIAL STATE
let tutorialActivo = false;
let tutorialPas = 0;
let tutorialEsperant = null; // 'card_played' | 'attack_done' | 'end_turn'
let tutorialTurnoIA = 0; // tracks which AI turn we're on (1, 2, 3...)
let tutorialRecompensaDonada = false; // prevents double reward

const TUTORIAL_PASOS = [
    // 0 — Benvinguda
    {
        selector: null,
        title: '🎼 Benvingut al Tutorial Complet!',
        text: 'Aprèn TOTES les mecàniques de Symphonic Clash pas a pas.\n\nEl tutorial cobreix el combat, l\'Elixir de Tempo, el Cansament, les Habilitats, la Botiga, l\'Equip i l\'Arena. Clica "Comencem!" per continuar!',
        waitFor: null, position: 'center'
    },
    // 1 — Objectiu
    {
        selector: '#ai-director-area',
        title: '🎯 L\'Objectiu: Reduir la vida rival',
        text: 'Aquí és el Director Rival. Té Punts d\'Audiència (PA). Quan arribin a 0, guanyes!\n\nEls dos directors es turnen jugant cartes i ordenant atacar. Qui es queda sense PA, perd.',
        waitFor: null, position: 'bottom'
    },
    // 2 — La teva vida
    {
        selector: '#player-director-area',
        title: '🛡️ La Teva Vida',
        text: 'Ets el Director Blau. Si el rival et deixa a 0 PA, perds.\n\nProtegeix el teu director mentre destrueixes el rival!',
        waitFor: null, position: 'top'
    },
    // 3 — Elixir de Tempo
    {
        selector: '#player-director-area',
        title: '💧 Elixir de Tempo',
        text: 'L\'ELIXIR DE TEMPO (com al Clash Royale!) és el teu recurs per jugar cartes.\n\nComences amb 3 i en guanyes 1 cada torn (màxim 10). Cada carta té un cost d\'Elixir — si no en tens prou, no pots jugar-la!',
        waitFor: null, position: 'top'
    },
    // 4 — Les cartes
    {
        selector: '#player-hand',
        title: '🃏 Les Teves Cartes',
        text: 'Tens cartes a la mà. Cada una mostra:\n\n🔵 Cost (cantonada) — Elixir necessari per jugar-la\n⚔️ ATK — Dany que infligeix\n🛡️ DEF — Vida que té la carta\n\nPassa el cursor per sobre per veure l\'habilitat especial!',
        waitFor: null, position: 'top'
    },
    // 5 — Explicació del cansament (ANTES de jugar)
    {
        selector: null,
        title: '💤 Cansament d\'Afinació',
        text: 'La majoria de cartes, quan les jugues, apareixen DORMIDES 💤 i NO poden atacar aquell torn.\n\nHan d\'esperar al torn següent per despertar-se i atacar.\n\nAra ho veuràs en directe: jugaràs el VIOLÍ, que és una carta normal que dorm.',
        waitFor: null, position: 'center'
    },
    // 6 — Juga el Violí (DORM!) — interactiu card_played
    {
        selectors: ['#player-hand', '#player-stage'],
        title: '▶ Juga el Violí (dormirà!)',
        text: 'Arrossega el VIOLÍ (cost 2 Elixir) cap avall fins a l\'Escenari (centre).\n\nFixa\'t que apareixerà amb el símbol 💤 — no podrà atacar fins al torn que ve. Això és normal per a la majoria de cartes!',
        waitFor: 'card_played', expectedCardId: 'c_02', position: 'corner'
    },
    // 7 — El Violí dorm: info
    {
        selector: '#player-stage',
        title: '💤 El Violí Dorm!',
        text: 'Veus el símbol 💤? El Violí ha entrat a l\'escenari però ha d\'esperar un torn per atacar.\n\nAixò és el CANSAMENT D\'AFINACIÓ — com a Yu-Gi-Oh!\n\nFinalitza el torn per avançar al torn 2, on el Violí es despertarà.',
        waitFor: null, position: 'top'
    },
    // 8 — Finalitzar torn 1 → AI juga 1 Ukelele — interactiu end_turn
    {
        selector: '#btn-end-turn',
        title: '⚡ Finalitza el Torn 1',
        text: 'Clica FINALITZAR TORN.\n\nEl rival jugarà 1 Ukelele. Desprès serà el teu torn 2 i el Violí s\'haurà despertat!',
        waitFor: 'end_turn', position: 'corner'
    },
    // 9 — Torn 2: Violí despert, ataca l'Ukelele — info
    {
        selector: null,
        title: '⚡ Torn 2 — El Violí és Despert!',
        text: 'El Violí ja no té 💤 i pot atacar!\n\nEl rival té un Ukelele al camp (DEF 100). El teu Violí té ATK 300.\n\nCOM FUNCIONA EL COMBAT (estil Yu-Gi-Oh!):\n• ATK > DEF rival → la destrueixes, la teva carta sobreviu intacta\n• ATK < DEF rival → la teva carta rep la diferència en la seva DEF\n• ATK = DEF → tots dos moren\n\nAtaca l\'Ukelele amb el Violí!',
        waitFor: null, position: 'center'
    },
    // 10 — Atac Violí → Ukelele — interactiu attack_done
    {
        selectors: ['#player-stage', '#ai-stage'],
        title: '⚔️ Ataca l\'Ukelele amb el Violí!',
        text: 'Ataca en 2 passos:\n1️⃣ Clica el VIOLÍ per seleccionar-lo (brillarà)\n2️⃣ Clica l\'UKELELE rival al camp\n\nATK Violí (300) > DEF Ukelele (100) → el destrueixes i el Violí sobreviu!',
        waitFor: 'attack_done', position: 'corner'
    },
    // 11 — Camp buit: info + finalitza torn → AI no juga res
    {
        selector: null,
        title: '💥 Ukelele Destruït!',
        text: 'Perfecte! El Violí ha destruït l\'Ukelele i ha quedat intacte — combat estil Yu-Gi-Oh!\n\nEl camp rival és buit. Finalitza el torn: el rival NO traurà cap carta ara.',
        waitFor: null, position: 'center'
    },
    // 12 — Finalitzar torn 2 → AI no juga res — interactiu end_turn
    {
        selector: '#btn-end-turn',
        title: '⚡ Finalitza el Torn 2',
        text: 'Clica FINALITZAR TORN.\n\nEl rival no jugarà cap carta. Al torn 3 tindràs el Violí despert i el camp buit — podràs atacar el Director directament!',
        waitFor: 'end_turn', position: 'corner'
    },
    // 13 — Torn 3: camp buit, atac directe al Director — info
    {
        selector: null,
        title: '🎯 Torn 3 — Atac Directe al Director!',
        text: 'El camp rival és buit! Quan no hi ha cartes rivals, pots atacar directament el Director rival.\n\nAixò és l\'objectiu final: reduir els seus PA a 0.\n\nAtaca el Director rival amb el Violí!',
        waitFor: null, position: 'center'
    },
    // 14 — Atac directe al Director — interactiu attack_done
    {
        selectors: ['#player-stage', '#ai-director-area'],
        title: '⚔️ Ataca el Director Directament!',
        text: 'Camp buit = atac directe!\n\n1️⃣ Clica el VIOLÍ per seleccionar-lo\n2️⃣ Clica el DIRECTOR RIVAL (la foto de dalt)\n\nEl seu HP baixarà directament pel valor d\'ATK del Violí.',
        waitFor: 'attack_done', position: 'corner'
    },
    // 15 — Torn 3: finalitza torn → AI juga 2 Ukeleles — info
    {
        selector: null,
        title: '✅ Atac Directe Fet!',
        text: 'Genial! Has demostrat com atacar el Director quan el camp és buit.\n\n🚨 PERÒ COMPTE: si el rival té cartes al camp, NO pots atacar el Director directament — primer has de destruir les seves cartes.\n\nFinalitza el torn per veure-ho en acció!',
        waitFor: null, position: 'center'
    },
    // 16 — Finalitzar torn 3 → AI juga 2 Ukeleles — interactiu end_turn
    {
        selector: '#btn-end-turn',
        title: '⚡ Finalitza el Torn 3',
        text: 'Clica FINALITZAR TORN.\n\nAra el rival treurà 2 Ukeleles al camp. Veuràs la situació on NO pots atacar el Director i necessites cartes especials!',
        waitFor: 'end_turn', position: 'corner'
    },
    // 17 — Torn 4: camp ple, explicació Flauta (Àgil) — info
    {
        selector: null,
        title: '🚨 Torn 4 — Camp Rival Ple!',
        text: 'El rival té cartes al camp → NO pots atacar el Director directament.\n\nPrimeres has de destruir les seves cartes.\n\n⚡ EXCEPCIÓ: cartes amb l\'habilitat FANFÀRRIA (Vent Metall) poden atacar el Director fins i tot si hi ha cartes rivals. Però ara et presentem l\'ÀGIL!\n\nLa FLAUTA TRAVESSERA té l\'habilitat ÀGIL — pot atacar el MATEIX torn que es juga (sense dormir 💤). Juga-la!',
        waitFor: null, position: 'center'
    },
    // 18 — Juga la Flauta (ÀGIL) — interactiu card_played
    {
        selectors: ['#player-hand', '#player-stage'],
        title: '▶ Juga la Flauta Travessera (ÀGIL!)',
        text: 'Arrossega la FLAUTA TRAVESSERA (cost 1 Elixir) cap avall fins a l\'Escenari.\n\nFixa\'t que NO tindrà el símbol 💤 — la Flauta és ÀGIL i pot atacar immediatament!',
        waitFor: 'card_played', expectedCardId: 'v_01', position: 'corner'
    },
    // 19 — Ataca amb la Flauta per destruir una carta rival — interactiu attack_done
    {
        selectors: ['#player-stage', '#ai-stage'],
        title: '⚔️ Destrueix una Carta Rival!',
        text: 'La Flauta no té 💤 — ataca ara!\n\nATK Flauta (200) > DEF Ukelele (100) → el destrueixes!\n\n1️⃣ Clica la FLAUTA per seleccionar-la\n2️⃣ Clica un UKELELE rival\n\nDestrueix les cartes rivals per poder atacar el Director!',
        waitFor: 'attack_done', expectedAttackerId: 'v_01', position: 'corner'
    },
    // 20 — Habilitats
    {
        selector: null,
        title: '✨ Habilitats de les Cartes',
        text: 'Cada família té una habilitat única:\n\n⚡ Vent Fusta — Àgil: ataca el torn que s\'invoca (sense dormir)\n📯 Vent Metall — Fanfàrria: atac directe al Director (ignora el camp rival)\n🎻 Corda Fregada — Ressonància: recupera PA cada torn\n🎹 Corda Percudida — Impacte Total: danya TOTS els rivals alhora\n⛪ Vent Especial — Acord Major: danya el Director en entrar\n🎛️ Electrònic — Amplificació: dona +ATK als aliats en entrar\n🎵 Percussió Det. — Melodia: dona +ATK a un aliat en atacar\n💀 Percussió Ind. — Colp Final: danya el Director rival quan moren',
        waitFor: null, position: 'center'
    },
    // 21 — La Botiga
    {
        selector: null,
        title: '🏪 La Botiga',
        text: 'Al Menú Principal trobaràs la BOTIGA!\n\nAmb Notes d\'Or 💰 pots comprar Paquets de Cartes (100 Notes cada un). Cada paquet conté 3 cartes noves per ampliar la col·lecció.\n\nGuanya batalles per aconseguir Notes d\'Or!',
        waitFor: null, position: 'center'
    },
    // 22 — L'Equip
    {
        selector: null,
        title: '🃏 Construeix el Teu Equip',
        text: 'A l\'apartat EQUIP del menú tries les 10 cartes que formin el teu equip de combat.\n\nNormes:\n✅ Exactament 10 cartes\n❌ Sense còpies duplicades (màxim 1 per carta)\n\n💡 Consells per a un equip equilibrat:\n• Mescla costos baixos (1-2 Elixir) i alts (4-5) per tenir opcions a cada torn\n• Inclou almenys 1 carta amb Ressonància (regen de PA) per aguantar més\n• Una carta Àgil (Vent Fusta) et dona velocitat per atacar de seguida\n• Combina ATK alt amb DEF alt — no tot ha de ser atac\n\nLa varietat de famílies guanya batalles!',
        waitFor: null, position: 'center'
    },
    // 23 — L'Arena
    {
        selector: null,
        title: '⚔️ L\'Arena',
        text: 'L\'ARENA és un mode especial de repte!\n\nEn entrar, elegiràs 10 cartes per parelles d\'ofertes aleatòries (draft). Amb aquest equip únic, intenta guanyar 5 batalles consecutives.\n\n🏆 Premi màxim: 300 Notes d\'Or per 5 victòries seguides!\n\nÉs el repte definitiu de Symphonic Clash.',
        waitFor: null, position: 'center'
    },
    // 24 — Final
    {
        selector: null,
        title: '🎉 Ara Ho Saps Tot!',
        text: 'Domines totes les mecàniques:\n💧 Elixir de Tempo · 💤 Cansament · ⚔️ Combat estil Yu-Gi-Oh!\n✨ Habilitats · 🏪 Botiga · 🃏 Equip · ⚔️ Arena\n\n🏆 L\'OBJECTIU FINAL del joc és doble:\n• Derrota els 5 Directors de la Campanya (Aprenent → Mestre)\n• Descobreix TOTES les cartes — pots veure les que tens a l\'ÀLBUM\n\nCom aconseguir més cartes? Guanyant batalles (Notes d\'Or) i comprant paquets a la Botiga!\n\n💡 Consell: si veus que els Directors de Campanya són massa difícils, comença per l\'Arena fins tenir una bona quantitat de cartes i un equip fort.\n\nHas guanyat 100 Notes d\'Or pel tutorial completat! Bona sort, Director! 🎼',
        waitFor: 'dismiss', position: 'center'
    }
];

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

// ========================
// TUTORIAL ENGINE
// ========================
function iniciarTutorial() {
    tutorialActivo = true;
    tutorialPas = 0;
    tutorialEsperant = null;

    // Setup special tutorial game state
    const nomInput = document.getElementById('player-name-input').value.trim();
    estado.player.nombre = nomInput || 'Estudiant';
    elems.playerNameDisplay.textContent = estado.player.nombre;

    tutorialTurnoIA = 0;
    tutorialRecompensaDonada = false;

    estado.turnoActual = 1;
    estado.jugadorActual = 'player';
    estado.playerHpMax = 5000;
    estado.aiHpMax = 2000;

    estado.player = { ...estado.player, hp: 5000, tempoMax: 3, tempoActual: 3, mazo: [], mano: [], escenario: [] };
    estado.ai    = { hp: 2000, tempoMax: 2, tempoActual: 2, mazo: [], mano: [], escenario: [] };

    // Player hand: Violí (dorm, cost 2) first to demo sleeping, then Flauta (Àgil, cost 1) for ability demo
    ['c_02', 'v_01', 'c_08'].forEach(id => {
        const base = cartasBD.find(c => c.id === id);
        if (base) estado.player.mano.push({ ...base, instanceId: `tut_p_${cardCounter++}`, sleeping: false });
    });

    // AI hand: 3 Ukeleles (DEF 100 each) — Violí ATK 300 and Flauta ATK 200 both clearly destroy them
    ['c_08', 'c_08', 'c_08'].forEach((id) => {
        const base = cartasBD.find(c => c.id === id);
        if (base) estado.ai.mano.push({ ...base, instanceId: `tut_ai_${cardCounter++}`, sleeping: false });
    });

    // Set enemy portrait
    document.getElementById('ai-director-avatar').className = 'director-avatar bg-apprentice';
    document.getElementById('ai-director-name').textContent = "L'Aprenent";

    // Show board
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('dialogue-overlay').classList.add('hidden');
    const board = document.getElementById('game-board');
    board.classList.remove('hidden');
    board.classList.add('tut-lock');
    elems.btnEndTurn.disabled = false;
    elems.btnEndTurn.textContent = '⚡ FINALITZAR TORN';

    actualizarUI();
    renderizarMano('player');
    renderizarMano('ai');
    renderizarEscenario('player');
    renderizarEscenario('ai');
    actualizarTurnIndicator();

    document.getElementById('tutorial-overlay').classList.remove('hidden');
    mostrarPasTutorial(0);
}

function mostrarPasTutorial(n) {
    const pas = TUTORIAL_PASOS[n];
    if (!pas) { tancarTutorial(); return; }

    tutorialPas      = n;
    tutorialEsperant = pas.waitFor;

    // During interactive steps (waitFor != null except dismiss), unlock the board so drag/click works
    const board = document.getElementById('game-board');
    if (pas.waitFor && pas.waitFor !== 'dismiss') {
        board.classList.remove('tut-lock');
    } else {
        board.classList.add('tut-lock');
    }

    // Clear previous highlights, blinks and disabled cards
    document.querySelectorAll('.tutorial-highlighted, .tut-blink, .tut-card-disabled').forEach(el => {
        el.classList.remove('tutorial-highlighted', 'tut-blink', 'tut-card-disabled');
    });

    const titleEl  = document.getElementById('tut-title');
    const textEl   = document.getElementById('tut-text');
    const nextBtn  = document.getElementById('btn-tut-next');
    const stepEl   = document.getElementById('tut-step');
    const tooltip  = document.getElementById('tutorial-tooltip');
    const backdrop = document.getElementById('tut-backdrop');

    titleEl.textContent = pas.title;
    textEl.textContent  = pas.text;
    stepEl.textContent  = `${n + 1} / ${TUTORIAL_PASOS.length}`;

    if (pas.waitFor === null) {
        nextBtn.classList.remove('hidden');
        nextBtn.textContent = n === 0 ? 'Comencem! →' : 'Entès →';
    } else if (pas.waitFor === 'dismiss') {
        nextBtn.classList.remove('hidden');
        nextBtn.textContent = '← Tornar al Menú';
    } else {
        nextBtn.classList.add('hidden');
    }

    if (pas.selectors || pas.selector) {
        const selectorList = pas.selectors || [pas.selector];
        let firstTarget = null;

        selectorList.forEach((sel, idx) => {
            const target = document.querySelector(sel);
            if (target) {
                target.classList.add('tutorial-highlighted');
                if (idx === 0) firstTarget = target;
            }
        });

        // Interactive (corner) steps need full visibility — no backdrop dimming
        backdrop.style.background = pas.position === 'corner'
            ? 'rgba(0,0,0,0)'
            : 'rgba(0,0,0,0.65)';

        // Add blink to the PRIMARY action target for interactive steps
        aplicarBlinkTutorial(pas.waitFor);

        if (pas.position === 'corner') {
            posicionarTooltipTutorial(null, 'corner', tooltip);
        } else if (firstTarget) {
            posicionarTooltipTutorial(firstTarget, pas.position, tooltip);
        }
    } else {
        backdrop.style.background = 'rgba(0,0,0,0.88)';
        tooltip.style.top    = '50%';
        tooltip.style.left   = '50%';
        tooltip.style.right  = 'auto';
        tooltip.style.bottom = 'auto';
        tooltip.style.transform = 'translate(-50%,-50%)';
    }
}

function aplicarBlinkTutorial(waitFor) {
    if (!waitFor || waitFor === 'dismiss') return;

    if (waitFor === 'card_played') {
        const currentStep = TUTORIAL_PASOS[tutorialPas];
        const expectedId = currentStep?.expectedCardId;
        document.querySelectorAll('#player-hand .card').forEach(c => {
            if (!expectedId || c.dataset.cardtype === expectedId) {
                c.classList.add('tut-blink');
            } else {
                c.classList.add('tut-card-disabled');
            }
        });
    } else if (waitFor === 'attack_done') {
        const currentStep = TUTORIAL_PASOS[tutorialPas];
        const expectedAtkId = currentStep?.expectedAttackerId;
        // Blink only the expected attacker; disable the rest
        document.querySelectorAll('#player-stage .card').forEach(c => {
            if (!expectedAtkId || c.dataset.cardtype === expectedAtkId) {
                c.classList.add('tut-blink');
            } else {
                c.classList.add('tut-card-disabled');
            }
        });
        if (estado.ai.escenario.length > 0) {
            document.querySelectorAll('#ai-stage .card').forEach(c => c.classList.add('tut-blink'));
        } else {
            const dir = document.getElementById('ai-director-area');
            if (dir) dir.classList.add('tut-blink');
        }
    } else if (waitFor === 'end_turn') {
        const btn = document.getElementById('btn-end-turn');
        if (btn) btn.classList.add('tut-blink');
    }
}

function posicionarTooltipTutorial(targetEl, position, tooltip) {
    tooltip.style.transform = 'none';
    tooltip.style.bottom    = 'auto';
    tooltip.style.top       = 'auto';
    tooltip.style.left      = 'auto';
    tooltip.style.right     = 'auto';

    // Interactive steps: park tooltip in bottom-right corner so it never covers the play area
    if (position === 'corner') {
        tooltip.style.bottom = '14px';
        tooltip.style.right  = '14px';
        return;
    }

    const rect = targetEl.getBoundingClientRect();
    const GAP  = 20;
    const TW   = 430;

    const leftVal = Math.min(
        Math.max(rect.left + rect.width / 2 - TW / 2, 10),
        window.innerWidth - TW - 10
    ) + 'px';

    if (position === 'bottom') {
        tooltip.style.top  = (rect.bottom + GAP) + 'px';
        tooltip.style.left = leftVal;
    } else if (position === 'top') {
        tooltip.style.bottom = (window.innerHeight - rect.top + GAP) + 'px';
        tooltip.style.top    = 'auto';
        tooltip.style.left   = leftVal;
    } else {
        tooltip.style.top    = '50%';
        tooltip.style.left   = '50%';
        tooltip.style.transform = 'translate(-50%,-50%)';
    }
}

function avançarTutorial() {
    mostrarPasTutorial(tutorialPas + 1);
}

function tancarTutorial() {
    tutorialActivo   = false;
    tutorialEsperant = null;
    document.querySelectorAll('.tutorial-highlighted, .tut-blink, .tut-card-disabled').forEach(el => {
        el.classList.remove('tutorial-highlighted', 'tut-blink', 'tut-card-disabled');
    });
    document.getElementById('tutorial-overlay').classList.add('hidden');
    document.getElementById('game-board').classList.remove('tut-lock');
}

function tancarTotsElsModals() {
    const modals = [
        'instructions-modal', 'album-modal', 'deckbuilder-modal', 
        'store-modal', 'quiz-modal', 'welcome-modal', 
        'game-result-modal', 'arena-modal', 'pack-opening-modal'
    ];
    modals.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
}

function terminarPartidaTutorial(victoria) {
    tancarTutorial();
    const modal  = document.getElementById('game-result-modal');
    const icon   = document.getElementById('result-icon');
    const titulo = document.getElementById('result-title');
    const msj    = document.getElementById('result-message');
    modal.classList.remove('hidden');

    if (victoria) {
        if (!tutorialRecompensaDonada) {
            notasDeOro += 100;
            tutorialRecompensaDonada = true;
            actualizarEconomia();
        }
        icon.textContent   = '🎓';
        titulo.textContent = 'Tutorial Completat!';
        titulo.style.color = '#a855f7';
        msj.textContent    = 'Enhorabona! Ja saps jugar a Symphonic Clash.\n\n💰 Has guanyat 100 Notes d\'Or. Compra\'t cartes a la Botiga i construeix el teu primer Equip per a la Campanya!';
    } else {
        icon.textContent   = '💀';
        titulo.textContent = 'Has Perdut!';
        titulo.style.color = '#ff5555';
        msj.textContent    = 'El rival t\'ha vençut. No pateixis — el tutorial és per aprendre! Torna-ho a intentar.';
    }
}

function init() {
    actualizarEconomia();
    actualizarMazoContador();
    actualizarRachaNodos();

    // Splash screen logic
    const splashScreen = document.getElementById('splash-screen');
    const mainMenu = document.getElementById('main-menu');
    
    // Ensure main menu is hidden initially if splash is present
    if (splashScreen) {
        mainMenu.classList.add('hidden');
        const btnEnter = document.getElementById('btn-splash-enter');
        if (btnEnter) {
            btnEnter.onclick = () => {
                splashScreen.style.opacity = '0';
                splashScreen.style.visibility = 'hidden';
                splashScreen.style.pointerEvents = 'none';
                setTimeout(() => {
                    splashScreen.classList.add('hidden');
                    mainMenu.classList.remove('hidden');
                    actualizarEconomia(); // Ensure initial state is rendered
                    actualizarMazoContador();
                    
                    // Check for welcome pack if it's the first time
                    if (!localStorage.getItem('sc_hasPlayed')) {
                        tancarTotsElsModals();
                        document.getElementById('welcome-modal').classList.remove('hidden');
                    }
                }, 800);
            };
        }
    } else {
        mainMenu.classList.remove('hidden');
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
            mostrarToast("⚠️ Necessites construir el teu equip (10 cartes) primer.", "danger");
            return;
        }
        iniciarPartida();
    });
    document.getElementById('btn-menu-help').addEventListener('click', () => {
        tancarTotsElsModals();
        document.getElementById('instructions-modal').classList.remove('hidden');
    });
    document.getElementById('btn-close-help').addEventListener('click', () => {
        document.getElementById('instructions-modal').classList.add('hidden');
    });
    document.getElementById('btn-reset-data').addEventListener('click', () => {
        if(confirm("⚠️ Estàs segur que vols ESBORRAR TOTA LA TEVA PARTIDA? Perdràs les teves cartes, els teus equips i les teves Notes d'Or. Aquesta acció és irreversible.")) {
            localStorage.clear();
            location.reload();
        }
    });
    document.getElementById('btn-help').addEventListener('click', () => {
        document.getElementById('instructions-modal').classList.remove('hidden');
    });

    // Quiz listeners
    document.getElementById('btn-menu-quiz').addEventListener('click', () => {
        tancarTotsElsModals();
        abrirQuiz();
    });
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
        tancarTotsElsModals();
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

    document.getElementById('btn-menu-deck').addEventListener('click', () => {
        tancarTotsElsModals();
        abrirDeckbuilder();
    });
    document.getElementById('btn-close-deckbuilder').addEventListener('click', () => {
        document.getElementById('deckbuilder-modal').classList.add('hidden');
        actualizarMazoContador();
    });
    document.getElementById('btn-save-deck').addEventListener('click', guardarMazo);

    // Album listeners
    document.getElementById('btn-menu-album').addEventListener('click', () => {
        tancarTotsElsModals();
        abrirAlbum();
    });
    document.getElementById('btn-close-album').addEventListener('click', () => {
        document.getElementById('album-modal').classList.add('hidden');
    });

    // Tutorial listeners
    document.getElementById('btn-menu-tutorial').addEventListener('click', iniciarTutorial);
    document.getElementById('btn-tut-next').addEventListener('click', () => {
        if (tutorialEsperant === 'dismiss') {
            if (!tutorialRecompensaDonada) {
                notasDeOro += 100;
                tutorialRecompensaDonada = true;
                actualizarEconomia();
            }
            tancarTutorial();
            document.getElementById('game-board').classList.add('hidden');
            document.getElementById('main-menu').classList.remove('hidden');
            actualizarRachaNodos();
            mostrarToast('🎓 Tutorial completat! +100 Notes d\'Or', 'success');
        } else {
            avançarTutorial();
        }
    });

    // Arena listeners
    document.getElementById('btn-menu-arena').addEventListener('click', abrirArena);
    document.getElementById('btn-close-arena').addEventListener('click', () => {
        arenaMode = false;
        arenaDeck = [];
        arenaStreak = 0;
        document.getElementById('arena-modal').classList.add('hidden');
    });
    document.getElementById('btn-arena-fight').addEventListener('click', () => {
        document.getElementById('arena-modal').classList.add('hidden');
        iniciarBatallaArena();
    });

    // Game result modal — returns to menu or continues arena run
    document.getElementById('btn-result-ok').addEventListener('click', () => {
        document.getElementById('game-result-modal').classList.add('hidden');
        document.getElementById('game-board').classList.add('hidden');

        if (arenaMode) {
            // Arena run still active → show ready phase and fight again
            document.getElementById('arena-ready-phase').classList.remove('hidden');
            document.getElementById('arena-draft-phase').classList.add('hidden');
            document.getElementById('arena-streak-display').textContent = arenaStreak;
            document.getElementById('arena-modal').classList.remove('hidden');
        } else {
            document.getElementById('main-menu').classList.remove('hidden');
            actualizarRachaNodos();
        }
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

    // Back to menu button (in-game)
    document.getElementById('btn-back-menu').addEventListener('click', () => {
        if (confirm('Segur que vols abandonar la partida i tornar al menú?')) {
            arenaMode = false;
            if (tutorialActivo) tancarTutorial();
            document.getElementById('game-board').classList.add('hidden');
            document.getElementById('dialogue-overlay').classList.add('hidden');
            document.getElementById('main-menu').classList.remove('hidden');
            actualizarRachaNodos();
        }
    });

    setupDragAndDrop();
    actualizarRachaNodos();
}

function iniciarPartida() {
    // Progressió: Aprenent 1500 → Promesa 2500 → Titular 3500 → Virtuós 5000 → Mestre 7000
    const aiHpPerBoss = [1500, 2500, 3500, 5000, 7000];
    let aiHpBase = aiHpPerBoss[Math.min(rachaVictorias, 4)];
    let aiTempoBase = 2 + rachaVictorias; // 2→6 tempo

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

    // Set in-game AI avatar and name to current boss
    const bossClasses = ['bg-apprentice', 'bg-promise', 'bg-titular', 'bg-virtuoso', 'bg-maestro'];
    const bossFullNames = ["L'Aprenent", "La Promesa", "El Titular", "El Virtuós", "El Mestre Suprem"];
    const aiAvatarEl = document.getElementById('ai-director-avatar');
    aiAvatarEl.className = 'director-avatar ' + (bossClasses[rachaVictorias] || bossClasses[4]);
    document.getElementById('ai-director-name').textContent = bossFullNames[rachaVictorias] || bossFullNames[4];

    // Show dialogue intercepting the board rendering
    showBossDialogue(rachaVictorias);
}

function proceedToBoard() {
    document.getElementById('dialogue-overlay').classList.add('hidden');
    document.getElementById('game-board').classList.remove('hidden');

    elems.btnEndTurn.disabled = false;
    elems.btnEndTurn.textContent = "⚡ FINALITZAR TORN";

    actualizarUI();
    renderizarMano('player');
    renderizarMano('ai');
    renderizarEscenario('player');
    renderizarEscenario('ai');
    actualizarTurnIndicator();
}

function generarMazo(isPlayer) {
    let mazo = [];
    const src = isPlayer
        ? (arenaMode ? arenaDeck : mazoJugador)
        : null;
    if (src && src.length === 10) {
        for (let i = 0; i < 30; i++) {
            let cardId = src[i % 10];
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
        mostrarToast("⚠️ No tens prou Elixir de Tempo per robar. (Costa 1)", "danger");
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
            title.textContent = 'Campanya Completada!';
            title.style.color = '#ffdd44';
            message.textContent = 'Has derrotat els 5 Directors i ets el nou Mestre Suprem. L\'orquestra és teva!';
        } else {
            icon.textContent = '🎵';
            title.textContent = 'Concert un Èxit!';
            title.style.color = '#55ee55';
            message.textContent = `Has vençut al Director rival. Ratxa actual: ${rachaVictorias}/5.`;
        }
    } else {
        icon.textContent = '💀';
        title.textContent = 'Has Perdut!';
        title.style.color = '#ff5555';
        message.textContent = 'Els teus Punts d\'Audiència han arribat a 0. La teva ratxa torna a zero. Torna-ho a intentar!';
    }

    modal.classList.remove('hidden');
}

function terminarPartida(victoria) {
    if (tutorialActivo) {
        terminarPartidaTutorial(victoria);
        return;
    }
    if (arenaMode) {
        terminarPartidaArena(victoria);
        return;
    }

    const modal = document.getElementById('game-result-modal');
    const msj = document.getElementById('result-message');
    const icon = document.getElementById('result-icon');
    const titulo = document.getElementById('result-title');

    modal.classList.remove('hidden');

    if (victoria) {
        rachaVictorias++;
        notasDeOro += 50;
        actualizarEconomia();

        let defeatedBoss = bossNames[rachaVictorias - 1] || 'Director Vençut';
        icon.textContent = '🎵';
        titulo.style.color = '#55ee55';
        titulo.innerText = 'Gran Actuació!';
        msj.innerText = `La teva simfonia ha silenciat ${defeatedBoss}.\n\n💰 Has guanyat 50 Notes d'Or.`;

        if (rachaVictorias >= 5) {
            icon.textContent = '🏆';
            titulo.style.color = '#ffdd44';
            titulo.innerText = 'Campanya Superada!';
            msj.innerText = `Ets el nou Mestre Suprem de la Simfonia! L'orquestra és teva.\n\n💰 Has guanyat 50 Notes d'Or.`;
            rachaVictorias = 0;
        }
    } else {
        rachaVictorias = 0;
        mostrarResultado(false);
    }

    localStorage.setItem('symphonicClashRacha', rachaVictorias);
    document.getElementById('player-streak-ingame').textContent = rachaVictorias;
    actualizarRachaNodos();
}

function terminarPartidaArena(victoria) {
    const modal = document.getElementById('game-result-modal');
    const icon = document.getElementById('result-icon');
    const titulo = document.getElementById('result-title');
    const msj = document.getElementById('result-message');

    modal.classList.remove('hidden');

    if (victoria) {
        arenaStreak++;
        if (arenaStreak >= 5) {
            notasDeOro += 300;
            actualizarEconomia();
            icon.textContent = '🏆';
            titulo.innerText = 'Arena Conquistada!';
            titulo.style.color = '#ffdd44';
            msj.innerText = `Has guanyat 5 batalles seguides!\n\n💰 Has guanyat 300 Notes d'Or. L'Arena és teva!`;
            // End run
            arenaMode = false;
            arenaDeck = [];
            arenaStreak = 0;
        } else {
            icon.textContent = '⚔️';
            titulo.innerText = `Victòria d'Arena! (${arenaStreak}/5)`;
            titulo.style.color = '#ff9944';
            msj.innerText = `Ratxa: ${arenaStreak}/5 victòries consecutives.\nSegueix lluitant per conquerir l'Arena!`;
        }
    } else {
        icon.textContent = '💀';
        titulo.innerText = 'Eliminat de l\'Arena';
        titulo.style.color = '#ff5555';
        msj.innerText = `Has perdut la teva ratxa d'Arena (${arenaStreak}/5).\nTorna a draftejar un nou equip per intentar-ho de nou.`;
        arenaMode = false;
        arenaDeck = [];
        arenaStreak = 0;
    }
}

function getFamilyClass(familia) {
    if (familia.includes('Fregada') || familia.includes('Pulsada') || familia.includes('Percudida')) return 'family-cuerda-frotada';
    if (familia === 'Vent Fusta') return 'family-viento-madera';
    if (familia === 'Vent Metall' || familia === 'Vent Especial') return 'family-viento-metal';
    if (familia === 'Percussió Determinada' || familia === 'Percussió Indeterminada') return 'family-percusion-teclado';
    if (familia.includes('Electrònic')) return 'family-electronico';
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
        let photoHTML = '';
        if (carta.imagen) {
            photoHTML = `<div class="card-photo" style="background-image: url('${carta.imagen}')"></div>`;
        } else if (carta.emoji) {
            photoHTML = `<div class="card-emoji">${carta.emoji}</div>`;
        }

        div.innerHTML = `
            ${photoHTML}
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
        }
        return div;
    }

    if (ubicacion === 'mano' && dueño === 'player') {
        div.setAttribute('draggable', true);
        div.addEventListener('dragstart', handleDragStart);
        div.addEventListener('dragend', handleDragEnd);
        div.addEventListener('touchstart', handleTouchStart, { passive: false });
        div.addEventListener('touchmove', handleTouchMove, { passive: false });
        div.addEventListener('touchend', handleTouchEnd);
    } else if (ubicacion === 'escenario' && dueño === 'player') {
        div.addEventListener('click', (e) => { e.stopPropagation(); seleccionarAtacante(carta, div); });
    } else if (ubicacion === 'escenario' && dueño === 'ai') {
        div.addEventListener('click', (e) => { e.stopPropagation(); atacarObjetivo(carta, 'carta'); });
    }

    div.dataset.id = carta.instanceId;
    div.dataset.cardtype = carta.id;
    div.dataset.costo = carta.costo;

    return div;
}

function renderizarMano(jugadorKey) {
    const handElem = elems[jugadorKey].hand;
    handElem.innerHTML = '';
    estado[jugadorKey].mano.forEach(carta => {
        handElem.appendChild(crearElementoCarta(carta, 'mano', jugadorKey));
    });
    if (tutorialActivo && jugadorKey === 'player') aplicarBlinkTutorial(tutorialEsperant);
}

function renderizarEscenario(jugadorKey = 'player') {
    const stageElem = elems[jugadorKey].stage;
    stageElem.innerHTML = '';
    estado[jugadorKey].escenario.forEach(carta => {
        const cardEl = crearElementoCarta(carta, 'escenario', jugadorKey);
        stageElem.appendChild(cardEl);
    });
    if (tutorialActivo && jugadorKey === 'player') aplicarBlinkTutorial(tutorialEsperant);
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
        mostrarToast(`⚠️ Necessites ${costo} d'Elixir de Tempo (en tens ${estado.player.tempoActual})`, "danger");
        return;
    }

    // Tutorial: enforce which card must be played
    if (tutorialActivo && tutorialEsperant === 'card_played') {
        const currentStep = TUTORIAL_PASOS[tutorialPas];
        if (currentStep?.expectedCardId) {
            const cartaAJugar = estado.player.mano.find(c => c.instanceId === cardId);
            if (cartaAJugar?.id !== currentStep.expectedCardId) {
                const expected = cartasBD.find(c => c.id === currentStep.expectedCardId);
                mostrarToast(`Juga el ${expected?.nombre || 'instrument correcte'} per continuar!`, "danger");
                return;
            }
        }
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
            mostrarToast(`⛪ Acord Major! ${cartaJugada.nombre} infligeix ${cartaJugada.habilidad.valor} al Director rival`, "success");
            actualizarUI();
            if (estado.ai.hp <= 0) { setTimeout(() => terminarPartida(true), 300); return; }
        }

        // Electrónicos: amplificar aliados en campo
        if (cartaJugada.habilidad?.tipo === 'amplificar') {
            const aliados = estado.player.escenario.filter(c => c.instanceId !== cartaJugada.instanceId);
            aliados.forEach(c => { c.ataque += cartaJugada.habilidad.valor; });
            if (aliados.length > 0) {
                mostrarToast(`🎛️ Amplificació! Els teus instruments guanyen +${cartaJugada.habilidad.valor} d'atac`, "success");
                renderizarEscenario('player');
            }
        }

        mostrarToast(`🎵 ${cartaJugada.nombre} entra a l'escenari`, "success");

        // Tutorial hook
        if (tutorialActivo && tutorialEsperant === 'card_played') avançarTutorial();
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

    // Tutorial hook — advance before passing turn
    if (tutorialActivo && tutorialEsperant === 'end_turn') avançarTutorial();

    estado.jugadorActual = 'ai';
    elems.btnEndTurn.disabled = true;
    elems.btnEndTurn.textContent = "Torn Rival...";
    actualizarTurnIndicator();
    setTimeout(turnoDeIA, 1000);
}

function turnoDeIA() {
    // Tutorial: fully controlled AI — no draws from deck, no attacks on player
    if (tutorialActivo) {
        tutorialTurnoIA++;
        estado.ai.escenario.forEach(c => c.sleeping = false);

        // Turn 1: AI plays 1 Ukelele
        // Turn 2: AI plays nothing (field clear scenario)
        // Turn 3: AI plays 2 Ukeleles (to show "can't attack director" scenario)
        // Turn 4+: AI plays nothing
        const cardsToPlay = tutorialTurnoIA === 1 ? 1 : tutorialTurnoIA === 3 ? 2 : 0;
        for (let i = 0; i < cardsToPlay; i++) {
            if (estado.ai.mano.length > 0) {
                const card = estado.ai.mano[0];
                estado.ai.mano.splice(0, 1);
                card.sleeping = false; // AI cards don't sleep in tutorial for clarity
                estado.ai.escenario.push(card);
            }
        }

        // AI never attacks in tutorial
        actualizarUI();
        renderizarMano('ai');
        renderizarEscenario('ai');
        renderizarEscenario('player');
        setTimeout(iniciarTurnoJugador, 1500);
        return;
    }

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

            // Cuerda Percutida: splash a todos los jugadores — Yu-Gi-Oh style
            if (aiCard.habilidad?.tipo === 'splash') {
                const defensaTargetOriginal = targetCard.defensa;
                estado.player.escenario.forEach(c => {
                    if (ataqueReal >= c.defensa) c.defensa = 0;
                });
                // AI attacker only damaged by primary target counterattack
                if (ataqueReal < defensaTargetOriginal) {
                    aiCard.defensa -= (defensaTargetOriginal - ataqueReal);
                } else if (ataqueReal === defensaTargetOriginal) {
                    aiCard.defensa = 0;
                }
            } else {
                // Normal combat: Yu-Gi-Oh style (ATK vs DEF)
                if (ataqueReal > targetCard.defensa) {
                    targetCard.defensa = 0; // Player card destroyed, AI card unaffected
                } else if (ataqueReal < targetCard.defensa) {
                    aiCard.defensa -= (targetCard.defensa - ataqueReal); // AI card damaged
                } else {
                    targetCard.defensa = 0;
                    aiCard.defensa = 0; // Tie: both destroyed
                }
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
        mostrarToast(`🎻 Ressonància: recuperes ${playerRegen} PA`, "success");
    }

    robarCartaInterno('player');

    elems.btnEndTurn.disabled = false;
    elems.btnEndTurn.textContent = "⚡ FINALITZAR TORN";

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
        mostrarToast("💤 Cansament d'Afinació: no pot atacar encara.", "info");
        return;
    }

    // Tutorial: enforce which card must be the attacker
    if (tutorialActivo && tutorialEsperant === 'attack_done') {
        const currentStep = TUTORIAL_PASOS[tutorialPas];
        if (currentStep?.expectedAttackerId && carta.id !== currentStep.expectedAttackerId) {
            const expected = cartasBD.find(c => c.id === currentStep.expectedAttackerId);
            mostrarToast(`Ataca amb la ${expected?.nombre || 'carta correcta'}!`, "danger");
            return;
        }
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

    mostrarToast(`⚔️ ${carta.nombre} a punt per atacar. Tria objectiu.`, "info");
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
            mostrarToast("🛡️ Has de destruir els instruments rivals primer!", "danger");
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
        mostrarToast(`💥 ${atacanteSeleccionado.nombre} colpeja al Director per ${formatStat(ataqueReal)}`, "success");

    } else if (tipo === 'carta') {
        let ataqueReal = atacanteSeleccionado.ataque;
        if (atacanteSeleccionado.habilidad?.tipo === 'primer_ataque' && atacanteSeleccionado.primerAtaque) {
            ataqueReal *= 2;
            atacanteSeleccionado.primerAtaque = false;
        }

        // Cuerda Percutida: Impacto Total — daña a todos los rivales en campo
        if (atacanteSeleccionado.habilidad?.tipo === 'splash') {
            // Capture original defensa of primary target before the loop modifies it
            const defensaPrimaryOriginal = objetivo.defensa;
            // Splash: Yu-Gi-Oh style — destroy enemies where ATK >= DEF
            estado.ai.escenario.forEach(c => {
                if (ataqueReal >= c.defensa) c.defensa = 0;
            });
            // Attacker counterattack: only from primary target (using original defensa)
            if (ataqueReal < defensaPrimaryOriginal) {
                atacanteSeleccionado.defensa -= (defensaPrimaryOriginal - ataqueReal);
            } else if (ataqueReal === defensaPrimaryOriginal) {
                atacanteSeleccionado.defensa = 0;
            }
            mostrarToast(`🎹 Impacte Total! ${atacanteSeleccionado.nombre} colpeja a tots els rivals`, "success");
        } else {
            // Normal combat: Yu-Gi-Oh style (ATK vs DEF)
            if (ataqueReal > objetivo.defensa) {
                // Attacker wins: defender destroyed, attacker unaffected
                const defensaRival = objetivo.defensa;
                objetivo.defensa = 0;
                mostrarToast(`⚔️ ${atacanteSeleccionado.nombre} destrueix ${objetivo.nombre}! (${formatStat(ataqueReal)} ATK supera ${formatStat(defensaRival)} DEF)`, "success");
            } else if (ataqueReal < objetivo.defensa) {
                // Defender wins: attacker takes damage equal to the difference
                const damage = objetivo.defensa - ataqueReal;
                atacanteSeleccionado.defensa -= damage;
                mostrarToast(`🛡️ ${objetivo.nombre} resisteix! ${atacanteSeleccionado.nombre} perd ${formatStat(damage)} de Defensa`, "danger");
            } else {
                // Tie: both destroyed
                objetivo.defensa = 0;
                atacanteSeleccionado.defensa = 0;
                mostrarToast(`💥 Empat! Tots dos instruments es destrueixen!`, "info");
            }
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
                mostrarToast(`💥 Cop Final! ${dead.nombre} infligeix ${dead.ataque} al teu Director`, "danger");
            } else {
                mostrarToast(`💥 ${dead.nombre} destruït!`, "success");
            }
        });
        estado.ai.escenario = estado.ai.escenario.filter(c => c.defensa > 0);

        // Muerte del atacante jugador
        const atacanteVivo = atacanteSeleccionado.defensa > 0;
        if (!atacanteVivo) {
            if (atacanteSeleccionado.habilidad?.tipo === 'muerte_dano') {
                estado.ai.hp -= atacanteSeleccionado.ataque;
                if (estado.ai.hp < 0) estado.ai.hp = 0;
                mostrarToast(`💥 Cop Final! El teu ${atacanteSeleccionado.nombre} infligeix ${atacanteSeleccionado.ataque} al Director rival`, "success");
            } else {
                mostrarToast(`😵 El teu ${atacanteSeleccionado.nombre} ha caigut!`, "danger");
            }
            estado.player.escenario = estado.player.escenario.filter(c => c.instanceId !== atacanteSeleccionado.instanceId);
        }

        // Percusión Determinada: Melodía — buff a aliat després d'atacar
        if (atacanteVivo && atacanteSeleccionado.habilidad?.tipo === 'buff_aliado') {
            const aliados = estado.player.escenario.filter(c => c.instanceId !== atacanteSeleccionado.instanceId);
            if (aliados.length > 0) {
                const aliado = aliados[Math.floor(Math.random() * aliados.length)];
                aliado.ataque += atacanteSeleccionado.habilidad.valor;
                mostrarToast(`🎵 Melodia: ${aliado.nombre} guanya +${atacanteSeleccionado.habilidad.valor} d'atac`, "success");
            }
        }
    }

    atacanteSeleccionado.sleeping = true;
    deseleccionarAtacante();

    actualizarUI();
    renderizarEscenario('player');
    renderizarEscenario('ai');

    // Tutorial hook
    if (tutorialActivo && tutorialEsperant === 'attack_done') avançarTutorial();

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
    "Violí": {
        historia: "El violí va sorgir a Itàlia a principis del segle XVI. La seva forma actual es va consolidar gràcies a llegendaris luthiers com Stradivari i Guarneri a Cremona.",
        timbre: "Posseeix un registre agut, brillant i extremadament expressiu. És considerat la columna vertebral tímbrica i melòdica de l'orquestra simfònica.",
        mecanica: "Dissenyat per a frasejos àgils, té un atac elevat però baixa defensa a causa de la seva fràgil caixa de ressonància."
    },
    "Viola": {
        historia: "La viola és l'instrument de corda fregada de mida intermèdia. El seu nom anglès, 'viola', reflecteix el seu paper intermedi entre el violí i el violoncel.",
        timbre: "El seu so és càlid, melancòlic i fosc, menys brillant que el violí però amb una profunditat expressiva única.",
        mecanica: "Equilibri entre atac i defensa: no tan àgil com el violí ni tan resistent com el contrabaix."
    },
    "Violoncel": {
        historia: "El violoncel va evolucionar al segle XVII a partir de la viola da gamba. Bach li va dedicar les seves cèlebres Suites per a violoncel sol.",
        timbre: "El seu registre greu i càlid és proper a la veu humana. Pot ser solista brillant o suport harmònic fonamental.",
        mecanica: "Combina un atac contundent amb una defensa sòlida, reflectint la seva versatilitat orquestral."
    },
    "Contrabaix": {
        historia: "El contrabaix és el membre més gran i greu de la família de cordes. Va evolucionar de la viola da gamba baixa durant el segle XVII.",
        timbre: "Produeix els sons més greus de l'orquestra. La seva ressonància profunda és la base harmònica de tot el conjunt.",
        mecanica: "Defensa màxima de la família de corda: és el tanc per excel·lència, sacrificant atac per una ressonància inexpugnable."
    },
    "Guitarra Clàssica": {
        historia: "Originada en instruments àrabs i medievals, la guitarra clàssica moderna va ser codificada per Antonio de Torres al segle XIX.",
        timbre: "So càlid, íntim i polifònic. Pot interpretar melodia, harmonia i baix simultàniament, sent una orquestra en miniatura.",
        mecanica: "Punteig devastador: el seu primer atac fa el doble de dany, aprofitant l'efecte sorpresa del debut en escena."
    },
    "Arpa": {
        historia: "És un dels instruments més antics de la humanitat. L'arpa de pedals moderna va ser patentada per Sébastien Érard el 1810.",
        timbre: "Ofereix un so celestial, arpegiat i aquàtic. És famosa pels seus elegants glissandos que afegeixen pols d'estrelles a qualsevol composició.",
        mecanica: "La seva naturalesa màgica es tradueix en una defensa elevada i un primer atac devastador."
    },
    "Piano": {
        historia: "Inventat per Bartolomeo Cristofori c. 1700, el piano substituí el clavicèmbal en combinar dinàmica expressiva amb harmonia plena.",
        timbre: "Instrument de percussió i corda alhora: cobreix tot el registre audible humà amb un so ric i harmònicament complet.",
        mecanica: "Impacte Total: en atacar, el seu so penetrant afecta tots els instruments rivals al camp simultàniament."
    },
    "Flauta Travessera": {
        historia: "La flauta travessera moderna va ser dissenyada per Theobald Boehm el 1847, amb un sistema de claus que permet tota la cromàtica.",
        timbre: "So aeri, lleuger i brillant en registre agut; fosc i aterciopelat en el registre greu. Capaç de grans virtuosismes.",
        mecanica: "La seva agilitat excepcional li permet atacar el mateix torn que és jugada, sorprenent l'adversari."
    },
    "Oboè": {
        historia: "L'oboè va néixer a França al segle XVII. La seva doble canya li dona un so característic que li va valdre el rol d'afinar l'orquestra.",
        timbre: "So penetrant, nasal i molt expressiu. Reconeixible entre tots els instruments, és el que afina l'orquestra al concert.",
        mecanica: "Atac molt elevat per al seu cost: la seva punyència sonora es tradueix en dany massiu i ràpid."
    },
    "Clarinet": {
        historia: "Inventat per Johann Christoph Denner c. 1700, el clarinet va popularitzar-se quan Mozart li va dedicar obres magistrals.",
        timbre: "Posseeix tres registres clarament diferenciats: el greu (chalumeau), l'agut (clarino) i el molt agut (altíssimo).",
        mecanica: "Atac agressiu i mobilitat immediata: pot atacar des del primer torn gràcies a la seva habilitat Àgil."
    },
    "Saxofon": {
        historia: "Inventat per Adolphe Sax el 1840, el saxofon és un híbrid únic: cos metàl·lic però canya de fusta. Molt emprat al jazz.",
        timbre: "Versàtil i carismàtic: pot sonar suau i seductor o agressiu i penetrant. Pont natural entre vent fusta i metall.",
        mecanica: "Equilibri perfecte entre atac i defensa amb velocitat immediata, reflectint la seva versatilitat estilística."
    },
    "Fagot": {
        historia: "El fagot és el baix de la família de vent-fusta. El seu nom italià significa 'feixet de llenya', referint-se al seu cos repliat.",
        timbre: "So fosc, rodó i lleugerament bassoon. Pot ser còmic o profundament expressiu, amb un rang que cobreix dues octaves i mitja.",
        mecanica: "Suport pesat amb velocitat immediata: alta defensa i atac moderat, i pot atacar el mateix torn que és jugat."
    },
    "Trompeta": {
        historia: "Amb orígens en l'antiguitat com a instrument de senyals militars, la trompeta va adquirir pistons al segle XIX.",
        timbre: "El seu so és brillant, penetrant, heroic i majestuós. Pot destacar per sobre de tota l'orquestra combinada.",
        mecanica: "Fanfàrria: pot atacar directament al Director rival ignorant els instruments que el protegeixin."
    },
    "Trompa": {
        historia: "Descendeix de les trompes de caça del segle XVII. Wagner la va elevar a protagonista simfònica en les seves òperes.",
        timbre: "So ple, rodó i majestuós. Pot ser suau i misteriós o brillant i heroic, amb gran capacitat expressiva.",
        mecanica: "Equilibri entre atac i defensa, amb la capacitat d'atacar directament al Director rival."
    },
    "Trombó": {
        historia: "El trombó és l'únic instrument de vent-metall sense pistols ni claus: la vara corredissa permet afinar amb precisió.",
        timbre: "Possibilita des de sons dolços i nobles fins a rugits poderosos. Fonamental en la coral de metalls.",
        mecanica: "Destructor de defenses: alt atac directe al Director rival, que pot ignorar els bloquejadors."
    },
    "Tuba": {
        historia: "La tuba va ser inventada el 1835 per Wilhelm Wieprecht. És el membre més gran i greu dels instruments de vent-metall.",
        timbre: "So vast, profund i ple. La seva ressonància és la base acústica de tota la secció de metalls.",
        mecanica: "Mur acústic: defensa màxima de la família de metall, però pot atacar directament al Director."
    },
    "Orgue": {
        historia: "L'orgue és un dels instruments més antics i complexos. Bach va elevar l'orgue de tubs a la màxima expressió polifònica.",
        timbre: "Pot imitar pràcticament qualsevol instrument amb els seus registres. El rei dels instruments per la seva plenitud sonora.",
        mecanica: "Acord Major: en entrar en escena, infligeix dany directe i massiu al Director rival instantàniament."
    },
    "Timbales": {
        historia: "Tenen el seu origen a l'Orient Mitjà i van ser introduïts a Europa al segle XV. Són els únics tambors de l'orquestra de to definit.",
        timbre: "Produeixen un so rotund, profund i percussiu, capaç d'imitar trons o marcar resolucions harmòniques absolutes.",
        mecanica: "En atacar, enforteix un instrument aliat amb un buff d'atac, reflectint el seu rol de motor rítmic."
    },
    "Xilòfon": {
        historia: "El xilòfon té orígens africans i asiàtics. Va arribar a l'orquestra clàssica al segle XIX, celebrat per Saint-Saëns.",
        timbre: "So sec, brillant i percussiu. Les seves làmines de fusta produeixen notes clares i definides sense sustain.",
        mecanica: "Melodia: cada cop que ataca, dóna un buff d'atac a un instrument aliat, impulsant la sinèrgia."
    },
    "Bateria": {
        historia: "La bateria moderna va néixer als EUA a inicis del segle XX, combinant bombo, caixa, charles i plats en un sol instrument.",
        timbre: "El seu so és versàtil i potent: motor rítmic per excel·lència, defineix el groove i l'energia de qualsevol gènere.",
        mecanica: "En ser destruïda, infligeix tot el seu atac al Director que l'ha eliminat: un últim cop de drum fill."
    }
};

function getInfoPedagogica(nombre) {
    if (infoPedagogicaDB[nombre]) return infoPedagogicaDB[nombre];
    return {
        historia: "Instrument fonamental en l'orquestra moderna, el seu disseny acústic ha evolucionat al llarg dels segles per aportar el seu color únic al gran teixit simfònic.",
        timbre: "Posseeix un color sonor inconfusible i vital per a la seva respectiva família orquestral, combinant-se en perfectes harmònics amb els seus companys.",
        mecanica: "Les seves estadístiques en batalla reflecteixen el balanç realista entre la seva capacitat de generar volum inicial (Atac) i la ressonància natural del seu cos acústic (Defensa)."
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
        mostrarToast("❌ No tens suficients Notes d'Or (costa 100)", "danger");
        return;
    }
    
    // Find locked cards
    const lockedCards = cartasBD.filter(c => !cartasDescubiertas.includes(c.id));
    if (lockedCards.length === 0) {
        mostrarToast("✨ Ja tens totes les cartes d'aquesta expansió!", "info");
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
        const cardEl = crearElementoCarta(carta, 'deckbuilder', 'player');
        cardEl.style.cursor = 'pointer';
        
        const countInDeck = currentDeckDraft.filter(id => id === carta.id).length;
        if (countInDeck >= 1) {
            cardEl.classList.add('deck-selected');
        }

        cardEl.onclick = () => {
            if (currentDeckDraft.length < 10 && currentDeckDraft.filter(id => id === carta.id).length < 1) {
                currentDeckDraft.push(carta.id);
                renderizarDeckbuilder();
            } else if (currentDeckDraft.length >= 10) {
                mostrarToast("L'equip ja té 10 cartes.", "danger");
            } else {
                mostrarToast("No es poden repetir cartes a l'equip.", "danger");
            }
        };
        
        grid.appendChild(cardEl);
    });
    
    // Selected list
    const deckCards = currentDeckDraft.map(id => cartasBD.find(c => c.id === id));
    deckCards.sort((a,b) => a.costo - b.costo);
    
    deckCards.forEach((carta) => {
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
        mostrarToast("✅ Equip guardat correctament", "success");
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
    title.innerText = "La Teva Primera Orquestra!";
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
    { nombre: "L'Aprenent", texto: "L-les meves mans estan suant un poc... però he praticat les meves escales. Prepara't per escoltar el meu esforç!", imgClase: 'bg-apprentice' },
    { nombre: "La Promesa", texto: "El Conservatori m'ha donat una tècnica perfecta. Tu només ets soroll de fons per al meu gran debut.", imgClase: 'bg-promise' },
    { nombre: "El Titular", texto: "Afinació i volum. L'orquestra principal no accepta novells. T'aixafaré amb el meu contrapunt.", imgClase: 'bg-titular' },
    { nombre: "El Virtuós", texto: "Cent notes per segon. La meva música vola més ràpid del que els teus ulls poden seguir. Intenta seguir el meu Tempo, si t'atreveixes.", imgClase: 'bg-virtuoso' },
    { nombre: "El Mestre Suprem", texto: "Silenci total a la sala. La Batuta del Destí em pertany. Tota la creació és una simfonia, i jo en sóc el propietari absolut!", imgClase: 'bg-maestro' }
];

let typeWriterInterval = null;

function showBossDialogue(bossIndex) {
    const dialogData = dialogosDeJefes[bossIndex] || dialogosDeJefes[0];
    const overlay = document.getElementById('dialogue-overlay');
    const txtEl = document.getElementById('dialogue-text');
    const avatarContainer = document.getElementById('dialogue-avatar');
    
    document.getElementById('dialogue-name').innerText = dialogData.nombre;
    
    // Use the premium large avatar class
    avatarContainer.innerHTML = `<div class="boss-avatar-large ${dialogData.imgClase}"></div>`;
    
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
/* ARENA MODE                                               */
/* ========================================================= */

function abrirArena() {
    arenaDeck = [];
    arenaStreak = 0;
    arenaMode = false;

    document.getElementById('arena-draft-phase').classList.remove('hidden');
    document.getElementById('arena-ready-phase').classList.add('hidden');
    document.getElementById('arena-modal').classList.remove('hidden');
    renderizarArenaDraft();
}

function renderizarArenaDraft() {
    const choices = document.getElementById('arena-draft-choices');
    const pickCount = document.getElementById('arena-pick-count');
    const pickBar = document.getElementById('arena-pick-bar');

    pickCount.textContent = arenaDeck.length;
    pickBar.style.width = (arenaDeck.length / 10 * 100) + '%';

    if (arenaDeck.length >= 10) {
        document.getElementById('arena-draft-phase').classList.add('hidden');
        const readyPhase = document.getElementById('arena-ready-phase');
        readyPhase.classList.remove('hidden');
        document.getElementById('arena-streak-display').textContent = arenaStreak;
        renderizarArenaDeckList();
        return;
    }

    choices.innerHTML = '';

    // Pick 2 distinct random cards
    const shuffled = [...cartasBD].sort(() => Math.random() - 0.5);
    const card1 = shuffled[0];
    // Ensure card2 is a different card (different id)
    const card2 = shuffled.find(c => c.id !== card1.id) || shuffled[1];

    const vs = document.createElement('div');
    vs.className = 'arena-vs-badge';
    vs.textContent = 'VS';

    [card1, null, card2].forEach(carta => {
        if (carta === null) {
            choices.appendChild(vs);
            return;
        }
        const slot = document.createElement('div');
        slot.className = 'arena-card-slot';
        const el = crearElementoCarta(carta, 'deckbuilder', 'player');
        slot.appendChild(el);
        slot.addEventListener('click', () => {
            arenaDeck.push(carta.id);
            renderizarArenaDraft();
        });
        choices.appendChild(slot);
    });
}

function renderizarArenaDeckList() {
    const preview = document.getElementById('arena-deck-preview');
    preview.innerHTML = '';

    // Count duplicates
    const counts = {};
    arenaDeck.forEach(id => counts[id] = (counts[id] || 0) + 1);

    Object.entries(counts).forEach(([id, count]) => {
        const carta = cartasBD.find(c => c.id === id);
        if (!carta) return;
        const item = document.createElement('div');
        item.className = 'arena-list-item';
        item.innerHTML = `
            <span class="arena-list-cost">${carta.costo}</span>
            <span>${carta.nombre}${count > 1 ? ` ×${count}` : ''}</span>
            <span style="margin-left:auto;opacity:0.6;font-size:1.4vh">${carta.familia}</span>
        `;
        preview.appendChild(item);
    });
}

function iniciarBatallaArena() {
    arenaMode = true;
    const aiHpBase = 3000 + (arenaStreak * 800);
    const aiTempoBase = 3 + arenaStreak;

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

    // Arena boss: scales with streak
    const bossClasses = ['bg-apprentice', 'bg-promise', 'bg-titular', 'bg-virtuoso', 'bg-maestro'];
    const bossFullNames = ["L'Aprenent", "La Promesa", "El Titular", "El Virtuós", "El Mestre Suprem"];
    const bossIdx = Math.min(arenaStreak, 4);
    const aiAvatarEl = document.getElementById('ai-director-avatar');
    aiAvatarEl.className = 'director-avatar ' + bossClasses[bossIdx];
    document.getElementById('ai-director-name').textContent = `[Arena] ${bossFullNames[bossIdx]}`;

    // Hide menus
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('arena-modal').classList.add('hidden');


    // Skip campaign dialogue — go directly to board
    document.getElementById('game-board').classList.remove('hidden');
    elems.btnEndTurn.disabled = false;
    elems.btnEndTurn.textContent = `⚡ FINALITZAR TORN`;
    actualizarUI();
    renderizarMano('player');
    renderizarMano('ai');
    renderizarEscenario('player');
    renderizarEscenario('ai');
    actualizarTurnIndicator();
    mostrarToast(`⚔️ Arena Batalla ${arenaStreak + 1}/5 — Bona sort!`, 'info');
}

/* ========================================================= */
/* QUIZ PEDAGÓGICO                                           */
/* ========================================================= */

const quizDB = [
    // — FAMÍLIES D'INSTRUMENTS —
    { pregunta: "A quina família orquestral pertany el Violí?", opcions: ["Corda Fregada", "Corda Pulsada", "Vent Fusta", "Percussió"], correcta: 0 },
    { pregunta: "A quina família pertany la Trompeta?", opcions: ["Vent Fusta", "Vent Metall", "Corda Metàl·lica", "Electrònic"], correcta: 1 },
    { pregunta: "El Saxofon és de la família...", opcions: ["Vent Metall", "Corda Pulsada", "Vent Fusta", "Electrònic"], correcta: 2 },
    { pregunta: "El Piano pertany a la família de...", opcions: ["Corda Pulsada", "Corda Fregada", "Corda Percudida", "Vent Especial"], correcta: 2 },
    { pregunta: "A quina família pertany l'Arpa?", opcions: ["Corda Fregada", "Corda Percudida", "Corda Pulsada", "Vent Especial"], correcta: 2 },
    { pregunta: "El Contrabaix pertany a la família...", opcions: ["Corda Pulsada", "Percussió Indeterminada", "Vent Fusta", "Corda Fregada"], correcta: 3 },
    { pregunta: "El Triangle és un instrument de...", opcions: ["Corda Pulsada", "Vent Fusta", "Percussió", "Electrònic"], correcta: 2 },
    { pregunta: "A quina família pertany l'Orgue de tubs?", opcions: ["Vent Metall", "Corda Percudida", "Vent Especial", "Electrònic"], correcta: 2 },
    { pregunta: "La Bateria és un instrument de...", opcions: ["Vent Fusta", "Corda Pulsada", "Electrònic", "Percussió"], correcta: 3 },
    { pregunta: "L'Acordió pertany a la família de...", opcions: ["Vent Fusta", "Corda Pulsada", "Vent Metall", "Percussió"], correcta: 0 },
    { pregunta: "El Violoncel pertany a la família de...", opcions: ["Corda Pulsada", "Corda Fregada", "Vent Fusta", "Percussió"], correcta: 1 },
    { pregunta: "La Flauta Travessera és de la família...", opcions: ["Vent Metall", "Vent Especial", "Vent Fusta", "Corda Pulsada"], correcta: 2 },
    { pregunta: "La Tuba pertany a la família...", opcions: ["Vent Fusta", "Percussió", "Vent Metall", "Electrònic"], correcta: 2 },
    { pregunta: "El Teclat MIDI és un instrument...", opcions: ["Acústic de corda", "Electrònic", "De percussió", "De vent"], correcta: 1 },
    { pregunta: "El Xilòfon és un instrument de...", opcions: ["Corda Fregada", "Vent Fusta", "Electrònic", "Percussió Determinada"], correcta: 3 },

    // — CARACTERÍSTIQUES FÍSIQUES —
    { pregunta: "Quantes cordes té un violí?", opcions: ["3", "4", "5", "6"], correcta: 1 },
    { pregunta: "Qui va inventar el saxofon al segle XIX?", opcions: ["Johann Bach", "Adolphe Sax", "Vivaldi", "Beethoven"], correcta: 1 },
    { pregunta: "En quin país va néixer el violí modern?", opcions: ["Alemanya", "França", "Itàlia", "Àustria"], correcta: 2 },
    { pregunta: "Quantes tecles té un piano de concert estàndard?", opcions: ["72", "76", "88", "96"], correcta: 2 },
    { pregunta: "A quin arxipèlag va néixer l'ukelele?", opcions: ["Canàries", "Hawaii", "Filipines", "Açores"], correcta: 1 },
    { pregunta: "Com es canvia de nota al Trombó?", opcions: ["Amb vàlvules rotatives", "Amb una vara corredissa", "Amb una canya", "Amb arquet"], correcta: 1 },
    { pregunta: "El Clarinet utilitza...", opcions: ["Una canya doble", "Una canya simple", "Cap canya (tub directe)", "Un embocall cònic metàl·lic"], correcta: 1 },
    { pregunta: "Quin instrument de vent metall té el so més greu?", opcions: ["Trompeta", "Trompa", "Trombó", "Tuba"], correcta: 3 },
    { pregunta: "L'Oboè utilitza...", opcions: ["Una canya simple", "Una canya doble", "Un embocall cònic", "Cap canya, és tub directe"], correcta: 1 },
    { pregunta: "Quantes cordes té normalment una Arpa de concert?", opcions: ["36", "40", "47", "52"], correcta: 2 },
    { pregunta: "Quin instrument de teclat produeix el so per percussió de martells?", opcions: ["Clavicèmbal", "Orgue", "Piano", "Sintetitzador"], correcta: 2 },
    { pregunta: "De quin material estan fetes tradicionalment les cordes del violí?", opcions: ["Acer", "Niló", "Tripa d'ovella", "Seda"], correcta: 2 },
    { pregunta: "Quin és l'instrument de corda fregada més gran?", opcions: ["Viola", "Violoncel", "Contrabaix", "Violí baix"], correcta: 2 },
    { pregunta: "Quantes cordes té normalment una guitarra clàssica?", opcions: ["4", "5", "6", "7"], correcta: 2 },
    { pregunta: "La Trompa és un instrument que originalment s'usava per a...", opcions: ["Concerts de cambra", "La caça i senyals militars", "L'acompanyament del cant gregorià", "El ballet clàssic"], correcta: 1 },

    // — MECÀNIQUES DEL JOC —
    { pregunta: "Quina família té l'habilitat ÀGIL al joc?", opcions: ["Corda Fregada", "Vent Fusta", "Vent Metall", "Electrònic"], correcta: 1 },
    { pregunta: "Quina família pot atacar el Director directament tot i que hi hagi rivals al camp?", opcions: ["Corda Percudida", "Percussió Indeterminada", "Vent Metall", "Vent Especial"], correcta: 2 },
    { pregunta: "Quina habilitat permet recuperar PA a l'inici de cada torn?", opcions: ["Amplificació", "Ressonància", "Melodia", "Punteig"], correcta: 1 },
    { pregunta: "L'habilitat ÀGIL significa que la carta...", opcions: ["Té molt d'ATK", "Pot atacar el torn que s'invoca", "No pot ser destruïda el primer torn", "Costa menys Elixir"], correcta: 1 },
    { pregunta: "Quantes cartes ha de tenir un equip al joc?", opcions: ["5", "8", "10", "15"], correcta: 2 },
    { pregunta: "Quantes victòries consecutives cal per superar la Campanya?", opcions: ["3", "4", "5", "7"], correcta: 2 },
    { pregunta: "L'Elixir de Tempo serveix per...", opcions: ["Recuperar PA", "Jugar cartes", "Atacar el director", "Robar cartes del mazo"], correcta: 1 },
    { pregunta: "El 'Cansament d'Afinació' significa que...", opcions: ["La carta perd ATK", "La carta no pot atacar fins al torn següent", "La carta no pot defensar", "La carta torna a la mà"], correcta: 1 },
    { pregunta: "Quin instrument del joc té l'habilitat 'Impacte Total' (danya tots els rivals)?", opcions: ["Violí", "Trompeta", "Piano", "Orgue"], correcta: 2 },
    { pregunta: "Quina habilitat fan servir els instruments Electrònics al joc?", opcions: ["Ressonància", "Melodia", "Amplificació", "Fanfàrria"], correcta: 2 },
    { pregunta: "L'habilitat 'Colp Final' s'activa...", opcions: ["En entrar al camp", "En atacar", "En ser destruïda la carta", "Al final del torn"], correcta: 2 },
    { pregunta: "Quants PA inicials té cada Director al joc?", opcions: ["3000", "5000", "8000", "10000"], correcta: 2 },

    // — TEORIA MUSICAL —
    { pregunta: "Quants semitons hi ha en una octava?", opcions: ["6", "10", "12", "14"], correcta: 2 },
    { pregunta: "Quin terme indica que s'ha de tocar molt suau?", opcions: ["Fortissimo", "Pianissimo", "Forte", "Mezzo-forte"], correcta: 1 },
    { pregunta: "Quin terme indica que s'ha de tocar molt fort?", opcions: ["Piano", "Mezzo-piano", "Fortissimo", "Pianissimo"], correcta: 2 },
    { pregunta: "Quin és el nom de l'interval de 8 notes (ex: Do fins al Do superior)?", opcions: ["Quinta", "Setena", "Octava", "Novena"], correcta: 2 },
    { pregunta: "Quin és el terme per a la velocitat d'una peça musical?", opcions: ["Dinàmica", "Timbre", "Tempo", "Harmonia"], correcta: 2 },
    { pregunta: "Quantes notes naturals té una escala diatònica major?", opcions: ["5", "6", "7", "8"], correcta: 2 },
    { pregunta: "Quin símbol s'usa normalment per als instruments aguts com el violí?", opcions: ["Clau de fa", "Clau de sol", "Clau d'ut en tercera", "Clau de percussió"], correcta: 1 },
    { pregunta: "Com s'anomena el conjunt de 4 músics de cambra?", opcions: ["Duet", "Trio", "Quartet", "Quintet"], correcta: 2 },
    { pregunta: "Quin instrument s'utilitza habitualment per donar el La d'afinació a l'orquestra?", opcions: ["Violí", "Piano", "Oboè", "Flauta"], correcta: 2 },
    { pregunta: "Qui va compondre les 'Quatre Estacions' per a violí?", opcions: ["Bach", "Mozart", "Vivaldi", "Beethoven"], correcta: 2 },
    { pregunta: "Quants instruments hi ha aproximadament en una orquestra simfònica completa?", opcions: ["30-40", "50-60", "80-100", "120-150"], correcta: 2 },
    { pregunta: "Quin instrument és conegut popularment com 'el rei dels instruments'?", opcions: ["Piano", "Violí", "Orgue", "Arpa"], correcta: 2 },
];

let aciertosQuiz = 0;
let quizCurrentIndex = -1;
let quizUsedIndices = [];

function abrirQuiz() {
    aciertosQuiz = 0;
    quizUsedIndices = [];
    document.getElementById('quiz-score').innerText = aciertosQuiz;
    document.getElementById('quiz-reward-container').classList.add('hidden');
    document.getElementById('quiz-question-container').classList.remove('hidden');
    document.getElementById('quiz-modal').classList.remove('hidden');
    generarPregunta();
}

function generarPregunta() {
    const optionsGrid = document.getElementById('quiz-options');
    optionsGrid.innerHTML = '';

    // Reset used pool when all questions have been shown
    if (quizUsedIndices.length >= quizDB.length) quizUsedIndices = [];

    let idx;
    do { idx = Math.floor(Math.random() * quizDB.length); }
    while (quizUsedIndices.includes(idx));
    quizUsedIndices.push(idx);
    quizCurrentIndex = idx;

    const q = quizDB[idx];
    document.getElementById('quiz-question').innerText = q.pregunta;

    q.opcions.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'btn-quiz-option';
        btn.innerText = opt;
        btn.onclick = () => comprobarRespuesta(i === q.correcta, btn);
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
        // Highlight the correct answer so the player learns
        const correctIdx = quizDB[quizCurrentIndex].correcta;
        if (btns[correctIdx]) btns[correctIdx].classList.add('correct');
        aciertosQuiz = 0;
        document.getElementById('quiz-score').innerText = aciertosQuiz;
        setTimeout(generarPregunta, 1800);
    }
}
