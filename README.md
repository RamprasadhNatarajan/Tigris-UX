# Tigris-UX
# Pre-requisite : Node should be installed in the system.
# node dependency modules : 
To be installed using npm.
1. express - to get and post request.
2. alert-node - show alert pop ups.

# commands for installing the dependencies : 

- npm install express
- npm install alert-node

# Steps to use:

In command change directory to the Tigris-UX folder, then execute below command.

- Node index.js

Launch localhost:8888 in browser.

Click the button which mode you wish the machine to change.

Text current mode will get changed with the selected option.

and radio button for the selected button will get highlighted

Open another cmd prompt and use curl command at port 8888

Curl your-ipaddress:8888/changedInput
- Curl 192.168.15.125:8888/changedInput

This will return the command posted from html page.
