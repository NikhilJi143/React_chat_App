# 💬 Chat Application Frontend

This is the frontend for a chat application built using React.js. The application allows users to search for conversations by contact name, view all conversations in the left sidebar, and create new conversations in a pop-up modal. Users can send messages and receive alerts for errors and successful actions.

## Hosted-Link - https://reactchat12.netlify.app/

## Technologies

- React.js
- React Router
- React Hooks
- Redux

## Setup

To run this project, follow these steps:

1. Install the required dependencies using `npm i`
2. Run the project using `npm start`
3. Open the application in your browser at `http://localhost:3000`

## Features

### Search for Conversations

Users can search for conversations by contact name using the search bar in the left sidebar.

### View All Conversations

All conversations are displayed in the left sidebar, each with the contact name and some text of the last message in the chat.

### Add New Contact

Users can add new contact by clicking the "Conversations" button in the left sidebar.Add there name and profile image url.

### Send Messages

Users can send messages and image in the current selected conversation using the text input field in the right side view.

### Handle Errors and Success Alerts

The application handles errors and success alerts and displays appropriate notifications to the user.

## Directory Structure and flow of The Code

    React-ChatApp
    |------ public
    |         └---index.html
    |------ src
    |         |---action
    |         |     └--- index.js
    |         |---component
    |         |         |---corner
    |         |         |       |--- CornerSide.jsx
    |         |         |       └--- style.scss
    |         |         |---Leftsidebar
    |         |         |       |--- LeftSideBar.jsx
    |         |         |       └--- style.scss
    |         |         |---middleView
    |         |         |       |--- MiddleSideCard.jsx
    |         |         |       └--- style.scss 
    |         |         └--- index.js
    |         |---data
    |         |     └--- conversation.js
    |         |---pages
    |         |      |---chat
    |         |      |       |--- Chat.jsx
    |         |      |       └--- style.scss
    |         |      └--- index.js
    |         |---reducer
    |         |      └--- index.js
    |         |---store
    |         |      └--- store.js
    |         |---App.css
    |         |--- App.js
    |         |---index.css
    |         └--- index.js
    |------ .gitignore
    |------ package-lock.json
    |------ package.json
    └------ README.md


## Author

- [NikhilJi143](https://github.com/NikhilJi143)
