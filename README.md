# [Spacestagram](https://spacestagram-mk.herokuapp.com)

Spacestagram is a space-themed Instagram clone. I created this application for the Shopify Winter 2022 internship program, using NASA's [Astronomyy Picture of the Day](https://api.nasa.gov/#apod) API.

----------

| Table of Contents |
| ----------------- |
| 1. [Features](#features) |
| 2. [Installation](#installation) |
| 3. [Technologies](#technologies) |
| 4. [Future Features](#future-features) |
| 5. [Conclusion](#conclusion) |
| 6. [Contact](#contact) |

--------
# Features

## Splash Page
![Splash](https://i.imgur.com/LHhaDpw.png)

## Home Page
![Home](https://i.imgur.com/W7DCMQB.png)

## Expandable Description & Like Feature
![Expand](https://i.imgur.com/uKEaKuL.png)
![Like](https://i.imgur.com/iendoKu.png)

------
# Installation
To build/run project locally, please follow these steps:

1. Clone this repository

```shell
git clone https://github.com/makon57/spacestagram.git
```

2. Install Pipfile dependencies and create the virtual environment
```shell
pipenv install
```

2. Install npm dependencies for the `/react-app`

```shell
cd react-app
npm install
```

3. In the `/` root directory, create a `.env` based on the `.env.example` with proper settings

4. Setup your PostgreSQL user, password and database and ensure it matches your `.env` file

5. Before running any flask commands, confirm you are in the pipenv virtual env. If not, run the command:
```shell
pipenv shell
```

5. In the root folder, create the database by running in the terminal:
```shell
flask db init
```

6. In the root folder, migrate tables to the database by running in the terminal:
```shell
flask db migrate
```

7. In the root folder, seed the database by running in the terminal:
```shell
flask seed all
```

8. Start the flask backend in the `/` root directory
```shell
flask run
```

9. Start the frontend in the `/react-app` directory

```javascript
npm start
```

--------

# Technologies
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=333333" /></a>
* <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/-PostgreSQL-336791?logo=PostgreSQL&logoColor=white" /></a>
* <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white"></a>
* <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB"></a>
* <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white"></a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS3-1572B6?logo=CSS3" /></a>
* <a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" /></a>
* <a href="https://flask.palletsprojects.com/"><img src="https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white" /></a>
* <a href="https://www.heroku.com/home"><img src="https://img.shields.io/badge/Heroku-430098?style=flat&logo=heroku&logoColor=white" /></a>


-------

# Future Features

- [ ] Search Bar
- [ ] Comments
- [ ] Save Post
- [ ] User Profile


---------
# Conclusion

This has been a fun mini project. If you'd ask me to make an app six months ago, I would've laughed. This mini project may not seem like much, but to me, this project has been one fo the funnest and most rewarding projects so far, because it has shown me how capable I am and how amazing software development is. I love what I do and can't wait to take this project beyond. I hope to continue to build upon it and hopefully some day it might look even more so like Instagram.

-------
# Contact

## Manna Kong
<a href="https://www.linkedin.com/in/manna-kong/"><img src="https://i.imgur.com/CQZPAnp.png" height="28" align="middle" /></a>
<a href="https://angel.co/u/manna-kong"><img src="https://i.imgur.com/buLp96m.png" height="28" align="middle" /></a>
<a href="https://github.com/makon57"><img src="https://i.imgur.com/GTHPd3b.png" height="38" align="middle" /></a>
