## Overview
This is a ReadMe Generator that creates a ReadMe for the user in Command. 


## Description
Link to Screenify to watch the ReadMe Generator - https://drive.google.com/file/d/1hSaqnXd7yvsZxRaPPV6xl5ct5OlB4qV3/view  

This is a ReadMe Generator that creates a ReadMe for the user in Command. It uses Javascript and Node.JS to create the generator. With Node.JS, it requires Inquirer, FS and Path to generate the ReadMe. 

First, the application starts by asking a series of questions which are prompted by a command with in Inquirer. The answers are then saved and used in the generate markdown function. Each answer is then selected and referred back to by using the language ${data.(name)}. The function generateMarkDown is calledback in the index.js file to run the answers through it. Then the answers are listed in a second ReadMe example file. 

The trickest part about setting up the ReadMe information was learning about the different licenses and license badges. Using github, I was able to follow to documenation to list the most used license and create the badge that sits a the top of the page. 

ReadMe Questions
<img src = "img\ReadMe Generator Questions.png">


ReadMe Example
<img src ="img\ReadMe Example.png">

