main:
	echo 'Hi'

deploy:
	-gitbook build
	-cp CNAME _book/
	-git checkout gh-pages && cp -r _book/* ./ && git add -A && git commit -m 'Update' && git push origin gh-pages && git checkout develop
	-git checkout develop

.PHONY: main deploy
