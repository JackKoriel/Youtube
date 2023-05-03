# Jaxtube

Youtube clone using MERN stack and Firebase with REDUX toolkit and JWT cookies.

note:
this project was created for the purpose of learning new technologies, therefore, you might notice a mix of several methods.

## initial setup:

after cloning the repo on your local machine using a program such as VScode, there should be 2 sub-folders:

1. client
2. server

ctrl + j, split to 3 terminals and perform the following actions:

1. server terminal:

```sh
cd server
npm i
npm start
```

2. client terminal:

```sh
cd client
npm i
npm start
```

## .env

.env file will be required for both backend and frontend. You will need to add your own keys as follows.

- client folder: (firebase)
  REACT_APP_FIREBASE_API = XXXX-XXXX-XXXX

- server folder: (mongoDB + JWT)
  MONGO_URI = XXXX-XXXX-XXXX
  JWT = XXXX-XXXX-XXXX

## Databases

mostly MongoDB is used for all data operation, Firebase is used for google Auth lognin.

## Features

- signin/signup with authentication protocols and password hashing with bycrypt.
- JWT tokens.
- Google loging using google auth.
- upload videos and images.
- like & share videos.
- comment on videos.
- search videos by name, upload or tags.
- follow a channel.
- dark mode theme.
- presisit state using redux.

## Screenshots

SIGNIN<br />
![alt text](https://res.cloudinary.com/dhj5ncbxs/image/upload/v1683078396/video%20app/signin_eyekei.jpg)

HOMEPAGE<br />
![alt text](https://res.cloudinary.com/dhj5ncbxs/image/upload/v1683078396/video%20app/homepage_mcigl3.jpg)

VIDEO PLAY<br />
![alt text](https://res.cloudinary.com/dhj5ncbxs/image/upload/v1683078396/video%20app/video-playing_vzz9hw.jpg)

UPLOAD<br />
![alt text](https://res.cloudinary.com/dhj5ncbxs/image/upload/v1683078396/video%20app/upload_pcsf0y.jpg)
