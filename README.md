# COOP App

A full-stack role-based application for web and mobile, built as part of a co-op developer assessment.  
Users can log in via Firebase Authentication and access different dashboards based on their roles (admin/user).

## Overview

The stack used:

- **Firebase Authentication & Firestore**
- **Next.js backend**
- **React for web** using Tailwind CSS
- **Expo React Native for mobile**

The backend ensures all API routes are protected by verifying tokens and responds with role-specific data.  
Roles are stored and managed securely in Firestore.

## Prerequisites

- Node.js (18+)
- Expo CLI (`npm install -g expo-cli`)
- Firebase project with Auth & Firestore enabled

## Backend Setup

1. Navigate to the backend directory:  
   `COOP-app > backendapp > backend`
2. Install dependencies:  
   `npm install`
   create a `.env.local` file with these variables
   FIREBASE_PROJECT_ID

FIREBASE_CLIENT_EMAIL

FIREBASE_PRIVATE_KEY

you can get these by going to firebase console > project Settings > Service Account >generate new private key

3. Start the backend server:  
   `npm run dev`  
   The backend should run on `http://localhost:5000`. Verify by checking for the message `Server running on port 5000`.

## Web Setup

1. Navigate to the web directory:  
   `COOP-app > web > web`
2. Install dependencies:  
   `npm install`
3. in `src > lib > firebaseConfig` write your firebase project configuration

4. Start the web app:  
   `npm start`
5. before login you need to create the users in firebase console 678
6. to change the user role we can do that directly by changing the role attribute in firestore

## Mobile Setup

1. Navigate to the mobile directory:  
   `COOP-app > mobileapp > mobile`
2. Install dependencies:  
   `npm install`
3. in `lib > firebaseConfig` write your firebase project configuration
4.
5. Replace all instances of `http://localhost:5000` in fetch URLs with your local IP address (required for mobile to communicate with the backend on the same network) there are only one fetch it is in `Screen > Login` .  
   Find your local IP by running:

- `ipconfig` (Windows)
- `ifconfig` (Mac/Linux)

5. Start the mobile app:  
   `npx expo start`
