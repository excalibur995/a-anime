# Project Folder Structure

This project follows a modular and organized folder structure to maintain clarity and separation of concerns. Below is an overview of the different directories and their purposes.

## Folder Structure

```
├── app
├── contexts
├── models
├── modules
├── services
├── ui
├── components
├── usecases
├── utils
├── repo
├── hooks
```

### app

The `app` folder contains the Next.js route pages.

### contexts

The `contexts` folder is used to set up context-related files, enabling state management across the application.

### models

The `models` folder holds interfaces, constants, and other related files.

### modules

The `modules` folder is organized by domain (e.g., search, anime, cart, etc.) and contains domain-specific logic and components.

### services

The `services` folder includes Axios and other network settings for making API calls.

### ui

The `ui` folder is for UI-related components. These components only receive props and are purely presentational, without any state management.

### components

The `components` folder contains groups of UI components that have their own specific purposes. These components can include use cases and manage their own state, unlike UI components in the `ui` folder.

### usecases

The `usecases` folder is where you manage state with `useState`, `useReducer`, and other business logic.

### utils

The `utils` folder contains helper functions that can be used throughout the application.

### repo

The `repo` folder includes hooks that are related to fetching data from external sources.

### hooks

The `hooks` folder contains custom hook helpers that are used within the application.

## Detailed Folder Structure

### app

- Contains Next.js route pages.
- Example: `anime-detail/page.js`, `[slug]/page.js`

### contexts

- Context setup and related files.
- Example: `contexts/ThemeContext.js`, `contexts/UserContext.js`

### models

- Interfaces and constants.
- Example: `models/interfaces.ts`, `models/constants.js`

### modules

- Domain-specific folders.
- Example: `modules/search/`, `modules/anime/`, `modules/cart/`

### services

- Network and API configurations.
- Example: `services/axiosConfig.js`, `services/api.js`

### ui

- Purely presentational components.
- Example: `ui/Button.js`, `ui/Card.js`

### components

- Group of UI components with specific purposes, can include state and use cases.
- Example: `components/Header.js`, `components/Footer.js`, `components/SearchBar.js`

### usecases

- State management and business logic.
- Example: `usecases/useSearch.js`, `usecases/useAuth.js`

### utils

- Helper functions.
- Example: `utils/formatDate.js`, `utils/calculateTotal.js`

### repo

- Hooks related to data fetching.
- Example: `repo/useFetchAnime.js`, `repo/useFetchUser.js`

### hooks

- Custom hook helpers.
- Example: `hooks/useDebounce.js`, `hooks/usePrevious.js`

## Conclusion

This folder structure helps to keep the project organized and modular, making it easier to manage and scale. Each directory has a specific purpose, ensuring a clear separation of concerns throughout the application.
