sudo apt-get update 
sudo apt-get install -y ruby-full build-essential zlib1g-dev 

export GEM_HOME="$HOME/gems" 
export PATH="$HOME/gems/bin:$PATH"

gem install jekyll bundler

jekyll build --source . --destination ./_site