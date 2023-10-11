# School Management System

This is a MERN stack website which can be used for managing the school. It has almost all features and few are in development phase.

`Please give this repo a star if this project helped you in any way. This will mean a lot to me and motivate me more to bring this type of project. (Live url does not work as of now due to heroku removing free services)`

### `LIVE SITE`

```bash
https://manageschool1.herokuapp.com/

``` 

### `LOGIN AS ADMIN AND SEE EVERYTHING`

```bash
Login email="admin1@example.com"
Login password="adminpassword1"
```

## Usage

Clone the repo

```bash
git clone https://github.com/upendradhamala/School-Management-System.git
```

### Getting Started

Go to the root folder and install the backend dependencies by using the command-

```bash
npm install
```

Go to the frontend folder by command cd frontend and then install frontend dependecies using the command-

```bash
npm install
```

### `ENV Variables`

Create a .env file in the root and add the following. You can see .env.example for format.

```bash
NODE_ENV=development
PORT=5000
MONGO_URI="Your mongo uri"
JWT_SECRET="Anything you like"
CLOUDINARY_URL ="your cloudinary url"
CLOUDINARY_UPLOAD_PRESET = "your cloudinary preset "
```
Create a .env file in the frontend folder and add the following. You can see .env.example for format.

```bash
REACT_APP_CLOUD_NAME="Your value"
REACT_APP_CLOUD_PRESET="Your value"
```
### `Running`

Go to the root folder and at first seed the database through command

```bash
npm run data:import
```

After seed is successful run following command to run both backend and frontend concurrently

```bash
npm run dev
```


### `Homepage`

[![Screenshot-from-2021-04-30-16-59-15.png](https://i.postimg.cc/jjHs8psH/Screenshot-from-2021-04-30-16-59-15.png)](https://postimg.cc/67QJq14q)




