# SkyJourney Flight Booking

A modern flight booking landing page and search-results experience built with React, Vite, and Tailwind CSS. This project is designed to look polished enough for a junior frontend portfolio and to be deployable on Vercel.

## Overview

SkyJourney is a flight booking web app concept that helps users:
- search flights by city and date
- compare fares from multiple airlines
- select a flight from a results list
- continue to a passenger and payment flow

This repository is structured as a clean portfolio project, with a professional folder layout and reusable UI components.

## Features

### Current UI
- Homepage with hero section and search form
- Search results page with filters and flight cards
- Responsive layout for mobile and desktop
- Reusable button and input components
- Redux-based state starter structure
- Service layer and sample flight data

### Planned roadmap
- Login and register screens
- Passenger information form
- Payment selection page
- Booking summary and success page
- Profile and booking history
- Real API integration
- Dark mode and ticket PDF export

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router DOM
- Axios
- Lucide React

## Project Structure

```bash
skyjourney-flight-booking/
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── flight/
│   │   └── home/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── store/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── .env.example
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
├── postcss.config.cjs
├── vite.config.js
└── ...
```

## Demo and Screenshots

This project is ready for screenshots and portfolio presentation.

Suggested placeholders:
- Screenshot Homepage
- Screenshot Flight Search
- Screenshot Booking Process
- Live Demo (Vercel deployment link)
- Technology Stack
- Installation Guide
- Responsive Mobile Preview

## Live Demo

Deployment can be connected to Vercel using the repository root.

Example:
- https://skyjourney-flight-booking.vercel.app

## Installation

1. Clone the repository

```bash
git clone https://github.com/andrecahyana/skyjourney-flight-booking.git
cd skyjourney-flight-booking
```

2. Install dependencies

```bash
npm install
```

3. Run the app locally

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
VITE_API_URL=https://api.example.com
```

## Notes for Portfolio

This project can be presented as:
- Independent Project
- Frontend Portfolio Project
- UI/UX Travel Booking Concept
- React + Tailwind Case Study

It is suitable for junior frontend job applications because it demonstrates:
- component-based architecture
- route handling
- state management setup
- production-style project organization
- responsive web design

## Future Improvements

- add login/register pages
- create booking detail flow
- integrate a real flight API
- support dark mode
- add seat selection and payment form
- generate e-ticket PDF
- implement real authentication and booking history

## Author

Andre Cahyana

