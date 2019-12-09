FROM ruby:2.6.3
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN mkdir /cherry_hill
WORKDIR /cherry_hill

# Setting env up
ENV RAILS_ENV='production'
ENV RACK_ENV='production' 

COPY Gemfile /cherry_hill/Gemfile
COPY Gemfile.lock /cherry_hill/Gemfile.lock
#RUN bundle update --bundler
RUN gem install bundler
RUN bundle install
COPY . /cherry_hill

# Adding project files
COPY . .
#RUN rake assets:precompile
# RUN bundle exec rake assets:precompile

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
#CMD ["rails", "server", "-b", "0.0.0.0"]