import type { Question } from '../types';

export const QUESTIONS_PL: Question[] = [

  // ── THÈME A – Réglementation spécifique au transport routier ──────────────

  { id: 'PLA1', theme: 'A',
    prompt: "Quelle est la vitesse maximale autorisée pour un camion de PTAC > 3,5 t sur autoroute ?",
    choices: ["110 km/h", "90 km/h", "130 km/h", "80 km/h"],
    correct: [1],
    explanation: "Sur autoroute, les véhicules de PTAC > 3,5 t sont limités à 90 km/h, contre 130 km/h pour les voitures." },

  { id: 'PLA2', theme: 'A',
    prompt: "Quelle est la vitesse maximale d'un camion de PTAC > 3,5 t sur route hors agglomération à une seule chaussée ?",
    choices: ["70 km/h", "80 km/h", "90 km/h", "110 km/h"],
    correct: [1],
    explanation: "Hors agglomération, sur route à voie unique, la limite est 80 km/h pour les PL de PTAC > 3,5 t." },

  { id: 'PLA3', theme: 'A',
    prompt: "Sur route à chaussées séparées (voie express), quelle est la limite de vitesse pour un camion > 3,5 t ?",
    choices: ["110 km/h", "90 km/h", "80 km/h", "70 km/h"],
    correct: [2],
    explanation: "Sur route à chaussées séparées hors autoroute, la limite est 80 km/h pour les PL > 3,5 t." },

  { id: 'PLA4', theme: 'A',
    prompt: "Le permis C autorise à conduire :",
    choices: [
      "Tout véhicule < 3,5 t",
      "Véhicule de PTAC > 3,5 t avec remorque ne dépassant pas 750 kg",
      "Tout train routier (tracteur + remorque)",
      "Uniquement les bus"],
    correct: [1],
    explanation: "Le permis C autorise les véhicules de PTAC > 3,5 t dont la remorque éventuelle n'excède pas 750 kg. Le permis CE est requis pour les trains routiers." },

  { id: 'PLA5', theme: 'A',
    prompt: "Le permis CE est obligatoire pour :",
    choices: [
      "Conduire un camion seul de PTAC > 7,5 t",
      "Conduire un ensemble routier avec semi-remorque de plus de 750 kg",
      "Conduire un bus",
      "Conduire un véhicule de 4 t"],
    correct: [1],
    explanation: "Le permis CE autorise les ensembles dont la remorque ou semi-remorque dépasse 750 kg. Le permis C seul ne suffit pas pour tracter une remorque lourde." },

  { id: 'PLA6', theme: 'A',
    prompt: "La distance minimale de sécurité entre deux poids lourds sur autoroute est matérialisée par :",
    choices: [
      "Des lignes discontinues blanches",
      "Des balises kilométriques",
      "Des tirets blancs espacés de 50 m (2 tirets = distance minimale)",
      "Des panneaux tous les 100 m"],
    correct: [2],
    explanation: "Sur autoroute, les tirets blancs de 13 m espacés de 37 m permettent de visualiser la distance minimale de 50 m imposée aux PL." },

  { id: 'PLA7', theme: 'A',
    prompt: "La circulation des PL de PTAC > 7,5 t est interdite le dimanche entre :",
    choices: [
      "0 h et 22 h",
      "22 h et 6 h",
      "0 h et 24 h sur certains axes",
      "22 h le samedi et 22 h le dimanche"],
    correct: [3],
    explanation: "Les PL > 7,5 t sont interdits de 22 h le samedi à 22 h le dimanche (et les veilles de jours fériés à 22 h jusqu'au lendemain 22 h)." },

  { id: 'PLA8', theme: 'A',
    prompt: "La largeur maximale réglementaire d'un véhicule de transport de marchandises est de :",
    choices: ["2,35 m", "2,55 m", "2,80 m", "3,00 m"],
    correct: [1],
    explanation: "La largeur maximale est de 2,55 m (2,60 m pour les véhicules frigorifiques). Au-delà, un convoi exceptionnel est nécessaire." },

  { id: 'PLA9', theme: 'A',
    prompt: "La hauteur maximale réglementaire d'un poids lourd sur les routes françaises est de :",
    choices: ["3,50 m", "4,00 m", "4,50 m", "5,00 m"],
    correct: [1],
    explanation: "La hauteur maximale autorisée est 4 m. Cette limite est importante pour les ponts, les tunnels et les portiques de gabarit." },

  { id: 'PLA10', theme: 'A',
    prompt: "Le PTAC maximum pour un porteur seul à 3 essieux est de :",
    choices: ["19 t", "26 t", "32 t", "44 t"],
    correct: [1],
    explanation: "Un porteur à 3 essieux a un PTAC maximum de 26 t. Pour un ensemble articulé à 5 essieux, la limite est 40 t." },

  { id: 'PLA11', theme: 'A',
    prompt: "La pression des pneumatiques d'un PL doit être vérifiée :",
    choices: [
      "À chaud après 100 km",
      "À froid avant le départ",
      "Uniquement lors du contrôle technique",
      "Une fois par mois"],
    correct: [1],
    explanation: "La pression doit être contrôlée à froid (véhicule à l'arrêt depuis au moins 3 heures). La pression à chaud est toujours supérieure." },

  { id: 'PLA12', theme: 'A',
    prompt: "L'employeur peut-il demander à un conducteur de dépasser les temps de conduite réglementaires ?",
    choices: [
      "Oui, si le chargeur l'exige",
      "Oui, en cas de force majeure dûment justifiée uniquement",
      "Non, jamais",
      "Oui, pour ne pas perdre un client"],
    correct: [1],
    explanation: "Seul un cas de force majeure peut justifier un dépassement. L'employeur ne peut pas, par simple intérêt commercial, demander de dépasser les temps réglementaires." },

  // ── THÈME B – Temps de conduite et repos ──────────────────────────────────

  { id: 'PLB1', theme: 'B',
    prompt: "Selon le règlement CE 561/2006, la durée maximale de conduite par jour est de :",
    choices: ["8 h", "9 h (extensible à 10 h deux fois par semaine)", "10 h tous les jours", "11 h"],
    correct: [1],
    explanation: "La durée journalière de conduite est au maximum 9 h. Elle peut être portée à 10 h au plus deux fois par semaine civile." },

  { id: 'PLB2', theme: 'B',
    prompt: "Après combien d'heures de conduite continue une pause est-elle obligatoire ?",
    choices: ["3 heures", "4 heures 30", "5 heures", "6 heures"],
    correct: [1],
    explanation: "Après 4 h 30 de conduite continue (ou cumulée), le conducteur doit prendre une pause de 45 minutes. Cette pause peut être fractionnée en 15 min + 30 min." },

  { id: 'PLB3', theme: 'B',
    prompt: "La pause de 45 minutes peut être fractionnée en :",
    choices: [
      "Deux fractions de 22,5 min chacune",
      "Une pause de 15 min puis une pause de 30 min, dans cet ordre",
      "Une pause de 30 min puis une pause de 15 min",
      "Plusieurs pauses de 10 min"],
    correct: [1],
    explanation: "La fraction de 15 min doit précéder la fraction de 30 min. L'ordre inverse (30+15) n'est pas valide." },

  { id: 'PLB4', theme: 'B',
    prompt: "Le temps de repos journalier normal est de :",
    choices: ["9 heures consécutives", "11 heures consécutives", "8 heures", "10 heures"],
    correct: [1],
    explanation: "Le repos journalier normal est de 11 h consécutives. Il peut être réduit à 9 h au plus 3 fois entre 2 repos hebdomadaires." },

  { id: 'PLB5', theme: 'B',
    prompt: "La durée maximale de conduite hebdomadaire ne doit pas dépasser :",
    choices: ["45 heures", "56 heures", "60 heures", "70 heures"],
    correct: [1],
    explanation: "La conduite hebdomadaire est limitée à 56 h. Sur deux semaines consécutives, le total ne peut excéder 90 h." },

  { id: 'PLB6', theme: 'B',
    prompt: "Le repos hebdomadaire normal est de :",
    choices: ["24 heures consécutives", "45 heures consécutives", "36 heures", "11 heures"],
    correct: [1],
    explanation: "Le repos hebdomadaire normal est de 45 h consécutives. Il peut être réduit à 24 h une fois par période de deux semaines." },

  { id: 'PLB7', theme: 'B',
    prompt: "Le repos hebdomadaire normal (45 h) peut-il être pris dans la cabine du camion en transport international ?",
    choices: [
      "Oui, toujours",
      "Non, depuis le paquet mobilité 2020, il doit être pris hors du véhicule",
      "Oui, si la couchette est homologuée",
      "Uniquement sur les parkings autoroutiers"],
    correct: [1],
    explanation: "Depuis le règlement EU 2020/1054, le repos hebdomadaire normal (45 h) ne peut pas être pris dans la cabine du véhicule en transport international." },

  { id: 'PLB8', theme: 'B',
    prompt: "Sur le tachygraphe, quelle position le conducteur sélectionne-t-il lorsqu'il charge le véhicule ?",
    choices: [
      "Conduite (volant)",
      "Autre travail (marteau)",
      "Disponibilité (lit ouvert)",
      "Repos (lit fermé)"],
    correct: [1],
    explanation: "Le chargement/déchargement est du travail autre que la conduite et doit être enregistré sur la position 'autre travail' (symbole marteau ou équerre)." },

  { id: 'PLB9', theme: 'B',
    prompt: "La fatigue chez le conducteur routier :",
    choices: [
      "N'affecte la conduite qu'après 24 h sans sommeil",
      "Augmente les temps de réaction et diminue la vigilance dès les premières heures",
      "Peut être compensée par la caféine sur de longues distances",
      "Ne concerne que les conducteurs de nuit"],
    correct: [1],
    explanation: "La fatigue dégrade progressivement la vigilance, les temps de réaction et la prise de décision. Même un déficit de sommeil modéré a des effets significatifs." },

  { id: 'PLB10', theme: 'B',
    prompt: "Le taux d'alcoolémie maximal autorisé pour un conducteur de PL professionnel en France est de :",
    choices: ["0,5 g/L (idem voiture)", "0,2 g/L", "0 g/L (tolérance zéro)", "0,8 g/L"],
    correct: [1],
    explanation: "Pour les conducteurs de véhicules de plus de 3,5 t, le seuil est 0,2 g/L de sang (0,1 mg/L d'air expiré)." },

  { id: 'PLB11', theme: 'B',
    prompt: "Quelle substance peut altérer les capacités de conduite même consommée légalement ?",
    choices: [
      "Le café en grande quantité",
      "Certains médicaments (somnifères, anxiolytiques)",
      "Les boissons énergisantes",
      "Le sucre en excès"],
    correct: [1],
    explanation: "De nombreux médicaments (antidépresseurs, somnifères, antihistaminiques) comportent un pictogramme d'alerte et peuvent altérer la vigilance du conducteur." },

  { id: 'PLB12', theme: 'B',
    prompt: "En cas d'urgence grave (accident de route), un conducteur peut-il dépasser la durée journalière réglementaire ?",
    choices: [
      "Oui, sans condition",
      "Oui, dans la mesure nécessaire à la mise en sécurité, en notant la raison sur la carte tachygraphe",
      "Non, jamais",
      "Oui, si l'employeur l'autorise par écrit"],
    correct: [1],
    explanation: "Un dépassement exceptionnel est possible en cas de force majeure, à condition de noter la raison et l'heure sur le support tachygraphe." },

  // ── THÈME C – Comportement du PL sur la route ─────────────────────────────

  { id: 'PLC1', theme: 'C',
    prompt: "La distance d'arrêt d'un poids lourd à 90 km/h est :",
    choices: [
      "Identique à celle d'une voiture",
      "Plus longue qu'une voiture en raison de la masse",
      "Plus courte grâce aux freins pneumatiques",
      "Variable uniquement selon les pneumatiques"],
    correct: [1],
    explanation: "L'énergie cinétique est proportionnelle à la masse. Un PL chargé de 40 t à 90 km/h a une énergie cinétique environ 15 fois supérieure à une voiture de 1 200 kg." },

  { id: 'PLC2', theme: 'C',
    prompt: "Lors d'un virage à droite, quelle est la trajectoire caractéristique d'un long PL ?",
    choices: [
      "Il reste strictement sur sa voie",
      "Il déborde sur la voie de gauche avant d'amorcer le virage, puis coupe l'angle intérieur",
      "Il rétrécit et passe uniquement à l'intérieur",
      "Il freine toujours sur la voie de gauche"],
    correct: [1],
    explanation: "Pour négocier un virage à droite, l'avant d'un long PL déborde sur la gauche (contre-braquage), puis le véhicule coupe l'angle intérieur. Les cyclistes sur la droite sont en danger." },

  { id: 'PLC3', theme: 'C',
    prompt: "En forte pente descendante, quelle est la bonne pratique pour un conducteur PL ?",
    choices: [
      "Utiliser principalement le frein de service pour rester sous la limite",
      "Passer en position neutre pour économiser le carburant",
      "Utiliser le frein moteur ou rétarateur et adapter la vitesse",
      "Accélérer pour prendre de l'élan"],
    correct: [2],
    explanation: "En descente, l'usage intensif du frein de service seul provoque le fading (perte d'efficacité). Le frein moteur ou rétarateur régule la vitesse sans user les freins." },

  { id: 'PLC4', theme: 'C',
    prompt: "Qu'est-ce que le phénomène de jackknifing avec un ensemble articulé ?",
    choices: [
      "Dérapage de l'essieu moteur en montée",
      "Repli incontrôlé de la semi-remorque sur le tracteur lors d'un freinage brutal",
      "Vibrations du volant à haute vitesse",
      "Rupture d'un roulement de roue"],
    correct: [1],
    explanation: "Le jackknifing survient quand les roues du tracteur se bloquent lors d'un freinage brusque. La semi-remorque pousse et fait pivoter l'ensemble. Les systèmes ABS réduisent ce risque." },

  { id: 'PLC5', theme: 'C',
    prompt: "Pourquoi le phénomène d'aquaplaning est-il plus dangereux sur un PL vide que chargé ?",
    choices: [
      "La vitesse est plus élevée à vide",
      "La pression des pneumatiques sur la chaussée est moindre à vide, favorisant le soulèvement",
      "Les pneumatiques sont plus usés à vide",
      "Le centre de gravité est plus bas à vide"],
    correct: [1],
    explanation: "À vide, la pression exercée par chaque pneumatique est plus faible. La pellicule d'eau s'intercale plus facilement entre le pneu et la route, réduisant la traction et le freinage." },

  { id: 'PLC6', theme: 'C',
    prompt: "Pourquoi le vent latéral est-il particulièrement dangereux pour les PL bâchés ou à ridelles ?",
    choices: [
      "Il ralentit le véhicule",
      "La grande surface latérale agit comme une voile et dévie la trajectoire",
      "Il provoque un sur-freinage",
      "Il n'a aucun effet sur les véhicules lourds"],
    correct: [1],
    explanation: "Un semi-rideau ou une bâche expose une surface de plus de 30 m² au vent. Une rafale peut exercer une force latérale considérable, déstabilisant le véhicule surtout à vide." },

  { id: 'PLC7', theme: 'C',
    prompt: "En cas de perte de pression d'air dans le circuit de freinage pneumatique, que se passe-t-il ?",
    choices: [
      "Le véhicule accélère indéfiniment",
      "Les freins à ressort s'appliquent automatiquement (principe fail-safe)",
      "Le moteur coupe automatiquement",
      "Le rétarateur prend le relais"],
    correct: [1],
    explanation: "Les freins pneumatiques sont à ressort (spring brake) : en cas de perte de pression d'air, les ressorts appliquent les sabots automatiquement. C'est le principe de sécurité fail-safe." },

  { id: 'PLC8', theme: 'C',
    prompt: "Un PL citerne rempli à moitié présente un risque accru de :",
    choices: [
      "Rupture du pont arrière",
      "Retournement en virage dû au ballottement du liquide (sloshing)",
      "Surchauffe des pneumatiques",
      "Dérapage avant"],
    correct: [1],
    explanation: "Une citerne à demi remplie génère un effet de ballottement. Cette masse mobile élève le centre de gravité effectif et peut provoquer un renversement en virage." },

  { id: 'PLC9', theme: 'C',
    prompt: "Sur quelle(s) voie(s) les PL de PTAC > 3,5 t sont-ils interdits sur autoroute à 3 voies ou plus ?",
    choices: [
      "Uniquement en cas de travaux",
      "La voie la plus à gauche",
      "Les deux voies de gauche",
      "En toutes circonstances"],
    correct: [1],
    explanation: "Sur les autoroutes à 3 voies ou plus, les PL de PTAC > 3,5 t sont interdits sur la voie la plus à gauche." },

  { id: 'PLC10', theme: 'C',
    prompt: "Quelles sont les conséquences d'un surcharge sur le comportement du véhicule ?",
    choices: [
      "Uniquement une amende sans conséquence technique",
      "Distance de freinage augmentée, usure des pneus et risque de perte de contrôle",
      "Aucune si le poids est réparti uniformément",
      "Uniquement un risque de casse mécanique"],
    correct: [1],
    explanation: "La surcharge augmente l'énergie cinétique et allonge la distance de freinage. Elle détériore les pneumatiques et augmente le risque de renversement." },

  { id: 'PLC11', theme: 'C',
    prompt: "La longueur maximale d'un ensemble articulé (tracteur + semi-remorque) est de :",
    choices: ["16,50 m", "18,75 m", "22 m", "25 m"],
    correct: [0],
    explanation: "La longueur maximale d'un ensemble articulé est de 16,50 m. Un train routier (porteur + remorque) peut atteindre 18,75 m." },

  { id: 'PLC12', theme: 'C',
    prompt: "Sur route mouillée, l'adhérence d'un PL par rapport à la route sèche est :",
    choices: [
      "Identique",
      "Supérieure (plus de résistance)",
      "Inférieure (moins d'adhérence)",
      "Dépend uniquement de la vitesse"],
    correct: [2],
    explanation: "Sur route mouillée, le coefficient d'adhérence (µ) diminue (de ~0,7 sur sec à ~0,4 sur mouillé), ce qui allonge considérablement la distance de freinage." },

  // ── THÈME D – Coexistence avec les autres usagers ─────────────────────────

  { id: 'PLD1', theme: 'D',
    prompt: "La zone d'angle mort d'un camion à droite s'étend sur :",
    choices: [
      "Quelques centimètres derrière le rétroviseur",
      "Toute la longueur du véhicule côté droit sur environ 3 m de large",
      "Uniquement derrière le véhicule",
      "Moins de 1 m grâce au rétroviseur grand angle"],
    correct: [1],
    explanation: "L'angle mort côté droit d'un PL est très important : il couvre toute la longueur du camion sur environ 3 m. Un cycliste dans cette zone est totalement invisible du conducteur." },

  { id: 'PLD2', theme: 'D',
    prompt: "Lors d'un virage à droite en intersection, quelle est la principale source de danger pour un PL ?",
    choices: [
      "Les véhicules venant en sens inverse",
      "Les cyclistes et piétons à droite du camion dans l'angle mort",
      "Le risque de renversement",
      "Les voitures derrière le camion"],
    correct: [1],
    explanation: "Lors d'un virage à droite, la roue arrière du camion coupe l'angle. Les cyclistes et piétons à droite se retrouvent dans un angle mort critique et peuvent être heurtés." },

  { id: 'PLD3', theme: 'D',
    prompt: "Le sticker 'Attention cyclistes – Angles morts' obligatoire à l'arrière des camions depuis 2021 sert à :",
    choices: [
      "Signaler le transport de cycles",
      "Informer les cyclistes de ne pas se placer dans les angles morts lors des virages",
      "Indiquer une limitation de vitesse pour les cycles",
      "Signaler un transport exceptionnel"],
    correct: [1],
    explanation: "Ce sticker rappelle aux cyclistes et motards les zones d'angle mort du camion pour prévenir les accidents lors des virages, notamment à droite." },

  { id: 'PLD4', theme: 'D',
    prompt: "Quelle est la bonne attitude si un conducteur PL est suivi de trop près par un véhicule léger ?",
    choices: [
      "Freiner brusquement pour dissuader",
      "S'arrêter immédiatement sur la droite",
      "Relâcher progressivement l'accélérateur et élargir l'espace devant pour amortir les à-coups",
      "Accélérer pour prendre de la distance"],
    correct: [2],
    explanation: "Un PL freinant brusquement peut projeter le véhicule qui le suit de trop près. En gérant son espace devant et en freinant progressivement, le conducteur évite l'effet accordéon." },

  { id: 'PLD5', theme: 'D',
    prompt: "Le phénomène de turbulence provoqué par un PL en dépassement affecte surtout :",
    choices: [
      "Les bus et les cars",
      "Les cyclistes, motards et petites voitures",
      "Les autres PL",
      "Uniquement les piétons proches du bord de route"],
    correct: [1],
    explanation: "La perturbation aérodynamique générée par un PL à grande vitesse peut déstabiliser un cycliste ou un motard. Dépasser à vitesse modérée avec une distance latérale suffisante est obligatoire." },

  { id: 'PLD6', theme: 'D',
    prompt: "Aux passages à niveau, les camions transportant des marchandises dangereuses doivent :",
    choices: [
      "Accélérer pour franchir rapidement",
      "S'arrêter et s'assurer de pouvoir traverser sans s'immobiliser sur les rails",
      "Passer normalement en respectant les feux",
      "Utiliser leur klaxon sonore"],
    correct: [1],
    explanation: "Pour les transports ADR, l'arrêt avant le PN est obligatoire afin de s'assurer qu'il est possible de franchir sans s'immobiliser sur la voie ferrée." },

  { id: 'PLD7', theme: 'D',
    prompt: "Des projections importantes de boue sur des piétons depuis un PL peuvent :",
    choices: [
      "Ne jamais engager la responsabilité du conducteur",
      "Engager la responsabilité du conducteur pour manque de prudence",
      "N'avoir aucune conséquence si les garde-boue sont conformes",
      "Être sanctionnées uniquement si les garde-boue sont absents"],
    correct: [1],
    explanation: "Le Code de la route impose de ne pas incommoder les autres usagers. Des projections importantes peuvent engager la responsabilité du conducteur." },

  { id: 'PLD8', theme: 'D',
    prompt: "En circulation urbaine, un PL doit particulièrement surveiller :",
    choices: [
      "Uniquement les feux tricolores",
      "Uniquement les véhicules d'urgence",
      "Les piétons, les cyclistes dans les angles morts, les livraisons en double file",
      "Uniquement les panneaux de limitation de tonnage"],
    correct: [2],
    explanation: "En ville, la concentration de dangers est maximale : piétons (dont enfants), cyclistes dans les angles morts, véhicules à l'arrêt, virages serrés. La vigilance doit être maximale." },

  // ── THÈME E – Tachygraphe et réglementation sociale ───────────────────────

  { id: 'PLE1', theme: 'E',
    prompt: "Le tachygraphe numérique enregistre les données sur :",
    choices: [
      "Un disque en carton",
      "La carte conducteur et la mémoire interne du boîtier",
      "Une clé USB fournie par l'entreprise",
      "Un registre papier signé"],
    correct: [1],
    explanation: "Le tachygraphe numérique enregistre simultanément sur la carte conducteur (28 derniers jours) et dans la mémoire interne du boîtier (plus d'un an de données)." },

  { id: 'PLE2', theme: 'E',
    prompt: "La carte conducteur doit être insérée dans le tachygraphe numérique :",
    choices: [
      "Uniquement pour les trajets > 50 km",
      "Dès que le conducteur prend le volant, même pour un trajet court",
      "Une fois par semaine pour télécharger les données",
      "Uniquement pour les transports internationaux"],
    correct: [1],
    explanation: "La carte doit être insérée à chaque prise de volant, quel que soit le trajet. Sans carte, le conducteur doit effectuer des sorties manuelles." },

  { id: 'PLE3', theme: 'E',
    prompt: "Combien de jours d'activité la carte conducteur peut-elle stocker ?",
    choices: ["7 jours", "28 jours", "90 jours", "1 an"],
    correct: [1],
    explanation: "La carte conducteur stocke les données des 28 derniers jours d'activité. Les données plus anciennes sont écrasées si la carte n'est pas téléchargée." },

  { id: 'PLE4', theme: 'E',
    prompt: "Le tachygraphe est obligatoire pour les véhicules de marchandises de PTAC supérieur à :",
    choices: ["2,5 t", "3,5 t", "7,5 t", "12 t"],
    correct: [1],
    explanation: "Le tachygraphe numérique est obligatoire pour les véhicules de marchandises et de voyageurs de PTAC > 3,5 t affectés aux transports professionnels." },

  { id: 'PLE5', theme: 'E',
    prompt: "Quel symbole sur le tachygraphe représente la conduite ?",
    choices: ["Un lit", "Un marteau", "Un volant de voiture", "Une horloge"],
    correct: [2],
    explanation: "Le mode conduite (jaune) est symbolisé par un volant. Autre travail = marteau, disponibilité = lit ouvert, repos = lit fermé." },

  { id: 'PLE6', theme: 'E',
    prompt: "Que doit faire le conducteur si sa carte tachygraphe est oubliée ou défectueuse ?",
    choices: [
      "Ne pas partir avant d'avoir sa carte",
      "Effectuer des sorties manuelles sur papier imprimé et les signer",
      "Faire une déclaration sur l'honneur à l'arrivée",
      "Utiliser la carte d'un collègue provisoirement"],
    correct: [1],
    explanation: "Sans carte, le conducteur doit effectuer des sorties manuelles sur le papier de l'imprimante du tachygraphe ou sur des attestations d'activité, et les signer." },

  // ── THÈME F – Arrimage et sécurisation de la cargaison ────────────────────

  { id: 'PLF1', theme: 'F',
    prompt: "La force de retenue minimale d'une sangle d'arrimage doit être égale à :",
    choices: [
      "25 % du poids de la marchandise arrimée",
      "50 % du poids de la marchandise arrimée",
      "100 % du poids de la marchandise arrimée",
      "Dépend uniquement de la distance"],
    correct: [1],
    explanation: "Selon la norme EN 12195-1, chaque sangle doit avoir une capacité de retenue d'au moins 50 % du poids de la charge. Un chargement de 1 000 kg nécessite des sangles pouvant retenir 500 kg chacune." },

  { id: 'PLF2', theme: 'F',
    prompt: "Des tapis antidérapants sous la marchandise permettent :",
    choices: [
      "D'éliminer totalement le besoin de sangles",
      "D'augmenter la friction et de réduire le nombre de sangles nécessaires",
      "D'assurer l'arrimage uniquement pour des charges > 5 t",
      "D'éviter les dommages à la carrosserie"],
    correct: [1],
    explanation: "Les antidérapants augmentent le coefficient de friction entre la charge et le plancher, ce qui peut réduire le nombre de sangles nécessaires tout en maintenant la sécurité." },

  { id: 'PLF3', theme: 'F',
    prompt: "Lors d'un arrêt d'urgence à 80 km/h, une palette de 500 kg non arrimée exerce une force d'environ :",
    choices: [
      "500 daN (son poids)",
      "Moins que son poids",
      "Plusieurs fois son poids par effet de la décélération",
      "La même force quelle que soit la vitesse"],
    correct: [2],
    explanation: "Par la loi F = ma, une décélération d'urgence de 0,8 g applique une force de 400 daN sur la palette (500 × 0,8). Cette force est dirigée vers l'avant et peut traverser la cabine." },

  { id: 'PLF4', theme: 'F',
    prompt: "Le conducteur PL est-il responsable de l'arrimage de la cargaison chargée par l'expéditeur ?",
    choices: [
      "Non, c'est toujours l'expéditeur ou l'entrepôt",
      "Oui, il doit vérifier et compléter l'arrimage avant de partir",
      "Non, uniquement l'employeur l'est",
      "Oui, mais seulement pour les chargements > 1 000 kg"],
    correct: [1],
    explanation: "Le Code de la route rend le conducteur co-responsable de l'arrimage. Même si c'est le chargeur qui charge, le conducteur doit contrôler et signaler tout arrimage insuffisant." },

  { id: 'PLF5', theme: 'F',
    prompt: "Un dépassement de cargaison à l'arrière de plus de 3 m nécessite :",
    choices: [
      "Un drapeau rouge uniquement de jour",
      "Un signal réfléchissant et un feu rouge la nuit sur l'extrémité en surplomb",
      "Rien si le gabarit total est inférieur à 4 m de haut",
      "Un gilet orange fluorescent accroché à la charge"],
    correct: [1],
    explanation: "Tout dépassement arrière > 1 m doit être signalé (drapeau/panneau rouge de jour, feu rouge la nuit). Au-delà de 3 m, les règles de convoi exceptionnel peuvent s'appliquer." },

  // ── THÈME G – Mécanique et freinage spécifiques PL ───────────────────────

  { id: 'PLG1', theme: 'G',
    prompt: "Les freins d'un poids lourd fonctionnent principalement par :",
    choices: [
      "Fluide hydraulique (comme une voiture)",
      "Air comprimé (système pneumatique)",
      "Câble mécanique",
      "Système électromagnétique"],
    correct: [1],
    explanation: "Les PL utilisent des freins pneumatiques (à air comprimé). L'air comprimé actionne des cylindres de frein qui appliquent des sabots ou disques sur les roues." },

  { id: 'PLG2', theme: 'G',
    prompt: "Le rétarateur (ralentisseur) sur un PL permet de :",
    choices: [
      "Freiner uniquement en marche arrière",
      "Ralentir le véhicule sans user les freins (frein moteur amélioré, hydraulique ou électrique)",
      "Bloquer les roues motrices en urgence",
      "Réduire automatiquement la puissance moteur en ville"],
    correct: [1],
    explanation: "Le rétarateur dissipe l'énergie cinétique sous forme de chaleur sans solliciter les plaquettes ou sabots. Il préserve les freins, surtout en longue descente." },

  { id: 'PLG3', theme: 'G',
    prompt: "Un voyant de basse pression d'air dans le circuit de freinage s'allume. Que faire ?",
    choices: [
      "Continuer jusqu'au prochain arrêt prévu",
      "Ignorer si la conduite semble normale",
      "S'arrêter immédiatement de façon sécurisée et ne pas repartir",
      "Ouvrir le robinet de purge pour libérer la pression"],
    correct: [2],
    explanation: "La pression d'air est vitale pour les freins pneumatiques. En dessous du seuil d'alerte, l'efficacité de freinage est compromise. L'arrêt immédiat est impératif." },

  { id: 'PLG4', theme: 'G',
    prompt: "L'ABS sur un poids lourd permet de :",
    choices: [
      "Raccourcir la distance d'arrêt sur sol sec",
      "Éviter le blocage des roues et maintenir la directivité lors du freinage d'urgence",
      "Freiner plus fort sur route mouillée",
      "Remplacer les freins conventionnels"],
    correct: [1],
    explanation: "L'ABS empêche le blocage des roues, permettant de conserver le contrôle directionnel même lors d'un freinage d'urgence. Il peut ne pas raccourcir la distance d'arrêt mais évite la perte de contrôle." },

  { id: 'PLG5', theme: 'G',
    prompt: "La pression des pneumatiques d'un PL doit être vérifiée :",
    choices: [
      "Une fois par mois",
      "Quotidiennement avant le départ",
      "Uniquement lors du contrôle technique",
      "À chaque plein de carburant"],
    correct: [1],
    explanation: "Un contrôle quotidien de la pression est recommandé avant le départ. Un sous-gonflage de 20 % réduit la durée de vie du pneu de 30 % et augmente le risque d'éclatement." },

  { id: 'PLG6', theme: 'G',
    prompt: "La conduite en frein moteur en descente est avantageuse car :",
    choices: [
      "Elle consomme plus de carburant mais est plus sûre",
      "Elle réduit l'usure des freins et économise le carburant (injection coupée)",
      "Elle n'a aucun effet sur la consommation",
      "Elle endommage le moteur à long terme"],
    correct: [1],
    explanation: "Le frein moteur utilise la compression du moteur pour ralentir sans consommer de carburant. Il réduit significativement l'usure des freins et le risque de fading en descente." },

  // ── THÈME H – Équipements obligatoires et matières dangereuses (ADR) ───────

  { id: 'PLH1', theme: 'H',
    prompt: "Quels équipements de signalisation sont obligatoires à bord de tout PL ?",
    choices: [
      "Uniquement un triangle de présignalisation",
      "Au minimum : 2 triangles, 1 gilet haute visibilité et 1 extincteur de 2 kg",
      "Gilet + extincteur + boîte de premiers secours + 3 triangles",
      "Seulement un extincteur de 6 kg"],
    correct: [1],
    explanation: "Pour un PL, les équipements obligatoires incluent a minima 2 triangles de présignalisation, 1 gilet HV et 1 extincteur de 2 kg. Des règles additionnelles s'appliquent en ADR." },

  { id: 'PLH2', theme: 'H',
    prompt: "Les plaques oranges apposées sur un PL en transport ADR indiquent :",
    choices: [
      "Le numéro d'immatriculation du véhicule",
      "Le code de danger (chiffres du haut) et le numéro ONU de la substance (chiffres du bas)",
      "La masse totale du chargement",
      "La compagnie d'assurance"],
    correct: [1],
    explanation: "La plaque orange réfléchissante ADR comporte un numéro de danger (ex. 33 = liquide inflammable très volatil) et un numéro ONU identifiant la substance. Les secours utilisent ces codes." },

  { id: 'PLH3', theme: 'H',
    prompt: "Le certificat de formation ADR est obligatoire pour :",
    choices: [
      "Tous les conducteurs PL",
      "Les conducteurs transportant des matières dangereuses au-delà des quantités exemptées",
      "Les conducteurs de bus uniquement",
      "Les coursiers motorisés"],
    correct: [1],
    explanation: "Le certificat ADR est obligatoire pour le transport de matières dangereuses au-delà des seuils d'exemption. Il est renouvelable tous les 5 ans." },

  { id: 'PLH4', theme: 'H',
    prompt: "En cas d'accident impliquant un PL ADR, quelle est la première action du conducteur ?",
    choices: [
      "Déplacer immédiatement le véhicule",
      "Allumer une cigarette pour se calmer",
      "Mettre en sécurité, alerter les secours (112) et consulter la fiche TREMCARD",
      "Ouvrir les vannes de la citerne pour réduire la pression"],
    correct: [2],
    explanation: "En cas d'accident ADR : sécuriser la zone, appeler les secours en donnant les codes ADR, et utiliser la TREMCARD ou la fiche de données de sécurité pour informer les pompiers." },

  { id: 'PLH5', theme: 'H',
    prompt: "Les 9 classes ADR comprennent dans l'ordre :",
    choices: [
      "Classe 1 : Gaz, Classe 2 : Explosifs",
      "Classe 1 : Explosifs, Classe 2 : Gaz, Classe 3 : Liquides inflammables",
      "Classe 1 : Radioactifs, Classe 2 : Corrosifs",
      "Classe 1 : Toxiques, Classe 2 : Comburants"],
    correct: [1],
    explanation: "Classification ADR : 1=Explosifs, 2=Gaz, 3=Liquides inflammables, 4=Solides inflammables, 5=Comburants/Peroxydes, 6=Toxiques, 7=Radioactifs, 8=Corrosifs, 9=Divers." },

  // ── THÈME I – Éco-conduite et environnement ───────────────────────────────

  { id: 'PLI1', theme: 'I',
    prompt: "L'éco-conduite sur un PL consiste principalement à :",
    choices: [
      "Maintenir une vitesse constante la plus élevée possible",
      "Anticiper les ralentissements, maintenir une vitesse régulière et utiliser le frein moteur",
      "Couper le moteur à chaque feu rouge",
      "Éviter les autoroutes au profit des nationales"],
    correct: [1],
    explanation: "L'éco-conduite repose sur l'anticipation (moins de freinages brusques), la régularité de vitesse et l'usage du frein moteur. Ces pratiques peuvent réduire la consommation de 10 à 20 %." },

  { id: 'PLI2', theme: 'I',
    prompt: "Les normes Euro pour les PL (Euro 6 actuel) portent sur :",
    choices: [
      "La consommation de carburant uniquement",
      "Les émissions de polluants à l'échappement (NOx, particules, CO)",
      "Le bruit uniquement",
      "La taille des filtres à air"],
    correct: [1],
    explanation: "Les normes Euro définissent des seuils maximaux d'émission de polluants. Euro 6 (depuis 2014) : NOx < 0,4 g/kWh, particules < 0,01 g/kWh pour les moteurs diesel." },

  { id: 'PLI3', theme: 'I',
    prompt: "Le ralenti prolongé d'un moteur diesel PL à l'arrêt :",
    choices: [
      "Est inoffensif car le moteur ne travaille pas",
      "Consomme du carburant, émet des polluants et use prématurément le moteur",
      "Est recommandé pour maintenir la température optimale",
      "Ne concerne que les moteurs à moins de 6 cylindres"],
    correct: [1],
    explanation: "Un PL au ralenti consomme 2 à 4 L/h. Après 10 minutes d'arrêt, le moteur peut et doit être coupé. Certaines villes limitent le ralenti à 1 minute en zone urbaine." },

  { id: 'PLI4', theme: 'I',
    prompt: "La technologie AdBlue (SCR) sur un PL sert à :",
    choices: [
      "Augmenter la puissance du moteur",
      "Réduire les émissions de NOx par injection d'urée dans les gaz d'échappement",
      "Filtrer les particules fines dans l'habitacle",
      "Réduire la consommation de carburant de 30 %"],
    correct: [1],
    explanation: "Le système SCR injecte de l'AdBlue (solution d'urée) dans le flux d'échappement. La réaction transforme les NOx en azote inoffensif (N2) et eau." },

  { id: 'PLI5', theme: 'I',
    prompt: "L'analyse des données de conduite par télématique permet à l'entreprise de :",
    choices: [
      "Surveiller la vitesse uniquement",
      "Identifier les comportements énergivores et former les conducteurs en éco-conduite",
      "Éviter de payer les péages",
      "Remplacer le tachygraphe numérique"],
    correct: [1],
    explanation: "L'analyse des données (freinages brusques, survitesse, ralenti excessif) permet d'identifier les comportements à améliorer et de réduire la consommation et l'empreinte carbone." },

  { id: 'PLI6', theme: 'I',
    prompt: "Pour préserver la qualité de l'air en ville, de nombreuses agglomérations imposent aux PL :",
    choices: [
      "Un péage urbain uniquement",
      "Le respect des Zones à Faibles Émissions (ZFE) avec les vignettes Crit'Air",
      "Un itinéraire obligatoire de contournement",
      "L'arrêt moteur à chaque intersection"],
    correct: [1],
    explanation: "Les ZFE-m en France interdisent les véhicules les plus polluants selon leur vignette Crit'Air. Un PL Euro 6 a une Crit'Air 1, un Euro 5 une Crit'Air 2." },
];
