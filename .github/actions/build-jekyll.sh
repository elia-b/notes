apt-get update 
apt-get install -y ruby-full build-essential zlib1g-dev 

export GEM_HOME="$HOME/gems" 
xport PATH="$HOME/gems/bin:$PATH"

RUN gem install jekyll bundler

jekyll build --source . --destination ./_site