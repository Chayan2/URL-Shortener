# URL Shortener Service

## Overview

This is a **URL Shortener Service** built using **Node.js**, **Express**, and **MongoDB**. It allows users to shorten long URLs, making them easier to share and manage. The service features **JWT authentication**, **role-based access control**, and the ability for **admins** to view and manage all shortened URLs. 

## Key Features

- **URL Shortening**: Users can shorten long URLs to share them easily.
- **Authentication & Authorization**: Users can sign up, log in, and manage their shortened URLs securely using **JWT tokens**.
- **Role-Based Access Control**: Two user roles:
  - **Normal users**: Can only access their own shortened URLs.
  - **Admins**: Have access to view and manage all URLs on the platform.
- **Scalability**: Easily extendable to include additional features like URL analytics (e.g., click tracking, geo-location, etc.).

## Tech Stack

- **Backend**: 
  - Node.js
  - Express.js
  - JWT (JSON Web Tokens) for authentication
  - MongoDB (with Mongoose for database interaction)
  
- **Frontend**:
  - EJS (Embedded JavaScript) for templating

- **Other Libraries**:
  - Cookie-parser for handling cookies
  - Short-id for generating unique shortened URLs
  - UUID for generating unique identifiers for users and URLs

## Setup & Installation

To run this project locally, follow the steps below:

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
API Endpoints
Authentication & User Management
POST /user/signup: Register a new user.
POST /user/login: Log in a user and get a JWT token.
URL Management
POST /url: Shorten a new URL. Requires authentication.
GET /url/:id: Redirect to the original URL using the shortened URL ID.
User Data
GET /user/urls: Get a list of all shortened URLs created by the authenticated user.
Admin Functions
GET /admin/urls: Get a list of all URLs shortened by all users (Admin-only access).
Security Considerations
JWT Authentication: JWT tokens are used to authenticate users. Tokens are stored securely in cookies to prevent unauthorized access.
Role-Based Access Control: Access is restricted based on user roles (normal users vs admins).
Contribution
Feel free to fork the repository, create issues, and submit pull requests. Contributions are welcome!
