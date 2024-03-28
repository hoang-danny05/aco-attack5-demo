# ACO 499 Demo Website

This is a website that i made using node and express! If you're interested in web development, this should give you some good experience with the technolgies used when making APIs and websites.

## How to use

### Prerequisites:
- node and npm must be installed.
```bash
sudo apt install node;
sudo apt install npm;
```

### Getting the code:
- you can use git to get the code
```bash
sudo apt install git; # only if you don't have git
git clone https://github.com/hoang-danny05/aco-attack5-demo.git
#.git is optional for some machines
```

### Running the website
- Before running the website, you should check your VM's IP with "ifconfig". Make sure your WiFi adapter is bridged. If it works correctly, you should be able to access the website from any machine on the local network. 
- Once "npm i" has been successfully run within the aco-attack5-demo directory, you can run the website with the following command:
```bash
npx nodemon index.js
```
- Your server should now be running on <ins>[Virtual Machine IPv4]:8080</ins>
- To test the server's functionality from Kali, you can type:
```bash
curl localhost:8080
```
- This should return the server's HTML code necessary to display the website's information. Since we want cleaner server-side code, I purpousefully made the HTML as compact and as readable as possible.

### other notes
- install.sh has the commands necessary to install all of the website's dependencies. It simply runs "npm i", but if we add any other dependencies, we can add their commands here as well. You can run any .sh file with "bash filename.sh"
- run.sh has all of the commands necessary to run the website. 
- index.js is the main source code for the entire website. Have at it!

## Other Information that you might find useful

- This development environment is called node.js, which may make it easier to google help.
- We are specifically utilizing express.js to handle website paths for us; you might want to use that as well. 
- package.json holds all of the node dependencies that i use. 
