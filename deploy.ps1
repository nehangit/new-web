# Powershell script to deploy from my laptop, github secrets is too much to setup for actions to work
# Install dependencies
npm ci

# Build the React project
npm run build

# Deploy to Firebase
firebase deploy