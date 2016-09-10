main:
	echo 'Hi'

commit-push:
	-git commit -am 'Update'
	-git push origin develop


deploy:
	-gitbook build
	-cp CNAME _book/
	-cp favicon.ico _book/
	-git checkout gh-pages && cp -r _book/* ./ && git add -A && git commit -m 'Site build' && git push -f origin gh-pages && git checkout develop
	-git checkout develop

.PHONY: main deploy
