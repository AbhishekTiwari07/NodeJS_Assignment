# Assignemnt

Implemented the following API:
1. Create Employee
Method: POST
Path: /employees
The body will be a JSON object containing the following Keys: “ID”, “Name”, “Email”, “Phone Number”


2. List Employee
Method: GET
Path: /employees
It will list all the employees present in the file. 


3. GET Employees
Method: Get
Path: /employees/1
Where 1 is the employee id parameter. This would be sent by the requester to get data on that specific employee.

Note: use .env file for changing port or file_name

---
## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
