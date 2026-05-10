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
  }
];
