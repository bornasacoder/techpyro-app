#!/bin/bash
set -e

echo "Deployment started..."

# Pull the latest version of the app
git pull origin edu7_vk8102
echo "New changes copied to server !"

echo "Installing Dependencies..."
npm install --yes

echo "Creating Production Build..."
npm run build

echo "Deployment Finished!"