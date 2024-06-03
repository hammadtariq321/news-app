
# Frontend Take-Home Challenge (News App)

## Overview

This project is a user interface for a news aggregator website, designed to pull articles from various sources and display them in a clean, easy-to-read format. The key features include article search and filtering, a personalized news feed, and a mobile-responsive design.



## Data Sources

#### The application fetches articles from at least three of the following APIs:

- NewsAPI
- The Guardian



## Development Guidelines

- React.js: The front-end framework used for building the user interface.
- Docker: The application can be containerized using Docker for easy setup and deployment.
- Best Practices: The code follows software development best practices such as DRY (Don't Repeat Yourself), KISS (Keep It Simple, Stupid), and SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion).



## Installation

1- Clone the repository:

```bash
git clone https://github.com/yourusername/frontend-take-home-challenge.git
cd frontend-take-home-challenge

```
    

2- Install dependencies:


```bash
npm install

```


3- Run the application:



```bash
npm run dev


```


4- Build the Docker image:



```bash
docker build -t my-react-app .


```



5- Run the Docker container:



```bash
docker run -p 80:80 my-react-app


```


