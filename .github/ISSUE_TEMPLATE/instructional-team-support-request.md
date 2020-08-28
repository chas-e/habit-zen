---
name: Instructional Team Support Request
about: This is a template to request support from the instructional team.
title: Request for Instructor Assistance
labels: help wanted
assignees: ''

---

### Description of Issue

We are having an issue pushing and deploying to Heroku.

### Error messages || Screen Shots
**From the terminal after build attempt:**
To https://git.heroku.com/habit-zen.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://git.heroku.com/habit-zen.git'

**from the logs:**
./src/pages/App/App.js
       Cannot find file '../../components/NavBar/NavBar' in './src/pages/App'.

We did also rename some directories during development - not sure if this is affecting the build or not. This might be contributing to Heroku not finding files, but we couldn't find a way to fix this (ie Components directory on Github components in our local versions).


### Steps Attempted to Resolve Issue
* tried clearing the buildcache
* removed/ reinstalled node modules
* ran npm cache verify
* tried deleting and recreating the APP on heroku
* tried checking out a different branch and pushing from that

### Research
https://help.heroku.com/6235QYN4/why-is-my-node-js-build-failing-because-of-no-matching-node-versions

https://help.heroku.com/18PI5RSY/how-do-i-clear-the-build-cache

https://stackoverflow.com/questions/9542665/remote-rejected-master-master-pre-receive-hook-declined

https://coderwall.com/p/jjcpra/clean-heroku-npm-cache

