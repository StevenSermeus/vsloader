\newpage

# Annexes

## RPA

Le RPA ou Robot Process Automation est une technologie qui permet d'automatiser des tâches répétitives. Celle-ci est utilisée dans de nombreux domaines. Dans le cadre de ce projet sont utilisation aurait pu se justifier. En effet, n'éffectuant pas un simple test de charge sur les serveurs. Mais voulant simuler le comportement d'étudiant son utilisation a semblé être une solution intéressante pour cette fonctionnalité. Néanmoins, cette solution n'est pas optimale pour la résolution de la problématique posée. Il serait néccésaire d'avoir autant de machine virtuelle ou physique que d'étudiant que l'on souhaite simuler. De plus, il faudrait que chaque machine soit configurée de manière identique pour que le comportement soit le même. En somme, cette solution est très couteuse en temps et en ressource. Il était donc nécessaire de trouver une solution plus adaptée à la problématique posée.

## Comparaison Remote Development et Coder server web

### Environement de comparaison

La comparaison a été effectuée sur une machine virtuelle Debian 12. Une snapshot de celle-ci a été prise avant chaque installation. Les tests ont été effectués sur un réseau local.

### Installation

#### Remote Development

Avant de lancer l'installation voici le contenu du dossier home de l'utilisateur :

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

Pour installer Remote Development, il suffit de télécharger l'extension sur vscode et de créer une connection ssh vers la machine distante via l'extension. Une fois la connection établie, l'extension installe les dépendances nécessaires sur la machine distante. Voici le contenu du dossier home de l'utilisateur après l'installation :

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

#### Code server web

Pour l'installation un script est fourni par le site officiel, celui-ci propose 2 méthodes d'installation. La première méthode est l'installation via le package manager de la distribution. La deuxième méthode est dites standalone qui va directement télécharger une release de code server web depuis github. La méthode standalone a été utilisée pour cette comparaison car elle ne demande pas d'accès super utilisateur contrairement à la première méthode. Ce qui se rapproche le plus de l'installation de Remote Development.

Installation de code server web :

```{bash caption="Test caption"}
ssh user@remote
curl -fsSL https://code-server.dev/install.sh | sh -s -- --method standalone
# Extend your path to use code-server:
#   PATH="$HOME/.local/bin:$PATH"
# Then run with:
#   code-server
```

L'installation de l'éxécutable se fait dans le dossier `~/.local/bin/`.

### Fonctionnement

Il est très difficilement possible de comprendre le fonctionnement de Remote Development. En effet, l'extension se charge de tout. De plus, les communication entre le client et le serveur se font via ssh et malheursement cette partie de vscode n'est pas open source. Il est donc impossible de comprendre comment fonctionne exact de l'extension. La documentation de l'extension est la seule source d'information sur le fonctionnement de celle-ci.Néamoins, dans un article posté sur le site officiel de Visual Studio Code, on peut lire:

> We now provide a standalone "VS Code Server," which is a service built off the same underlying server used by the remote extensions, plus some additional functionality, like an interactive CLI and facilitating secure connections to vscode.dev.

Il est donc possible de comprendre que l'extension Remote Development utilise le même serveur que code server web. De plus, leur CLI(Interface en ligne de commande) est similaire et permet de faire les mêmes actions. Par conséquent, le fonctionnement de code server web est relativement similaire à celui de l'extension utilisé par les étudiants.

### Conclusion

En conclusion, dans le cadre de ce projet, l'utilisation de Visual Studio Code server (Web) est le plus adapté. En effet, l'installation est simple, et automatisable. De plus, il est possible de prendre controle programatiquement d'un navigateur web pour simuler le comportement d'un étudiant ce qui n'est pas possible avec l'application de bureau de Visual Studio Code.

## Log vs code non suffisante pour imiter le comportement d'un étudiant

## Docker vs Install normal

Reproductibilité sur n'importe quel machine
