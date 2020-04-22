#!/bin/bash

if [ "$1" == "start" ]; then
  forever start src/server.js
  forever start src/client.js
  forever list
elif [ "$1" == "stop" ]; then
  forever stop src/server.js
  forever stop src/client.js
fi