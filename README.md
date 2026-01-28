# FoodHub - Food Delivery & Management System (Backend)

FoodHub is a comprehensive backend solution for an online food delivery platform. It supports multiple user roles (Admin, Provider, Customer) and provides features like meal searching, ordering, and reviewing.

## 🚀 Features

### 1. User Authentication & Authorization
- **Role-based Access Control (RBAC):** Separate permissions for Admin, Provider, and Customer.
- **Secure Auth:** JWT-based authentication and password hashing.

### 2. Meal Management (Customer)
- **Advanced Filtering:** Search meals by name, category, or price range (Min/Max).
- **Meal Details:** View specific meal information along with provider details and reviews.

### 3. Review & Rating System
- **Customer Feedback:** Customers can leave ratings (1 to 5) and comments after trying a meal.
- **Review List:** View all reviews for a specific meal to help make ordering decisions.

### 4. Admin Management
- **User Control:** Admin can update user status (e.g., Active, Suspended) to maintain platform quality.
- **Overview:** Full access to manage users and platform data.

### 5. Provider Dashboard
- **Meal Hosting:** Providers can create and manage their food listings.
- **Order Tracking:** Update order statuses (e.g., Preparing, Ready, Delivered).

## 🛠️ Technology Stack
- **Language:** TypeScript
- **Framework:** Express.js
- **ORM:** Prisma (PostgreSQL)
- **Validation:** Zod
- **Authentication:** JWT (JSON Web Token)
- **Development Tool:** TS-Node-Dev

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   <git clone https://github.com/fbiplobhasan/foodhub-backend>
   cd food-hub-backend

   Developed by Biplob Hasan - 2026