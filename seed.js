require('dotenv').config();
require('./config/database');

const DevSkill = require('./models/devskills');
const DjangoList = require('./models/djangolist');
const ExpressList = require('./models/expresslist');


(async function () {
  await DjangoList.deleteMany({});
  const djangoList = await DjangoList.create([
    {
      stepTitle: "In Terminal, navigate to the folder where you want to save this app.",
      description: "You will create the actual project folder within this folder in a future step",
      terminalCommand: "cd <name of your desired folder>",
      completed: false,
      otherStepSpecificData: ""
    },
    {
      stepTitle: "Create a database for the project.",
      description: "",
      terminalCommand: "createdb <database name of your choosing>",
      completed: false,
      otherStepSpecificData: "This command only works if you are using PostgreSQL"
    },
    {
      stepTitle: "Start your project",
      description: "",
      terminalCommand: "django-admin startproject <name of your project>",
      completed: false,
      otherStepSpecificData: ""
    },
    {
      stepTitle: "Navigate to your newly created project file.",
      description: "",
      terminalCommand: "cd <name of your choosing for this project>",
      completed: false,
      otherStepSpecificData: ""
    },
    {
      stepTitle: "Open up your project in your code editor",
      description: "The following command makes it easy to open up your project quickly from the Terminal",
      terminalCommand: "code .",
      completed: false,
      otherStepSpecificData: ""
    },
    {
      stepTitle: "Create your app",
      description: "At this point, we are inside the code editor that was opened for our project. Open an integrated terminal within your code editor. For VSCode, it will be 'control `' (control key + the backtick key)",
      terminalCommand: "python3 manage.py startapp main_app",
      completed: false,
      otherStepSpecificData: ""
    },
    {
      stepTitle: "Update your settings.py folder",
      description: "Within 'settings.py', add 'main_app' to the list of 'INSTALLED_APPS",
      terminalCommand: "",
      completed: false,
      otherStepSpecificData: ""
    },
    {
      stepTitle: "Connect to the Database",
      description: "Within 'settings.py', find 'DATABASES' object and change the 'NAME' value to the name of database you created earlier ",
      terminalCommand: "",
      completed: false,
      otherStepSpecificData: ""
    },
  ]);

  await ExpressList.deleteMany({});
  const expressList = await ExpressList.create([
    {
      stepTitle: "In Terminal, navigate to the folder where you want to save this app.",
      description: "You will create the actual project folder within this folder in the next step",
      terminalCommand: "cd <name of your desired folder>",
      completed: false,
      otherStepSpecificData: ""
    },
    {
      stepTitle: "Install the express-generator",
      description: "express-generator creates a 'skeleton' Express Application",
      terminalCommand: "npm install -g express-generator",
      completed: false,
      otherStepSpecificData: "If your system won't install or run express-generator, it can be used with 'npx' infront of the above command"
    },
    {
      stepTitle: "Create your project!",
      description: "make sure to specify '-e' before the name of your project. This specifies the View Engine as 'EJS'",
      terminalCommand: "express -e <name of your choosing for this project>",
      completed: false,
      otherStepSpecificData: ""
    },
    {
      stepTitle: "Navigate to your newly created project file.",
      description: "",
      terminalCommand: "cd <name of your choosing for this project>",
      completed: false,
      otherStepSpecificData: ""
    },
    {
      stepTitle: "Open up your project in your code editor",
      description: "The following command makes it easy to open up your project quickly from the Terminal",
      terminalCommand: "code .",
      completed: false,
      otherStepSpecificData: ""
    },
    {
      stepTitle: "Install the Node Modules",
      description: "At this point, we are inside the code editor that was opened for our project. Open an integrated terminal within your code editor. For VSCode, it will be 'control `' (control key + the backtick key)",
      terminalCommand: "npm i",
      completed: false,
      otherStepSpecificData: "This installs the node modules that were created when we ran 'npm install -g express-generator'"
    },
  ]);

  await DevSkill.deleteMany({});
  const devskills = await DevSkill.create([
    {
      name: "Express",
      description: "This Check List will take you through the basic steps for getting an Express App started. Steps will include terminal commands where applicable. ",
      anyOtherMetaData: "https://expressjs.com/",
      steps: [
        {
          title: "In Terminal, navigate to the folder where you want to save this app.",
          Description: "You will create the actual project folder within this folder in the next step",
          terminalCommand: "cd <name of your desired folder>",
          completed: false,
          otherStepSpecificData: ""
        },
        {
          title: "Install the express-generator",
          Description: "express-generator creates a 'skeleton' Express Application",
          terminalCommand: "npm install -g express-generator",
          completed: false,
          otherStepSpecificData: "If your system won't install or run express-generator, it can be used with 'npx' infront of the above command"
        },
        {
          title: "Create your project!",
          Description: "make sure to specify '-e' before the name of your project. This specifies the View Engine as 'EJS'",
          terminalCommand: "express -e <name of your choosing for this project>",
          completed: false,
          otherStepSpecificData: ""
        },
        {
          title: "Navigate to your newly created project file.",
          Description: "",
          terminalCommand: "cd <name of your choosing for this project>",
          completed: false,
          otherStepSpecificData: ""
        },
        {
          title: "Open up your project in your code editor",
          Description: "The following command makes it easy to open up your project quickly from the Terminal",
          terminalCommand: "code .",
          completed: false,
          otherStepSpecificData: ""
        },
        {
          title: "Install the Node Modules",
          Description: "At this point, we are inside the code editor that was opened for our project. Open an integrated terminal within your code editor. For VSCode, it will be 'control `' (control key + the backtick key)",
          terminalCommand: "npm i",
          completed: false,
          otherStepSpecificData: "This installs the node modules that were created when we ran 'npm install -g express-generator'"
        },
      ]
    },
    {
      name: "Django",
      description: "This Check List will take you through the basic steps for getting a Django App started. Steps will include terminal commands where applicable. Please only follow this checklist if you have already installed Django.",
      anyOtherMetaData: "https://www.djangoproject.com/",
      steps: [
        {
          title: "In Terminal, navigate to the folder where you want to save this app.",
          Description: "You will create the actual project folder within this folder in a future step",
          terminalCommand: "cd <name of your desired folder>",
          completed: false,
          otherStepSpecificData: ""
        },
        {
          title: "Create a database for the project.",
          Description: "",
          terminalCommand: "createdb <database name of your choosing>",
          completed: false,
          otherStepSpecificData: "This command only works if you are using PostgreSQL"
        },
        {
          title: "Start your project",
          Description: "",
          terminalCommand: "django-admin startproject <name of your project>",
          completed: false,
          otherStepSpecificData: "This command only works if you are using PostgreSQL"
        },
        {
          title: "Navigate to your newly created project file.",
          Description: "",
          terminalCommand: "cd <name of your choosing for this project>",
          completed: false,
          otherStepSpecificData: ""
        },
        {
          title: "Open up your project in your code editor",
          Description: "The following command makes it easy to open up your project quickly from the Terminal",
          terminalCommand: "code .",
          completed: false,
          otherStepSpecificData: ""
        },
        {
          title: "Create your app",
          Description: "At this point, we are inside the code editor that was opened for our project. Open an integrated terminal within your code editor. For VSCode, it will be 'control `' (control key + the backtick key)",
          terminalCommand: "python3 manage.py startapp main_app",
          completed: false,
          otherStepSpecificData: ""
        },
        {
          title: "Update your settings.py folder",
          Description: "Within 'settings.py', add 'main_app' to the list of 'INSTALLED_APPS",
          terminalCommand: "",
          completed: false,
          otherStepSpecificData: ""
        },
        {
          title: "Connect to the Database",
          Description: "Within 'settings.py', find 'DATABASES' object and change the 'NAME' value to the name of database you created earlier ",
          terminalCommand: "",
          completed: false,
          otherStepSpecificData: ""
        },
      ]
    }
  ]);
  console.log(devskills)

  process.exit();
})();




