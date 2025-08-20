# React + TypeScript + Vite + E-Commerce Demo

This project is a **React + TypeScript + Vite** template extended with a simple e-commerce front-end. It demonstrates a responsive product page with cart functionality, lightbox popup for product images, and mobile-friendly navigation.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup & Run](#setup--run)
- [Detailed Component Functionality](#detailed-component-functionality)
- [ESLint & Code Quality](#eslint--code-quality)
- [Usage Examples](#usage-examples)

---

## Features

### General Features

- **Responsive design**: Works seamlessly across mobile, tablet, and desktop.
- **Mobile-first layout**: Optimized for smaller screens with hamburger menu navigation.
- **Interactive product carousel**: Users can click thumbnails or arrows to view different images.
- **Lightbox popup**: Clicking the main product image opens a centered popup with navigation arrows and thumbnails.
- **Cart management**:
  - Add product(s) to the cart with a selectable quantity.
  - View cart contents in a dropdown container.
  - Delete items from the cart.
  - Cart icon shows a dynamic quantity badge.
  - Checkout button (placeholder for integration).
- **Dynamic state management** using `useState` and `useEffect` to handle cart updates and UI reactivity.

### Navigation Features

- **Desktop navigation**: Horizontal menu with active link highlighting.
- **Mobile navigation**: Hamburger menu slides in a sidebar. Overlay click closes the menu.

### Visual & UX Features

- **Product image thumbnails** for quick selection.
- **Hover effects** on thumbnails and buttons.
- **Quantity selector**: Increment/decrement product count before adding to cart.
- **Darkened overlay** for lightbox popup to focus on the product.
- **Delete icon** inside cart to remove items instantly.

---

## Project Structure
