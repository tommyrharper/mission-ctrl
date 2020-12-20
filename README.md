# Mission Ctrl

- [Mission Ctrl](#mission-ctrl)
  - [What is Mission-Ctrl?](#what-is-mission-ctrl)
  - [Playing the game](#playing-the-game)
  - [Team Members](#team-members)
  - [Technologies](#technologies)
  - [Back-end](#back-end)
  - [How to install and run the project locally](#how-to-install-and-run-the-project-locally)
  - [How to run tests](#how-to-run-tests)

[![Build Status](https://travis-ci.com/tommyrharper/mission-ctrl.svg?branch=master)](https://travis-ci.com/tommyrharper/mission-ctrl)

[Deployed here.](http://mission-ctrl.surge.sh)

This is our final project at Makers Academy. The focus of the project was to take on a completely new tech stack and showcase our ability to follow AGILE processes and T.D.D when faced with such challenges.

## What is Mission-Ctrl?

Mission-ctrl is a game developed to help engineers hone their shortcut knowledge and practise them in a fun and competitive space!

We enable the user to reach great heights in our game with a sophisticated scoring system and allow them to enter their name and save their score on our database.

Our game is built with custom event-listeners that can detect multiple key-presses at a time and give feedback to the user about their attempt.

## Playing the game

Simply click the start button to start running the game:

![Start screen](readme_pictures/startScreen.png)

Press down on the correct combination of keys to complete a question:

![Question](readme_pictures/exampleQuestion.png)

If you get the question wrong you may receive a prompt such as:

![Question feedback](readme_pictures/exampleQuestionFeedback.png)

If you get the question wrong multiple times you will be given the correct answer but will face a reduced points amount:

![Correct answer](readme_pictures/correctAnswer.png)

View your game feedback at the end to see how you can improve, if you're proud of your score, then enter your name and click submit to add it to our database!

![Score form](readme_pictures/exampleScoreForm.png)

Watch your name appear on the scoreboard:

![Score board](readme_pictures/exampleScoreBoard.png)

## Team Members

- [Gina Frankel](https://github.com/Gina-Frankel)
- [Alexa Kearns](https://github.com/alexakearns)
- [Thomas Harper](https://github.com/tommyrharper)
- [Alex Lewis](https://github.com/AlexLewis10)
- [Harry Turnbull](https://github.com/hturnbull93)
- [Graham Falconer](https://github.com/grahamfalconer)

## Technologies

| Purpose                      | Technology         |
| ---------------------------- | :----------------- |
| Front end framework          | React              |
| Server framework             | Express            |
| ORM                          | Mongoose           |
| Language                     | Javascript         |
| CI/CD                        | Travis             |
| Hosting                      | Heroku, Surge      |
| Databases                    | MongoDB            |
| Styling                      | Sass, CSS          |
| Front end testing frameworks | Jest, Enzyme       |
| API testing frameworks       | Mocha, Chai, Sinon |
| Code Coverage                | Jest               |

## Back-end

The back-end runs using Node.js.

You can find our [backend API repository here](https://github.com/hturnbull93/mission-ctrl-api-node).

## How to install and run the project locally

First clone this repository to your local machine, then from your terminal run:

```shell
cd mission-ctrl
npm install
npm start
```

## How to run tests

From the root directory, run in your terminal:

```shell
npm test
```

This will show you test results and coverage for the individual files and overall project.
