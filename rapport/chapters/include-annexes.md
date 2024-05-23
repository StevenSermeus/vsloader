\newpage

# Annexes

## Comparaison Remote Development et Code serveur web

\label{appendix:comparaison}

### Environnement de comparaison

La comparaison a été effectuée sur une machine virtuelle Debian 12. Une snapshot de celle-ci a été prise avant chaque installation. Les tests ont été effectués sur un réseau local.

### Installation

#### Remote Development

Avant de lancer l'installation, voici le contenu du dossier home de l'utilisateur :

```bash
$ ls -a
game@debian:~$ ls -la
total 36
drwx------ 4 game game 4096 Apr  8 11:28 .
drwxr-xr-x 3 root root 4096 Nov 15 15:55 ..
-rw------- 1 game game 2332 Apr  8 11:26 .bash_history
-rw-r--r-- 1 game game  220 Nov 15 15:55 .bash_logout
-rw-r--r-- 1 game game 3789 Apr  8 11:24 .bashrc
drwxr-xr-x 3 game game 4096 Nov 15 16:14 .cache
-rw------- 1 game game   20 Apr  8 09:32 .lesshst
drwxr-xr-x 3 game game 4096 Nov 15 15:58 .local
-rw-r--r-- 1 game game  807 Nov 15 15:55 .profile
-rw-r--r-- 1 game game    0 Nov 15 15:58 .sudo_as_admin_successful
```

Pour installer Remote Development, il suffit de télécharger l'extension sur vscode et de créer une connexion SSH vers la machine distante via l'extension. Une fois la connexion établie, l'extension installe les dépendances nécessaires sur la machine distante. Voici le contenu du dossier home de l'utilisateur après l'installation :

```bash
$ ls -a
total 44
drwx------ 5 game game 4096 Apr  8 11:31 .
drwxr-xr-x 3 root root 4096 Nov 15 15:55 ..
-rw------- 1 game game 2332 Apr  8 11:26 .bash_history
-rw-r--r-- 1 game game  220 Nov 15 15:55 .bash_logout
-rw-r--r-- 1 game game 3789 Apr  8 11:24 .bashrc
drwxr-xr-x 3 game game 4096 Nov 15 16:14 .cache
-rw------- 1 game game   20 Apr  8 09:32 .lesshst
drwxr-xr-x 3 game game 4096 Nov 15 15:58 .local
-rw-r--r-- 1 game game  807 Nov 15 15:55 .profile
-rw-r--r-- 1 game game    0 Nov 15 15:58 .sudo_as_admin_successful
drwxr-xr-x 5 game game 4096 Apr  8 11:31 .vscode-server
-rw-r--r-- 1 game game  183 Apr  8 11:31 .wget-hsts
```

L'installation de Remote Development ne modifie pas le dossier home de l'utilisateur. Elle crée un dossier .vscode-server dans le dossier home de l'utilisateur. Ce dossier contient les fichiers nécessaires pour l'extension.

#### Code serveur web

Pour l'installation, un script est fourni par le site officiel, celui-ci propose 2 méthodes d'installation. La première méthode est l'installation via le package manager de la distribution. La deuxième méthode est dite standalone qui va directement télécharger une release de code serveur web depuis GitHub. La méthode standalone a été utilisée pour cette comparaison, car elle ne demande pas d'accès super utilisateur contrairement à la première méthode. Ce qui se rapproche le plus de l'installation de Remote Development.

Installation de code serveur web :

```bash
ssh user@remote
curl -fsSL https://code-server.dev/install.sh | sh -s -- --method standalone
# Extend your path to use code-server:
#   PATH="$HOME/.local/bin:$PATH"
# Then run with:
#   code-server
```

L'installation de l'exécutable se fait dans le dossier `~/.local/bin/`.

### Fonctionnement

Il est très difficilement possible de comprendre le fonctionnement de Remote Development. En effet, l'extension se charge de tout. De plus, les communications entre le client et le serveur se font via SSH et malheureusement cette partie de vscode n'est pas open source. Il est donc impossible de comprendre comment fonctionne l’exact de l'extension. La documentation de l'extension est la seule source d'information sur le fonctionnement de celle-ci.Néanmoins, dans un article posté sur le site officiel de Visual Studio Code, on peut lire:

> We now provide a standalone "VS Code Server," which is a service built off the same underlying server used by the remote extensions, plus some additional functionality, like an interactive CLI and facilitating secure connections to vscode.dev.

Il est donc possible de comprendre que l'extension Remote Development utilise le même serveur que le code serveur web. De plus, leur CLI (Interface en ligne de commande) est similaire et permet de faire les mêmes actions. Par conséquent, le fonctionnement de code serveur web est relativement similaire à celui de l'extension utilisée par les étudiants.

### Conclusion

En conclusion, dans le cadre de ce projet, l'utilisation de Visual Studio Code serveur (Web) est le plus adapté. En effet, l'installation est simple, et automatisable. De plus, il est possible de prendre le contrôle programmatiquement d'un navigateur web pour simuler le comportement d'un étudiant ce qui n'est pas possible avec l'application de bureau de Visual Studio Code.
