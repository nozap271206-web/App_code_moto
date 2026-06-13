import type { Question } from '../types';

export const QUESTIONS_BATEAU: Question[] = [

  // ── THÈME A – Balisage maritime (système AISM) ────────────────────────────

  { id: 'BTA1', theme: 'A',
    sign: 'buoy-lateral-port',
    prompt: "Dans le système AISM région A (Europe), la bouée de bâbord (côté gauche en entrant) est de couleur :",
    choices: ["Verte", "Rouge", "Jaune", "Noire"],
    correct: [1],
    explanation: "En région AISM A, la bouée latérale de bâbord est rouge, cylindrique (can). En entrant au port, elle est sur votre gauche. Mnémotechnique : 'rouge à bâbord en rentrant'." },

  { id: 'BTA2', theme: 'A',
    sign: 'buoy-lateral-stbd',
    prompt: "La bouée de tribord (côté droit en entrant) dans le système AISM région A est :",
    choices: ["Rouge, cylindrique", "Jaune, sphérique", "Verte, conique", "Blanche, triangulaire"],
    correct: [2],
    explanation: "En région A, la bouée latérale de tribord est verte de forme conique. En entrant dans un port, elle doit rester à droite." },

  { id: 'BTA3', theme: 'A',
    sign: 'buoy-cardinal-n',
    prompt: "Que signifie une bouée cardinale NORD ?",
    choices: [
      "Passez au sud de cette bouée",
      "Passez au nord de cette bouée (eau saine au nord)",
      "Passez des deux côtés indifféremment",
      "Danger à l'est de la bouée"],
    correct: [1],
    explanation: "Une marque cardinale NORD indique que l'eau saine se trouve au nord de la marque. Vous devez la passer par le nord (la tenir au sud de votre route)." },

  { id: 'BTA4', theme: 'A',
    sign: 'buoy-cardinal-n',
    prompt: "La bouée cardinale NORD se distingue par ses couleurs :",
    choices: [
      "Jaune dessus, noir dessous",
      "Noir dessus, jaune dessous",
      "Rouge et blanc",
      "Entièrement noire"],
    correct: [1],
    explanation: "Cardinale NORD : corps noir sur jaune (noir en haut = vers le pôle Nord). Topmark : deux cônes noirs pointe en haut (triangle/triangle). Feu blanc Q ou VQ." },

  { id: 'BTA5', theme: 'A',
    sign: 'buoy-cardinal-s',
    prompt: "La bouée cardinale SUD a ses deux cônes topmark orientés :",
    choices: [
      "Pointe en haut (triangle/triangle)",
      "Pointe en bas (triangle inversé/triangle inversé)",
      "Base à base (losange)",
      "Pointe à pointe (sablier)"],
    correct: [1],
    explanation: "Cardinale SUD : deux cônes noirs pointe en bas. Corps jaune dessus, noir dessous. Feu blanc Q+LFl.15s. Passez au sud de cette marque." },

  { id: 'BTA6', theme: 'A',
    sign: 'buoy-cardinal-e',
    prompt: "La bouée cardinale EST a ses topmarks en forme de :",
    choices: [
      "Deux cônes pointe en haut",
      "Deux cônes base à base (losange)",
      "Deux cônes pointe à pointe (sablier)",
      "Deux sphères"],
    correct: [1],
    explanation: "Cardinale EST : deux cônes base-à-base (losange). Corps BYB (Noir/Jaune/Noir). Feu blanc Q(3)10s. Passez à l'est de la marque (eau saine à l'est)." },

  { id: 'BTA7', theme: 'A',
    sign: 'buoy-cardinal-w',
    prompt: "La bouée cardinale OUEST a ses topmarks en forme de :",
    choices: [
      "Deux cônes base à base (losange)",
      "Deux cônes pointe à pointe (sablier)",
      "Deux cônes pointe en bas",
      "Un seul cône vers le haut"],
    correct: [1],
    explanation: "Cardinale OUEST : deux cônes pointe-à-pointe (sablier). Corps YBY (Jaune/Noir/Jaune). Feu blanc Q(9)15s. Passez à l'ouest de la marque. Mnémotechnique : W = Wineglass (sablier)." },

  { id: 'BTA8', theme: 'A',
    sign: 'buoy-danger-isole',
    prompt: "Que représente une marque de danger isolé ?",
    choices: [
      "Un chenal navigable",
      "Un danger ponctuel sous la marque, eau saine tout autour",
      "La limite des eaux territoriales",
      "Un mouillage interdit"],
    correct: [1],
    explanation: "La marque de danger isolé (corps noir/rouge, 2 sphères noires en topmark) signale un danger ponctuel (épave, rocher isolé). L'eau est saine tout autour." },

  { id: 'BTA9', theme: 'A',
    sign: 'buoy-zone-sure',
    prompt: "La marque de zone sûre (milieu de chenal) est caractérisée par :",
    choices: [
      "Des bandes verticales rouges et blanches avec une sphère rouge en topmark",
      "Des bandes horizontales noires et jaunes",
      "Une couleur entièrement verte",
      "Des bandes bleues et blanches"],
    correct: [0],
    explanation: "La marque d'eaux saines a des bandes verticales rouge et blanc avec une sphère rouge en topmark. Elle indique que l'eau est saine tout autour et marque souvent le milieu d'un chenal." },

  { id: 'BTA10', theme: 'A',
    prompt: "La marque spéciale est de couleur :",
    choices: ["Orange", "Jaune", "Bleue", "Violette"],
    correct: [1],
    explanation: "La marque spéciale est entièrement jaune avec un topmark en X jaune. Elle délimite des zones spéciales (câbles sous-marins, zones militaires, parcs aquacoles, etc.)." },

  { id: 'BTA11', theme: 'A',
    prompt: "Le feu blanc Q(3)10s est associé à quelle marque cardinale ?",
    choices: ["Cardinale Nord", "Cardinale Sud", "Cardinale Est", "Cardinale Ouest"],
    correct: [2],
    explanation: "Q(3)10s = 3 éclats rapides répétés toutes les 10 secondes correspond à la cardinale EST. Mnémotechnique : 3 heures sur un cadran = EST. Nord = Q continu, Sud = Q+LFl.15s, Ouest = Q(9)15s." },

  { id: 'BTA12', theme: 'A',
    prompt: "Le sens conventionnel du balisage (côté tribord/bâbord des bouées) sur les côtes françaises est :",
    choices: [
      "De l'est vers l'ouest",
      "Du large vers le port (sens de retour de mer)",
      "De gauche à droite sur la carte",
      "Défini localement par chaque préfecture maritime"],
    correct: [1],
    explanation: "En France, le sens conventionnel de balisage est défini comme allant du large vers le port (sens de retour de mer). Sur les côtes Atlantique/Manche, c'est généralement du sud-ouest vers le nord-est." },

  { id: 'BTA13', theme: 'A',
    prompt: "Un phare émet un feu Oc(2) W 10s. Cela signifie :",
    choices: [
      "2 occultations (extinctions brèves) toutes les 10 secondes, lumière blanche",
      "2 éclats toutes les 10 secondes",
      "Lumière isophase de 10 secondes",
      "Feu clignotant rapide"],
    correct: [0],
    explanation: "Oc = occultation (la lumière est allumée par défaut et s'éteint brièvement). Oc(2) = 2 occultations. 10s = période totale. W = blanc. Différent de Fl = éclat (sombre par défaut)." },

  { id: 'BTA14', theme: 'A',
    prompt: "Un feu rouge affiché par une bouée latérale identifie :",
    choices: [
      "Une zone interdite",
      "Une bouée de bâbord dans le sens conventionnel (région A)",
      "Un danger immédiat",
      "Une zone de plongée"],
    correct: [1],
    explanation: "En région AISM A, un feu rouge sur une bouée latérale identifie une bouée de bâbord. La combiner avec la couleur rouge du corps confirme qu'il faut la laisser à bâbord (gauche) en entrant." },

  { id: 'BTA15', theme: 'A',
    prompt: "La portée nominale d'un phare est calculée pour une visibilité météorologique de :",
    choices: ["5 milles marins", "10 milles marins", "20 milles marins", "50 milles marins"],
    correct: [1],
    explanation: "La portée nominale est calculée pour une visibilité météorologique de 10 milles marins (condition standard). La portée géographique dépend de la hauteur du phare et de l'observateur." },

  { id: 'BTA16', theme: 'A',
    prompt: "Sur un pont, une arche lumineuse verte indique :",
    choices: [
      "Sens unique de navigation",
      "Passage autorisé sous cet arche (chenal navigable sous le pont)",
      "Zone dangereuse",
      "Sens du courant"],
    correct: [1],
    explanation: "Sur les ponts, les arches navigables sont signalées par un feu vert au milieu de l'ouverture. Les arches non navigables (trop basses) sont en rouge. Passez uniquement sous l'arche verte." },

  { id: 'BTA17', theme: 'A',
    prompt: "Sur une carte marine SHOM, les profondeurs sont exprimées en :",
    choices: ["Pieds", "Mètres", "Brasses (1 brasse = 1,8 m)", "Toises"],
    correct: [1],
    explanation: "Les cartes SHOM françaises modernes expriment les profondeurs en mètres, réduites au zéro hydrographique (niveau des plus basses mers astronomiques = PBMA), le cas le plus défavorable." },

  { id: 'BTA18', theme: 'A',
    prompt: "La forme d'une bouée de bâbord (région AISM A) est :",
    choices: ["Conique (cone)", "Cylindrique (can)", "Sphérique", "En forme de croix"],
    correct: [1],
    explanation: "La bouée latérale de bâbord est cylindrique (can buoy). La bouée de tribord est conique. Ces formes permettent l'identification même quand la couleur n'est pas visible (brume, nuit)." },

  { id: 'BTA19', theme: 'A',
    prompt: "Quelle couleur de feu est associée aux bouées cardinales ?",
    choices: ["Rouge", "Vert", "Blanc", "Jaune"],
    correct: [2],
    explanation: "Les quatre marques cardinales (N, S, E, O) émettent toutes un feu blanc. C'est le rythme (Q continu, Q+LFl, Q(3), Q(9)) qui permet de les distinguer." },

  { id: 'BTA20', theme: 'A',
    prompt: "Sur une carte marine, les bouées rouges marquent le côté :",
    choices: [
      "Tribord du chenal (droite en entrant)",
      "Bâbord du chenal (gauche en entrant)",
      "Zone interdite",
      "Mouillage autorisé"],
    correct: [1],
    explanation: "Sur les cartes SHOM françaises (région A), les bouées rouges sont placées du côté bâbord du chenal (gauche en entrant). Elles sont représentées par des symboles rouges sur la carte." },

  // ── THÈME B – Règles de barre et de route (RIPAM/COLREG) ─────────────────

  { id: 'BTB1', theme: 'B',
    prompt: "Quelle est la hiérarchie de priorité entre les navires selon le RIPAM (règle 18) ?",
    choices: [
      "Moteur > Voilier > Pêche > RAM > NUC",
      "NUC > RAM > CBD > Pêche > Voilier > Moteur",
      "Voilier > Moteur > Pêche",
      "Tous les navires sont à égalité"],
    correct: [1],
    explanation: "Ordre décroissant de priorité : NUC (en avarie) > RAM (manoeuvres gênées) > CBD (tirant d'eau) > Pêche > Voilier > Moteur. Le navire à moteur est toujours le moins prioritaire." },

  { id: 'BTB2', theme: 'B',
    prompt: "Deux voiliers en routes convergentes : le premier est bâbord amures, le second tribord amures. Qui doit s'écarter ?",
    choices: [
      "Le voilier tribord amures",
      "Le voilier bâbord amures",
      "Celui qui est le plus petit",
      "Celui qui est le plus rapide"],
    correct: [1],
    explanation: "RIPAM règle 12 : entre voiliers, le voilier bâbord amures (vent de bâbord) doit laisser passer le voilier tribord amures. Le voilier tribord amures est prioritaire." },

  { id: 'BTB3', theme: 'B',
    prompt: "Deux navires à moteur face à face (cap opposé) de nuit. Que doit faire chacun d'eux ?",
    choices: [
      "L'un accélère, l'autre freine",
      "Chacun vire sur tribord pour passer bâbord contre bâbord",
      "Chacun vire sur bâbord pour passer tribord contre tribord",
      "Le plus gros a la priorité"],
    correct: [1],
    explanation: "RIPAM règle 14 (routes opposées) : chaque navire vire sur tribord et passe bâbord contre bâbord. C'est la règle standard pour les routes directement opposées." },

  { id: 'BTB4', theme: 'B',
    prompt: "Deux navires à moteur en routes convergentes (ni face à face, ni dépassement). Lequel cède le passage ?",
    choices: [
      "Celui qui voit l'autre sur son tribord",
      "Celui qui voit l'autre sur son bâbord",
      "Le plus rapide",
      "Le moins long"],
    correct: [1],
    explanation: "RIPAM règle 15 (routes convergentes) : le navire qui voit l'autre par le bâbord doit manoeuvrer pour éviter la collision. Le navire qui voit l'autre par tribord est prioritaire." },

  { id: 'BTB5', theme: 'B',
    prompt: "Un navire 'rattrapant' est :",
    choices: [
      "Un navire qui revient au port",
      "Un navire qui dépasse un autre par l'arrière (secteur 22,5° derrière le travers arrière)",
      "Un navire en panne",
      "Un navire qui remonte le courant"],
    correct: [1],
    explanation: "Un navire rattrapant s'approche d'un autre par l'arrière dans un secteur de 22,5° (visible feu de poupe blanc). Il est toujours tenu de s'écarter, même s'il est un voilier (règle 13)." },

  { id: 'BTB6', theme: 'B',
    prompt: "La navigation dans un chenal étroit oblige à :",
    choices: [
      "Naviguer en plein milieu du chenal",
      "Tenir aussi loin que possible sur tribord du chenal",
      "Tenir aussi loin que possible sur bâbord du chenal",
      "Accélérer pour minimiser le temps de traversée"],
    correct: [1],
    explanation: "RIPAM règle 9 (chenaux étroits) : tout navire doit naviguer aussi près que possible de la limite du chenal qui est sur son côté tribord, pour faciliter les croisements." },

  { id: 'BTB7', theme: 'B',
    prompt: "Un voilier a-t-il toujours la priorité sur un navire à moteur ?",
    choices: [
      "Oui, toujours",
      "Non, un voilier doit céder au NUC, RAM, CBD et aux navires de pêche",
      "Oui, sauf dans un chenal",
      "Cela dépend de la taille des navires"],
    correct: [1],
    explanation: "Selon la règle 18, un voilier est prioritaire sur un navire à moteur, MAIS il doit céder le passage à un navire NUC, RAM, CBD ou engagé à la pêche." },

  { id: 'BTB8', theme: 'B',
    prompt: "Les feux de navigation d'un voilier sous voiles la nuit sont :",
    choices: [
      "Feu blanc de tête de mât + feux de côté",
      "Feux de côté (rouge bâbord + vert tribord) + feu de poupe blanc",
      "Feu rouge continu tout autour",
      "Feux de côté + deux feux rouges verticaux"],
    correct: [1],
    explanation: "Un voilier sous voiles affiche : feu rouge (bâbord 112,5°) + feu vert (tribord 112,5°) + feu blanc de poupe (135°). Pas de feu de tête de mât blanc (réservé aux navires à moteur)." },

  { id: 'BTB9', theme: 'B',
    prompt: "Un navire à moteur de nuit doit afficher :",
    choices: [
      "Uniquement un feu blanc 360°",
      "Feu de tête de mât blanc (avant) + feux de côté rouge/vert + feu blanc de poupe",
      "Deux feux verts verticaux",
      "Feu rouge de tête de mât + feux de côté"],
    correct: [1],
    explanation: "Navire à moteur < 50 m de nuit : feu de tête de mât blanc (225° vers l'avant) + feux de côté rouge+vert (112,5° chacun) + feu blanc de poupe (135°)." },

  { id: 'BTB10', theme: 'B',
    prompt: "Un navire au mouillage la nuit affiche :",
    choices: [
      "Ses feux de route normaux",
      "Un feu blanc tout autour de l'horizon (360°)",
      "Deux feux verts",
      "Aucun feu obligatoire en eaux intérieures"],
    correct: [1],
    explanation: "Un navire au mouillage (< 50 m) doit afficher un feu blanc 360° visible de loin. Au-delà de 50 m, un feu à l'avant et un à l'arrière sont requis." },

  { id: 'BTB11', theme: 'B',
    prompt: "Un souffle long (4 à 6 secondes) émis par un navire en brume signifie :",
    choices: [
      "Je vire à droite",
      "Signal de présence d'un navire à moteur en marche en visibilité réduite",
      "Je suis en détresse",
      "Passage obligatoire par tribord"],
    correct: [1],
    explanation: "Un souffle prolongé est le signal de présence en visibilité réduite émis par les navires à moteur. Il est émis toutes les 2 minutes au plus." },

  { id: 'BTB12', theme: 'B',
    prompt: "Un voilier qui utilise son moteur d'appoint doit afficher :",
    choices: [
      "Les feux de voilier (conserve ses avantages)",
      "Les feux d'un navire à moteur (feu de tête de mât obligatoire)",
      "Les mêmes feux peu importe l'usage du moteur",
      "Uniquement ses feux de côté"],
    correct: [1],
    explanation: "Dès qu'un voilier utilise son moteur, il doit afficher les feux d'un navire à moteur et perd sa priorité de voilier. De jour il peut hisser un cône noir pointe en bas." },

  { id: 'BTB13', theme: 'B',
    prompt: "La règle d'une bonne veille (règle 5 RIPAM) impose :",
    choices: [
      "Regarder uniquement devant soi",
      "Maintenir une veille permanente par tous les moyens disponibles (vue, ouïe, radar, VHF)",
      "N'utiliser que ses yeux",
      "Déléguer la veille à l'équipier uniquement"],
    correct: [1],
    explanation: "La règle 5 impose une veille permanente et appropriée par tous les moyens disponibles : vision directe, écoute des signaux, VHF canal 16, radar le cas échéant." },

  { id: 'BTB14', theme: 'B',
    prompt: "Si vous voyez uniquement le feu vert d'un autre navire, il se dirige :",
    choices: [
      "Vers votre gauche",
      "Vers votre droite (vous êtes dans son secteur tribord)",
      "Directement vers vous",
      "À l'opposé de vous"],
    correct: [1],
    explanation: "Voir uniquement le feu vert (tribord) de l'autre bateau signifie que vous êtes dans son secteur tribord. Il se dirige vers votre droite. Selon la règle 15, vous devez lui céder le passage." },

  { id: 'BTB15', theme: 'B',
    prompt: "Si vous voyez le feu rouge ET vert d'un autre navire devant vous :",
    choices: [
      "Il va dans la même direction que vous (vous le rattrapez)",
      "Vous êtes en route directement opposée ou convergente frontale",
      "Il est à l'arrêt",
      "Il tourne à droite"],
    correct: [1],
    explanation: "Voir à la fois le feu rouge (bâbord) et vert (tribord) d'un autre navire signifie qu'il vous fait face. Appliquer la règle 14 : virez tous les deux à tribord." },

  { id: 'BTB16', theme: 'B',
    prompt: "La vitesse de sécurité (règle 6 RIPAM) est :",
    choices: [
      "Exactement la moitié de la vitesse maximale",
      "La vitesse permettant de s'arrêter dans un espace approprié selon la visibilité et le trafic",
      "La vitesse minimale pour gouverner le navire",
      "La vitesse autorisée dans les ports (3 noeuds)"],
    correct: [1],
    explanation: "La règle 6 impose d'adapter la vitesse aux conditions : visibilité, densité du trafic, manoeuvrabillité. En brume, on réduit la vitesse pour s'arrêter dans la distance de visibilité." },

  { id: 'BTB17', theme: 'B',
    prompt: "En cas de risque immédiat d'abordage et que l'autre navire ne manoeuvre pas, le navire prioritaire :",
    choices: [
      "Maintient sa route coûte que coûte",
      "Doit finalement manoeuvrer pour éviter l'abordage par tous moyens",
      "Accélère pour traverser en premier",
      "Coupe le moteur et attend"],
    correct: [1],
    explanation: "Règle 17(b) : si le navire maintenu (prioritaire) voit que la collision est inévitable en maintenant sa route, il doit finalement manoeuvrer pour éviter l'abordage." },

  { id: 'BTB18', theme: 'B',
    prompt: "Une vedette à moteur doit-elle céder la priorité à un pêcheur qui pêche avec des filets déployés ?",
    choices: [
      "Non, si la vedette est plus grande",
      "Oui, tout navire à moteur cède aux navires engagés à la pêche (engins déployés)",
      "Non, le petit bateau de pêche cède toujours",
      "Oui, uniquement en port"],
    correct: [1],
    explanation: "Selon la règle 18, un navire à moteur doit laisser passer les navires engagés à la pêche avec engins déployés (filets, palangres). Un pêcheur à la ligne simple n'est pas 'engagé à la pêche' au sens du RIPAM." },

  { id: 'BTB19', theme: 'B',
    prompt: "Le secteur d'un feu vert (tribord) d'un navire à moteur couvre :",
    choices: [
      "360°",
      "180° vers l'avant",
      "112,5° du tribord (de la proue à 22,5° après le travers tribord)",
      "90° à l'avant droit"],
    correct: [2],
    explanation: "Le feu de côté vert (tribord) couvre 112,5° : de la proue jusqu'à 22,5° en arrière du travers tribord. Idem pour le feu rouge (bâbord) de l'autre côté." },

  { id: 'BTB20', theme: 'B',
    prompt: "Deux voiliers naviguent du même bord (même amure). Lequel est prioritaire ?",
    choices: [
      "Celui au vent (le plus près du vent)",
      "Celui sous le vent (le plus éloigné du vent)",
      "Celui qui est le plus grand",
      "Celui qui est à l'avant"],
    correct: [1],
    explanation: "RIPAM règle 12 (même bord) : le voilier sous le vent est prioritaire. Le voilier au vent doit s'écarter. Mnémotechnique : le voilier sous le vent est 'bloqué', le voilier au vent peut manoeuvrer." },

  // ── THÈME C – Météorologie maritime ──────────────────────────────────────

  { id: 'BTC1', theme: 'C',
    prompt: "L'échelle de Beaufort comporte :",
    choices: ["8 niveaux (0 à 7)", "13 niveaux (0 à 12)", "10 niveaux (1 à 10)", "20 niveaux"],
    correct: [1],
    explanation: "L'échelle de Beaufort comporte 13 niveaux : 0 (calme, 0 noeuds) à 12 (ouragan, > 64 noeuds). Force 6 = vent frais (22-27 noeuds), force 7 = grand frais (28-33 noeuds)." },

  { id: 'BTC2', theme: 'C',
    prompt: "Un BMS (Bulletin Météorologique Spécial) est émis lorsque le vent est prévu à :",
    choices: ["Force 5 et plus", "Force 7 et plus", "Force 9 et plus", "Force 10 et plus"],
    correct: [1],
    explanation: "Un BMS est émis en France pour des vents prévus de force 7 ou plus. Il déclenche un signal visuel d'avertissement dans les ports (cône noir)." },

  { id: 'BTC3', theme: 'C',
    prompt: "Un cône noir pointe vers le bas dans un port signifie :",
    choices: [
      "Courant dangereux",
      "Vents forts venant du sud/sud-ouest (BMS en cours)",
      "Navire dangereux entrant",
      "Zone de plongée"],
    correct: [1],
    explanation: "Signal de tempête en France : 1 cône noir pointe en bas = vents violents venant du sud/sud-ouest, 1 cône pointe en haut = vents venant du nord. 2 cônes = tempête très violente." },

  { id: 'BTC4', theme: 'C',
    prompt: "Dans l'hémisphère Nord, les vents girent autour d'un anticyclone dans le sens :",
    choices: [
      "Anti-horaire (comme autour d'une dépression)",
      "Horaire (dans le sens des aiguilles d'une montre)",
      "Ils soufflent vers le centre de l'anticyclone",
      "Il n'y a pas de circulation définie"],
    correct: [1],
    explanation: "Dans l'hémisphère Nord : anticyclone = circulation horaire avec des vents divergents. Dépression = circulation anti-horaire avec des vents convergents vers le centre." },

  { id: 'BTC5', theme: 'C',
    prompt: "Une houle est différente d'une vague car :",
    choices: [
      "La houle est toujours plus haute que les vagues",
      "La houle est une ondulation régulière provenant d'une tempête lointaine, indépendante du vent local",
      "La vague se forme uniquement à l'approche des côtes",
      "Il n'y a pas de différence pratique"],
    correct: [1],
    explanation: "La houle est une ondulation de longue période générée par une tempête éloignée. Elle peut être présente par temps calme. La mer du vent est la vague créée par le vent local." },

  { id: 'BTC6', theme: 'C',
    prompt: "Force 6 de Beaufort correspond à des vents de :",
    choices: ["11 à 16 noeuds", "17 à 21 noeuds", "22 à 27 noeuds", "28 à 33 noeuds"],
    correct: [2],
    explanation: "Force 6 (vent frais) = 22-27 noeuds (environ 40-50 km/h). Les crêtes des vagues commencent à se former avec des embruns." },

  { id: 'BTC7', theme: 'C',
    prompt: "Un brouillard de mer se forme généralement quand :",
    choices: [
      "Il fait très froid et le vent est fort",
      "L'air chaud et humide rencontre une mer plus froide (brouillard d'advection)",
      "Il pleut abondamment",
      "La température de l'eau est supérieure à 25 degrés"],
    correct: [1],
    explanation: "Le brouillard d'advection (maritime) est le plus courant en mer : l'air chaud et humide se refroidit en arrivant sur une mer plus froide, atteignant le point de rosée." },

  { id: 'BTC8', theme: 'C',
    prompt: "Le vent de noroît vient de :",
    choices: ["L'est", "Le nord-ouest", "L'ouest", "Le nord-est"],
    correct: [1],
    explanation: "Un vent est nommé par la direction d'où il vient. Noroît = vent du Nord-Ouest. Suroît = vent du Sud-Ouest. Galerne = vent du Nord-Nord-Ouest sur les côtes atlantiques." },

  { id: 'BTC9', theme: 'C',
    prompt: "L'approche d'un front froid se manifeste par :",
    choices: [
      "Baisse progressive de la pression sur plusieurs jours",
      "Chute rapide de la pression, sautes de vent brusques, averses et grains violents",
      "Amélioration progressive du temps",
      "Vent de secteur est s'établissant progressivement"],
    correct: [1],
    explanation: "L'arrivée d'un front froid : chute rapide de la pression, rotation brusque du vent, grains, averses puis amélioration rapide après le passage du front." },

  { id: 'BTC10', theme: 'C',
    prompt: "La règle de Buys-Ballot (hémisphère Nord) permet de localiser une dépression en :",
    choices: [
      "Se mettant face au vent : la dépression est devant vous",
      "Mettant le dos au vent : la dépression est à votre droite",
      "Se mettant face au vent : la dépression est à votre gauche",
      "Regardant la carte"],
    correct: [1],
    explanation: "Règle de Buys-Ballot : mettez-vous dos au vent, la basse pression est à votre droite (avec ~10-15° de déviation vers l'avant). Très utile pour anticiper l'évolution météo." },

  { id: 'BTC11', theme: 'C',
    prompt: "Le canal VHF dédié à la diffusion des bulletins météo marine en France est généralement le :",
    choices: ["Canal 16", "Canal 67 ou 79 (selon les régions)", "Canal 22", "Canal 12"],
    correct: [1],
    explanation: "Les bulletins météo marines sont diffusés sur le canal VHF 67 ou 79 (selon les régions CROSS), ainsi que sur NAVTEX (518 kHz) et via Météo-France sur internet." },

  { id: 'BTC12', theme: 'C',
    prompt: "La mer est définie comme 'forte' à partir de quelle hauteur de vague significative ?",
    choices: ["0,5 à 1,25 m", "1,25 à 2,5 m", "2,5 à 4 m", "4 à 6 m"],
    correct: [2],
    explanation: "Selon l'OMM : calme (< 0,1 m), belle (0,1-0,5 m), peu agitée (0,5-1,25 m), agitée (1,25-2,5 m), forte (2,5-4 m), très forte (4-6 m). Un permis côtier est limité à BF 7 et mer acceptable." },

  // ── THÈME D – Sécurité à bord et signaux de détresse ─────────────────────

  { id: 'BTD1', theme: 'D',
    prompt: "Un gilet de sauvetage 150 N est destiné à :",
    choices: [
      "La navigation en eaux très calmes uniquement",
      "Retourner une personne inconsciente sur le dos même en mer agitée",
      "Les enfants uniquement",
      "La plongée sous-marine"],
    correct: [1],
    explanation: "Un gilet 150 N est conçu pour retourner automatiquement une personne inconsciente face vers le haut, même en eau agitée. Il est obligatoire pour les navigations exposées loin des côtes." },

  { id: 'BTD2', theme: 'D',
    prompt: "Le signal de détresse MAYDAY est utilisé quand :",
    choices: [
      "Le moteur est en panne",
      "Le navire ou une personne est en danger grave et immédiat, nécessitant une assistance immédiate",
      "Vous vous êtes perdu en mer",
      "Vous avez un problème mécanique non urgent"],
    correct: [1],
    explanation: "MAYDAY (de 'm'aidez') signifie : danger de mort immédiat (naufrage, homme à la mer inconscient...). Il déclenche l'intervention immédiate des secours." },

  { id: 'BTD3', theme: 'D',
    prompt: "Le signal PAN-PAN est utilisé pour :",
    choices: [
      "Un danger de mort immédiat (naufrage)",
      "Une urgence : état de santé d'une personne, panne grave mais navire encore en sécurité",
      "Un danger de navigation pour les autres (épave, balise dérivante)",
      "Un appel de routine"],
    correct: [1],
    explanation: "PAN-PAN signale une urgence moins grave que MAYDAY : blessé à bord, panne de moteur sans danger immédiat. Il précède le MAYDAY si la situation se dégrade." },

  { id: 'BTD4', theme: 'D',
    prompt: "Le signal SECURITE en VHF est utilisé pour :",
    choices: [
      "Un naufrage immédiat",
      "Une urgence médicale",
      "Un avertissement de navigation : danger localisé, épave, conditions météo",
      "Un appel à quai"],
    correct: [2],
    explanation: "SECURITE est le signal de sécurité nautique : prévenir les autres navigateurs d'un danger localisé (épave, conteneur dérivant, BMS). Les CROSS l'émettent sur le canal 16 avant les bulletins météo." },

  { id: 'BTD5', theme: 'D',
    prompt: "Sur quel canal VHF doit être effectué un appel de détresse ?",
    choices: ["Canal 6", "Canal 16", "Canal 9", "Canal 22"],
    correct: [1],
    explanation: "Le canal 16 est le canal international de veille, de détresse et d'appel. Tout navire équipé VHF doit maintenir une écoute permanente sur ce canal. MAYDAY, PAN-PAN et SECURITE sont toujours émis sur le 16." },

  { id: 'BTD6', theme: 'D',
    prompt: "L'EPIRB (balise de détresse) se déclenche automatiquement lorsque :",
    choices: [
      "Le navire atteint une certaine vitesse",
      "Elle est immergée grâce à un déclencheur hydrostatique (environ 1 à 4 m de profondeur)",
      "Le capitaine appuie sur un bouton uniquement",
      "La VHF est coupée"],
    correct: [1],
    explanation: "L'EPIRB se déclenche automatiquement à l'immersion grâce au déclencheur hydrostatique. Elle émet sur 406 MHz et est détectée par le système COSPAS-SARSAT (localisation précise)." },

  { id: 'BTD7', theme: 'D',
    prompt: "En cas de personne tombée à la mer (PTM), la première action est :",
    choices: [
      "Lancer une bouée couronne uniquement",
      "Appeler les secours en premier",
      "Jeter immédiatement une bouée ou tout objet flottant, garder la personne en vue, alerter",
      "Virer immédiatement sans alerter"],
    correct: [2],
    explanation: "Priorité PTM : 1) Jeter immédiatement une bouée couronne ou tout objet flottant, 2) Garder la personne en vue (un équipier), 3) Virer pour revenir, 4) Alerter VHF 16." },

  { id: 'BTD8', theme: 'D',
    prompt: "Les fusées éclairantes à parachute de détresse sont visibles jusqu'à :",
    choices: ["5 milles", "10 milles", "28 milles", "50 milles"],
    correct: [2],
    explanation: "Une fusée à parachute est visible jusqu'à environ 28 milles par bonne visibilité (nuit). Elle brûle environ 40 secondes à grande altitude." },

  { id: 'BTD9', theme: 'D',
    prompt: "Le nombre minimum de gilets de sauvetage à bord est :",
    choices: [
      "Un par adulte seulement",
      "Un par personne présente à bord, adapté à son poids (adulte et enfant)",
      "Deux de rechange en plus de ceux de l'équipage",
      "Un seul si le bateau mesure moins de 5 m"],
    correct: [1],
    explanation: "Chaque personne à bord (adultes et enfants) doit disposer d'un gilet adapté à sa morphologie. Les gilets enfants sont différents des gilets adultes." },

  { id: 'BTD10', theme: 'D',
    prompt: "La procédure radio d'un appel de détresse MAYDAY est :",
    choices: [
      "Donner uniquement le nom du navire et la position",
      "'MAYDAY' x3, nom du navire x3, position, nature du sinistre, nombre de personnes, 'OVER'",
      "Appeler directement le 18 par téléphone",
      "Émettre un signal sonore long puis appeler"],
    correct: [1],
    explanation: "Procédure standard MAYDAY sur VHF 16 : 'MAYDAY' x3, nom du navire x3, position, nature du sinistre, nombre de personnes à bord, état du navire. Terminer par 'OVER' et écouter." },

  { id: 'BTD11', theme: 'D',
    prompt: "En cas d'incendie à bord, la première action est :",
    choices: [
      "Plonger à la mer",
      "Couper l'alimentation en carburant et l'électricité, utiliser l'extincteur, alerter",
      "Ouvrir les hublots pour aérer",
      "Accélérer pour éteindre le feu avec le vent"],
    correct: [1],
    explanation: "Face à un incendie : couper l'alimentation moteur et l'électricité (éviter explosion), utiliser l'extincteur à la base des flammes, alerter VHF 16. Ne pas ouvrir de hublots (apport d'air)." },

  { id: 'BTD12', theme: 'D',
    prompt: "Le permis côtier permet de naviguer jusqu'à :",
    choices: [
      "2 milles d'un abri par beau temps",
      "6 milles d'un abri avec force de vent ne dépassant pas Beaufort 7",
      "20 milles en haute mer",
      "Sans limite si le navire est bien équipé"],
    correct: [1],
    explanation: "Le permis côtier autorise la navigation jusqu'à 6 milles d'un abri en conditions météo avec force de vent maximale de Beaufort 7 (grand frais = 28-33 noeuds)." },

  // ── THÈME E – Navigation, cartes et instruments ───────────────────────────

  { id: 'BTE1', theme: 'E',
    prompt: "Un noeud marin correspond à :",
    choices: ["1 km/h", "1,852 km/h (un mille marin par heure)", "2 km/h", "1 mètre par seconde"],
    correct: [1],
    explanation: "Un noeud = 1 mille marin par heure = 1,852 km/h. Le mille marin = 1852 m (= 1 minute d'arc de latitude). Ces unités sont universelles en navigation maritime et aérienne." },

  { id: 'BTE2', theme: 'E',
    prompt: "Sur une carte marine SHOM, les profondeurs sont exprimées en mètres par rapport au :",
    choices: [
      "Niveau moyen de la mer",
      "Zéro hydrographique (niveau des plus basses mers astronomiques = PBMA)",
      "Niveau moyen des marées",
      "Niveau de la haute mer des vives eaux"],
    correct: [1],
    explanation: "Les profondeurs sur les cartes SHOM sont réduites au zéro hydrographique (PBMA = Plus Basses Mers Astronomiques), le cas le plus défavorable. La profondeur réelle est toujours au moins égale à la valeur indiquée." },

  { id: 'BTE3', theme: 'E',
    prompt: "La rose des vents : le cap 135° correspond à :",
    choices: ["Nord-Est", "Est", "Sud-Est", "Sud-Ouest"],
    correct: [2],
    explanation: "N = 0°/360°, NE = 045°, E = 090°, SE = 135°, S = 180°, SW = 225°, W = 270°, NW = 315°. 135° = Sud-Est." },

  { id: 'BTE4', theme: 'E',
    prompt: "Le GPS indique votre position en :",
    choices: [
      "Mètres depuis un point de référence local",
      "Latitude et longitude (coordonnées géographiques en WGS84)",
      "Distance et cap vers le port le plus proche",
      "Cap magnétique uniquement"],
    correct: [1],
    explanation: "Le GPS donne la position en coordonnées géographiques (latitude/longitude) dans le système WGS84. Elles doivent être reportées sur une carte marine (en vérifiant que la carte est en WGS84)." },

  { id: 'BTE5', theme: 'E',
    prompt: "La déclinaison magnétique est :",
    choices: [
      "L'angle entre la route fond et la route surface",
      "L'angle entre le nord magnétique (boussole) et le nord géographique (vrai)",
      "La différence de cap due au courant",
      "L'inclinaison du compas due aux métaux du bord"],
    correct: [1],
    explanation: "La déclinaison magnétique (ou variation) est l'angle entre le Nord magnétique et le Nord géographique vrai. Elle varie selon la position sur le globe et légèrement chaque année. Elle est indiquée sur les cartes." },

  { id: 'BTE6', theme: 'E',
    prompt: "La déviation du compas est due à :",
    choices: [
      "La rotation de la Terre",
      "L'influence des masses métalliques et des appareils électroniques du bord sur le compas",
      "La déclinaison magnétique locale",
      "L'angle de gîte du bateau"],
    correct: [1],
    explanation: "La déviation est l'écart entre le cap compas et le cap magnétique. Elle est causée par les masses ferriques et les champs électriques du bord. Elle est mesurée et consignée dans la courbe de déviation." },

  { id: 'BTE7', theme: 'E',
    prompt: "Le sondeur à ultrasons d'un bateau mesure :",
    choices: [
      "La vitesse du bateau",
      "La profondeur d'eau sous la quille (ou sous le transducteur)",
      "La direction du courant",
      "La position GPS"],
    correct: [1],
    explanation: "Le sondeur (écho-sondeur) mesure la profondeur en émettant une impulsion ultrasonique vers le fond et en mesurant le temps de retour." },

  { id: 'BTE8', theme: 'E',
    prompt: "Sur une carte marine, une ligne de sonde isobathe relie :",
    choices: [
      "Des points de même latitude",
      "Des points de même profondeur d'eau",
      "Des points de même hauteur de marée",
      "Des bouées de même couleur"],
    correct: [1],
    explanation: "Une isobathe (ou courbe de sonde) relie tous les points d'égale profondeur. Les chiffres de profondeur ponctuels sont les 'sondes' sur la carte." },

  { id: 'BTE9', theme: 'E',
    prompt: "La marée haute est appelée :",
    choices: ["Basse mer (BM)", "Pleine mer (PM)", "Vive eau", "Etale"],
    correct: [1],
    explanation: "Pleine mer (PM) = marée haute, Basse mer (BM) = marée basse. L'étale est le moment de stagnation où le courant de marée est quasi nul. Vives eaux = grandes marées (nouvelles et pleines lunes)." },

  { id: 'BTE10', theme: 'E',
    prompt: "En navigation côtière, prendre un relèvement permet de :",
    choices: [
      "Mesurer la vitesse du vent",
      "Déterminer l'angle entre le nord et la direction d'un amers visible depuis le navire",
      "Calculer la marée",
      "Mesurer la profondeur"],
    correct: [1],
    explanation: "Un relèvement (bearing) est la direction d'un amer (phare, clocher) mesurée en degrés depuis le nord. L'intersection de deux ou trois relèvements sur la carte donne la position du navire." },

  { id: 'BTE11', theme: 'E',
    prompt: "L'AIS (Automatic Identification System) permet de :",
    choices: [
      "Naviguer sans radar",
      "Émettre sa position/cap/vitesse et identifier les navires alentours sur un écran",
      "Recevoir les bulletins météo",
      "Mesurer la profondeur"],
    correct: [1],
    explanation: "L'AIS transmet en continu les informations du navire (MMSI, nom, position GPS, cap, vitesse) et reçoit les données des autres navires équipés. Il affiche les trafics proches sur un écran cartographique." },

  { id: 'BTE12', theme: 'E',
    prompt: "Le DSC (Digital Selective Calling) intégré à un VHF permet :",
    choices: [
      "De recevoir les bulletins météo",
      "D'envoyer un appel de détresse numérique avec la position GPS sur le canal 70",
      "De naviguer sans GPS",
      "De communiquer sur des fréquences HF"],
    correct: [1],
    explanation: "Le DSC permet d'émettre un appel numérique de détresse sur le canal 70, en transmettant automatiquement le MMSI du navire et sa position GPS. Les secours reçoivent immédiatement les informations." },

  // ── THÈME A supplémentaire – Balisage maritime ────────────────────────────

  { id: 'BTA21', theme: 'A',
    prompt: "Quelle est la couleur du feu d'une bouée cardinale OUEST ?",
    choices: ["Feu blanc à 9 occultations (Oc(9))", "Feu rouge à 3 éclats", "Feu vert continu", "Feu jaune isophase"],
    correct: [0],
    explanation: "La cardinale OUEST émet un feu blanc à 9 occultations ou 9 éclats rapides (Q(9) ou VQ(9)), rappelant que 9 est à l'ouest sur le cadran d'horloge. Sa topmark est deux cônes pointe à pointe (sablier)." },

  { id: 'BTA22', theme: 'A',
    prompt: "Une marque de danger isolé signale :",
    choices: [
      "Une zone de mouillage interdit",
      "Un danger de faible étendue entouré d'eau navigable",
      "L'entrée d'un chenal",
      "Une zone militaire"],
    correct: [1],
    sign: 'buoy-danger-isole',
    explanation: "La marque de danger isolé est placée sur ou au-dessus d'un danger de faible étendue. L'eau est navigable tout autour. Elle est noire à bandes horizontales rouges, topmark deux boules noires superposées." },

  { id: 'BTA23', theme: 'A',
    sign: 'buoy-zone-sure',
    prompt: "La bouée de zone sûre (safe water mark) indique :",
    choices: [
      "Un danger à éviter",
      "De l'eau navigable tout autour (entrée de chenal, point de route)",
      "Une zone de baignade interdite",
      "La limite des eaux territoriales"],
    correct: [1],
    explanation: "La marque d'eaux saines (safe water mark) est rayée rouge et blanche verticalement, topmark une boule rouge. Elle signale de l'eau saine tout autour — souvent utilisée pour marquer le milieu d'un chenal ou l'approche d'un port." },

  { id: 'BTA24', theme: 'A',
    prompt: "Dans le système AISM, les bouées cardinales se repèrent par rapport à :",
    choices: [
      "L'orientation des courants de marée",
      "Les points cardinaux (N, S, E, O) par rapport au danger",
      "La couleur de l'eau",
      "La fréquence des vagues"],
    correct: [1],
    explanation: "Les marques cardinales indiquent de quel côté (Nord, Sud, Est, Ouest) passer le danger. Elles sont placées dans le quadrant correspondant par rapport au danger." },

  { id: 'BTA25', theme: 'A',
    prompt: "La topmark d'une bouée cardinale EST est :",
    choices: [
      "Deux cônes pointe en haut",
      "Deux cônes pointe en bas",
      "Deux cônes pointe à pointe (sablier)",
      "Deux cônes base à base (losange)"],
    correct: [3],
    explanation: "La cardinale EST a deux cônes base à base formant un losange (♦). Moyen mnémotechnique : E comme Egg (œuf en forme de losange). Son feu est Q(3) ou VQ(3) : 3 éclats rapides représentant 3h sur un cadran." },

  { id: 'BTA26', theme: 'A',
    prompt: "La bouée cardinale SUD émet quel type de feu ?",
    choices: [
      "Q(3) – 3 éclats rapides",
      "Q(6)+LFl – 6 éclats rapides + 1 long",
      "Q(9) – 9 éclats rapides",
      "Feu isophase blanc"],
    correct: [1],
    explanation: "La cardinale SUD émet Q(6)+LFl (6 éclats rapides + 1 éclat long) ou VQ(6)+LFl. Le feu long final distingue le sud du nord (qui émet Q ou VQ continu). Couleurs : jaune dessus, noir dessous." },

  { id: 'BTA27', theme: 'A',
    prompt: "Quelle bouée indique la limite d'une épave ou d'un danger récemment découvert ?",
    choices: [
      "Bouée cardinale nord",
      "Bouée de danger nouvellement découvert (marque d'urgence)",
      "Bouée latérale de tribord",
      "Bouée de zone sûre"],
    correct: [1],
    explanation: "La marque de danger nouvellement découvert (Emergency Wreck Marking Buoy) est bleue et jaune rayée verticalement, avec un feu bleu et jaune alternant. Elle est placée provisoirement jusqu'à ce que les cartes soient mises à jour." },

  { id: 'BTA28', theme: 'A',
    prompt: "En région AISM A, lorsque vous sortez d'un port, la bouée rouge cylindrique doit être :",
    choices: [
      "À votre gauche (bâbord)",
      "À votre droite (tribord)",
      "Devant vous",
      "Derrière vous"],
    correct: [1],
    explanation: "La convention 'rouge à bâbord en entrant' s'inverse en sortant : la bouée rouge cylindrique passe à tribord (droite). En entrant → rouge à gauche ; en sortant → rouge à droite." },

  { id: 'BTA29', theme: 'A',
    prompt: "À quoi sert le secteur rouge d'un feu de phare ?",
    choices: [
      "Il indique la zone de pêche interdite",
      "Il balise un danger et signale que le navire se trouve dans un secteur dangereux",
      "Il indique la direction du port",
      "Il marque les eaux peu profondes généralement"],
    correct: [1],
    explanation: "Les secteurs colorés d'un phare délimitent des zones de danger ou d'approche sécurisée. Le secteur rouge (parfois vert) signale une zone dangereuse : récifs, hauts-fonds, chenal étroit. Le secteur blanc est en général la route sûre." },

  { id: 'BTA30', theme: 'A',
    prompt: "Un feu à scintillement rapide (Very Quick – VQ) émet :",
    choices: [
      "Moins de 50 éclats par minute",
      "Entre 50 et 79 éclats par minute (en général 100-120)",
      "50 éclats exactement par minute",
      "1 éclat toutes les 5 secondes"],
    correct: [1],
    explanation: "Le scintillement très rapide (VQ, Very Quick) dépasse 100 éclats/minute (souvent 120). Le scintillement rapide (Q, Quick) est de 50-79 éclats/min. Ces caractéristiques permettent d'identifier les marques cardinales sur les cartes." },

  { id: 'BTA31', theme: 'A',
    prompt: "Quelle est la forme d'une bouée latérale de bâbord (rouge) en région AISM A ?",
    choices: ["Conique", "Cylindrique (can)", "Sphérique", "Pilier avec topmark croix"],
    correct: [1],
    explanation: "En région A, la bouée latérale de bâbord est rouge et de forme cylindrique (appelée 'can'). La bouée de tribord est verte conique. Moyen mnémotechnique : CAN à bâbord (gauche), CONique à tribord (droite)." },

  { id: 'BTA32', theme: 'A',
    prompt: "Sur une carte SHOM, un tiret rouge entourant un chiffre de sonde indique :",
    choices: [
      "Un chenal balisé",
      "Une profondeur plus faible que la sonde normale (haut-fond)",
      "Une zone de mouillage",
      "La limite des eaux territoriales"],
    correct: [1],
    explanation: "Sur les cartes marines françaises, les sondes soulignées ou en rouge signalent des haut-fonds dangereux dont la profondeur peut être inférieure à celle indiquée, ou des zones rocheuses à surveiller attentivement." },

  { id: 'BTA33', theme: 'A',
    prompt: "Qu'est-ce qu'un 'amer' en navigation ?",
    choices: [
      "Une bouée de fond",
      "Tout point fixe identifiable à terre servant de repère de navigation",
      "Un instrument de mesure de la marée",
      "Une zone de pêche interdite"],
    correct: [1],
    explanation: "Un amer est un repère visuel fixe à terre (phare, clocher, château d'eau, antenne) identifiable sur une carte marine. Les relèvements sur des amers permettent de faire le point (position) par navigation à vue." },

  { id: 'BTA34', theme: 'A',
    prompt: "Une bouée spéciale (jaune) marque :",
    choices: [
      "Un danger isolé",
      "Une zone ou installation particulière (zone militaire, pipe, câble, aquaculture…)",
      "Le milieu d'un chenal",
      "Une zone de sauvetage"],
    correct: [1],
    explanation: "Les marques spéciales sont entièrement jaunes avec topmark croix de Saint-André (×) jaune. Elles délimitent des zones particulières mentionnées sur les cartes : câbles sous-marins, pipelines, zones d'entraînement militaire, parcs à moules." },

  { id: 'BTA35', theme: 'A',
    prompt: "La cardinale EST indique que l'eau sûre se trouve :",
    choices: ["Au nord du danger", "À l'est du danger", "Au sud du danger", "À l'ouest du danger"],
    correct: [1],
    explanation: "Une cardinale EST est placée à l'est d'un danger. Passer à l'est de cette marque, c'est se mettre en eau saine. Son feu est Q(3) ou VQ(3) (3 éclats = 3h sur un cadran = Est)." },

  { id: 'BTA36', theme: 'A',
    prompt: "Les feux de phares et balises sont listés dans :",
    choices: [
      "L'annuaire des marées",
      "L'ouvrage 'Feux et signaux de brume' (Instructions nautiques SHOM)",
      "Le code IAMSAR",
      "Le Règlement COLREG"],
    correct: [1],
    explanation: "Les caractéristiques de tous les feux maritimes sont répertoriées dans l'ouvrage 'Feux et signaux de brume' publié par le SHOM (Service Hydrographique et Océanographique de la Marine). Il est mis à jour régulièrement." },

  { id: 'BTA37', theme: 'A',
    prompt: "Qu'indique un feu isophase (Iso) ?",
    choices: [
      "Le feu éclaire et s'obscurcit avec des durées égales",
      "Le feu émet un seul éclat long",
      "Le feu scintille en continu",
      "Le feu alterne rouge et vert"],
    correct: [0],
    explanation: "Un feu isophase (Iso) a des durées d'éclat et d'obscurité égales. Exemple : Iso.4s = 2s allumé, 2s éteint, période de 4 secondes. C'est une caractéristique utilisée pour identifier certaines bouées et phares." },

  { id: 'BTA38', theme: 'A',
    prompt: "Combien de régions compte le système de balisage AISM ?",
    choices: ["1 région universelle", "2 régions (A et B)", "4 régions", "8 régions"],
    correct: [1],
    explanation: "L'AISM définit deux régions : Région A (Europe, Australie, Afrique, plupart du monde) et Région B (Amériques, Japon, Philippines, Corée). La principale différence est l'inversion des couleurs latérales rouge/vert." },

  { id: 'BTA39', theme: 'A',
    prompt: "En région AISM A, la bouée verte conique de tribord, en sortant du port, doit être :",
    choices: [
      "À votre gauche (bâbord)",
      "À votre droite (tribord)",
      "Peu importe",
      "Toujours visible derrière vous"],
    correct: [0],
    explanation: "En entrant, le vert (tribord) est à droite. En sortant, tout s'inverse : le vert passe à bâbord (gauche). Mémorisez la règle d'entrée, puis inversez pour la sortie." },

  { id: 'BTA40', theme: 'A',
    prompt: "Un feu occultant (Oc) est caractérisé par :",
    choices: [
      "Des éclipses plus courtes que les éclats",
      "Des éclipses plus longues que les éclats (le feu est allumé plus longtemps qu'il est éteint)",
      "Des durées égales allumé/éteint",
      "Un seul éclat par période"],
    correct: [1],
    explanation: "Feu occultant (Oc) : durée d'allumage supérieure à la durée d'extinction. C'est l'inverse du feu à éclats (Fl) où les éclipses sont plus longues que les éclats. Exemple : Oc.3s = allumé 2s, éteint 1s." },

  { id: 'BTA41', theme: 'A',
    prompt: "Quelle couleur identifie uniquement les marques spéciales AISM ?",
    choices: ["Orange", "Jaune", "Violet", "Rose"],
    correct: [1],
    explanation: "Les marques spéciales sont entièrement jaunes avec topmark croix jaune (×). Ne pas confondre avec les cardinales (bicolores noir/jaune) ou les bouées de zone sûre (rayées rouge/blanc)." },

  { id: 'BTA42', theme: 'A',
    prompt: "Le terme 'portée nominale' d'un feu de phare désigne :",
    choices: [
      "La distance à laquelle on voit le feu par temps clair",
      "La distance de visibilité dans des conditions de visibilité météorologique de 10 milles marins",
      "La hauteur du phare",
      "La puissance en watts de la lampe"],
    correct: [1],
    explanation: "La portée nominale est calculée pour une visibilité météo de 10 milles et dépend de l'intensité lumineuse. La portée géographique dépend de la hauteur du feu et de la hauteur d'œil de l'observateur. Sur les cartes, c'est la portée nominale qui est indiquée." },

  { id: 'BTA43', theme: 'A',
    prompt: "Une bouée de tête de chenal en région AISM A est généralement :",
    choices: [
      "Une cardinale nord",
      "Une marque d'eaux saines (safe water mark) rayée rouge/blanc",
      "Une bouée spéciale jaune",
      "Une cardinale est"],
    correct: [1],
    explanation: "La marque de tête de chenal ou d'approche (safe water mark) est caractéristique : rayée rouge et blanche verticalement, topmark sphère rouge. Elle indique de l'eau navigable tout autour et marque l'entrée du chenal principal." },

  { id: 'BTA44', theme: 'A',
    prompt: "Que signifie l'abréviation 'SHOM' ?",
    choices: [
      "Service d'Hydrographie et d'Océanographie Maritime",
      "Système Harmonisé d'Observation Marine",
      "Service Hydrographique et Océanographique de la Marine",
      "Signalisation Hydrographique et Orientation Maritime"],
    correct: [2],
    explanation: "Le SHOM (Service Hydrographique et Océanographique de la Marine) est l'organisme officiel français chargé de produire les cartes marines, les annuaires de marées et les ouvrages nautiques pour les eaux françaises." },

  { id: 'BTA45', theme: 'A',
    prompt: "Un feu à éclats groupés Q(3) émet :",
    choices: [
      "3 éclats toutes les 10 secondes",
      "3 éclats rapides régulièrement, répétés chaque période",
      "Un éclat toutes les 3 secondes",
      "3 éclats lents"],
    correct: [1],
    explanation: "Q(3) signifie 3 éclats rapides (Quick flashing) répétés chaque période. C'est le feu caractéristique de la cardinale EST. Le nombre d'éclats correspond à la position sur l'horloge : 3h = Est, 6h = Sud, 9h = Ouest, Nord = continu Q." },

  // ── THÈME B supplémentaire – Règles de barre et de route ─────────────────

  { id: 'BTB21', theme: 'B',
    prompt: "Deux voiliers se croisent bâbord amure contre tribord amure. Qui cède le passage ?",
    choices: [
      "Le voilier tribord amure cède",
      "Le voilier bâbord amure cède",
      "Le plus rapide cède",
      "Ils peuvent se croiser librement"],
    correct: [1],
    explanation: "COLREG règle 12 : entre deux voiliers, le voilier bâbord amure cède le passage au voilier tribord amure. Moyen mnémotechnique : le vent vient du côté bâbord → je cède. (Amure bâbord = vent sur bâbord)." },

  { id: 'BTB22', theme: 'B',
    prompt: "Quelle est la signification d'un feu rouge fixe visible à 112,5° de l'avant sur bâbord ?",
    choices: [
      "Feu de poupe",
      "Feu de côté bâbord (rouge) du navire croisé",
      "Feu d'ancre",
      "Feu de remorquage"],
    correct: [1],
    explanation: "Les feux de côté couvrent un secteur de 112,5° depuis l'avant : rouge à bâbord (gauche), vert à tribord (droite). Voir un feu rouge signifie que vous regardez le côté bâbord d'un navire. Il vient de votre gauche — vous êtes potentiellement sur sa route." },

  { id: 'BTB23', theme: 'B',
    prompt: "En mer, la règle générale de priorité est :",
    choices: [
      "Le plus rapide est prioritaire",
      "Le navire le moins manœuvrant ou le moins apte à manœuvrer est prioritaire",
      "Le plus grand est prioritaire",
      "Celui qui voit l'autre le premier est prioritaire"],
    correct: [1],
    explanation: "Le COLREG établit une hiérarchie basée sur la capacité de manœuvre : navires hors de contrôle et navires à capacité manœuvrante restreinte ont la priorité absolue. Ensuite : chalutier au travail, navire à voile, navire à moteur." },

  { id: 'BTB24', theme: 'B',
    prompt: "La règle du 'navire en vue d'un autre navire' (COLREG règle 11-18) s'applique :",
    choices: [
      "Uniquement de nuit",
      "Lorsque les navires sont en visibilité visuelle directe l'un de l'autre",
      "Uniquement en haute mer",
      "Uniquement dans les chenaux"],
    correct: [1],
    explanation: "La section II du COLREG (règles 11 à 18) ne s'applique qu'en visibilité (navires en vue l'un de l'autre). En visibilité réduite (brouillard), c'est la section III (règle 19) qui s'applique : vitesse de sécurité, feux et signaux sonores." },

  { id: 'BTB25', theme: 'B',
    prompt: "Quand peut-on dépasser un autre navire par son côté bâbord ?",
    choices: [
      "Jamais",
      "Lorsque dépasser par tribord est impossible ou dangereux, avec accord du dépassé (2 sons longs + 2 courts)",
      "Toujours si l'on est plus rapide",
      "Uniquement dans les ports"],
    correct: [1],
    explanation: "Le dépassement normal se fait par tribord. Le dépassement par bâbord est autorisé si la situation le justifie. Dans les voies navigables intérieures et chenaux, les signaux sonores réglementaires doivent être échangés (intention et accord)." },

  { id: 'BTB26', theme: 'B',
    prompt: "Un navire à moteur rencontre un navire à voile en mer ouverte. Qui a la priorité ?",
    choices: [
      "Le navire à moteur car plus manœuvrable",
      "Le navire à voile, sauf exceptions (dépassement, navires hors contrôle…)",
      "Ils sont à égalité",
      "Dépend de la taille"],
    correct: [1],
    explanation: "COLREG règle 18 : le navire à moteur cède le passage au navire à voile (sauf si le voilier dépasse un autre navire, ou que le voilier utilise son moteur). Toutefois le voilier doit lui-même céder aux navires hors contrôle, CMR, en pêche." },

  { id: 'BTB27', theme: 'B',
    prompt: "En visibilité réduite, quelle est la règle fondamentale ?",
    choices: [
      "Accélérer pour traverser la zone le plus vite possible",
      "Naviguer à vitesse de sécurité permettant de s'arrêter dans la moitié de la visibilité disponible",
      "Arrêter les machines et attendre",
      "Allumer uniquement le feu de mouillage"],
    correct: [1],
    explanation: "COLREG règle 19 : en visibilité réduite, tout navire doit naviguer à une vitesse de sécurité adaptée. Le principe est de pouvoir s'arrêter dans la moitié de la visibilité disponible. Les feux réglementaires et les signaux sonores toutes les 2 minutes sont obligatoires." },

  { id: 'BTB28', theme: 'B',
    prompt: "Quel signal sonore doit émettre un voilier en marche en visibilité réduite ?",
    choices: [
      "Un son long toutes les 2 minutes",
      "Deux sons longs + un son court toutes les 2 minutes",
      "Un son long + deux sons courts toutes les 2 minutes",
      "Quatre sons courts toutes les 2 minutes"],
    correct: [2],
    explanation: "COLREG règle 35 : en marche avec propulsion mécanique → un son long toutes les 2 min. Voilier en marche à la voile → un long + deux courts toutes les 2 min. Navire au mouillage → cloche rapide toutes les 1 min." },

  { id: 'BTB29', theme: 'B',
    prompt: "Deux navires à moteur se font face (route quasi opposée). Que doivent-ils faire ?",
    choices: [
      "Virer à bâbord chacun",
      "Virer à tribord chacun pour se croiser côté bâbord",
      "Le plus petit cède",
      "Celui qui voit le feu vert cède"],
    correct: [1],
    explanation: "COLREG règle 14 (routes opposées) : chaque navire vire à tribord pour se croiser par bâbord (côté gauche). Ils se verront réciproquement les feux rouges de bâbord. Cette règle s'applique quand la situation est ambiguë (cap à ±6° l'un de l'autre)." },

  { id: 'BTB30', theme: 'B',
    prompt: "Un navire à l'ancre de nuit doit montrer :",
    choices: [
      "Un feu vert à l'avant",
      "Un feu blanc tout horizon à l'avant (et un second feu blanc à l'arrière si > 50 m)",
      "Les feux de route habituels",
      "Aucun feu si moteur éteint"],
    correct: [1],
    explanation: "COLREG règle 30 : navire au mouillage → feu blanc tout horizon à l'avant (et un second feu blanc à l'arrière si le navire dépasse 50 m). Les navires < 7 m peuvent se dispenser de ce feu s'ils ne sont pas dans un chenal." },

  { id: 'BTB31', theme: 'B',
    prompt: "La règle de barre en cas de situation de dépassement (règle 13) stipule :",
    choices: [
      "Le navire devancé est toujours prioritaire quel que soit son type",
      "Le navire qui dépasse doit s'écarter du navire dépassé jusqu'à ce qu'il l'ait entièrement dépassé et dégagé",
      "Le plus rapide a la priorité",
      "Le dépassement est interdit dans les ports"],
    correct: [1],
    explanation: "Règle 13 : tout navire qui en dépasse un autre est le navire manœuvrant qui cède. Cette règle prévaut sur toutes les autres (routes contraires, traversée). Le dépassant s'écarte jusqu'à ce qu'il soit dégagé." },

  { id: 'BTB32', theme: 'B',
    prompt: "Quelle forme doit exhiber un navire de pêche au mouillage pratiquant la pêche (chalut, filets…) de jour ?",
    choices: [
      "Un cône pointe en bas",
      "Deux cônes réunis par la pointe (forme de sablier/bicône) noir",
      "Une boule noire",
      "Un cylindre rouge"],
    correct: [1],
    explanation: "COLREG : navire en train de pêcher au mouillage (chalut, traîne) → deux cônes réunis par la pointe (bicône) noir. Un navire à voile sous voile + moteur → un cône pointe en bas avant. Navire au mouillage → une boule." },

  { id: 'BTB33', theme: 'B',
    prompt: "Un navire faisant route à moteur la nuit doit montrer :",
    choices: [
      "Feu de tête de mât blanc + feux de côté (rouge bâbord, vert tribord) + feu de poupe blanc",
      "Uniquement le feu de tête de mât blanc",
      "Feux de côté uniquement",
      "Feu blanc tout horizon"],
    correct: [0],
    explanation: "COLREG règle 23 : navire à propulsion mécanique en marche → feu blanc de tête de mât (secteur 225°) + feux de côté rouge/vert (112,5° chacun) + feu de poupe blanc (135°). Les navires > 50 m ont un deuxième feu de tête de mât plus bas à l'arrière." },

  { id: 'BTB34', theme: 'B',
    prompt: "Qu'est-ce que la 'règle d'action rapide' (règle 8) du COLREG ?",
    choices: [
      "Toujours accélérer en cas de risque de collision",
      "Toute manœuvre d'évitement doit être franche (ample, à temps, efficace) et non une succession de petites corrections",
      "Le navire le plus petit doit toujours céder",
      "Préférer virer à gauche en urgence"],
    correct: [1],
    explanation: "Règle 8 : toute manœuvre pour éviter une collision doit être large et nette (pas de petites corrections successives), effectuée suffisamment tôt et permettre un dégagement franc. Un changement de cap de 30° ou plus est généralement visible clairement par l'autre navire." },

  { id: 'BTB35', theme: 'B',
    prompt: "Vous voyez simultanément un feu vert et un feu blanc de tête de mât d'un autre navire. Ce navire :",
    choices: [
      "Se dirige vers vous par l'avant tribord",
      "S'éloigne de vous",
      "Est au mouillage",
      "Effectue un virage à bâbord"],
    correct: [0],
    explanation: "Feu vert = côté tribord du navire croisé. Feu blanc de tête de mât = il est en marche. Voir vert + blanc signifie que son tribord est face à vous : il arrive par votre droite (vous voyez son côté tribord). Vous êtes le navire manœuvrant et devez céder." },

  { id: 'BTB36', theme: 'B',
    prompt: "Un navire hors de contrôle montre, de nuit, en plus de ses feux de route :",
    choices: [
      "Deux feux rouges superposés tout horizon",
      "Un feu vert tout horizon",
      "Deux feux blancs clignotants",
      "Un feu rouge et un feu blanc alternés"],
    correct: [0],
    explanation: "COLREG règle 27 : navire hors de contrôle → deux feux rouges tout horizon superposés. De jour : deux boules noires superposées. Ce navire ne peut pas manœuvrer et est prioritaire sur pratiquement tous les autres navires." },

  { id: 'BTB37', theme: 'B',
    prompt: "Quelle est la définition d'un 'navire à capacité de manœuvre restreinte' (CMR) ?",
    choices: [
      "Un navire dont les machines sont en panne",
      "Un navire dont la capacité à manœuvrer est limitée par la nature de son travail (dragage, pose de câbles, etc.)",
      "Un navire de moins de 7 mètres",
      "Un navire par très mauvais temps"],
    correct: [1],
    explanation: "CMR (navire à capacité manœuvrante restreinte) : navires effectuant des opérations qui limitent leur manœuvre : dragage, pose de câbles, ravitaillement en mer, opérations d'aviation, déminage, remorquage. Ils affichent boule-losange-boule de jour (ou rouge-blanc-rouge la nuit)." },

  { id: 'BTB38', theme: 'B',
    prompt: "En cas de risque de collision avec un navire qui croise votre route par bâbord, vous êtes le navire prioritaire. Que faites-vous ?",
    choices: [
      "Vous virez franchement à tribord pour dégager",
      "Vous maintenez votre route et vitesse ; si une collision devient inévitable, vous manœuvrez",
      "Vous accélérez pour passer devant",
      "Vous stoppez les machines immédiatement"],
    correct: [1],
    explanation: "Règle 17 : le navire prioritaire (stand-on vessel) doit maintenir sa route et vitesse pour permettre au navire manœuvrant de calculer son évitement. Ce n'est que si la collision devient imminente et que l'autre n'agit pas qu'il peut, puis doit, manœuvrer (règle 17b)." },

  { id: 'BTB39', theme: 'B',
    prompt: "Le signal sonore 'un son bref' en manœuvre dans un port signifie :",
    choices: [
      "Je stationne",
      "Je vire sur bâbord",
      "Je vire sur tribord",
      "Je fais machine arrière"],
    correct: [2],
    explanation: "Règle 34 (signaux de manœuvre et d'avertissement) : 1 son bref = je vire à tribord ; 2 sons brefs = je vire à bâbord ; 3 sons brefs = mes machines marchent en arrière. 5 sons brefs ou plus = signal d'avertissement (doute sur intentions)." },

  { id: 'BTB40', theme: 'B',
    prompt: "Quelle règle s'applique entre un voilier et un navire de pêche en train de pêcher (chalut) ?",
    choices: [
      "Le voilier est toujours prioritaire",
      "Le navire en train de pêcher est prioritaire sur le voilier",
      "Le plus petit cède",
      "Celui qui va le plus vite cède"],
    correct: [1],
    explanation: "Règle 18 : le navire à voile cède le passage aux navires hors de contrôle, aux CMR, et aux navires en train de pêcher. Un chalutier déployant ses engins est donc prioritaire sur un voilier de plaisance." },

  { id: 'BTB41', theme: 'B',
    prompt: "Dans un chenal étroit, comment doit se tenir un navire ?",
    choices: [
      "Au milieu du chenal",
      "Aussi près que possible de la limite tribord (droite) du chenal",
      "Aussi près que possible de la limite bâbord (gauche)",
      "N'importe où tant qu'il n'y a pas d'autre navire"],
    correct: [1],
    explanation: "COLREG règle 9 : dans un chenal étroit, tout navire doit naviguer aussi près que possible de la limite tribord du chenal. Ce sont les mêmes règles que la conduite sur route (tenir sa droite). Les petits navires ne doivent pas gêner ceux qui ne peuvent naviguer qu'à l'intérieur du chenal." },

  { id: 'BTB42', theme: 'B',
    prompt: "La 'distance de visibilité' à prendre en compte pour la vitesse de sécurité en visibilité réduite est :",
    choices: [
      "La portée de votre radar",
      "La distance à laquelle vous pouvez réellement voir un obstacle",
      "1 mille marin minimum",
      "La portée des feux de route"],
    correct: [1],
    explanation: "La vitesse de sécurité est celle permettant d'arrêter le navire dans la moitié de la visibilité réelle (météo). Si vous ne voyez qu'à 100 m, vous devez pouvoir stopper en 50 m. Le radar aide mais ne remplace pas la prudence visuelle." },

  { id: 'BTB43', theme: 'B',
    prompt: "Un navire à voile fait également route au moteur. Qu'exhibe-t-il de jour ?",
    choices: [
      "Rien de spécial",
      "Un cône pointe en bas à l'avant",
      "Deux cônes base à base (bicône)",
      "Une boule noire"],
    correct: [1],
    explanation: "Règle 25 : un voilier qui utilise simultanément la voile et le moteur doit arborer un cône noir pointe en bas visible à l'avant. Il est alors considéré comme navire à propulsion mécanique pour les règles de priorité." },

  { id: 'BTB44', theme: 'B',
    prompt: "Deux voiliers tribord amure se croisent. Lequel cède ?",
    choices: [
      "Celui sous le vent cède",
      "Celui au vent cède",
      "Le plus grand cède",
      "Le plus lent cède"],
    correct: [1],
    explanation: "Règle 12b : quand deux voiliers ont le même bord au vent, le navire le plus au vent (windward) doit s'écarter du navire le plus sous le vent (leeward). Le vent pousse le navire au vent vers l'autre, donc il manœuvre." },

  { id: 'BTB45', theme: 'B',
    prompt: "Un signal sonore de 5 éclats sonores brefs ou plus en mer signifie :",
    choices: [
      "Demande de pilote",
      "Signal d'urgence",
      "Avertissement : je doute de vos intentions, un risque de collision existe",
      "Je suis en mouillage"],
    correct: [2],
    explanation: "5 sons brefs ou plus (règle 34d) : signal de doute ou d'avertissement. Si un navire ne comprend pas les intentions de l'autre ou s'il estime que l'autre ne prend pas les mesures suffisantes pour éviter la collision, il émet au moins 5 sons brefs." },

  // ── THÈME C supplémentaire – Météorologie maritime ───────────────────────

  { id: 'BTC13', theme: 'C',
    prompt: "Quelle est la définition de la mer 'belle' (état de mer 0) sur l'échelle de Douglas ?",
    choices: [
      "Hauteur de vagues inférieures à 0,1 m, surface lisse comme un miroir",
      "Légère brise, quelques moutons",
      "Mer agitée avec vagues de 1 à 2 m",
      "Vent de force 3 Beaufort"],
    correct: [0],
    explanation: "L'échelle de Douglas classe l'état de la mer de 0 (calme glace) à 9 (phénoménal > 14 m). Degré 0 = mer calme (glassy), < 0,1 m. Degré 1 = rides (0,1–0,5 m). Degré 3 = légère (0,5–1,25 m). Elle est indépendante de l'échelle Beaufort (vent)." },

  { id: 'BTC14', theme: 'C',
    prompt: "Sur une carte météo, les isobares sont des lignes reliant :",
    choices: [
      "Des points de même température",
      "Des points de même pression atmosphérique",
      "Des points de même vitesse de vent",
      "Des points de même hauteur de vague"],
    correct: [1],
    explanation: "Les isobares relient les points de pression atmosphérique égale (exprimée en hectopascals, hPa). Un resserrement des isobares indique un gradient de pression fort et donc des vents forts. Les centres 'L' (dépression) et 'H' (anticyclone) sont repérés sur ces cartes." },

  { id: 'BTC15', theme: 'C',
    prompt: "La règle de Buys-Ballot indique que dans l'hémisphère nord :",
    choices: [
      "Le vent tourne dans le sens des aiguilles d'une montre autour des dépressions",
      "Si vous avez le vent dans le dos, la dépression est sur votre gauche",
      "Les anticyclones sont toujours à l'est",
      "Le vent souffle des zones froides vers les zones chaudes"],
    correct: [1],
    explanation: "Règle de Buys-Ballot (HN) : dos au vent, la dépression est à gauche et l'anticyclone à droite. Les vents circulent dans le sens antihoraire autour des dépressions (HN) et horaire autour des anticyclones (HN)." },

  { id: 'BTC16', theme: 'C',
    prompt: "Le passage d'un front froid est caractérisé par :",
    choices: [
      "Une hausse progressive de la température et des pluies fines",
      "Une baisse brusque de la température, des averses intenses, un changement de vent et une hausse de pression",
      "Du brouillard persistant",
      "Un vent régulier d'est"],
    correct: [1],
    explanation: "Front froid : l'air froid repousse l'air chaud vers le haut. Passage rapide (quelques heures) avec averses intenses ou orages, chute de température, veering (rotation horaire HN) du vent, puis ciel qui se dégage et pression remonte." },

  { id: 'BTC17', theme: 'C',
    prompt: "Le terme 'grain' en météo marine désigne :",
    choices: [
      "Vent régulier modéré pendant 24 heures",
      "Renforcement soudain et bref du vent, souvent accompagné de précipitations",
      "Brume légère en mer",
      "Un type de houle longue"],
    correct: [1],
    explanation: "Un grain (squall) est une augmentation soudaine et intense du vent (hausse ≥ 16 nœuds, vent ≥ 22 nœuds, durée ≥ 1 min). Il est souvent accompagné de nuages cumulonimbus, de pluie, voire de grêle. Dangereux en plaisance car imprévisible à court terme." },

  { id: 'BTC18', theme: 'C',
    prompt: "Sur quels canaux VHF sont diffusées les informations météo marines en France ?",
    choices: [
      "Canal 16 uniquement",
      "Canal 9 et 12",
      "Canaux météo dédiés (souvent 79, 80 ou fréquences spécifiques) annoncés sur le 16",
      "Canal 70 (DSC)"],
    correct: [2],
    explanation: "En France, Météo France diffuse les bulletins météo marins sur des canaux VHF spécifiques (ex : canal 79 en Atlantique) après une annonce sur le canal 16. Les bulletins NAVTEX sont également utilisés pour les zones au large. Consultez les Instructions Nautiques locales." },

  { id: 'BTC19', theme: 'C',
    prompt: "La force 6 sur l'échelle de Beaufort correspond à :",
    choices: [
      "Calme (< 1 nœud)",
      "Brise fraîche (22–27 nœuds) – mer agitée, lames",
      "Tempête (48–55 nœuds)",
      "Coup de vent modéré (28–33 nœuds)"],
    correct: [1],
    explanation: "Beaufort 6 = brise fraîche, 22 à 27 nœuds, mer agitée (vagues 2–4 m), lames qui se forment, moutons nombreux. Limite habituelle de la navigation côtière pour les petites unités. Beaufort 7 = coup de vent frais (28-33 kn)." },

  { id: 'BTC20', theme: 'C',
    prompt: "Qu'est-ce que la 'dépression secondaire' en météo marine ?",
    choices: [
      "Une dépression d'altitude sans effet en surface",
      "Une dépression qui se forme sur le front d'une dépression principale et peut rapidement se creuser",
      "Un anticyclone en formation",
      "Une zone de calme plat"],
    correct: [1],
    explanation: "Une dépression secondaire (ou dépression frontale) naît sur le front d'une dépression principale. Elle peut se creuser très rapidement (bombogenèse) et surprendre les navigateurs. Sa trajectoire est souvent difficile à prévoir." },

  { id: 'BTC21', theme: 'C',
    prompt: "Le vent thermique côtier 'brise de mer' souffle :",
    choices: [
      "De la terre vers la mer, la nuit",
      "De la mer vers la terre, le jour (réchauffement différentiel)",
      "Du nord vers le sud en été",
      "En permanence dans les zones tropicales"],
    correct: [1],
    explanation: "La brise de mer se produit de jour : le soleil réchauffe la terre plus vite que la mer. L'air chaud monte sur la terre, créant une aspiration d'air frais depuis la mer vers la terre. La brise de terre souffle en sens inverse la nuit (terre se refroidit plus vite)." },

  { id: 'BTC22', theme: 'C',
    prompt: "La houle se distingue de la vague de vent par le fait qu'elle :",
    choices: [
      "A toujours une hauteur supérieure aux vagues de vent",
      "Est une onde régulière qui se propage loin de la zone génératrice, même en l'absence de vent local",
      "Ne se forme qu'en eau peu profonde",
      "Disparaît dès que le vent tombe"],
    correct: [1],
    explanation: "La houle est une onde longue et régulière générée par un vent éloigné. Elle peut traverser des milliers de kilomètres d'océan. Sa longueur d'onde (distance crête à crête) est grande. Elle peut coexister avec des vagues de vent locales et créer une mer croisée." },

  { id: 'BTC23', theme: 'C',
    prompt: "La météo NAVTEX est reçue sur :",
    choices: [
      "VHF canal 16",
      "518 kHz (bande des ondes moyennes) sur un récepteur NAVTEX dédié",
      "Satellites INMARSAT uniquement",
      "Fréquences FM classiques"],
    correct: [1],
    explanation: "NAVTEX (Navigational Telex) diffuse des messages météo, d'urgence et des avis de navigation sur 518 kHz (ou 490 kHz en langue nationale). Un récepteur NAVTEX dédié imprime automatiquement les messages. Portée : environ 300-400 milles." },

  { id: 'BTC24', theme: 'C',
    prompt: "Qu'indique un baromètre qui chute rapidement (plus de 5 hPa/3h) ?",
    choices: [
      "Temps stable et ensoleillé probable",
      "Arrivée probable d'une dépression avec dégradation rapide du temps",
      "Anticyclone en formation",
      "Brume de rayonnement"],
    correct: [1],
    explanation: "Chute rapide de la pression (> 5 hPa/3h, parfois appelée 'chute de baromètre') annonce une dépression qui s'approche avec du vent fort, de la pluie, voire une tempête. C'est un signal d'alarme pour le navigateur côtier." },

  { id: 'BTC25', theme: 'C',
    prompt: "La 'visibilité' en météo marine est exprimée en :",
    choices: [
      "Kilomètres ou milles marins",
      "Degrés d'angle",
      "Hectopascals",
      "Beaufort"],
    correct: [0],
    explanation: "La visibilité météorologique est exprimée en mètres ou kilomètres (et en milles marins dans les bulletins maritimes). Les catégories : bonne (> 5 M), modérée (2–5 M), médiocre (1–2 M), mauvaise (< 1 M), brume (0,2–1 km), brouillard (< 200 m)." },

  { id: 'BTC26', theme: 'C',
    prompt: "Comment se forme le brouillard d'advection en mer ?",
    choices: [
      "Par refroidissement nocturne de l'air sur terre",
      "Quand de l'air chaud et humide se déplace au-dessus d'une surface maritime froide et se refroidit jusqu'au point de rosée",
      "Par évaporation rapide après la pluie",
      "Par surchauffe de la surface de la mer en été"],
    correct: [1],
    explanation: "Le brouillard d'advection (sea fog) est le brouillard maritime le plus fréquent et le plus dangereux. L'air chaud et humide (ex : au large de Terre-Neuve ou dans le Golfe de Gascogne au printemps) se refroidit en passant sur une mer froide et le brouillard se forme." },

  { id: 'BTC27', theme: 'C',
    prompt: "En France, les bulletins météo marins côtiers sont émis par :",
    choices: [
      "La Marine Nationale uniquement",
      "Météo France (service Météo Marine)",
      "L'Armée de l'Air",
      "La Société Météorologique de France"],
    correct: [1],
    explanation: "Météo France est l'organisme officiel qui émet les bulletins météo marins (BMS) pour les côtes françaises, diffusés sur les canaux VHF, NAVTEX, internet (météoconsult marine) et sur l'application Météo France." },

  { id: 'BTC28', theme: 'C',
    prompt: "Un nuage cumulonimbus (Cb) en mer annonce :",
    choices: [
      "Un temps stable et ensoleillé",
      "Des grains violents avec pluie intense, orage, vents forts et mer agitée localement",
      "Du brouillard de radiation",
      "Une amélioration durable"],
    correct: [1],
    explanation: "Le cumulonimbus est un nuage convectif gigantesque (jusqu'à 15 km de haut) associé aux orages, aux grains violents, à la foudre, aux trombes marines, aux rafales. Repérable de loin par son sommet en enclume. À éviter impérativement en voilier." },

  { id: 'BTC29', theme: 'C',
    prompt: "Dans l'hémisphère nord, les vents circulent autour d'un anticyclone dans le sens :",
    choices: [
      "Antihoraire",
      "Horaire",
      "Du nord vers le sud",
      "Variable selon la saison"],
    correct: [1],
    explanation: "Dans l'hémisphère nord, les vents circulent dans le sens horaire autour des anticyclones (zone de hautes pressions) et dans le sens antihoraire autour des dépressions. C'est l'inverse dans l'hémisphère sud (force de Coriolis)." },

  { id: 'BTC30', theme: 'C',
    prompt: "L'échelle de Beaufort comporte combien de forces ?",
    choices: ["10 forces (0 à 9)", "12 forces (0 à 11)", "13 forces (0 à 12)", "15 forces (0 à 14)"],
    correct: [2],
    explanation: "L'échelle de Beaufort comporte 13 degrés, de 0 (calme) à 12 (ouragan, > 64 nœuds). Elle a été créée par l'amiral Beaufort en 1805. Force 7 = coup de vent ; Force 8 = fort coup de vent ; Force 9 = tempête ; Force 10 = forte tempête." },

  { id: 'BTC31', theme: 'C',
    prompt: "Qu'est-ce que le 'fetch' en météo marine ?",
    choices: [
      "La profondeur de l'eau sous la quille",
      "La distance sur laquelle le vent souffle de manière constante, déterminant la hauteur des vagues",
      "La durée d'une marée",
      "L'amplitude d'une vague"],
    correct: [1],
    explanation: "Le fetch est la longueur de mer sur laquelle le vent souffle sans obstacle dans une direction donnée. Plus le fetch est grand, plus les vagues peuvent grossir. En Manche (fetch limité), les vagues restent plus courtes et raides qu'en Atlantique (grand fetch)." },

  { id: 'BTC32', theme: 'C',
    prompt: "Un bulletin météo marine annonce 'mer belle à peu agitée'. Cela correspond à des vagues de :",
    choices: [
      "0,1 à 0,5 m",
      "0,5 à 1,25 m et 1,25 à 2,5 m",
      "2,5 à 4 m",
      "4 à 6 m"],
    correct: [1],
    explanation: "Selon l'échelle de Douglas : belle = 0,1–0,5 m, peu agitée = 0,5–1,25 m, agitée = 1,25–2,5 m, très agitée = 2,5–4 m. 'Belle à peu agitée' couvre donc les vagues de 0,1 à 1,25 m environ." },

  { id: 'BTC33', theme: 'C',
    prompt: "Un avis de coup de vent (BMS Côte) est déclenché pour des vents prévus de force :",
    choices: [
      "Force 5 (17-21 nœuds)",
      "Force 7 (28-33 nœuds) ou plus",
      "Force 9 (41-47 nœuds) seulement",
      "Force 4 (11-16 nœuds)"],
    correct: [1],
    explanation: "Un Bulletin de Météo Spécial (BMS) Côte est émis dès que des vents de force 7 (coup de vent, 28-33 nœuds) ou plus sont prévus sur les côtes dans les 12 heures. Force 9+ déclenche un avis de tempête. Ces bulletins sont prioritaires sur toutes les communications." },

  { id: 'BTC34', theme: 'C',
    prompt: "La mer 'croisée' (cross sea) est particulièrement dangereuse car :",
    choices: [
      "Elle est très haute mais régulière",
      "Elle combine deux systèmes de houle ou vague de directions différentes, créant des vagues imprévisibles et plus hautes",
      "Elle est invisible au radar",
      "Elle n'affecte que les voiliers"],
    correct: [1],
    explanation: "La mer croisée résulte de la superposition de deux systèmes d'ondes de directions différentes (houle résiduelle d'un front passé + nouvelle mer de vent). Les vagues résultantes sont irrégulières, imprévisibles et peuvent être plus hautes (interférence constructive)." },

  { id: 'BTC35', theme: 'C',
    prompt: "Quelle est la signification de 'veering' pour le vent ?",
    choices: [
      "Diminution de la vitesse du vent",
      "Rotation du vent dans le sens horaire (ex : SW → W → NW) dans l'hémisphère nord",
      "Rotation dans le sens antihoraire",
      "Vent établi fixe"],
    correct: [1],
    explanation: "Veering = rotation horaire du vent (ex : S → SW → W → NW en HN). Backing = rotation antihoraire (ex : W → SW → S). Après le passage d'un front froid, le vent veer (tourne dans le sens horaire) en HN. En HN, le veering annonce souvent l'amélioration." },

  { id: 'BTC36', theme: 'C',
    prompt: "La dépression des Açores est en réalité :",
    choices: [
      "Une zone dépressionnaire permanente",
      "Un anticyclone semi-permanent des Açores (haute pression) qui influence le temps en Europe occidentale",
      "Un courant marin froid",
      "Une zone de convergence tropicale"],
    correct: [1],
    explanation: "L'anticyclone des Açores (et non dépression) est un système de hautes pressions semi-permanent en Atlantique Nord. Quand il est puissant et remonte vers le nord, il bloque les dépressions atlantiques et apporte du beau temps en Europe occidentale." },

  { id: 'BTC37', theme: 'C',
    prompt: "Qu'est-ce qu'une 'bombogenèse' (bomb cyclogenesis) ?",
    choices: [
      "La disparition rapide d'un anticyclone",
      "Le creusement très rapide d'une dépression (chute de pression > 24 hPa en 24h)",
      "L'apparition soudaine d'une brise de mer",
      "La formation de moutons sur la mer"],
    correct: [1],
    explanation: "La bombogenèse est un creusement explosive d'une dépression : la pression baisse de plus de 24 hPa en 24 heures. Ces 'bombes météo' peuvent amener des vents d'ouragan en quelques heures et sont particulièrement dangereux en Atlantique Nord en hiver." },

  // ── THÈME D supplémentaire – Sécurité à bord et signaux de détresse ──────

  { id: 'BTD13', theme: 'D',
    prompt: "Quelle est la durée de vie réglementaire d'une fusée à parachute ?",
    choices: ["1 an", "2 ans", "3 ans", "5 ans"],
    correct: [2],
    explanation: "La réglementation française impose que les fusées pyrotechniques (fusées à parachute, feux à main, fumigènes) aient une durée de validité de 3 ans. Elles doivent être remplacées avant leur date de péremption et ne pas être jetées à la mer (déchets dangereux)." },

  { id: 'BTD14', theme: 'D',
    prompt: "En cas de naufrage ou de détresse grave, quel signal est le plus efficace pour alerter les secours ?",
    choices: [
      "Agiter les bras",
      "Déclencher la balise de détresse EPIRB (406 MHz) et appel DSC sur canal 70",
      "Émettre des signaux lumineux avec une lampe",
      "Utiliser le sifflet de sécurité"],
    correct: [1],
    explanation: "La balise EPIRB (Emergency Position Indicating Radio Beacon) à 406 MHz transmet la position GPS au système COSPAS-SARSAT qui alerte les MRCC. Combinée à un appel DSC (Détresse Numérique Sélective) sur canal 70, c'est la procédure de détresse la plus efficace." },

  { id: 'BTD15', theme: 'D',
    prompt: "Le signal de détresse international 'SOS' en code Morse est :",
    choices: [
      "· · · — — — · · ·",
      "— · — · — ·",
      "· — · — · —",
      "— — — · · ·"],
    correct: [0],
    explanation: "SOS en Morse : · · · — — — · · · (3 points, 3 tirets, 3 points). C'est le signal international universel de détresse. Il peut être émis par lampe, sifflet, klaxon ou radio. Le signal Mayday (voix) et le SOS (Morse) ont la même valeur légale." },

  { id: 'BTD16', theme: 'D',
    prompt: "Le radeau de sauvetage doit être révisé :",
    choices: [
      "Tous les 5 ans",
      "Tous les ans ou selon les prescriptions du fabricant (en général tous les 1 à 3 ans)",
      "Jamais si non utilisé",
      "Tous les 10 ans"],
    correct: [1],
    explanation: "Les radeaux de survie gonflables doivent être révisés régulièrement par un atelier agréé (en général tous les 1, 2 ou 3 ans selon le fabricant et la réglementation). La révision inclut l'inspection des gaz de gonflage, des équipements de survie et des amarres." },

  { id: 'BTD17', theme: 'D',
    prompt: "La procédure de récupération d'un homme à la mer commence par :",
    choices: [
      "Lancer une bouée fer-à-cheval immédiatement et désigner quelqu'un pour ne jamais perdre le naufragé des yeux",
      "Virer de bord immédiatement",
      "Appeler les secours en premier",
      "Diminuer la voilure avant d'agir"],
    correct: [0],
    explanation: "Priorité absolue : lancer une bouée-fer-à-cheval (et la traîne lumineuse la nuit) vers le naufragé et désigner un guetteur qui ne le quitte JAMAIS des yeux. Puis actionner la man-overboard sur le GPS, alerter l'équipage, appeler les secours si nécessaire, et manœuvrer pour récupérer la personne." },

  { id: 'BTD18', theme: 'D',
    prompt: "En France, un navire de plaisance côtière doit avoir à bord au minimum :",
    choices: [
      "Gilets de sauvetage uniquement",
      "Un gilet de sauvetage par personne à bord et les équipements de sécurité correspondant à la division de navigation",
      "Uniquement une VHF et un compas",
      "Un équipement médical complet"],
    correct: [1],
    explanation: "La réglementation française (décision 2022 des affaires maritimes) impose un gilet par personne + des équipements dont la liste dépend de la 'division' (6e à 1ère). En côtière (6e division) : gilets, feux, moyen d'appel, extincteur, écope/pompe, ligne de vie." },

  { id: 'BTD19', theme: 'D',
    prompt: "Quelle est la fréquence d'écoute radio obligatoire en navigation côtière française ?",
    choices: [
      "Canal 9 VHF",
      "Canal 16 VHF (veille permanente recommandée/obligatoire selon la catégorie)",
      "AM 1800 kHz",
      "Canal 70 VHF"],
    correct: [1],
    explanation: "Le canal 16 VHF est le canal international de détresse, d'urgence et d'appel. En France, la veille sur le canal 16 est obligatoire pour les navires équipés VHF. Le canal 70 est réservé exclusivement aux appels numériques DSC (ne pas l'utiliser pour la voix)." },

  { id: 'BTD20', theme: 'D',
    prompt: "Qu'est-ce que le MMSI d'un navire ?",
    choices: [
      "Son indicatif d'appel radio",
      "Son numéro d'identification unique à 9 chiffres enregistré avec la VHF/DSC pour les appels de détresse",
      "Son numéro d'immatriculation",
      "Sa puissance radio en watts"],
    correct: [1],
    explanation: "Le MMSI (Maritime Mobile Service Identity) est un numéro d'identification unique à 9 chiffres attribué à chaque navire équipé DSC. Il est programmé dans la VHF/DSC et l'AIS. Un appel de détresse DSC transmet automatiquement le MMSI + la position GPS aux secours." },

  { id: 'BTD21', theme: 'D',
    prompt: "En cas d'incendie à bord, la première action est :",
    choices: [
      "Appeler les secours immédiatement",
      "Couper l'alimentation électrique et les vannes de carburant, puis combattre le feu si possible",
      "Évacuer le navire immédiatement",
      "Jeter l'ancre pour immobiliser le navire"],
    correct: [1],
    explanation: "Face à un incendie à bord : 1) Couper moteur, carburant et électricité pour priver le feu de combustible. 2) Si le feu est petit, attaquer avec l'extincteur adapté (CO2 ou poudre, jamais eau sur feu électrique). 3) Si le feu prend de l'ampleur, déclencher la procédure d'abandon et appeler les secours." },

  { id: 'BTD22', theme: 'D',
    prompt: "Le signal visuel de détresse 'carré orange avec un disque noir' est :",
    choices: [
      "Un signal pyrotechnique",
      "Un signal de détresse pour les navires, flottant sur l'eau ou à bord, visible de l'air",
      "Le pavillon du code de signalisation Q",
      "Un signal utilisé uniquement par les sous-marins"],
    correct: [1],
    explanation: "Le carré orange avec disque noir (ou cercle) est un des signaux de détresse réglementaires (COLREG Annexe IV). Visible de l'air par hélicoptère ou avion de recherche, il est utilisé en complément des autres signaux pyrotechniques et radio." },

  { id: 'BTD23', theme: 'D',
    prompt: "Quelle est la durée de visibilité minimale d'une fusée à parachute de détresse ?",
    choices: [
      "10 secondes",
      "40 secondes",
      "2 minutes",
      "5 minutes"],
    correct: [1],
    explanation: "Une fusée à parachute réglementaire doit brûler pendant au moins 40 secondes à une altitude minimale de 300 m, avec une luminosité de 30 000 candelas minimum en rouge. Le parachute ralentit la descente pour maximiser la visibilité." },

  { id: 'BTD24', theme: 'D',
    prompt: "Qu'est-ce que le 'CROSS' en France ?",
    choices: [
      "Centre Régional de Sauvetage Maritime (coordination des secours en mer)",
      "Un type de bouée de sauvetage",
      "Le code de signalisation maritime",
      "L'organisme de délivrance des permis bateau"],
    correct: [0],
    explanation: "Le CROSS (Centre Régional Opérationnel de Surveillance et de Sauvetage) est l'équivalent français du MRCC (Maritime Rescue Coordination Centre). Il coordonne les opérations de sauvetage en mer, diffuse les bulletins météo et surveille le trafic maritime." },

  { id: 'BTD25', theme: 'D',
    prompt: "Comment émettre un appel de détresse MAYDAY à la VHF ?",
    choices: [
      "Canal 9, dire 'URGENCE URGENCE URGENCE' + position",
      "Canal 16, dire 'MAYDAY MAYDAY MAYDAY + nom du navire + position + nature détresse + nombre de personnes + tout renseignement utile'",
      "Canal 70 à la voix, dire 'SOS SOS SOS'",
      "Canal 16, dire uniquement 'MAYDAY' et attendre"],
    correct: [1],
    explanation: "Procédure MAYDAY : canal 16, dire 'MAYDAY MAYDAY MAYDAY – Ici [nom navire] [indicatif] – MAYDAY – [nom navire] – Ma position est [lat/long ou relèvement/distance] – [nature détresse] – [nombre de personnes à bord] – Demande assistance – Terminé'." },

  { id: 'BTD26', theme: 'D',
    prompt: "L'annuaire de sauvetage maritime IAMSAR volume III est destiné :",
    choices: [
      "Aux services de sauvetage professionnels",
      "À bord des navires pour guider l'équipage dans les procédures de détresse et de coordination SAR",
      "Aux compagnies aériennes",
      "Aux administrations portuaires"],
    correct: [1],
    explanation: "L'IAMSAR (Manuel International de Recherche et Sauvetage Aéronautiques et Maritimes) volume III est le manuel de bord destiné aux navires. Il décrit les signaux de détresse, les procédures d'abandon, les signaux de communication avec les hélicoptères de sauvetage." },

  { id: 'BTD27', theme: 'D',
    prompt: "Un extincteur à bord d'un bateau à moteur est obligatoire :",
    choices: [
      "Uniquement si le réservoir fait plus de 50 litres",
      "Pour tout bateau à moteur (même hors-bord) selon la réglementation française",
      "Uniquement pour les voiliers de plus de 8 m",
      "Seulement dans les ports"],
    correct: [1],
    explanation: "Tout navire à moteur doit disposer d'au moins un extincteur homologué MED (ou EN3). Un extincteur à poudre 2 kg ou CO2 1 kg est le minimum pour les petits moteurs. Les bateaux avec moteur in-bord ou diesel nécessitent des extincteurs plus importants et souvent plusieurs." },

  { id: 'BTD28', theme: 'D',
    prompt: "La balise PLB (Personal Locator Beacon) se distingue de l'EPIRB par :",
    choices: [
      "Sa fréquence différente (VHF vs 406 MHz)",
      "Sa taille compacte (portable par une personne) et son déclenchement manuel ou automatique à l'eau",
      "Le fait qu'elle ne transmet pas la position GPS",
      "Son utilisation uniquement sur les grands navires"],
    correct: [1],
    explanation: "La PLB est une balise de détresse personnelle (portée sur soi dans un gilet). Elle émet sur 406 MHz avec GPS comme l'EPIRB, mais est plus petite et destinée à un individu. L'EPIRB est fixée au navire. La PLB se déclenche manuellement (ou automatiquement pour certains modèles)." },

  { id: 'BTD29', theme: 'D',
    prompt: "La règle d'or en cas de voie d'eau sérieuse à bord est :",
    choices: [
      "Écoper en priorité",
      "Colmater la voie d'eau en priorité, activer la pompe de cale, et appeler les secours si nécessaire",
      "Virer de bord immédiatement",
      "Alléger le bateau en jetant l'équipement par-dessus bord"],
    correct: [1],
    explanation: "Face à une voie d'eau : 1) Colmater avec tout ce qui est disponible (tampon, chiffons, silicone, joint de fortune). 2) Activer pompe de cale électrique ET manuelle. 3) Si on ne contrôle pas, mettre les gilets, appeler les secours (MAYDAY si péril immédiat), préparer l'abandon." },

  { id: 'BTD30', theme: 'D',
    prompt: "La ligne de vie (jackline) à bord d'un voilier est :",
    choices: [
      "La ligne de l'ancre",
      "Un filin tendu du cockpit à la proue permettant à l'équipage de s'attacher avec un harnais en ponts",
      "La drisse de grand-voile",
      "La garde au port"],
    correct: [1],
    explanation: "La jackline (ou ligne de vie) est un filin tendu longitudinalement sur le pont permettant aux membres d'équipage d'y accrocher leur harnais de sécurité pour se déplacer sur le pont sans risque d'être emportés par une vague. Elle est obligatoire dès la 4e division en France." },

  { id: 'BTD31', theme: 'D',
    prompt: "En France, à partir de quelle distance des côtes le port du gilet de sauvetage devient-il obligatoire pour les moins de 18 ans ?",
    choices: [
      "Pas d'obligation légale",
      "Toujours à bord d'un navire, obligatoirement porté sur un navire en mer pour les mineurs",
      "Uniquement sur les voiliers",
      "Seulement la nuit"],
    correct: [1],
    explanation: "En France, le port du gilet de sauvetage est obligatoire pour les mineurs à bord de tout navire de plaisance en mer dès que le navire est en marche. Pour les adultes, il est obligatoire lors des manœuvres de port et fortement recommandé en permanence." },

  { id: 'BTD32', theme: 'D',
    prompt: "Le signal sonore d'urgence sur un navire ('abandon du navire') est généralement :",
    choices: [
      "Un son long continu",
      "7 sons brefs + 1 son long (en code Morse : — — — · · · · —)",
      "3 sons longs répétés",
      "4 sons brefs répétés"],
    correct: [1],
    explanation: "Le signal d'abandon 'man the lifeboats' est 7 éclats courts + 1 éclat long. Il est différent du signal d'incendie (cloche continue ou alarme). Ces signaux doivent être connus de tous les membres d'équipage lors des exercices d'abandon." },

  { id: 'BTD33', theme: 'D',
    prompt: "Qu'est-ce que la 'flottabilité résiduelle' d'un bateau ?",
    choices: [
      "La capacité du bateau à flotter même rempli d'eau grâce à des matériaux ou compartiments étanches",
      "La vitesse maximale du bateau sur l'eau",
      "La charge maximale autorisée",
      "La stabilité lors des virages"],
    correct: [0],
    explanation: "La flottabilité résiduelle est la capacité d'un bateau à rester à flot même lorsqu'il est envahi par l'eau, grâce à des flotteurs (mousse polyuréthane) ou des caissons étanches. Obligatoire sur certaines catégories de bateaux de plaisance pour prévenir le naufrage en cas de chavirage." },

  { id: 'BTD34', theme: 'D',
    prompt: "Une fois la procédure MAYDAY émise et que vous avez reçu un accusé de réception, vous devez :",
    choices: [
      "Cesser toutes émissions radio",
      "Maintenir la veille sur canal 16, tenir les secours informés de l'évolution de la situation et guider les sauveteurs",
      "Passer sur canal 9 pour garder le 16 libre",
      "Désactiver l'EPIRB pour économiser les batteries"],
    correct: [1],
    explanation: "Après l'accusé de réception du MAYDAY, restez sur canal 16, répondez aux appels des secours, fournissez des mises à jour (détérioration ou amélioration), allumez les signaux visuels (fusées) dès que les secours sont en approche, et guidez-les." },

  { id: 'BTD35', theme: 'D',
    prompt: "Quelle est la règle concernant l'alcool lors de la conduite d'un navire de plaisance en France ?",
    choices: [
      "L'alcool est uniquement interdit dans les ports",
      "Taux d'alcoolémie maximum de 0,5 g/L de sang (identique à la conduite automobile)",
      "L'alcool est totalement interdit à bord",
      "Il n'y a pas de réglementation spécifique"],
    correct: [1],
    explanation: "Depuis 2013, la conduite de navire de plaisance sous l'influence de l'alcool est réglementée : seuil de 0,5 g/L de sang (ou 0,25 mg/L d'air expiré), identique à l'automobile. Au-delà : retrait du permis, amende, voire emprisonnement. L'alcool altère le jugement et les réflexes." },

  { id: 'BTD36', theme: 'D',
    prompt: "En cas de personne en choc hypothermique récupérée de l'eau froide, la première action est :",
    choices: [
      "La faire nager pour se réchauffer",
      "La coucher à plat, la couvrir (couverture de survie), ne pas faire de mouvements brusques et appeler les secours",
      "Lui faire boire une boisson chaude immédiatement",
      "La mettre debout pour faciliter la circulation"],
    correct: [1],
    explanation: "Hypothermie en mer : la victime doit être couchée à plat (risque d'arrêt cardiaque si on la met debout – afterdrop), enveloppée dans une couverture de survie (côté doré à l'intérieur), abritée du vent et des embruns. Appeler le SAMU maritime. Ne pas frictionner ni faire bouger." },

  { id: 'BTD37', theme: 'D',
    prompt: "La procédure 'PAN PAN' (urgence) est utilisée quand :",
    choices: [
      "Il y a péril de mort immédiat",
      "La situation est sérieuse mais ne nécessite pas d'assistance immédiate (avarie moteur, personne blessée non mortellement)",
      "On veut annoncer une météo dégradée",
      "On veut appeler le port"],
    correct: [1],
    explanation: "PAN PAN est le signal d'urgence (2e niveau après MAYDAY). Canal 16, dire 'PAN PAN PAN PAN PAN PAN – Ici [navire] – [position] – [nature du problème]'. Utilisé pour : avarie non critique, personne blessée, homme à la mer récupéré vivant, panne moteur nécessitant assistance." },

  // ── THÈME E supplémentaire – Navigation, cartes et instruments ───────────

  { id: 'BTE13', theme: 'E',
    prompt: "La latitude mesure :",
    choices: [
      "La distance en miles au méridien de Greenwich",
      "La distance angulaire en degrés nord ou sud par rapport à l'équateur",
      "L'altitude d'un point",
      "La longitude d'un port"],
    correct: [1],
    explanation: "La latitude (ϕ) est mesurée de 0° à 90° N (pôle nord) ou S (pôle sud) à partir de l'équateur. Un mille marin correspond exactement à une minute de latitude (1/60 de degré). La longitude est l'angle est ou ouest par rapport au méridien de Greenwich." },

  { id: 'BTE14', theme: 'E',
    prompt: "Sur les cartes marines françaises SHOM, les profondeurs sont exprimées par rapport à :",
    choices: [
      "Le niveau moyen de la mer (NGF)",
      "Le niveau des plus basses mers (zéro hydrographique – niveau de référence SHOM)",
      "Le niveau de pleine mer de vive eau",
      "Le niveau moyen de basse mer"],
    correct: [1],
    explanation: "Le zéro hydrographique (ZH) est le niveau de référence des cartes marines françaises : il correspond au niveau des plus basses mers astronomiques (PMVE). Les profondeurs sur les cartes sont toujours mesurées par rapport au ZH, ce qui donne la sécurité maximale." },

  { id: 'BTE15', theme: 'E',
    prompt: "Qu'est-ce que la 'route vraie' (Rv) en navigation ?",
    choices: [
      "Le cap affiché sur le compas magnétique",
      "La direction du déplacement réel du navire par rapport au nord géographique (nord vrai)",
      "La route corrigée de la dérive due au vent",
      "La route mesurée par le loch"],
    correct: [1],
    explanation: "La route vraie (Rv) est l'angle entre le nord géographique (nord vrai) et la direction de déplacement du navire. Elle se distingue du cap compas (Cc) — affichage brut — et du cap magnétique (Cm) corrigé de la déclinaison. On passe de Cc à Rv en corrigeant déclinaison et déviation." },

  { id: 'BTE16', theme: 'E',
    prompt: "Le GPS donne des positions en système géodésique :",
    choices: [
      "NTF (système français)",
      "WGS84 (World Geodetic System 1984)",
      "ED50 (European Datum 1950)",
      "Lambert 93"],
    correct: [1],
    explanation: "Le GPS utilise le datum WGS84 (World Geodetic System 1984). Les cartes marines modernes SHOM sont en WGS84. Attention avec les vieilles cartes en ED50 ou NTF : une correction de datum s'impose pour éviter des décalages de position pouvant atteindre plusieurs centaines de mètres." },

  { id: 'BTE17', theme: 'E',
    prompt: "Qu'est-ce que la 'déclinaison magnétique' sur une carte ?",
    choices: [
      "L'inclinaison de l'axe de la Terre",
      "L'angle entre le nord géographique (vrai) et le nord magnétique à un endroit donné",
      "La déviation due aux masses métalliques du navire",
      "L'erreur systématique du compas"],
    correct: [1],
    explanation: "La déclinaison magnétique (D) est la différence angulaire entre le nord vrai (géographique) et le nord magnétique à un endroit et moment donné. Elle est indiquée sur les roses des vents des cartes marines (ex : 1°30'W en 2020, variant de +0°08' par an). La déviation (d) est propre au navire." },

  { id: 'BTE18', theme: 'E',
    prompt: "Un loch mesure :",
    choices: [
      "La profondeur de l'eau",
      "La distance parcourue et/ou la vitesse du navire dans l'eau",
      "La pression atmosphérique",
      "La direction du vent"],
    correct: [1],
    explanation: "Le loch est l'instrument mesurant la vitesse et/ou la distance parcourue du navire dans l'eau (vitesse surface, pas sur le fond). Le GPS donne la vitesse sur le fond (SOG). La différence entre les deux révèle l'influence des courants." },

  { id: 'BTE19', theme: 'E',
    prompt: "Combien de vaisseaux GPS en orbite sont nécessaires a minima pour calculer une position 3D précise ?",
    choices: ["2 satellites", "3 satellites", "4 satellites", "6 satellites"],
    correct: [2],
    explanation: "Un minimum de 4 satellites GPS est nécessaire pour calculer une position 3D (latitude, longitude, altitude + synchronisation de l'horloge). Avec 3 satellites, on obtient une position 2D (lat/long) en supposant l'altitude connue. Plus de satellites = meilleure précision." },

  { id: 'BTE20', theme: 'E',
    prompt: "L'échelle d'une carte 1/50 000 signifie :",
    choices: [
      "1 cm sur la carte = 50 000 km en réalité",
      "1 cm sur la carte = 50 000 cm = 500 m en réalité",
      "1 mm sur la carte = 50 000 mm = 50 m en réalité",
      "1 cm sur la carte = 5 km en réalité"],
    correct: [1],
    explanation: "À l'échelle 1/50 000 : 1 cm carte = 50 000 cm réels = 500 m. Ou 1 mm = 50 m. C'est une carte à grande échelle (détaillée). Les cartes côtières du SHOM sont souvent en 1/25 000 ou 1/50 000. Les cartes d'approche : 1/10 000. Les cartes du large : 1/100 000 à 1/1 000 000." },

  { id: 'BTE21', theme: 'E',
    prompt: "La marée est causée principalement par :",
    choices: [
      "La rotation de la Terre sur elle-même",
      "L'attraction gravitationnelle combinée de la Lune et du Soleil",
      "Les vents dominants",
      "Les courants thermohalins"],
    correct: [1],
    explanation: "Les marées sont dues à l'attraction gravitationnelle de la Lune (effet dominant, ~2x) et du Soleil. Lors des syzygies (alignement Lune–Terre–Soleil, à la nouvelle et pleine lune), les marées sont plus fortes (vives eaux). En quadrature (lune en carré), les marées sont plus faibles (mortes eaux)." },

  { id: 'BTE22', theme: 'E',
    prompt: "La hauteur d'une marée dans l'annuaire est la hauteur d'eau :",
    choices: [
      "Par rapport au fond de la mer",
      "Au-dessus du zéro hydrographique (ZH)",
      "Par rapport au niveau moyen de la mer",
      "Par rapport au niveau de pleine mer précédente"],
    correct: [1],
    explanation: "Dans les annuaires des marées (SHOM), les hauteurs de marée sont données par rapport au zéro hydrographique (ZH). Pour connaître la profondeur totale à un instant donné : profondeur carte + hauteur de marée au moment considéré." },

  { id: 'BTE23', theme: 'E',
    prompt: "La règle des douzièmes est utilisée pour :",
    choices: [
      "Calculer la déclinaison magnétique",
      "Estimer l'heure à laquelle la marée atteint une hauteur intermédiaire entre BM et PM",
      "Calculer la distance à l'horizon",
      "Déterminer le courant de marée"],
    correct: [1],
    explanation: "La règle des douzièmes divise le marnage en 12 parties : pendant les 6 heures entre BM et PM, la marée monte de 1/12, 2/12, 3/12, 3/12, 2/12, 1/12 du marnage chaque heure. Elle permet d'estimer la hauteur à n'importe quelle heure sans table complète." },

  { id: 'BTE24', theme: 'E',
    prompt: "Un courant de marée portant est :",
    choices: [
      "Un courant qui s'oppose à la route du navire",
      "Un courant qui porte (aide) dans la direction souhaitée",
      "Le courant à l'étale",
      "Un courant côtier permanent"],
    correct: [1],
    explanation: "Courant portant : il pousse le navire dans la direction souhaitée, augmentant la vitesse sur le fond. Courant debout : il s'oppose à la route. L'étale est le moment de renversement où le courant est quasi nul. La connaissance des courants de marée est essentielle pour la navigation côtière." },

  { id: 'BTE25', theme: 'E',
    prompt: "La projection de Mercator utilisée sur les cartes marines a pour avantage :",
    choices: [
      "De représenter les distances exactement",
      "De représenter les lignes de cap constant (loxodromies) comme des lignes droites",
      "De représenter les surfaces exactement",
      "D'être utilisable aux pôles"],
    correct: [1],
    explanation: "La projection de Mercator est conforme (angles conservés localement). Les lignes de cap constant (loxodromies) sont représentées en lignes droites, ce qui facilite la navigation : tracer une route droite sur la carte donne le cap à suivre. Inconvénient : distorsion des surfaces aux hautes latitudes." },

  { id: 'BTE26', theme: 'E',
    prompt: "Pour faire le point par relèvements, on doit prendre au minimum :",
    choices: [
      "Un relèvement",
      "Deux relèvements sur deux amers différents",
      "Quatre relèvements",
      "Un relèvement + une sonde"],
    correct: [1],
    explanation: "Deux relèvements croisés sur deux amers différents donnent une position (point d'intersection sur la carte). Trois relèvements sont préférables car leur triangle d'incertitude révèle les erreurs de mesure. Un seul relèvement ne donne qu'une LOP (ligne de position)." },

  { id: 'BTE27', theme: 'E',
    prompt: "Le 'cap compas' (Cc) doit être corrigé de quelles valeurs pour obtenir le 'cap vrai' (Cv) ?",
    choices: [
      "Uniquement de la déviation du compas (d)",
      "De la déviation du compas (d) + de la déclinaison magnétique (D)",
      "Uniquement de la déclinaison magnétique (D)",
      "Du courant de marée et du vent uniquement"],
    correct: [1],
    explanation: "Cv = Cc + d (déviation propre au navire) + D (déclinaison magnétique locale). La déviation varie selon le cap et les masses métalliques du navire (table de déviation). La déclinaison varie selon la position géographique et le temps (indiquée sur la carte)." },

  { id: 'BTE28', theme: 'E',
    prompt: "La portée géographique d'un phare augmente avec :",
    choices: [
      "Sa puissance lumineuse uniquement",
      "La hauteur du phare et la hauteur d'œil de l'observateur (courbure de la Terre)",
      "La transparence de l'eau",
      "La direction du vent"],
    correct: [1],
    explanation: "La portée géographique dépend de la hauteur du feu (phare) et de la hauteur d'œil de l'observateur (la passerelle d'un grand navire voit plus loin qu'un plaisancier). Elle est calculée par la formule : D (milles) ≈ 2,08 × (√h1 + √h2) où h1 et h2 sont en mètres." },

  { id: 'BTE29', theme: 'E',
    prompt: "Sur une carte marine, la mention 'PA' (Position Approximative) signifie :",
    choices: [
      "Point d'arrêt",
      "La position de cet objet (épave, rocher) est approximative et doit être traitée avec prudence",
      "Profondeur Atypique",
      "Zone de pêche autorisée"],
    correct: [1],
    explanation: "'PA' (Position Approximative) sur une carte indique que la position de l'objet cartographié est incertaine. Il faut passer large de ces éléments. D'autres abréviations similaires : 'ED' (Existence Douteuse), 'PD' (Position Douteuse)." },

  { id: 'BTE30', theme: 'E',
    prompt: "La navigation à l'estime consiste à :",
    choices: [
      "Se guider uniquement sur les étoiles",
      "Estimer sa position à partir d'une position connue, en appliquant cap, vitesse et temps écoulé",
      "Utiliser le GPS en mode économie d'énergie",
      "Naviguer en suivant la côte visuelle"],
    correct: [1],
    explanation: "La navigation à l'estime (dead reckoning, DR) : à partir d'une position connue, on applique le cap suivi et la vitesse pendant un temps donné pour estimer la position actuelle. Elle accumule les erreurs mais reste indispensable en cas de panne GPS ou de mauvaise visibilité." },

  { id: 'BTE31', theme: 'E',
    prompt: "L'annexe d'un voilier (annexe pneumatique) est soumise à immatriculation :",
    choices: [
      "Jamais, les annexes sont libres",
      "Si elle est motorisée avec une puissance supérieure à 6 CV (4,5 kW)",
      "Seulement au-dessus de 5 mètres",
      "Uniquement dans les ports payants"],
    correct: [1],
    explanation: "En France, toute embarcation motorisée de plus de 6 CV doit être immatriculée (numéro d'immatriculation visible). Les annexes non motorisées ou < 6 CV bénéficient d'exemptions. Le permis bateau peut être nécessaire selon la puissance et la zone de navigation." },

  { id: 'BTE32', theme: 'E',
    prompt: "Le coefficient de marée 120 correspond à :",
    choices: [
      "Une morte eau",
      "Une marée de vive eau maximale (grande marée, coefficient proche du maximum 120)",
      "Une marée moyenne",
      "Une marée nulle"],
    correct: [1],
    explanation: "Les coefficients de marée vont de ~20 (morte eau) à 120 (vive eau exceptionnelle, équinoxe). Coefficient 70 = marée moyenne. Au-dessus de 100 = grandes marées. Un coefficient 120 correspond aux grandes marées équinoxiales avec de très forts marnages (jusqu'à 14 m à Saint-Malo)." },

  { id: 'BTE33', theme: 'E',
    prompt: "Qu'est-ce que la 'dérive' d'un navire ?",
    choices: [
      "La différence entre la route fond et la route surface due aux courants",
      "L'angle entre la route souhaitée et la route réelle dû au vent (leeway) ou aux courants",
      "La profondeur sous la quille",
      "L'écart entre la position GPS et la position estimée"],
    correct: [1],
    explanation: "La dérive est le décalage angulaire entre le cap (direction où pointe le navire) et la route fond réelle (déplacement réel sur le fond). Elle est causée par le vent (leeway) et/ou les courants. Pour maintenir une route vraie, il faut 'gouverner à la prise du vent' (compenser la dérive)." },

  { id: 'BTE34', theme: 'E',
    prompt: "Les Instructions Nautiques publiées par le SHOM contiennent :",
    choices: [
      "Uniquement les horaires de marée",
      "La description des côtes, des ports, des dangers, des pratiques locales et des ressources pour les navigateurs",
      "Les prévisions météo à 15 jours",
      "Le règlement des courses à la voile"],
    correct: [1],
    explanation: "Les Instructions Nautiques (Pilot books français) décrivent les caractéristiques des côtes : ports, ancrages, dangers, courants, pilotage, réglementations locales, services disponibles. Elles complètent les informations des cartes marines et doivent être tenues à jour par les avis aux navigateurs." },

  { id: 'BTE35', theme: 'E',
    prompt: "Un 'avis aux navigateurs' (AN) du SHOM :",
    choices: [
      "Est une prévision météo d'urgence",
      "Signale des changements hydrographiques (modifications de balisage, épaves, corrections de cartes) pour mise à jour des cartes",
      "Interdit la navigation dans une zone",
      "Annonce un exercice militaire"],
    correct: [1],
    explanation: "Les Avis aux Navigateurs (AN) du SHOM signalent les modifications à apporter aux cartes marines (nouveau danger, bouée déplacée, chenal modifié) et aux ouvrages nautiques. Les plaisanciers doivent vérifier régulièrement les AN pour maintenir leurs cartes à jour." },

  { id: 'BTE36', theme: 'E',
    prompt: "Sur une carte marine, un cercle avec un point central représente :",
    choices: [
      "Une zone de mouillage interdite",
      "Un phare ou une lumière (feu fixe ou tournant)",
      "Une bouée cardinale",
      "Un rocher découvrant"],
    correct: [1],
    explanation: "Sur les cartes marines SHOM, le symbole 'étoile' (ou cercle avec point) suivi d'une description représente un feu (phare, feu de port, bouée lumineuse). Les caractéristiques du feu (couleur, période, portée) sont indiquées à côté : ex. Fl(3)R.10s15M = éclats groupés de 3, rouge, 10 secondes, 15 milles." },
];