// {
//   stepTitle: "In Terminal, navigate to the folder where you want to save this app.",
//   description: "You will create the actual project folder within this folder in the next step",
//   terminalCommand: "cd <name of your desired folder>",
//   completed: false,
//   otherStepSpecificData: ""
// },
// {
//   stepTitle: "Install the express-generator",
//   description: "express-generator creates a 'skeleton' Express Application",
//   terminalCommand: "npm install -g express-generator",
//   completed: false,
//   otherStepSpecificData: "If your system won't install or run express-generator, it can be used with 'npx' infront of the above command"
// },
// {
//   stepTitle: "Create your project!",
//   description: "make sure to specify '-e' before the name of your project. This specifies the View Engine as 'EJS'",
//   terminalCommand: "express -e <name of your choosing for this project>",
//   completed: false,
//   otherStepSpecificData: ""
// },
// {
//   stepTitle: "Navigate to your newly created project file.",
//   description: "",
//   terminalCommand: "cd <name of your choosing for this project>",
//   completed: false,
//   otherStepSpecificData: ""
// },
// {
//   stepTitle: "Open up your project in your code editor",
//   description: "The following command makes it easy to open up your project quickly from the Terminal",
//   terminalCommand: "code .",
//   completed: false,
//   otherStepSpecificData: ""
// },
// {
//   stepTitle: "Install the Node Modules",
//   description: "At this point, we are inside the code editor that was opened for our project. Open an integrated terminal within your code editor. For VSCode, it will be 'control `' (control key + the backtick key)",
//   terminalCommand: "npm i",
//   completed: false,
//   otherStepSpecificData: "This installs the node modules that were created when we ran 'npm install -g express-generator'"
// },


