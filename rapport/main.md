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
