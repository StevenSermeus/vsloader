# Introduction

## Contexte et Problématique

Dans le cadre du développement d'applications Big Data, les performances et la disponibilité des ressources sont des enjeux majeurs. Le cluster Big Data du MASI, utilisé dans le cadre du cours AI145BB, a rencontré des problèmes de performance et de disponibilité des ressources lors de son utilisation par les étudiants. Ces problèmes ont mis en évidence la nécessité d’un outil capable de simuler la charge réelle d’une classe d’étudiants et de monitorer les ressources du cluster de manière efficace. Le monitoring limité existant n'a pas permis de prévenir ces problèmes ni de déterminer leurs causes. Par conséquent, il est impératif de mettre en place une solution robuste de simulation de charge et de monitoring pour optimiser l'usage et la répartition des ressources au sein du cluster.

## Objectifs du travail

L'objectif principal de ce travailest de développer et de déployer un outil de simulation de charge et de monitoring pour le cluster Big Data du MASI. Plus spécifiquement, les objectifs sont les suivants :

Simuler la charge réelle des étudiants : Créer un outil capable de simuler de manière réaliste l'utilisation du cluster par les étudiants, en tenant compte de l'utilisation d'éditeurs de code à distance tels que Visual Studio Code et les outils JetBrains.

Mettre en place un système de monitoring efficace : Déployer un système de monitoring capable de fournir une vue d'ensemble détaillée des ressources utilisées par le cluster, incluant les machines virtuelles, les systèmes d'exploitation, et les applications.

\newpage

## Méthodologie

Pour atteindre ces objectifs, une méthodologie en plusieurs étapes sera adoptée :

Analyse de l'état de l'art : Étudier les technologies et outils existants pour la virtualisation, le traitement des données massives, et le monitoring des ressources. Cela inclut l'étude de Proxmox, Hadoop, Visual Studio Code, et les outils JetBrains.

Développement d'un outil de simulation de charge : Concevoir et développer un outil permettant de simuler la charge d'une classe d'étudiants utilisant des éditeurs de code à distance. Cet outil devra être capable de reproduire fidèlement les actions des étudiants et de générer une charge réaliste sur le cluster.

Mise en place d'un système de monitoring : Déployer des solutions de monitoring telles que Prometheus et Grafana pour surveiller en temps réel les ressources du cluster.

Validation et amélioration : Tester la solution de simulation de charge et de monitoring dans un environnement réel, identifier les points de blocage, et apporter les améliorations nécessaires pour garantir une performance optimale.

## Contributions et Originalité

Ce travail contribue à l’amélioration de la gestion des ressources dans les environnements de développement Big Data en milieu académique. La solution proposée se distingue par son approche réaliste de la simulation de charge, reproduisant fidèlement l'utilisation des outils de développement à distance par les étudiants. De plus, l'intégration d'un système de monitoring avancé permet une gestion proactive des ressources, réduisant ainsi les risques de problèmes de performance et améliorant l'expérience utilisateur.
