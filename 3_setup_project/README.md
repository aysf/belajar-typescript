# How to setup a project

1. init project with `npm init`
2. install lite-server as a development only dependency with command `npm install --save-dev lite-server`
    - this step will create node_modules folder, skip it from git with `echo 'node_modules' > .gitignore`
3. add `"start": "lite-server"` to `package.json` under `script` tag.
4. open terminal and run `start`

# How to re-use

1. clone this project folder
2. install all dependencies `npm install`