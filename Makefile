main:
	echo 'Hi'

commit-push:
	-git commit -am 'Update'
	-git push origin develop

generate:
	-gitbook build
	-cp CNAME _book/
	-cp favicon.ico _book/gitbook/images/

deploy: generate
	-git checkout gh-pages && cp -r _book/* ./ && git add -A && git commit -m 'Site build' && git push -f origin gh-pages && git checkout develop
	-git checkout develop

dev: 
	gitbook serve --watch

.PHONY: main commit-push deploy generate dev 
