FROM --platform=linux/amd64 alpine:3.19.0

RUN apk update && apk upgrade

RUN apk add --no-cache \
    bash \
    curl \
    git \
    openssh-client \
    openssl \
    py3-pip \
    python3 \
    sshpass \
    tar \
    unzip \
    wget \
    zsh \
    vim \
    nano

RUN apk add ansible

# Prometheus collection installation
RUN ansible-galaxy collection install prometheus.prometheus

RUN ansible-galaxy collection install community.grafana

RUN git clone https://github.com/nojanath/ansible-zsh-completion.git /tmp/ansible-zsh-completion

RUN touch ~/.zshrc

RUN echo "HISTFILE='/tmp/.zsh_history'" >> ~/.zshrc

RUN echo "HISTSIZE=10000" >> ~/.zshrc

RUN echo "SAVEHIST=10000" >> ~/.zshrc

RUN echo "autoload -U compinit && compinit" >> ~/.zshrc

RUN echo "fpath=(/tmp/ansible-zsh-completion \$fpath)" >> ~/.zshrc

WORKDIR /ansible

ENTRYPOINT [ "/bin/zsh" ]
