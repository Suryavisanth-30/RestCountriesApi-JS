# 🌍 RestCountries API - Angular 16 Application

A fully functional Angular 16 web application that integrates with the RestCountries public API to fetch and display country information dynamically.

This project demonstrates REST API integration, Angular routing, services, component-based architecture, and responsive UI design.

---

## 📌 Project Overview

The RestCountries Angular application allows users to:

- View all countries
- Search for a specific country
- Display country details like:
  - Name
  - Capital
  - Region
  - Population
  - Flag
- Navigate between pages using Angular routing

This project is built to demonstrate API integration using Angular HttpClient and modular architecture.

---

## 🚀 Features

- 🌎 Fetch all countries from API
- 🔍 Search countries by name
- 🏳️ Display country flags
- 📊 Show population, capital, and region
- 📱 Responsive layout
- 🧩 Modular Angular structure
- 🔗 REST API integration
- ⚡ Fast and dynamic UI rendering

---

## 🛠️ Technologies Used

- Angular 16
- HTML5
- CSS3
- REST API
- Angular HttpClient Module

---

## 🌐 API Used

This project uses the official **RestCountries API v3.1**

### 🔗 Base URL
```
https://restcountries.com/v3.1/
```

### 📌 Endpoints Used

1️⃣ Get All Countries
```
https://restcountries.com/v3.1/all
```

2️⃣ Search Country By Name
```
https://restcountries.com/v3.1/name/{countryName}
```

---

## 📄 Example API Implementation (Service Layer)

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  private baseUrl = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get(`${this.baseUrl}all`);
  }

  searchCountry(name: string) {
    return this.http.get(`${this.baseUrl}name/${name}`);
  }
}
```

---

## 📂 Project Structure

```
RestCountriesApi-JS/
│
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── home.component.ts
│   │   │   ├── home.component.html
│   │   │   └── home.component.css
│   │   │
│   │   ├── landing/
│   │   │   ├── landing.component.ts
│   │   │   ├── landing.component.html
│   │   │   └── landing.component.css
│   │   │
│   │   ├── restapi.service.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   │
│   ├── assets/
│   ├── index.html
│   └── styles.css
│
├── angular.json
├── package.json
├── package-lock.json
└── README.md
```

---

## 📦 Installation

### Step 1: Clone Repository

```bash
git clone https://github.com/Suryavisanth-30/RestCountriesApi-JS.git
```

### Step 2: Navigate into Folder

```bash
cd RestCountriesApi-JS
```

### Step 3: Install Dependencies

```bash
npm install
```

---

## ▶️ Running the Application

Start Angular development server:

```bash
ng serve --open
```

Application will run at:

```
http://localhost:4200/
```

---

## 🧠 Application Workflow

1. Angular loads the landing/home component.
2. The service (`restapi.service.ts`) makes HTTP GET requests.
3. API response is received as JSON.
4. Data is passed to components.
5. Components render dynamic country details.
6. Angular Router manages page navigation.

---

## 🎯 Learning Objectives Demonstrated

- REST API Integration
- Angular Services & Dependency Injection
- Component Communication
- Routing & Navigation
- HTTP Client Usage
- JSON Data Handling
- Responsive UI Design

---

## 🔮 Future Improvements

- Filter by region
- Sort by population
- Pagination support
- Dark / Light theme toggle
- Country comparison feature
- Deploy to GitHub Pages

---

## 📄 License

This project is open-source and intended for educational and learning purposes.

---

## 👨‍💻 Developed By

Suryavisanth Srinivasan  
GitHub: https://github.com/Suryavisanth-30
