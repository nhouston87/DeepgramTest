Hello, thank you for downloading my demo application

This readme file is meant to help instruct how to quickly run this demo application for the Deepgram search feature.

Please see the official website for further information on the search feature: 
https://developers.deepgram.com/documentation/features/search/

To get started with your own working demo, please first ensure you have Node downloaded on your machine. 
Next run NPM install from your projects root directory to install the node modules.

It is recomended to also install GIT and run GIT init from the projects root directory as well. This will allow you to
create a .gitignore file to exclude the node_modules folder and key.js file we will create in the next step.

Please create a config.js file in the projects root directory. Next add a new const to the file and set its value to your
deepgram api key you wish to use to demo this application. Next export the variable using module.export.apiKey = <your api key varibale name>.

You should now be able to run the main node file to demo the search feature.
