FROM node:16-alpine 
WORKDIR /app      
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]


# building image
# 1.docker build . -t <your username>/node-web-app

# see docker images
# 2. docker images

# run the image
# 3.docker run -p 49160:8080 -d <your username>/node-web-app


# Get container ID
# docker ps

# Print app output
#  docker logs <container id>

# Example
# Running on http://localhost:8080

# Enter the container
# docker exec -it <container id> /bin/bash


# Kill our running container
# docker kill <container id>