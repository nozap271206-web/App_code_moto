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
];
