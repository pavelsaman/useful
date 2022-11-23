SHELL := bash

.PHONE: format test clear-cache

format:
	@npm run format

lint:
	@npm run lint

test: format lint
	@npm run test

clear-cache:
	@rm .eslintcache