// {
//   stepTitle: "In Terminal, navigate to the folder where you want to save this app.",
//   description: "You will create the actual project folder within this folder in a future step",
//   terminalCommand: "cd <name of your desired folder>",
//   completed: false,
//   otherStepSpecificData: ""
// },
// {
//   stepTitle: "Create a database for the project.",
//   description: "",
//   terminalCommand: "createdb <database name of your choosing>",
//   completed: false,
//   otherStepSpecificData: "This command only works if you are using PostgreSQL"
// },
// {
//   stepTitle: "Start your project",
//   description: "",
//   terminalCommand: "django-admin startproject <name of your project>",
//   completed: false,
//   otherStepSpecificData: ""
// },
// {
//   stepTitle: "Navigate to your newly created project file.",
//   description: "",
//   terminalCommand: "cd <name of your choosing for this project>",
//   completed: false,
//   otherStepSpecificData: ""
// },
// {
//   stepTitle: "Open up your project in your code editor",
//   description: "The following command makes it easy to open up your project quickly from the Terminal",
//   terminalCommand: "code .",
//   completed: false,
//   otherStepSpecificData: ""
// },
// {
//   stepTitle: "Create your app",
//   description: "At this point, we are inside the code editor that was opened for our project. Open an integrated terminal within your code editor. For VSCode, it will be 'control `' (control key + the backtick key)",
//   terminalCommand: "python3 manage.py startapp main_app",
//   completed: false,
//   otherStepSpecificData: ""
// },
// {
//   stepTitle: "Update your settings.py folder",
//   description: "Within 'settings.py', add 'main_app' to the list of 'INSTALLED_APPS",
//   terminalCommand: "",
//   completed: false,
//   otherStepSpecificData: ""
// },
// {
//   stepTitle: "Connect to the Database",
//   description: "Within 'settings.py', find 'DATABASES' object and change the 'NAME' value to the name of database you created earlier ",
//   terminalCommand: "",
//   completed: false,
//   otherStepSpecificData: ""
// },





