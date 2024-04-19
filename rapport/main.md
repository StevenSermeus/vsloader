---
title: "Outil de simulation de charge et de monitoring du cluster Big Data du MASI"
author: Sermeus Steven
academicyear: 2023-2024
category: MASI
fontsize: 11pt
titlepage: true
code-block-font-size: \large
default-language: python
minted:
  block_attributes:
    - linenos
    - style=rainbow_dash
    - frame=lines
    - framesep=1pt
    - bgcolor=solbg
    - breaklines=true
  default_block_language: python
  default_inline_language: python
header-includes:
  - \usepackage{fontawesome5}
  - \usepackage[outputdir=.minted_output]{minted}
  - \definecolor{solbg}{HTML}{efece2}
  - \setmintedinline{bgcolor={}}
  - \usepackage{tikz}
  - \usetikzlibrary{arrows,calc,shapes,automata,backgrounds,petri,fit,mindmap,decorations.pathmorphing,patterns,intersections,trees,positioning}
  - "\\makeatletter"
  - "\\let\\listoflistings\\@undefined"
  - "\\makeatother"
babel-lang: french
---

\faIcon{yen-sign}

!include chapters/include-table-of-content.md

\newpage

!include chapters/include-abstract.md

!include chapters/include-glossaire.md

!include chapters/include-introduction.md

!include chapters/include-etat-de-lart.md

!include chapters/include-solution.md

!include chapters/include-table-of-figures.md

!include chapters/include-annexes.md

!include chapters/include-bibliography.md

```plantuml
@startuml "Component"


package VsBuilder{
  "File System" - [Python]
  [Python] -> "Json"
}



package VsLoader{
  "Json" --> [Runner]
  [Browser]
  [Runner]
  Runner -> Browser : Manipulate
}


component Server{
  [CLI] --> [Code Binary] : Install
  portin 22
  portout 8080
}

22 -> CLI

Runner --> 22: ssh Install
Browser --> 8080: Code web
8080 --> [Code Binary]

note left of 8080
  Openned port by CLI
end note

note left of Json
  Configurations file
end note

@enduml
```
