# User Interface

The framework UI implemented on the project was MUI.

# Architecture Project Structure for Front-End Solution:

## src/components

Input: A versatile component designed to handle various forms like ReplyInput, SearchInput and TagInput/TextArea;

Comment: This component displays the comments from each Post.

Post: Similar to the Comment component, but tailored for displaying posts. It must manage various states and content types, ensuring a flexible and dynamic user experience.

UserAvatar: A component for displaying user avatars;

## src/constants
A dedicated space for defining global constants like color schemes and action types for reducers

src/config
The configuration hub, ideal for setting up connections with databases or external data layers like Firebase or Supabase. This section can also include API endpoint configurations, facilitating easy management across different development stages.

src/containers
ListComment: A container component responsible for managing and displaying a list of comments, complete with error handling and dynamic loading features like infinite scroll or pagination.

ListPost: Similar to ListComment, this container handles the display and management of post lists, ensuring efficient data handling and user interaction.

## src/interfaces
The core area for defining TypeScript interfaces or types, crucial for maintaining consistent data structures and type safety across the application.

## src/pages
Each page within the application is defined here, with individual page components handling specific layouts, data fetching, and state management.

## src/services
This directory is the central point for external service interactions, such as API calls. It's advisable to use a library like Axios for streamlined HTTP requests and to implement service interceptors for tasks like setting headers or error logging.

## src/store
The state management hub, broken down into:
    Actions: Defined for key functionalities like fetching and adding comments, posts, replies, handling search, tag addition, and user data retrieval.
    Middleware: Implements logic for handling asynchronous actions or side effects.
    Reducers: Pure functions for state updates, ensuring immutability.
        PostReducer -> fetch all reducers and
    Selectors: Possibly utilizing libraries for memoization to optimize re-rendering performance.

## src/utils
A collection of utility functions for common tasks such as data manipulation, pagination, and media queries. This space can also include custom hooks for repetitive logic across the application.

## src/test
Module for unit test using with jest and doing snapshot from the screen of ListPost