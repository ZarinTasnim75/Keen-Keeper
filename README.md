# Keen Keeper (Friendship Management App)

## Project Description
Keen Keeper is a responsive friendship management web  designed to help users stay connected with friends in a meaningful and organized way. The main purpose of this project is to reduce the chances of losing contact with important people by tracking interactions and showing how often users communicate with their friends.

Users can view a list of friends displayed as cards containin profile pictures, names, status, tags, email and the number of days since last contact. Each friend card is interactive and allows navigation to a profile page where users can see more information and perform quick actions like calling, texting or starting a video call.

Every interaction performed by the user is stored in a global timeline system using Context API. This allows users to see a full history of their communication activities in one place, including the type of interaction, the friend’s name and the time it happened. The timeline page also supports filtering so users can view specific types of interactions if needed.

The project also includes a friendship analytics page where interaction data is visualized using charts. This helps users understand their communication patterns in a simple and visual way. Toast notifications are used throughout the app to give instant feedback when users perform actions.

The application is fully responsive and works smoothly on mobile, tablet, and desktop screens. It is designed with a clean UI inspired by a Figma design and focuses on usability and clarity.

# Technologies Used
- React.js
- React Router DOM
- Context API
- Tailwind CSS
- DaisyUI
- React Toastify
- Recharts
- Vite

## Key Features

Friend management system that displays friends using JSON data. Each friend card shows important details like name, image, status, tags, and last contact information. Users can click on a friend to open a detailed page where more personal information and actions are available.

Timeline tracking system that records every interaction such as Call, Text, and Video. These interactions are stored globally using Context API so that the data remains accessible to different pages. The timeline page displays all activities in a structured format with date, type and title.

Friendship analytics and notification system that provides a visual representation of user interaction habits using Recharts. It also includes toast notifications that give real-time feedback whenever the user performs any action in the application.

## Responsiveness
The application is designed to be fully responsive and adapts properly to different screen sizes. It works on mobile devices, tablets and desktop screens without breaking the layout or functionality.


## Deployment
The project is deployed well so that page reloads do not cause errors, ensuring a smooth user experience.


## Features Overview
- Navigation bar with active route highlighting and icons
- Friend cards generated from dynamic JSON data
- Detailed friend profile page with interaction actions
- Timeline page showing full interaction history
- Analytics page with pie chart visualization
- Toast notifications for user actions
- 404 error handling page for invalid routes
- Fully responsive layout across all devices