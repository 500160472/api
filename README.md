

# GalactAPI 




### NODE.JS SERVER

npm start



### DOCKER SERVER
#### BUILD THE IMAGE
docker build -t root/node_web_api .
#### RUN THE IMAGE
docker run -p 49160:5000 -d root/node_web_api 
#### EDIT IMAGE
docker exec -it root/node_web_api /bin/bash


### UI DESIGN
Download the UI folder and serve locally or anywheere on the web to interact with the API



## API DOCUMENTATION

### ROUTES
#### HOME
'/' => 'Home'
#### USERS
'/users' => 'List, Add, Delete, Update or View Users'
#### PYTHON
'/python' => 'Run Python Script in Controllers'

