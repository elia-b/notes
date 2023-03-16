FROM ubuntu:22.04

WORKDIR /jekyll

RUN apt-get update &&\
    apt-get install -y ruby-full build-essential zlib1g-dev 

RUN export GEM_HOME="$HOME/gems" &&\
    export PATH="$HOME/gems/bin:$PATH"

RUN gem install jekyll bundler

EXPOSE 4000

COPY . /jekyll

RUN jekyll clean && jekyll build --source . --destination ./_site

ENTRYPOINT jekyll serve --host 0.0.0.0