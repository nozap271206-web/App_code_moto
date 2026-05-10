import type { Question } from '../types';

// Banque originale, structurée selon les 9 thèmes officiels de l'ETM
// (programme public Sécurité Routière). Contenu rédigé sans réutilisation
// d'un ouvrage tiers ; révisions et corrections bienvenues.
export const QUESTIONS: Question[] = [
  // ===== A — Dispositions légales =====
  {
    id: 'A01', theme: 'A',
    prompt: "À quel âge minimum peut-on se présenter à l'examen pratique du permis A2 ?",
    choices: ['16 ans', '17 ans', '18 ans', '20 ans'],
    correct: [2],
    explanation: "Le permis A2 est accessible à partir de 18 ans. Le permis A est ensuite obtenu après 2 ans de A2 et une formation de 7 heures."
  },
  {
    id: 'A02', theme: 'A',
    prompt: "Le permis A2 limite la puissance de la moto à :",
    choices: ['25 kW', '35 kW', '47,5 kW', '70 kW'],
    correct: [1],
    explanation: "Le A2 est limité à 35 kW (≈ 47,5 ch) et un rapport puissance/poids ≤ 0,2 kW/kg."
  },
  {
    id: 'A03', theme: 'A',
    prompt: "Combien d'années de permis A2 faut-il avant le passage en permis A ?",
    choices: ['1 an', '2 ans', '3 ans', '5 ans'],
    correct: [1],
    explanation: "Après 2 ans de A2, une formation complémentaire de 7 heures permet d'accéder au permis A."
  },
  {
    id: 'A04', theme: 'A',
    prompt: "Le permis A2 autorise la conduite de motos dont le rapport puissance/poids ne dépasse pas :",
    choices: ['0,1 kW/kg', '0,2 kW/kg', '0,3 kW/kg', '0,5 kW/kg'],
    correct: [1],
    explanation: "La réglementation impose un rapport ≤ 0,2 kW/kg afin d'éviter les machines très légères et très puissantes."
  },
  {
    id: 'A05', theme: 'A',
    prompt: "Un jeune conducteur (permis probatoire) dispose initialement de :",
    choices: ['4 points', '6 points', '8 points', '12 points'],
    correct: [1],
    explanation: "Le permis probatoire démarre à 6 points et atteint 12 points après 3 ans (2 ans en cas de conduite accompagnée), sans infraction grave."
  },
  {
    id: 'A06', theme: 'A',
    prompt: "Le taux d'alcoolémie maximum autorisé pour un conducteur en permis probatoire est :",
    choices: ['0,5 g/L sang', '0,2 g/L sang', '0,0 g/L sang', '0,8 g/L sang'],
    correct: [1],
    explanation: "Pour les permis probatoires : 0,2 g/L de sang (soit 0,10 mg/L d'air expiré), seuil dit « zéro alcool »."
  },
  {
    id: 'A07', theme: 'A',
    prompt: "Conduire avec un taux d'alcool ≥ 0,8 g/L de sang constitue :",
    choices: ['Une contravention', 'Un délit', 'Une simple infraction administrative', 'Aucune des réponses'],
    correct: [1],
    explanation: "À partir de 0,8 g/L sang (0,40 mg/L air expiré), c'est un délit : amende jusqu'à 4 500 €, suspension/annulation du permis, prison possible."
  },
  {
    id: 'A08', theme: 'A',
    prompt: "Sur le permis probatoire, en cas de perte de 3 points ou plus, le conducteur doit :",
    choices: ['Repasser le code', 'Suivre un stage de sensibilisation obligatoire', 'Repasser tout le permis', 'Rien faire'],
    correct: [1],
    explanation: "Le stage de sensibilisation à la sécurité routière est obligatoire ; il permet de récupérer jusqu'à 4 points."

  },

  // ===== B — Le conducteur =====
  {
    id: 'B01', theme: 'B',
    prompt: "La fatigue au guidon se traduit principalement par :",
    choices: ['Une augmentation des réflexes', 'Un allongement du temps de réaction', 'Une meilleure concentration', 'Une vision périphérique élargie'],
    correct: [1],
    explanation: "La fatigue ralentit le temps de réaction, rétrécit le champ visuel et favorise les micro-sommeils."
  },
  {
    id: 'B02', theme: 'B',
    prompt: "Le temps de réaction moyen d'un conducteur attentif est d'environ :",
    choices: ['0,3 s', '1 s', '2 s', '3 s'],
    correct: [1],
    explanation: "Environ 1 seconde pour un conducteur reposé et attentif ; il s'allonge avec la fatigue, l'alcool, les médicaments ou le téléphone."
  },
  {
    id: 'B03', theme: 'B',
    prompt: "Quel temps de pause minimum est recommandé toutes les 2 heures sur un long trajet ?",
    choices: ['5 minutes', '15 minutes', '20 minutes', '1 heure'],
    correct: [2],
    explanation: "Pause d'au moins 20 minutes toutes les 2 heures, à anticiper dès les premiers signes de fatigue."
  },
  {
    id: 'B04', theme: 'B',
    prompt: "Certains médicaments portent un pictogramme triangulaire. Le pictogramme rouge signifie :",
    choices: ['Compatible avec la conduite', 'Prudence', 'Ne pas conduire', 'Réservé aux poids lourds'],
    correct: [2],
    explanation: "Pictogramme niveau 3 (rouge) : « Attention, danger : ne pas conduire ». Niveau 2 = avis médical, niveau 1 = prudence."
  },
  {
    id: 'B05', theme: 'B',
    prompt: "À moto, le stress excessif a tendance à :",
    choices: ['Améliorer la prise de décision', 'Restreindre le champ visuel', 'Allonger la vision périphérique', 'Aucun effet'],
    correct: [1],
    explanation: "Le stress crée un effet « tunnel » : le champ visuel se rétrécit et l'attention se focalise au détriment des informations latérales."
  },
  {
    id: 'B06', theme: 'B',
    prompt: "La consommation de stupéfiants au volant/guidon est :",
    choices: ['Tolérée à faible dose', 'Interdite, c\'est un délit', 'Autorisée hors agglomération', 'Sans incidence légale'],
    correct: [1],
    explanation: "Conduite après usage de stupéfiants = délit : jusqu'à 2 ans de prison, 4 500 € d'amende, retrait de 6 points, suspension du permis."
  },
  {
    id: 'B07', theme: 'B',
    prompt: "À jeun, un verre standard d'alcool fait monter l'alcoolémie d'environ :",
    choices: ['0,05 g/L', '0,2 à 0,25 g/L', '0,5 g/L', '1 g/L'],
    correct: [1],
    explanation: "Un verre standard (bière, vin, alcool fort dosés pareil) augmente l'alcoolémie d'environ 0,20 à 0,25 g/L de sang."
  },

  // ===== C — La route =====
  {
    id: 'C01', theme: 'C',
    prompt: "Sur route mouillée, la distance de freinage est multipliée par environ :",
    choices: ['1,2', '2', '4', '10'],
    correct: [1],
    explanation: "Sur sol mouillé, on retient un facteur ×2 pour la distance de freinage par rapport au sec ; ×10 sur verglas."
  },
  {
    id: 'C02', theme: 'C',
    prompt: "Quelle vitesse maximale est autorisée hors agglomération sur route à double sens sans séparateur central ?",
    choices: ['70 km/h', '80 km/h', '90 km/h', '110 km/h'],
    correct: [1],
    explanation: "80 km/h depuis 2018 (sauf décision préfectorale de remontée à 90 km/h sur certains tronçons)."
  },
  {
    id: 'C03', theme: 'C',
    prompt: "Sur autoroute par temps de pluie, la vitesse maximale autorisée passe à :",
    choices: ['100 km/h', '110 km/h', '120 km/h', '130 km/h'],
    correct: [1],
    explanation: "110 km/h sous la pluie (au lieu de 130). 50 km/h en cas de visibilité < 50 m."
  },
  {
    id: 'C04', theme: 'C',
    prompt: "Une bande blanche continue au sol :",
    choices: ['Peut être franchie pour doubler', 'Ne doit pas être franchie ni chevauchée', 'Peut être chevauchée seulement', 'Sépare les voies de tramway'],
    correct: [1],
    explanation: "La ligne continue ne se franchit pas et ne se chevauche pas, sauf dépassement d'un cycliste en sécurité (chevauchement toléré si visibilité)."
  },
  {
    id: 'C05', theme: 'C',
    prompt: "Sur chaussée glissante, le motard doit privilégier :",
    choices: ['Un freinage brusque', 'Un freinage progressif et anticipé', 'Couper le moteur', 'Débrayer en virage'],
    correct: [1],
    explanation: "Freinage progressif, anticipation des trajectoires, regard porté loin : la moto perd son équilibre dès qu'une roue se bloque."
  },
  {
    id: 'C06', theme: 'C',
    prompt: "Sur sol mouillé, les zones les plus glissantes pour une moto sont :",
    choices: ['Le bitume neuf', 'Les marquages au sol et plaques d\'égout', 'Les graviers concassés', 'Les rails de sécurité'],
    correct: [1],
    explanation: "Peinture, métal (plaques, rails de tram), feuilles mortes et gasoil offrent très peu d'adhérence : à franchir droit et sans freiner."
  },
  {
    id: 'C07', theme: 'C',
    prompt: "La distance de sécurité minimale derrière un véhicule correspond à :",
    choices: ['Un délai de 1 seconde', 'Un délai de 2 secondes', 'Un délai de 5 secondes', '50 mètres'],
    correct: [1],
    explanation: "On retient la règle des 2 secondes (à doubler sous la pluie). Sur autoroute : 2 traits = distance de sécurité minimale."
  },
  {
    id: 'C08', theme: 'C',
    prompt: "Une route bordée d'arbres après la pluie présente le risque particulier de :",
    choices: ['Bouchons', 'Zones d\'ombre humides très glissantes', 'Vent latéral fort', 'Excès de visibilité'],
    correct: [1],
    explanation: "Les zones d'ombre sèchent moins vite : le sol y reste glissant longtemps, surtout au matin."
  },

  // ===== D — Les autres usagers =====
  {
    id: 'D01', theme: 'D',
    prompt: "Le motard est particulièrement vulnérable parce que :",
    choices: ['Il roule plus vite', 'Sa silhouette est étroite et peu perçue', 'Il est plus lourd qu\'une voiture', 'Il a une meilleure visibilité'],
    correct: [1],
    explanation: "La faible largeur frontale rend la moto difficile à percevoir, surtout aux intersections et dans les angles morts."
  },
  {
    id: 'D02', theme: 'D',
    prompt: "Pour être mieux vu, le motard doit :",
    choices: ['Rouler au milieu de sa voie en permanence', 'Adopter un placement dynamique sur sa voie', 'Coller la voiture qui le précède', 'Couper le phare en agglomération'],
    correct: [1],
    explanation: "Le placement dynamique (variations latérales dans la voie) accroît la perception de mouvement et donc la visibilité du motard."
  },
  {
    id: 'D03', theme: 'D',
    prompt: "Face à un piéton qui s'engage sur un passage protégé, le motard :",
    choices: ['A la priorité s\'il est déjà engagé', 'Doit s\'arrêter et le laisser passer', 'Peut klaxonner pour qu\'il se dépêche', 'N\'a pas à ralentir si feu vert'],
    correct: [1],
    explanation: "Tout piéton engagé ou manifestant clairement l'intention de traverser a la priorité absolue."
  },
  {
    id: 'D04', theme: 'D',
    prompt: "Lors d'un dépassement de vélo, la distance latérale minimale est :",
    choices: ['50 cm en agglo, 1 m hors agglo', '1 m en agglo, 1,5 m hors agglo', '1,5 m partout', '2 m partout'],
    correct: [1],
    explanation: "1 m en agglomération, 1,5 m hors agglomération : franchissement d'une ligne continue toléré si la visibilité est suffisante."
  },
  {
    id: 'D05', theme: 'D',
    prompt: "Un véhicule prioritaire (gyrophare bleu + sirène) approche par l'arrière :",
    choices: ['On accélère pour ne pas le gêner', 'On se range et on s\'arrête si nécessaire', 'On garde sa trajectoire sans changer', 'On freine brutalement'],
    correct: [1],
    explanation: "Faciliter le passage en se rabattant à droite et en s'arrêtant si besoin, sans manœuvre brusque."
  },
  {
    id: 'D06', theme: 'D',
    prompt: "Un bus signale son départ de l'arrêt en agglomération. Vous devez :",
    choices: ['Le dépasser au plus vite', 'Lui céder le passage', 'Klaxonner', 'Aucune obligation'],
    correct: [1],
    explanation: "En agglomération, le bus qui signale son intention de quitter l'arrêt a la priorité ; on ralentit et on le laisse s'insérer."
  },

  // ===== E — Réglementation générale =====
  {
    id: 'E01', theme: 'E',
    prompt: "L'assurance minimale obligatoire d'une moto en France est :",
    choices: ['La tous risques', 'La responsabilité civile', 'Le vol et incendie', 'L\'assistance 0 km'],
    correct: [1],
    explanation: "La RC (au tiers) est la seule assurance légalement obligatoire ; les autres garanties sont facultatives."
  },
  {
    id: 'E02', theme: 'E',
    prompt: "L'attestation d'assurance se matérialise par :",
    choices: ['Un certificat papier seulement', 'Le « papillon vert » apposé sur la moto + mémo de l\'assureur', 'Aucun document', 'Une carte grise verte'],
    correct: [1],
    explanation: "Le certificat (« papillon vert ») doit être collé sur la moto et l'attestation conservée pour présentation aux forces de l'ordre."
  },
  {
    id: 'E03', theme: 'E',
    prompt: "La carte grise (certificat d'immatriculation) doit être à jour dans un délai de :",
    choices: ['8 jours après changement d\'adresse', '1 mois', '3 mois', '6 mois'],
    correct: [1],
    explanation: "Changement d'adresse : déclaration sous 1 mois. Changement de propriétaire : déclaration sous 15 jours par le vendeur."
  },
  {
    id: 'E04', theme: 'E',
    prompt: "Le contrôle technique pour les motos est obligatoire depuis :",
    choices: ['Toujours', '2024', 'Jamais en France', '2010'],
    correct: [1],
    explanation: "Mis en place progressivement depuis avril 2024 pour les 2/3-roues motorisés, avec un calendrier selon l'année de mise en circulation."
  },
  {
    id: 'E05', theme: 'E',
    prompt: "Le défaut d'assurance constitue :",
    choices: ['Une simple amende administrative', 'Un délit', 'Une contravention de 4e classe', 'Aucun problème en 2-roues'],
    correct: [1],
    explanation: "Délit : amende forfaitaire 500 € (minorée 400 €), pouvant aller jusqu'à 3 750 €, suspension du permis, confiscation possible du véhicule."
  },

  // ===== F — Quitter le véhicule =====
  {
    id: 'F01', theme: 'F',
    prompt: "Avant de descendre de sa moto en stationnement, le motard doit en priorité :",
    choices: ['Couper le contact et mettre la béquille', 'Laisser tourner le moteur', 'Plier le rétroviseur', 'Verrouiller le réservoir'],
    correct: [0],
    explanation: "Couper le contact, mettre la béquille (latérale ou centrale selon le sol), enclencher une vitesse pour éviter le recul."
  },
  {
    id: 'F02', theme: 'F',
    prompt: "Pour stationner sa moto sur béquille latérale dans une rue en pente :",
    choices: ['Toujours la roue avant vers le bas', 'Toujours la roue avant vers le haut, vitesse engagée', 'Sans vitesse engagée', 'En sens contraire de la circulation'],
    correct: [1],
    explanation: "Roue avant vers le haut + 1ʳᵉ engagée : la moto ne peut pas reculer ni rouler toute seule."
  },
  {
    id: 'F03', theme: 'F',
    prompt: "Un antivol homologué SRA est utile car :",
    choices: ['Il évite le vol à 100 %', 'Il complique le vol et peut être exigé par l\'assureur', 'Il est obligatoire par la loi', 'Il remplace l\'assurance'],
    correct: [1],
    explanation: "L'antivol mécanique homologué retarde le vol et est souvent exigé par l'assureur pour la garantie vol."
  },
  {
    id: 'F04', theme: 'F',
    prompt: "Sur une moto stationnée, le rétroviseur dépasse-t-il de la place autorisée ?",
    choices: ['Aucune importance', 'Oui, cela peut gêner la circulation et entraîner un PV', 'Seulement la nuit', 'Seulement sur autoroute'],
    correct: [1],
    explanation: "Le stationnement gênant (ex. rétro qui dépasse sur la voie) est sanctionné ; replier les rétros lorsque possible."
  },
  {
    id: 'F05', theme: 'F',
    prompt: "Le stationnement payant des motos en ville :",
    choices: ['Est toujours gratuit en France', 'Dépend de la commune et peut être payant (ex. Paris)', 'Est interdit', 'Concerne uniquement les voitures'],
    correct: [1],
    explanation: "Certaines villes (Paris, Charenton, Vincennes…) imposent le stationnement payant aux 2RM ; vérifier la signalétique locale."
  },

  // ===== G — Mécanique & sécurité =====
  {
    id: 'G01', theme: 'G',
    prompt: "La pression des pneus moto doit être contrôlée :",
    choices: ['Une fois par an', 'Avant chaque long trajet, à froid', 'Uniquement à chaud', 'Jamais'],
    correct: [1],
    explanation: "Vérification à froid avant les longs trajets et au moins tous les 15 jours. La pression à chaud est supérieure à la valeur de référence."
  },
  {
    id: 'G02', theme: 'G',
    prompt: "Un pneu moto est usé lorsque la profondeur des sculptures est inférieure à :",
    choices: ['0,8 mm', '1 mm', '1,6 mm', '3 mm'],
    correct: [2],
    explanation: "Le minimum légal est 1 mm pour les 2RM, mais le seuil pratique recommandé est 1,6 mm comme pour les voitures."
  },
  {
    id: 'G03', theme: 'G',
    prompt: "Le témoin orange d'alerte au tableau de bord signale généralement :",
    choices: ['Un défaut majeur, arrêt immédiat', 'Un défaut nécessitant un contrôle rapide', 'Tout va bien', 'Une recharge en cours'],
    correct: [1],
    explanation: "Orange = alerte à contrôler rapidement. Rouge = défaut grave : s'arrêter en sécurité."
  },
  {
    id: 'G04', theme: 'G',
    prompt: "L'ABS sur une moto :",
    choices: ['Réduit la distance de freinage dans tous les cas', 'Empêche le blocage des roues au freinage', 'Permet de freiner en virage incliné sans risque', 'Désactive le frein arrière'],
    correct: [1],
    explanation: "L'ABS empêche le blocage et préserve la trajectoire, mais ne dispense pas d'anticiper ; il ne garantit pas le freinage en virage très incliné."
  },
  {
    id: 'G05', theme: 'G',
    prompt: "La chaîne de transmission doit être :",
    choices: ['Tendue au maximum', 'Lubrifiée et tendue selon les préconisations constructeur', 'Sèche', 'Très détendue'],
    correct: [1],
    explanation: "Une chaîne mal entretenue casse, saute la couronne ou bloque la roue arrière. Contrôler la tension et lubrifier régulièrement."
  },
  {
    id: 'G06', theme: 'G',
    prompt: "Un freinage moto efficace utilise principalement :",
    choices: ['Uniquement le frein arrière', 'Uniquement le frein avant', 'Les deux freins, avec une prédominance avant', 'Le frein moteur seul'],
    correct: [2],
    explanation: "Le frein avant assure ~70 % de l'efficacité ; le frein arrière stabilise. Les deux freins doivent être combinés progressivement."
  },
  {
    id: 'G07', theme: 'G',
    prompt: "L'éclairage de jour sur une moto :",
    choices: ['Est optionnel en France', 'Est obligatoire : feu de croisement allumé en permanence', 'Doit être éteint le jour', 'Ne concerne que la nuit'],
    correct: [1],
    explanation: "Depuis 1975, le feu de croisement est allumé en permanence, jour et nuit, pour améliorer la visibilité de la moto."
  },

  // ===== H — Équipements de protection =====
  {
    id: 'H01', theme: 'H',
    prompt: "Le casque moto homologué porte la marque :",
    choices: ['NF seulement', 'CE/ECE 22.05 ou 22.06', 'ISO 9001', 'Aucune marque obligatoire'],
    correct: [1],
    explanation: "ECE 22.05 (en fin de vie) et désormais 22.06 (plus exigeante). L'absence d'homologation = 135 € d'amende + 3 points."
  },
  {
    id: 'H02', theme: 'H',
    prompt: "Les gants moto sont :",
    choices: ['Conseillés', 'Obligatoires, homologués CE, pour le conducteur et le passager', 'Obligatoires pour le passager seulement', 'Interdits en été'],
    correct: [1],
    explanation: "Depuis novembre 2016, gants certifiés CE obligatoires pour le conducteur et le passager. Défaut : 68 € + 1 point."
  },
  {
    id: 'H03', theme: 'H',
    prompt: "Sur une moto, le port d'un blouson en jean sans renforts :",
    choices: ['Protège correctement en cas de chute', 'N\'offre quasiment aucune protection à l\'abrasion', 'Remplace un blouson moto', 'Est obligatoire'],
    correct: [1],
    explanation: "Seul un blouson moto avec coques homologuées (CE) et tissus résistants protège en cas de glissade ; le jean s'use en quelques mètres."
  },
  {
    id: 'H04', theme: 'H',
    prompt: "Le gilet jaune à bord d'une moto :",
    choices: ['Doit être porté en permanence', 'Doit être emporté et porté en cas d\'arrêt d\'urgence sur la chaussée', 'N\'est plus obligatoire', 'Concerne uniquement les voitures'],
    correct: [1],
    explanation: "Obligation d'emporter un gilet rétro-réfléchissant et de le revêtir en cas d'arrêt d'urgence sur la chaussée ou ses abords."
  },
  {
    id: 'H05', theme: 'H',
    prompt: "Une dorsale homologuée protège :",
    choices: ['Les côtes uniquement', 'La colonne vertébrale', 'Le bassin', 'La nuque'],
    correct: [1],
    explanation: "Protection essentielle de la colonne, à choisir norme EN 1621-2 niveau 1 ou 2."
  },
  {
    id: 'H06', theme: 'H',
    prompt: "À moto, la tenue idéale est :",
    choices: ['T-shirt + casque', 'Casque, gants, blouson, pantalon, bottes ou chaussures montantes homologués', 'Casque seul', 'Casque + sandales'],
    correct: [1],
    explanation: "ATGATT — « All The Gear All The Time » : casque, gants, blouson, pantalon, bottes/chaussures montantes, idéalement avec protections homologuées."
  },

  // ===== I — Environnement =====
  {
    id: 'I01', theme: 'I',
    prompt: "L'éco-conduite à moto consiste notamment à :",
    choices: ['Rouler en sur-régime', 'Anticiper, adopter un régime moteur modéré et passer rapidement les rapports supérieurs', 'Couper le moteur en descente', 'Rouler avec un pneu sous-gonflé'],
    correct: [1],
    explanation: "Anticipation, régime modéré, passage rapide aux rapports supérieurs, entretien soigné : -10 à -20 % de consommation et de pollution."
  },
  {
    id: 'I02', theme: 'I',
    prompt: "Une moto Crit'Air 0 correspond à :",
    choices: ['Un véhicule très polluant', 'Un véhicule 100 % électrique ou hydrogène', 'Un cyclomoteur', 'Une moto ancienne'],
    correct: [1],
    explanation: "Crit'Air 0 (vert) = 100 % électrique/hydrogène. Crit'Air 1 = essence Euro 4 ou +. Les ZFE imposent une vignette à apposer."
  },
  {
    id: 'I03', theme: 'I',
    prompt: "Sous-gonfler ses pneus :",
    choices: ['Économise du carburant', 'Augmente la consommation et l\'usure', 'Améliore la tenue de route', 'N\'a aucun effet'],
    correct: [1],
    explanation: "Pneus sous-gonflés = +résistance au roulement = +consommation, +usure prématurée, et tenue de route dégradée."
  },
  {
    id: 'I04', theme: 'I',
    prompt: "Le bruit excessif d'un échappement non homologué :",
    choices: ['Est sans conséquence', 'Est sanctionné et nuit à l\'image des motards', 'Est obligatoire pour être vu', 'Améliore les performances'],
    correct: [1],
    explanation: "Échappement non homologué = amende, immobilisation possible. Le bruit ne remplace pas la visibilité ; il dégrade l'acceptation de la moto en ville."
  },
  {
    id: 'I05', theme: 'I',
    prompt: "Une Zone à Faibles Émissions (ZFE) :",
    choices: ['Est une autoroute', 'Limite la circulation des véhicules les plus polluants selon la vignette Crit\'Air', 'Concerne uniquement les poids lourds', 'N\'existe qu\'en Allemagne'],
    correct: [1],
    explanation: "Les ZFE-m (mobilité) ferment progressivement leurs centres aux véhicules de vignettes les plus élevées, motos comprises."
  },

  // Quelques bonus inter-thèmes
  {
    id: 'A09', theme: 'A',
    prompt: "Utiliser un téléphone tenu en main au guidon est sanctionné par :",
    choices: ['35 € et 1 point', '135 € et 3 points', '750 € et 6 points', 'Aucune sanction'],
    correct: [1],
    explanation: "135 € (contravention 4e classe) + retrait de 3 points. L'oreillette/écouteur dans l'oreille est également interdit."
  },
  {
    id: 'C09', theme: 'C',
    prompt: "Sur autoroute, par visibilité réduite à moins de 50 mètres, la vitesse maximale est :",
    choices: ['90 km/h', '70 km/h', '50 km/h', '30 km/h'],
    correct: [2],
    explanation: "Brouillard épais (< 50 m de visibilité) : vitesse limitée à 50 km/h sur toute route, autoroute comprise."
  },
  {
    id: 'D07', theme: 'D',
    prompt: "Le sas vélo (cycliste) à un feu tricolore :",
    choices: ['Est réservé aux motos', 'Est réservé aux cyclistes', 'Peut être occupé par les voitures', 'N\'a pas de valeur réglementaire'],
    correct: [1],
    explanation: "Le sas vélo, en amont du feu, est strictement réservé aux cyclistes. S'y arrêter à moto = 135 € + retrait de points."
  },
  {
    id: 'G08', theme: 'G',
    prompt: "Le liquide de frein doit être :",
    choices: ['Changé tous les 10 ans', 'Changé tous les 2 ans en moyenne', 'Jamais changé', 'Remplacé uniquement après accident'],
    correct: [1],
    explanation: "Hygroscopique, le liquide de frein absorbe l'humidité ; son point d'ébullition baisse. Remplacement tous les 1 à 2 ans."
  },
  {
    id: 'H07', theme: 'H',
    prompt: "Sur un casque, la jugulaire :",
    choices: ['Doit être lâche pour respirer', 'Doit être serrée — un doigt passe sous la sangle', 'Peut être déclipsée en roulant', 'N\'est pas obligatoire'],
    correct: [1],
    explanation: "Casque mal attaché = pas de casque sur le plan légal et de la protection. Conduire casque non attaché = 135 € + 3 points."
  },

  // ===== Lot 2 — Signalisation & règles approfondies =====

  // Panneaux — thème C
  {
    id: 'C10', theme: 'C', sign: 'stop',
    prompt: "Devant ce panneau, vous devez :",
    choices: ['Ralentir seulement', 'Marquer l\'arrêt complet pieds posés', 'Céder le passage sans s\'arrêter', 'Klaxonner avant de passer'],
    correct: [1],
    explanation: "Le panneau STOP impose un arrêt absolu à la ligne d'effet ; à moto, pied posé au sol et roue immobile."
  },
  {
    id: 'C11', theme: 'C', sign: 'cedez',
    prompt: "Ce panneau signifie :",
    choices: ['Stop obligatoire', 'Céder le passage : ralentir et s\'arrêter si nécessaire', 'Vous avez la priorité', 'Sens interdit'],
    correct: [1],
    explanation: "« Cédez le passage » : on n'est pas obligé de s'arrêter si la voie est libre, mais on doit laisser passer tous les autres usagers."
  },
  {
    id: 'C12', theme: 'C', sign: 'sens-interdit',
    prompt: "Ce panneau interdit :",
    choices: ['Le stationnement', 'L\'accès à la voie pour tous les véhicules', 'Le dépassement', 'Uniquement les poids lourds'],
    correct: [1],
    explanation: "Sens interdit à tout véhicule. Y entrer = 135 € + 4 points et risque majeur de collision frontale."
  },
  {
    id: 'C13', theme: 'C', sign: 'route-prioritaire',
    prompt: "Ce panneau (carré jaune sur pointe) indique :",
    choices: ['Vous êtes sur une route prioritaire', 'Fin de route prioritaire', 'Cédez le passage', 'Aucune signification'],
    correct: [0],
    explanation: "Le losange jaune indique une route à caractère prioritaire : priorité sur les voies sécantes sauf indication contraire."
  },
  {
    id: 'C14', theme: 'C', sign: 'fin-prioritaire',
    prompt: "Ce panneau (losange jaune barré) signifie :",
    choices: ['Stop', 'Fin de route prioritaire — vigilance aux intersections', 'Sens interdit', 'Voie réservée'],
    correct: [1],
    explanation: "Au prochain carrefour, la priorité à droite redevient la règle, sauf signalisation contraire."
  },
  {
    id: 'C15', theme: 'C', sign: 'danger',
    prompt: "Ce panneau triangulaire avec un point d'exclamation signifie :",
    choices: ['Sens interdit', 'Autre danger : ralentir et redoubler de vigilance', 'Stop obligatoire', 'Travaux'],
    correct: [1],
    explanation: "« Autres dangers » : un panonceau placé en dessous précise généralement la nature exacte du danger."
  },
  {
    id: 'C16', theme: 'C', sign: 'chaussee-glissante',
    prompt: "Ce panneau indique :",
    choices: ['Chaussée glissante', 'Vent latéral', 'Travaux', 'Verglas'],
    correct: [0],
    explanation: "Chaussée glissante : à moto, ralentir nettement, éviter freinage brutal et angle d'inclinaison important."
  },
  {
    id: 'C17', theme: 'C', sign: 'limite-50',
    prompt: "Devant ce panneau :",
    choices: ['Vitesse minimale 50 km/h', 'Vitesse maximale 50 km/h', 'Indication kilométrique', 'Distance recommandée 50 m'],
    correct: [1],
    explanation: "Cercle rouge + chiffre noir = interdiction : vitesse plafond. Au-delà = excès de vitesse."
  },
  {
    id: 'C18', theme: 'C', sign: 'fin-limitation',
    prompt: "Ce panneau (cercle blanc barré) signifie :",
    choices: ['Fin de la limitation de vitesse précédemment indiquée', 'Limitation à 50 km/h', 'Sens interdit', 'Fin d\'agglomération'],
    correct: [0],
    explanation: "Cercle blanc + chiffre barré : la limitation spécifique se termine ; on revient à la vitesse réglementaire générale de la voie."
  },
  {
    id: 'C19', theme: 'C', sign: 'agglo-entree',
    prompt: "Ce panneau d'entrée d'agglomération impose par défaut :",
    choices: ['90 km/h', '70 km/h', '50 km/h', '30 km/h'],
    correct: [2],
    explanation: "Entrée d'agglomération = 50 km/h par défaut (sauf indication contraire ou zone 30/aire piétonne)."
  },
  {
    id: 'C20', theme: 'C', sign: 'autoroute',
    prompt: "Sur une moto A2 (limitée à 35 kW), peut-on rouler sur autoroute ?",
    choices: ['Non, interdit en A2', 'Oui, à condition de respecter les vitesses maxi', 'Oui seulement la nuit', 'Uniquement sur voie rapide'],
    correct: [1],
    explanation: "Le permis A2 autorise toutes les voies (autoroute comprise) avec une machine A2-bridée et un EPI conforme."
  },
  {
    id: 'C21', theme: 'C', sign: 'zone-30',
    prompt: "Dans une zone 30 :",
    choices: ['Vitesse maxi 30 km/h, priorité piétons élargie', 'Vitesse minimale 30 km/h', 'Stationnement interdit', 'Zone interdite aux motos'],
    correct: [0],
    explanation: "Zone 30 : vitesse plafond 30 km/h, piétons prioritaires, double sens cyclable par défaut, vigilance accrue."
  },
  {
    id: 'C22', theme: 'C', sign: 'aire-pietonne',
    prompt: "Une aire piétonne autorise les motos à :",
    choices: ['Rouler à 30 km/h', 'Y rouler au pas, en cédant la priorité aux piétons', 'Stationner librement', 'Y entrer librement'],
    correct: [1],
    explanation: "Dans une aire piétonne, seuls quelques véhicules autorisés peuvent circuler, au pas et piétons prioritaires."
  },
  {
    id: 'C23', theme: 'C', sign: 'sens-giratoire',
    prompt: "Face à ce panneau (rond bleu, flèches tournantes) :",
    choices: ['Vous avez la priorité', 'Vous abordez un carrefour à sens giratoire et cédez le passage aux usagers déjà engagés', 'Demi-tour interdit', 'Aucune indication'],
    correct: [1],
    explanation: "Le « giratoire » impose à l'usager entrant de céder le passage à ceux qui y circulent (sauf carrefour à priorité à droite très rare)."
  },
  {
    id: 'C24', theme: 'C', sign: 'priorite-droite',
    prompt: "Ce panneau triangulaire avec flèches indique :",
    choices: ['Vous avez la priorité', 'Carrefour à priorité à droite — vigilance accrue', 'Sens unique', 'Voie réservée bus'],
    correct: [1],
    explanation: "Annonce un carrefour où la règle de priorité à droite s'applique : tout véhicule arrivant à votre droite est prioritaire."
  },

  // A — règles juridiques
  {
    id: 'A10', theme: 'A',
    prompt: "Le permis A (toutes cylindrées) sans passer par A2 est accessible directement à partir de :",
    choices: ['18 ans', '21 ans', '24 ans', '25 ans'],
    correct: [2],
    explanation: "Accès direct au permis A à 24 ans ; sinon, passerelle A2 → A après 2 ans + 7 h de formation."
  },
  {
    id: 'A11', theme: 'A',
    prompt: "Conduire sans permis correspondant à la catégorie du véhicule est :",
    choices: ['Une contravention', 'Un délit puni jusqu\'à 15 000 € et 1 an de prison', 'Sans conséquence', 'Une simple amende administrative'],
    correct: [1],
    explanation: "Délit : amende, immobilisation du véhicule, confiscation possible et inscription au casier."
  },
  {
    id: 'A12', theme: 'A',
    prompt: "Un excès de vitesse > 50 km/h au-dessus de la limite est :",
    choices: ['Une contravention de 4e classe', 'Une contravention de 5e classe : 1 500 €, 6 points, suspension du permis', 'Un simple PV', 'Aucune sanction si récidive'],
    correct: [1],
    explanation: "Contravention de 5e classe : 1 500 € (3 000 € en récidive), retrait de 6 points, suspension jusqu'à 3 ans, confiscation possible du véhicule en récidive (= délit)."
  },
  {
    id: 'A13', theme: 'A',
    prompt: "Le franchissement d'une ligne continue se sanctionne par :",
    choices: ['90 € et 3 points', '135 € et 3 points', '375 € et 6 points', 'Aucune sanction'],
    correct: [1],
    explanation: "Contravention 4e classe : 135 € + 3 points. À moto, c'est aussi un facteur d'accidents par collision frontale."
  },
  {
    id: 'A14', theme: 'A',
    prompt: "La récupération automatique de la totalité des points en l'absence d'infraction prend :",
    choices: ['6 mois', '1 an', '2 ans (3 si infraction de 4e/5e classe)', '5 ans'],
    correct: [2],
    explanation: "Permis non probatoire : 2 ans sans infraction pour récupérer tous les points (3 ans si la dernière infraction était de 4e ou 5e classe)."
  },
  {
    id: 'A15', theme: 'A',
    prompt: "Brûler un feu rouge à moto :",
    choices: ['68 € et 0 point', '135 € et 4 points', '375 € et 6 points', 'Aucune sanction'],
    correct: [1],
    explanation: "Non-respect d'un feu rouge fixe : 135 € + 4 points, suspension possible. À moto, risque d'angle mort et de collision latérale."
  },

  // B — conducteur
  {
    id: 'B08', theme: 'B',
    prompt: "Après une nuit blanche, les capacités de conduite sont comparables à :",
    choices: ['Un jour normal', 'Un état d\'alcoolémie modérée', 'Une meilleure vigilance', 'Aucun effet'],
    correct: [1],
    explanation: "17 h sans sommeil ≈ 0,5 g/L d'alcool ; 24 h sans sommeil ≈ 1 g/L. Ne pas prendre la moto sans repos."
  },
  {
    id: 'B09', theme: 'B',
    prompt: "Une bonne vision périphérique permet au motard :",
    choices: ['De rouler plus vite', 'De détecter les véhicules sur les côtés et anticiper', 'De réduire le port du casque', 'Sans effet sur la sécurité'],
    correct: [1],
    explanation: "La vision latérale détecte mouvements et silhouettes ; fatigue et stress la réduisent (vision tunnel)."
  },
  {
    id: 'B10', theme: 'B',
    prompt: "Le froid intense en moto :",
    choices: ['Ne change rien', 'Réduit la précision des gestes et la concentration', 'Améliore la vigilance', 'Renforce l\'adhérence'],
    correct: [1],
    explanation: "Le froid ankylose, raidit les muscles et brouille la concentration. EPI hiver, pauses et boissons chaudes."
  },
  {
    id: 'B11', theme: 'B',
    prompt: "Conduire avec une émotion forte (colère, deuil, dispute) :",
    choices: ['N\'a pas d\'impact', 'Augmente le risque d\'accident par déconcentration', 'Améliore les réflexes', 'Réduit la fatigue'],
    correct: [1],
    explanation: "Les émotions fortes accaparent l'attention. Pour un trajet moto, se calmer ou différer le départ."
  },
  {
    id: 'B12', theme: 'B',
    prompt: "L'alcool dans le sang s'élimine à raison d'environ :",
    choices: ['0,1 g/L par heure', '0,5 g/L par heure', '1 g/L par heure', '0,02 g/L par heure'],
    correct: [0],
    explanation: "Élimination ~0,10 à 0,15 g/L par heure ; aucune méthode (café, douche froide…) n'accélère le processus."
  },
  {
    id: 'B13', theme: 'B',
    prompt: "Le port d'écouteurs ou oreillette en conduisant est :",
    choices: ['Autorisé', 'Interdit : 135 € et 3 points', 'Toléré à un seul côté', 'Réservé aux GPS'],
    correct: [1],
    explanation: "Depuis 2015, tout dispositif émettant un son dans l'oreille est interdit (écouteurs, oreillettes). Intercom intégré au casque autorisé."
  },

  // C — route / vitesses
  {
    id: 'C25', theme: 'C', sign: 'limite-30',
    prompt: "Une rue avec ce panneau implique :",
    choices: ['30 km/h maximum', '30 km/h conseillé', '30 minutes de stationnement', 'Aucune signification'],
    correct: [0],
    explanation: "Limitation stricte à 30 km/h, fréquente en abords d'écoles, zones résidentielles, voiries apaisées."
  },
  {
    id: 'C26', theme: 'C', sign: 'limite-70',
    prompt: "Devant ce panneau, la vitesse maximale est :",
    choices: ['50 km/h', '70 km/h', '90 km/h', '110 km/h'],
    correct: [1],
    explanation: "Plafond 70 km/h jusqu'au prochain panneau de fin de limitation ou d'une autre limitation."
  },
  {
    id: 'C27', theme: 'C',
    prompt: "Sur autoroute, la vitesse minimale autorisée sur la voie de gauche par temps sec et de jour est :",
    choices: ['50 km/h', '80 km/h', '110 km/h', 'Aucune'],
    correct: [1],
    explanation: "Vitesse minimale 80 km/h sur la voie de gauche (autoroute) par temps de visibilité normale, sauf bouchon."
  },
  {
    id: 'C28', theme: 'C',
    prompt: "Une moto peut-elle stationner sur un trottoir en France ?",
    choices: ['Oui toujours', 'Non, c\'est interdit (très gênant) sauf emplacement matérialisé', 'Oui si elle est petite', 'Oui si la béquille est latérale'],
    correct: [1],
    explanation: "Stationnement très gênant sur trottoir : 135 €, enlèvement possible. Seuls les emplacements matérialisés sont autorisés."
  },
  {
    id: 'C29', theme: 'C',
    prompt: "Sur autoroute, en cas de panne, la première action est :",
    choices: ['Sortir sur la voie pour faire signe', 'Se garer sur la bande d\'arrêt d\'urgence, mettre les feux de détresse, gilet jaune, et appeler depuis derrière la glissière', 'Réparer sur la voie de droite', 'Laisser la moto au milieu de la voie'],
    correct: [1],
    explanation: "BAU + warnings + gilet + appel via borne SOS (à environ 2 km) ou 112 — toujours en retrait derrière la glissière."
  },
  {
    id: 'C30', theme: 'C',
    prompt: "En tunnel, en cas de circulation à l'arrêt prolongé :",
    choices: ['Couper le moteur', 'Allumer les feux de détresse et garder ses distances', 'Sortir du véhicule', 'Klaxonner'],
    correct: [1],
    explanation: "Warnings + distance (4 m mini) ; couper le moteur si arrêt prolongé. Ne quitter le véhicule qu'en cas d'incendie/évacuation."
  },
  {
    id: 'C31', theme: 'C',
    prompt: "Les feuilles mortes mouillées sur la chaussée :",
    choices: ['Améliorent l\'adhérence', 'Sont aussi glissantes qu\'une plaque d\'huile', 'Sont sans effet sur une moto', 'Augmentent l\'adhérence'],
    correct: [1],
    explanation: "Adhérence quasi nulle ; éviter freinage et angle dessus. À franchir droit, gaz constant."
  },
  {
    id: 'C32', theme: 'C',
    prompt: "Avant un virage serré à moto, la technique est :",
    choices: ['Freiner au milieu du virage', 'Ralentir avant, regarder loin, accélérer progressivement à la sortie', 'Freiner roue arrière dans le virage', 'Débrayer en plein virage'],
    correct: [1],
    explanation: "Trajectoire de sécurité : ralentir avant, point de corde retardé, regard loin, gaz progressif en sortie."
  },

  // D — autres usagers
  {
    id: 'D08', theme: 'D',
    prompt: "Dans le rétroviseur d'une voiture, la moto :",
    choices: ['Est toujours bien visible', 'Peut disparaître dans l\'angle mort, surtout à l\'arrière 3/4', 'Apparaît plus grande qu\'en réalité', 'Sort du champ uniquement à grande vitesse'],
    correct: [1],
    explanation: "Les angles morts d'une voiture cachent facilement une moto ; il faut éviter de s'y attarder, en particulier sur voies rapides."
  },
  {
    id: 'D09', theme: 'D',
    prompt: "Face à un véhicule qui clignote à gauche, le motard derrière doit :",
    choices: ['Le dépasser à droite rapidement', 'Anticiper son changement de direction et adapter sa vitesse', 'Klaxonner', 'Forcer le passage'],
    correct: [1],
    explanation: "Anticipation : laisser de la marge, ralentir et préparer son propre placement."
  },
  {
    id: 'D10', theme: 'D',
    prompt: "Croiser un poids lourd sur route étroite peut générer :",
    choices: ['Aucun effet', 'Un effet de souffle déstabilisant la moto', 'Une meilleure adhérence', 'Un vent porteur'],
    correct: [1],
    explanation: "L'appel d'air du PL chasse latéralement la moto ; serrer ses bras, regard fixé loin, vitesse modérée."
  },
  {
    id: 'D11', theme: 'D',
    prompt: "À une intersection, le danger principal pour le motard est :",
    choices: ['Le vent', 'Le « refus de priorité » d\'un véhicule qui ne l\'a pas vu', 'L\'éclairage', 'Le bruit du moteur'],
    correct: [1],
    explanation: "Cause n°1 des accidents moto en agglo : voiture qui « n'a pas vu » la moto. Approcher en couverture de freinage, regard et placement actifs."
  },
  {
    id: 'D12', theme: 'D',
    prompt: "Un enfant à proximité de la chaussée :",
    choices: ['Est prévisible', 'Peut surgir sans regarder ; ralentir et prévoir un freinage', 'Reste toujours sur le trottoir', 'N\'est pas concerné par les motos'],
    correct: [1],
    explanation: "Les enfants ne maîtrisent ni la vitesse ni les distances ; ralentissement et couverture de frein impératifs."
  },
  {
    id: 'D13', theme: 'D',
    prompt: "La circulation inter-files (CIF) pour motos en 2026 :",
    choices: ['Est autorisée partout', 'Est autorisée dans certains départements et selon des règles strictes (vitesse, conditions)', 'Est totalement interdite', 'Concerne uniquement Paris'],
    correct: [1],
    explanation: "La CIF est généralisée après expérimentation, sur autoroutes/voies rapides à 2x2 voies en agglomération, avec règles précises (≤ 50 km/h, écart de 30 km/h, etc.)."
  },

  // E — réglementation
  {
    id: 'E06', theme: 'E',
    prompt: "Le défaut de présentation du permis lors d'un contrôle :",
    choices: ['Aucune sanction', 'Amende de 11 €, à régulariser sous 5 jours', 'Délit', 'Confiscation du véhicule'],
    correct: [1],
    explanation: "Forfait 11 € si le permis est valable mais oublié ; à présenter au commissariat sous 5 jours."
  },
  {
    id: 'E07', theme: 'E',
    prompt: "Une moto immatriculée doit présenter une plaque :",
    choices: ['À l\'avant uniquement', 'À l\'arrière, dimensions et police homologuées', 'Sur le casque', 'Aucun panonceau'],
    correct: [1],
    explanation: "Plaque arrière obligatoire au format homologué ; sa modification ou son obstruction = 135 € + retrait de points."
  },
  {
    id: 'E08', theme: 'E',
    prompt: "Lors de l'achat d'une moto d'occasion, le vendeur doit fournir :",
    choices: ['Certificat de cession + carte grise barrée + certificat de situation administrative (non-gage)', 'Un simple mail de confirmation', 'Uniquement la carte grise', 'Aucun document'],
    correct: [0],
    explanation: "Cession Cerfa 15776, carte grise barrée + datée + signée, certificat de non-gage de moins de 15 jours, contrôle technique en vigueur."
  },
  {
    id: 'E09', theme: 'E',
    prompt: "Modifier la moto (échappement, optique) sans homologation :",
    choices: ['Sans risque', 'Peut entraîner immobilisation et non-couverture par l\'assurance', 'Est conseillé', 'N\'est pas réglementé'],
    correct: [1],
    explanation: "Toute modification doit conserver l'homologation. À défaut : amende, immobilisation, et nullité possible de la garantie en cas de sinistre."
  },
  {
    id: 'E10', theme: 'E',
    prompt: "À l'étranger en UE avec sa moto française :",
    choices: ['On ne peut pas rouler', 'Le permis et l\'assurance français sont valables ; vérifier équipements et règles locales', 'Il faut un permis international', 'Le permis est suspendu'],
    correct: [1],
    explanation: "Permis et carte verte d'assurance valables dans l'UE ; certaines règles diffèrent (gilet jaune, éthylotest, vignettes, péages)."
  },

  // F — quitter le véhicule
  {
    id: 'F06', theme: 'F',
    prompt: "Le bloque-disque s'utilise :",
    choices: ['Sur le disque de frein, avec un rappel pour ne pas oublier de le retirer', 'Sur l\'axe de roue avant', 'Sur la chaîne uniquement', 'Sur la jugulaire du casque'],
    correct: [0],
    explanation: "Bloque-disque + cordon coloré pour ne pas oublier qu'il est en place — sinon : chute à la première poussée."
  },
  {
    id: 'F07', theme: 'F',
    prompt: "Stationner moto en zone bleue ou avec horodateur :",
    choices: ['Toujours gratuit', 'Dépend de la commune ; respecter la signalisation locale', 'Réservé aux résidents', 'Interdit'],
    correct: [1],
    explanation: "Les conditions varient : zones bleues, payantes, gratuites motos selon la commune. La signalisation locale prime."
  },
  {
    id: 'F08', theme: 'F',
    prompt: "Garer une moto à proximité d'un passage piéton :",
    choices: ['Toléré à 1 m', 'Interdit dans les 5 m précédant le passage (sens de circulation)', 'Toujours autorisé', 'Réservé aux 50 cm³'],
    correct: [1],
    explanation: "Stationnement et arrêt interdits 5 m avant un passage piéton ; gênante = 135 €, enlèvement possible."
  },
  {
    id: 'F09', theme: 'F',
    prompt: "À l'arrêt, descendre de la moto se fait :",
    choices: ['Par n\'importe quel côté', 'De préférence à gauche, vers le trottoir, après vérification arrière', 'Du côté circulation', 'Par l\'avant'],
    correct: [1],
    explanation: "On descend généralement du côté trottoir, après un coup d'œil arrière, pour éviter d'être heurté par un véhicule survenant."
  },
  {
    id: 'F10', theme: 'F',
    prompt: "Couper le coupe-circuit (kill switch) avant le contact :",
    choices: ['Endommage le moteur', 'Évite que la moto démarre par inadvertance — bonne habitude au stationnement', 'Décharge la batterie', 'N\'a aucun effet'],
    correct: [1],
    explanation: "Le coupe-circuit isole l'allumage ; bonne habitude sécurité quand la moto est laissée seule un instant."
  },

  // G — mécanique
  {
    id: 'G09', theme: 'G',
    prompt: "Un voyant rouge moteur (« check engine » rouge ou pression d'huile) impose :",
    choices: ['De continuer normalement', 'Arrêt rapide en sécurité et vérification (huile, refroidissement)', 'D\'accélérer pour purger', 'De couper l\'éclairage'],
    correct: [1],
    explanation: "Voyants rouges = sécurité moteur (huile, température, freinage). Continuer = casse moteur ou panne dangereuse."
  },
  {
    id: 'G10', theme: 'G',
    prompt: "Un pneu surgonflé entraîne :",
    choices: ['Une meilleure tenue de route', 'Une zone de contact réduite, donc moins d\'adhérence et usure centrale', 'Une consommation accrue', 'Aucun effet'],
    correct: [1],
    explanation: "Sur-gonflage : empreinte au sol moindre, adhérence dégradée, usure prématurée du centre de la bande de roulement."
  },
  {
    id: 'G11', theme: 'G',
    prompt: "Les feux stop de la moto s'allument :",
    choices: ['Uniquement avec le frein avant', 'Uniquement avec le frein arrière', 'Avec l\'un ou l\'autre des freins', 'Avec le klaxon'],
    correct: [2],
    explanation: "Frein avant et frein arrière doivent tous deux activer le feu stop ; à contrôler régulièrement."
  },
  {
    id: 'G12', theme: 'G',
    prompt: "L'usure dissymétrique d'un pneu peut signaler :",
    choices: ['Un défaut de pression ou un parallélisme/équilibrage anormal', 'Une excellente conduite', 'Une économie de carburant', 'Un défaut de freins'],
    correct: [0],
    explanation: "Usure d'un côté : pression mal réglée, train défectueux, ou conduite très orientée d'un côté (circuit). Faire vérifier."
  },
  {
    id: 'G13', theme: 'G',
    prompt: "Un éclairage défaillant à moto :",
    choices: ['Est tolérable la nuit', 'Réduit gravement la visibilité et l\'identification — réparation immédiate', 'N\'affecte que les voitures', 'Améliore la sécurité'],
    correct: [1],
    explanation: "Phare/feu stop/clignotants défaillants = moto difficile à voir et signaler ; risque d'amende et accident."
  },
  {
    id: 'G14', theme: 'G',
    prompt: "Le moteur peine à démarrer par grand froid :",
    choices: ['Casse moteur immédiate', 'Batterie peut être faible, huile plus visqueuse — patience et utilisation du starter/mode froid', 'Toujours un problème d\'allumage', 'Rien à faire'],
    correct: [1],
    explanation: "Froid = huile épaissie, batterie affaiblie. Préchauffe brève, démarrages courts. Si problème persiste : batterie à contrôler."
  },
  {
    id: 'G15', theme: 'G',
    prompt: "Une chaîne lâche peut :",
    choices: ['Améliorer l\'accélération', 'Sauter de la couronne et bloquer la roue arrière', 'Réduire la consommation', 'Aucun effet'],
    correct: [1],
    explanation: "Chaîne mal tendue : risque de saut sur couronne, blocage roue, chute. Tension à contrôler tous les 1 000 km environ."
  },
  {
    id: 'G16', theme: 'G',
    prompt: "Le frein moteur sur une moto :",
    choices: ['Est inexistant', 'Aide à ralentir en rétrogradant — à doser pour ne pas bloquer l\'arrière sur sol glissant', 'Remplace toujours les freins', 'Augmente la vitesse'],
    correct: [1],
    explanation: "Rétrograder de manière progressive en accompagnant à l'embrayage ; un frein moteur trop brutal peut bloquer la roue arrière."
  },

  // H — équipements
  {
    id: 'H08', theme: 'H',
    prompt: "Un casque tombé d'une hauteur de 1 mètre sans choc visible :",
    choices: ['Reste sûr', 'Peut être endommagé en interne — vérification, voire remplacement conseillé', 'Devient plus solide', 'Aucun risque'],
    correct: [1],
    explanation: "La calotte interne (polystyrène) peut être affaissée sans signe externe. Au moindre choc significatif, remplacer."
  },
  {
    id: 'H09', theme: 'H',
    prompt: "La durée de vie indicative d'un casque moto est :",
    choices: ['2 ans', '5 ans', '15 ans', 'À vie'],
    correct: [1],
    explanation: "~5 ans selon les fabricants : mousse et matériaux vieillissent. Après chute = remplacement immédiat."
  },
  {
    id: 'H10', theme: 'H',
    prompt: "Un pantalon moto avec coques homologuées CE protège principalement :",
    choices: ['Les bras', 'Les genoux et hanches', 'Le casque', 'Les pieds'],
    correct: [1],
    explanation: "Protections aux genoux et hanches (niveau 1 ou 2 selon normes EN 1621-1) + tissus résistants à l'abrasion."
  },
  {
    id: 'H11', theme: 'H',
    prompt: "Un airbag moto (gilet/blouson) :",
    choices: ['Inutile sur route', 'Réduit fortement les blessures au thorax et au cou en cas de chute', 'Remplace le casque', 'N\'existe pas'],
    correct: [1],
    explanation: "Airbag mécanique ou électronique : forte réduction des lésions thoraciques, cervicales, claviculaires."
  },
  {
    id: 'H12', theme: 'H',
    prompt: "Des chaussures de ville en moto :",
    choices: ['Suffisent largement', 'Ne protègent pas la cheville en chute (entorse, écrasement)', 'Sont obligatoires', 'Améliorent l\'adhérence sur les commandes'],
    correct: [1],
    explanation: "Une chaussure montante avec renforts chevilles et anti-écrasement est indispensable. Tongs/sandales = très dangereux."
  },
  {
    id: 'H13', theme: 'H',
    prompt: "La visière du casque par temps de pluie :",
    choices: ['Doit être fermée et traitée anti-buée/anti-pluie', 'Doit être ouverte pour mieux voir', 'Doit être retirée', 'Sans importance'],
    correct: [0],
    explanation: "Visière fermée, traitement Pinlock® ou produit anti-buée, et gestes simples pour évacuer l'eau (mouvement de tête, raclette gantée)."
  },
  {
    id: 'H14', theme: 'H',
    prompt: "Le passager à moto doit porter :",
    choices: ['Casque seul', 'Casque + gants homologués CE au minimum', 'Aucun équipement obligatoire', 'Lunettes de soleil'],
    correct: [1],
    explanation: "Mêmes obligations que le conducteur : casque homologué attaché + gants CE. Tenue complète vivement recommandée."
  },

  // I — environnement / conduite
  {
    id: 'I06', theme: 'I',
    prompt: "Couper le moteur à un arrêt prolongé :",
    choices: ['Use le démarreur sans bénéfice', 'Économise du carburant et réduit la pollution dès ~30 secondes d\'arrêt', 'Endommage la batterie', 'Aucun effet'],
    correct: [1],
    explanation: "L'éco-conduite préconise de couper le moteur à partir d'environ 20–30 secondes d'arrêt."
  },
  {
    id: 'I07', theme: 'I',
    prompt: "L'entretien régulier de la moto (filtre à air, bougies, pneus) :",
    choices: ['Ne change rien', 'Réduit consommation et émissions, prolonge la vie du moteur', 'Augmente les émissions', 'Est facultatif'],
    correct: [1],
    explanation: "Filtre air bouché ou bougies usées = mélange dégradé, consommation +, émissions +. Suivre le carnet d'entretien."
  },
  {
    id: 'I08', theme: 'I',
    prompt: "Le bruit cumulé des motos en ville :",
    choices: ['N\'a aucun impact', 'Constitue une nuisance pouvant entraîner contrôles renforcés et amendes (radar sonore)', 'Améliore la cohésion sociale', 'Est obligatoire'],
    correct: [1],
    explanation: "Des radars sonores (Hydre, Méduse) sont déployés ; au-delà du seuil : amende. Échappement homologué et conduite calme conseillés."
  },
  {
    id: 'I09', theme: 'I',
    prompt: "L'éco-conduite gagne :",
    choices: ['~50 % de carburant', '~10 à 20 % de carburant et émissions', 'Aucune économie', 'Plus de bruit'],
    correct: [1],
    explanation: "Anticiper, rouler souple, régime modéré, vitesse stabilisée : gain courant de 10 à 20 % de consommation."
  },
  {
    id: 'I10', theme: 'I',
    prompt: "Une vignette Crit'Air est :",
    choices: ['Optionnelle partout', 'Obligatoire pour circuler en ZFE et lors des pics de pollution', 'Réservée aux poids lourds', 'Pour les voitures uniquement'],
    correct: [1],
    explanation: "Vignette à apposer sur la fourche/garde-boue ; sans Crit'Air en ZFE = 68 €. Commande sur le site officiel certificat-air.gouv.fr."
  },

  // Mix bonus
  {
    id: 'A16', theme: 'A',
    prompt: "Conduire sous l'emprise simultanée d'alcool et de stupéfiants :",
    choices: ['Cumul de sanctions, peines aggravées', 'Sanction simple', 'Aucune sanction supplémentaire', 'Suspension de 3 jours seulement'],
    correct: [0],
    explanation: "Cumul alcool + stupéfiants : peines aggravées (jusqu'à 3 ans de prison, 9 000 €), suspension/annulation, confiscation."
  },
  {
    id: 'C33', theme: 'C', sign: 'travaux',
    prompt: "Ce panneau « travaux » impose :",
    choices: ['Une accélération', 'Une réduction de vitesse et vigilance (gravillons, hommes en jaune)', 'Un demi-tour', 'Aucune réaction'],
    correct: [1],
    explanation: "Zones de travaux : gravillons, ralentisseurs, signaleurs, machines. Ralentir, écarter sa trajectoire."
  },
  {
    id: 'D14', theme: 'D',
    prompt: "Un cycliste roule sur la chaussée à 25 km/h, vous êtes derrière en moto :",
    choices: ['Klaxonner sans cesse', 'Le dépasser avec 1 m de marge en agglo, 1,5 m hors agglo, sur ligne discontinue ou continue franchissable si visibilité', 'Le bousculer', 'Le suivre sans dépasser'],
    correct: [1],
    explanation: "Le dépassement d'un cycliste autorise le chevauchement d'une ligne continue si la visibilité le permet ; respect strict des marges latérales."
  },
  {
    id: 'G17', theme: 'G',
    prompt: "Les contrôles essentiels avant de partir (« BAC ») :",
    choices: ['Bagage, Argent, Casque', 'Bougies, Allumage, Câbles', 'Freins, pneus, niveaux et éclairages', 'Aucun contrôle requis'],
    correct: [2],
    explanation: "Faire un tour avant de partir : pneus (pression, état), freins (commandes et liquide), niveaux (huile, refroidissement), éclairages/clignotants/stop."
  },
  {
    id: 'H15', theme: 'H',
    prompt: "Une visière fumée la nuit :",
    choices: ['Améliore la vision', 'Est interdite et dangereuse — visière claire la nuit', 'Sans effet', 'Obligatoire'],
    correct: [1],
    explanation: "Visière homologuée seulement ; classe optique ≤ 2 ; visière fumée la nuit est interdite et très dangereuse."
  },
  {
    id: 'I11', theme: 'I',
    prompt: "Couper trop brusquement les gaz à régime élevé peut :",
    choices: ['Économiser du carburant', 'Provoquer un blocage de roue arrière sur sol glissant', 'Améliorer l\'adhérence', 'Aucun effet'],
    correct: [1],
    explanation: "Décélération brusque + sol glissant = frein moteur peut bloquer la roue arrière. Dégager doucement les gaz, ou tirer légèrement l'embrayage."
  },
  {
    id: 'E11', theme: 'E',
    prompt: "Le numéro d'urgence européen unique est :",
    choices: ['15', '17', '18', '112'],
    correct: [3],
    explanation: "Le 112 fonctionne dans toute l'UE, gratuit même sans crédit et sans réseau de votre opérateur. SAMU 15, Police 17, Pompiers 18."
  },
  {
    id: 'B14', theme: 'B',
    prompt: "Avant un long trajet moto :",
    choices: ['Sauter le repas', 'Dormir suffisamment, s\'hydrater, éviter alcool', 'Boire du café fort uniquement', 'Rouler de nuit pour le calme'],
    correct: [1],
    explanation: "Sommeil, hydratation, repas léger ; éviter alcool/médicaments incompatibles ; pauses planifiées toutes les 2 h."
  }
];
