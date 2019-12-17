FROM ruby:2.6.3
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

# Set an environment variable where the Rails app is installed to inside of Docker image
ENV RAILS_ROOT /var/www/app_name
RUN mkdir -p $RAILS_ROOT 
# Set working directory
WORKDIR $RAILS_ROOT
# RUN mkdir /device_finder
# WORKDIR /device_finder

# Setting env up
ENV RAILS_ENV='development'
ENV RACK_ENV='development' 


# Adding gems
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock

# COPY Gemfile /device_finder/Gemfile
# COPY Gemfile.lock /device_finder/Gemfile.lock
#RUN bundle update --bundler
RUN gem install bundler
RUN bundle install
#COPY . /device_finder

# RUN npm install yarn
# RUN yarn install
FROM node:10
#FROM node:6.7.0
RUN npm install -g yarn

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
#RUN rails s
#RUN puma -C config/puma.rb
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
#CMD ["rails", "server", "-b", "0.0.0.0"]