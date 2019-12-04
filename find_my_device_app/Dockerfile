FROM httpd:2.4

RUN apt-get update
RUN apt-get -y install curl
# RUN curl -sL https://deb.nodesource.com/setup_12.x | -E bash -
# RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
# RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update
RUN apt-get install -y git-core zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev nodejs yarn
#RUN Y

# RUN cd
# RUN git clone https://github.com/rbenv/rbenv.git ~/.rbenv
# RUN echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
# RUN echo 'eval "$(rbenv init -)"' >> ~/.bashrc
# RUN exec $SHELL

# RUN git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
# RUN echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
# RUN exec $SHELL

# RUN rbenv install 2.6.5
# RUN rbenv global 2.6.5

# Install Ruby
RUN apt-get update && apt-get install -y ruby ruby-dev ruby-bundler
RUN rm -rf /var/lib/apt/lists/*
RUN echo $(ruby -v)

# Install Rails
RUN gem update --system
RUN gem install bundler
RUN gem install rails
RUN echo $(rails -v)

# # Bundler
# RUN gem install bundler

# # Rails
# RUN gem install rails -v 6.0.0
# RUN rbenv rehash

# Postgres
#RUN apt install postgresql-11 libpq-dev
# RUN -u postgres createuser admin -s


RUN apt-get update && apt-get install wget
RUN apt-get install -y aptitude

RUN echo 'deb http://apt.postgresql.org/pub/repos/apt/ zesty-pgdg main' > /etc/apt/sources.list.d/pgdg.list
RUN wget --quiet -O - http://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | apt-key add -
RUN aptitude install -y postgresql-11 libpq-dev
#RUN aptitude update && apt-get install -y postgresql-common postgresql-9.5 libpq-dev
