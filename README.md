docker run --rm --volume "$(pwd)":/data --platform linux/amd64 mfreeze/pandoc-iesn:mermaid-latest-ubuntu -p xelatex -m -l -M -e -N -c -I -T -s IEEE.csl pdf main.md
