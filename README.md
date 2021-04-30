<p align='center'> <img src='https://www.jing.fm/clipimg/full/70-706780_echo-fox-logo-png-cool-fox-logos.png' width='100'> </p>

<h1 align='center'>SpeakerHub </h1>

<p align='center'>Organizing an event is not easy. Getting in touch with a confident speaker who's an expert on some subject can be hard. SpeakerHub aims to be the one stop solution for finding and getting in touch with speakers. With speakers divided up by subject knowledge, you can find the right speaker for your next team gathering, tech conference, or really any occasion! No more approaching people on social media and struggling to find a speaker for an event. Speaker Hub  aims to connect organizers with speakers, making life easier for everyone and satisfying our 3 stakeholders</p>

<p float='center' align='center'>
<img src='https://github.com/betaoverflow/project-speakerhub/blob/main/docs/sh122.png' width='250'>
<img src='https://github.com/betaoverflow/project-speakerhub/blob/main/docs/sh123.png' width='250'>
<img src='https://github.com/betaoverflow/project-speakerhub/blob/main/docs/sh121.png' width='250'>
</p>


[![Starware](https://img.shields.io/badge/⭐-Starware-f5a91a?labelColor=black)](https://github.com/zepfietje/starware)

Project-orsi is Starware.  
This means you're free to use the project, as long as you star its GitHub repository.  
Your appreciation makes us grow and glow up. ⭐

# Prerequisites 👨‍💻

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local 💻

Clone the project in localhost
```bash
git clone https://github.com/betaoverflow/project-speakerhub.git
```
Install all the npm packages. Go into the client folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

### To spin up the backend server

Navigate to the main project folder in a seperate terminal. Then install all npm packages
```bash
npm install 
```

If you don't have nodemon globally installed on your system, install it so the server can autorefresh 
```bash
npm install -g nodemon
```

Now it's time to spin up the backend server. Run the lines
```bash
nodemon server.js
```
If you get an error immediately, don't worry. The final step is to connect to the MongoDB database.

Note: The Server Runs on **localhost:5000**

## Connecting to the Database
Spin up your cluster in MongoDB and replace your connection with URI in `config/keys.js`
If you face any problems, refer to the [MongoDB](https://www.mongodb.com/blog/postquick-start-nodejs-mongodb--how-to-get-connected-to-your-database) website.


## Connecting to the Database if you haven't used MongoDB Atlas before
Install the MongoDB Node.js Driver with the following command:
```bash
npm install mongodb
```

Set up a [MongoDB Atlas Database](https://www.youtube.com/watch?v=rPqRyYJmx2g) by following this short MongoDB setup video till the *3:20* mark. Stop after that mark!

On your Cluster home page, select CONNECT > Connect your application. 
1. Select Node.js in the drop down for your driver, and select the latest version. 
1. Then, copy the connecting string (URI).
1. Paste this string as the value of mongoURI inside `config/keys.js` of this project.

Replace the `<password>` section of the string with your Database Access password. Viola, your server should now successfuly connect to MongoDB!

`Contributions are always welcome 🎉🎉`

# Ways to contribute:
1. Solve the issues which are listed
2. Create your own issue and then send PR.

Please refer to the project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

### Please abide by  [Contributing Guidelines](https://github.com/betaoverflow/project-speakerhub/blob/main/CONTRIBUTING.md) and [Code of Conduct](https://github.com/betaoverflow/project-speakerhub/blob/main/CODE_OF_CONDUCT.md) 🚀

PS. Logo is not ours we don't take the credit for it

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ArcaneWizard"><img src="https://avatars.githubusercontent.com/u/42625247?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Raghav Narula</b></sub></a><br /><a href="https://github.com/betaoverflow/project-speakerhub/commits?author=ArcaneWizard" title="Code">💻</a> <a href="https://github.com/betaoverflow/project-speakerhub/commits?author=ArcaneWizard" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
