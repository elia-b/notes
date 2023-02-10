hello: 
	echo "My Site Makefile"
build: 
	docker build -t "my-notes-site" .
run: 
	docker run -it --rm -p 4000:4000 my-notes-site 
br:
	docker build -t "my-notes-site" .
	docker run -it --rm -p 4000:4000 my-notes-site 