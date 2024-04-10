Le cluster toujours up c'est les vm qui ont crash

# Le décor

La naissance -> avant covid -> ressource pour hadoop big data -> monté sur 5 machines physiques dell comme on a -> machine sur dimensionné vs load -> rassemblé tout sur une car trop gros et élec ça coûte cher -> 1 seule machine -> proxmox et virtualisation des nodes -> Tenu pendant 3/4 ans -> First fine -> second adaptation disque size de 50 à 100G -> Déménagement -> sur base de l'an passé ils ont refait la même -> 4/5 étudiants près sur l'utilisation -> le football il a changé -> le serveur n'a pas crash et proxmox non plus -> les vm ont crash -> proxmox n'est pas prévisions et donc pas de up scaling -> idée savoir cb utilisateur = cb de ressources -> ram cpu espace disque. Avant l'examen les vms ont bougé d'une logique vers une physique avec 1 TO de mémoire la master 1 est resté en logique et restait accesible -> même partition que proxmox. Serveur physique dell D440 -> 32•GO cpu fine askip -> 446GO partition primaire -> 1,82 TO en partition secondaire. Raid 0 pour principale et RAID 1 pour la secondaire. Disque SAS 160. Réseaux 1 carte Gigabit et même vlan que le local du 516 pas de full sécure car juste pour étudiant et pas de données de ouf. Même règle d'accès que nous. IP fix. Machine physique ip fix et machine vm en réseau local. Routage et dnat sur proxmox ip forward. Règle firwall uniquement à marche covid accès externe ip public en tête et les ports ouverts étaient -> ip de base 10.113.51.X:2002 et publique 2002 2003 2004 2005 via l'address publique deux nat firwall vers proxmox vers ip local. port applicatif de hadoop open autorisé en interne local mais pas depuis la class pour les ports hadoop applicatif. Bridge virtual switch proxmox.

# Questionner sur le rôle précis qu'il joue au niveau du cluster hadoop !

Système proxmox -> phillou applicatif mise en plase de hadoop

Gestion réseaux et proxmox et vm -> livraison des vm vierges

# Pourquoi exécuter le cluster hadoop sur des machines centos 7.9 2009 ?

Parcque à l'époque c'était une des dernières versions stable à la création du cluster. On aurait pu avoir plus récent mais pas version officiel de la distribution car pas sur de stable -> il y a 6 ans. Stable tourne pas de préocupation. Demande de phillou pour centos.

# Quelle version de hadoop est utilisée ?

# Qu'est ce qui est mis en place actuellement au niveau du cluster ? Comment est il déployé, géré, plan de recouvrement, gestion des pannes et des erreurs, load balancing ?

Nada -> marchal quand il oublie pas ouvre la fenêtre et look en live car pas prévu que ça foire. Le dimensionement était fait avec la pop de l'école et en 3/4 pop à doublé à l'époque ça justifiait pas de faire des trucs comme ça. Mnt ça devient important car plus de gens le use et on commence à voir les limites l'anpassé c'était déjà limite mais la cata network trafic c'est good mais système affectation ça à chier.

# Demander si le cluster hadoop est le seul service qui s'exécute qur l'instance du proxmox !

# Même question au niverau de l'hyperviseur promox ! Qu'est ce qui est mis en place pour le monitorer ? De quelle manière est surveillé le cluster au sein de l'environnement virtuel ? Si une panne survient comment est-elle gérée : en fonction de se type (réseau, ressources, applicatif, ...) ?

NADA -> proxmox de base les graphs

# Appuyer la volonté de récupérer absolument un réplica exacte de la configuration du cluster hadoop.

Peut pas give la config juste des bribes de config de routage virtual switch ect port nat config pas le time de refaire un clone ni doublons de la machines. Mais pas de haddoop on et machine physique dispo et machine physique dispo pour antho ou une autre pour faire un doublon du proxmox. Port foward avec lui et la ligne à add lui envoyé pour rules le consulté et qu'il soit au courant.

# Demander si il est possible de récupérer une carte de santée (logs utiles, rapport de monitoring, scripts de déploiement, procédure de configuration, plan de recouvrement, ...) du cluster hadoop depuis le début de son déploiement (pour l'année en cours).

Maybe sur les logs vm et check les logs systèmes des centos. Logs proxmox logs ressouces mémoire provisioning. L'accès à la proxmox c'est ok maybe -> accès full admin et pas foutre la merde.

# RPA

## Robot corp

Only windows si on veut une window

## Botcity

Sketchy at best leur installeur est d'un Unknown Publisher xd

## UiPath

Windows c'est cool microsoft

## Redwood

Enterprise life

## Automation Anywhere

Enterprise life

## Pega

Enterprise life

En gros fit pas car output pas bon xml ou json de déplacement de fichier. Log dans vs code direct et
reproduction.

# Note réunion

-> Result base et le pk en annexes donc la réflexion sur le pk en annexes

Réflexion rpa -> dans annexe

Vérifié le même protocole de requête pour les deux solution http ou ssh. Si http check même request ?

User pas obligé de simuler mais de faire mais faire un outils customizable

Test de charge:

- Cherhcer ségrégation personna
-
