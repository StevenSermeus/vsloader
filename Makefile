run:
	- poetry run python src/main.py

test:
	- poetry run pytest

pre-commit:
	- poetry run pre-commit run --all-files

pre-commit-install:
	- poetry run pre-commit install