// const checklist = [
//   {
//     name: "Express",
//     description: "This Check List will take you through the basic steps for getting an Express App started. Steps will include terminal commands where applicable. ",
//     anyOtherMetaData: "https://expressjs.com/",
//     steps: [
//       {
//         title: "In Terminal, navigate to the folder where you want to save this app.",
//         Description: "You will create the actual project folder within this folder in the next step",
//         terminalCommand: "cd <name of your desired folder>",
//         completed: false,
//         otherStepSpecificData: ""
//       },
//       {
//         title: "Install the express-generator",
//         Description: "express-generator creates a 'skeleton' Express Application",
//         terminalCommand: "npm install -g express-generator",
//         completed: false,
//         otherStepSpecificData: "If your system won't install or run express-generator, it can be used with 'npx' infront of the above command"
//       },
//       {
//         title: "Create your project!",
//         Description: "make sure to specify '-e' before the name of your project. This specifies the View Engine as 'EJS'",
//         terminalCommand: "express -e <name of your choosing for this project>",
//         completed: false,
//         otherStepSpecificData: ""
//       },
//       {
//         title: "Navigate to your newly created project file.",
//         Description: "",
//         terminalCommand: "cd <name of your choosing for this project>",
//         completed: false,
//         otherStepSpecificData: ""
//       },
//       {
//         title: "Open up your project in your code editor",
//         Description: "The following command makes it easy to open up your project quickly from the Terminal",
//         terminalCommand: "code .",
//         completed: false,
//         otherStepSpecificData: ""
//       },
//       {
//         title: "Install the Node Modules",
//         Description: "At this point, we are inside the code editor that was opened for our project. Open an integrated terminal within your code editor. For VSCode, it will be 'control `' (control key + the backtick key)",
//         terminalCommand: "npm i",
//         completed: false,
//         otherStepSpecificData: "This installs the node modules that were created when we ran 'npm install -g express-generator'"
//       },
//     ]
//   },
//   {
//     name: "Django",
//     description: "This Check List will take you through the basic steps for getting a Django App started. Steps will include terminal commands where applicable. Please only follow this checklist if you have already installed Django.",
//     anyOtherMetaData: "https://www.djangoproject.com/",
//     steps: [
//       {
//         title: "In Terminal, navigate to the folder where you want to save this app.",
//         Description: "You will create the actual project folder within this folder in a future step",
//         terminalCommand: "cd <name of your desired folder>",
//         completed: false,
//         otherStepSpecificData: ""
//       },
//       {
//         title: "Create a database for the project.",
//         Description: "",
//         terminalCommand: "createdb <database name of your choosing>",
//         completed: false,
//         otherStepSpecificData: "This command only works if you are using PostgreSQL"
//       },
//       {
//         title: "Start your project",
//         Description: "",
//         terminalCommand: "django-admin startproject <name of your project>",
//         completed: false,
//         otherStepSpecificData: "This command only works if you are using PostgreSQL"
//       },
//       {
//         title: "Navigate to your newly created project file.",
//         Description: "",
//         terminalCommand: "cd <name of your choosing for this project>",
//         completed: false,
//         otherStepSpecificData: ""
//       },
//       {
//         title: "Open up your project in your code editor",
//         Description: "The following command makes it easy to open up your project quickly from the Terminal",
//         terminalCommand: "code .",
//         completed: false,
//         otherStepSpecificData: ""
//       },
//       {
//         title: "Create your app",
//         Description: "At this point, we are inside the code editor that was opened for our project. Open an integrated terminal within your code editor. For VSCode, it will be 'control `' (control key + the backtick key)",
//         terminalCommand: "python3 manage.py startapp main_app",
//         completed: false,
//         otherStepSpecificData: ""
//       },
//       {
//         title: "Update your settings.py folder",
//         Description: "Within 'settings.py', add 'main_app' to the list of 'INSTALLED_APPS",
//         terminalCommand: "",
//         completed: false,
//         otherStepSpecificData: ""
//       },
//       {
//         title: "Connect to the Database",
//         Description: "Within 'settings.py', find 'DATABASES' object and change the 'NAME' value to the name of database you created earlier ",
//         terminalCommand: "",
//         completed: false,
//         otherStepSpecificData: ""
//       },
//     ]
//   }]