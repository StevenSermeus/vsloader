# Ansible for monitoring infrastructure

## Description

This folder contains the Ansible playbook to install and configure the monitoring infrastructure. The monitoring infrastructure is composed of the following components:

- Prometheus
- Grafana
- Node Exporter
- PVE Exporter

## Requirements

Docker or ansible installed on the running machine.

## Usage

### Docker

Using Docker is simpler and doesn't require any installation of dependencies on the host machine.

To run the monitoring infrastructure using Docker, execute the following command:

```bash
docker compose run --rm ansible
```

This command will run the Ansible container to run the playbook follow the instructions in the next section. The required collections are already installed in the container.

### Ansible

If you aren't using the container, you need to install the required collections:

```bash
ansible-galaxy collection install prometheus.prometheus

ansible-galaxy collection install community.grafana
```

To run the monitoring infrastructure using Ansible, execute the following command:

```bash
ansible-playbook ...
```

## Configuration

The monitoring infrastructure can be configured by changing the variables in the `group_vars/all.yml` file.
