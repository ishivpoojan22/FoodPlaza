# FoodPlaza 

A small React project that demonstrates a food/restaurant listing and a simple cart using Redux Toolkit. The project was built for learning purposes and uses Parcel as the bundler and Tailwind CSS for styling.

---

## Table of contents

- Project overview
- Features
- Tech stack
- Folder / file structure (important files)
- How it works (data flow + important pieces)
- Run locally (PowerShell commands)
- Build and deploy (Vercel notes)
- Common problems & fixes
- How to extend or contribute
- License

---

## Project overview

This project shows a list of restaurants and menu items and provides a simple cart UI where users can add items. The cart is managed with Redux Toolkit (`cartSlice`) and UI components are simple React function components. The build system uses Parcel, and Tailwind CSS is used for styling.

This repository appears to be named `FoodPlaza` and the working branch is `FoodPlaza`.

---

## Features

- Restaurant / item list UI
- Add items to cart (Redux Toolkit)
- Remove last item or clear cart
- Simple responsive layout with Tailwind CSS
- Parcel for bundling (fast development and production builds)

---

## Tech stack

- React (v19) — UI library
- Redux Toolkit — app state (cart)
- React Redux — binding for React
- Parcel — bundler (development and production)
- Tailwind CSS — styling
- React Router (present in dependencies) — routing if used in the app
- Jest — test runner (test script present in package.json)

Files and code follow a CommonJS package.json style but the source is standard React components.

---

## Folder / file structure (key files)

(Top-level files)

- `index.html` — app entry HTML for Parcel
- `package.json` — scripts and dependencies
- `tailwind.config.js` — Tailwind configuration

(src folder)

- `src/App.js` — main app component and router
- `src/index.css` — styles (Tailwind directives)
- `src/components/` — React components (brief descriptions below)
  - `About.js` — about page
  - `Body.js` — main content (search/listing)
  - `Cart.js` — cart UI (shows cart items, clear/remove buttons)
  - `Contact.js`, `Error.js` — routing pages
  - `Grocery.js`, `Header.js`, `ItemList.js`, `RestaurantCard.js`, `RestaurantCategory.js`, `RestaurantMenu.js`, `Shimmer.js`, `User.js`, `UserClass.js`
- `src/utils/` — utility modules
  - `appStore.js` — Redux store configuration
  - `cartSlice.js` — cart reducer and actions
  - `constant.js` — constants like CDN_URL
  - `mockData.js` — local mock restaurant/item data
  - `useOnlineStatus.js`, `userContext.js`, `useRestaurantMenu.js` — hooks / context

Note: your project may contain more files; the list above highlights the likely important ones.

---

## How it works (high level)

- Data: restaurant/menu data comes from `mockData.js` (local JSON-like data). Components read this data to render lists.
- Cart: `cartSlice.js` maintains `state.items` (an array). Actions in the slice typically include `addItems`, `removeItems` (currently pops the last item), and `clearCart`.
- UI: `ItemList` maps the `items` array and renders each item; clicking "Add +" usually dispatches the `addItems` action to put the item into the cart.

Important shapes:

- Cart state: `{ items: [...] }`
- Menu item shape in your code often looks like: `item.card.info` (name, id, imageId, price ...)

---

## Run locally (PowerShell)

1. Install dependencies (run from the project folder that contains `package.json`):

```powershell
npm install
```

2. Start the dev server (Parcel):

```powershell
npm run start
# opens http://localhost:1234 by default
```

3. Build for production:

```powershell
npm run build
# outputs into `dist/`
```

Notes:

- This project includes a `vercel-build` (or `build`) script which runs `parcel build index.html` — this is what Vercel should call during deployment.
- If your repo root is not the folder containing `index.html`, make sure Vercel project settings point the Root Directory to the correct subfolder (see below).


Contributing steps

1. Fork the repo
2. Create a branch for your feature or fix
3. Make changes + add tests
4. Run `npm run build` and ensure no errors
5. Create a PR and include a short description of changes

---

## Scripts (from `package.json`)

- `npm run start` — run Parcel dev server (works locally)
- `npm run build` — production build using Parcel (`dist/` output)
- `npm run vercel-build` — alias used for Vercel builds (if present)
- `npm test` — run tests (Jest) if configured

---

## License

This project doesn't include an explicit license in the repo. If you want to open-source it, add a `LICENSE` file (MIT is a common choice).

