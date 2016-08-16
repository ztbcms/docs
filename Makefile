main:
	echo 'Hi'

deploy:
	-gitbook build
	-git checkout gh-pages && -cp -r _book/* ./ && -git add -A && -git commit -m 'Update' && -git push origin gh-pages && -git checkout develop

.PHONY: main deploy
