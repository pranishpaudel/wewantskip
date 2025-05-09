# Skip Selection Page Redesign

## Project Overview
This repository contains my redesigned solution for the skip selection page as requested in the coding challenge. The goal was to revamp the look and feel of the existing skip selection page at wewantwaste.co.uk while maintaining its core functionality.

## Key Approaches & Design Decisions

### 1. Modern UI with Dark Theme
I opted for a sleek dark-themed UI that creates visual contrast and draws attention to the important elements. The dark background with blue accents gives the page a professional, modern feel that stands out from traditional waste management websites.

### 2. Component Architecture
I implemented a clean, modular component structure:
- **SkipCard**: The core display component for each skip option
- **SkipGrid**: Container component that fetches and displays all available skips
- **ClientButton**: Client-side interactive button component
- **ClientSkipCardWrapper**: Wrapper to handle card selection logic
- **SectionHeading**: Reusable heading component for page sections

This separation of concerns improves code readability and maintainability.

### 3. State Management with Zustand
I chose Zustand for state management because of its:
- Lightweight footprint compared to Redux
- Simple API with hooks-based approach
- Perfect fit for managing the selected skip state across components

The skipStore.ts provides a clean interface for selecting and clearing skip selections.

### 4. Responsive Design
The grid layout adapts seamlessly from mobile to desktop:
- Single column on mobile
- 2 columns on small devices
- 3 columns on medium devices
- 4 columns on large screens
- 5 columns on extra-large screens

This ensures optimal viewing experience across all device sizes.

### 5. Visual Hierarchy & User Experience
I enhanced the visual hierarchy to make selection intuitive:
- Large, prominent images of each skip
- Clear indication of skip size and hire period
- Feature icons with visual indicators (checkmarks)
- Disabled states for unavailable options
- Interactive hover and selection states

### 6. Interactive Card Selection
I implemented two ways to select a skip:
1. Clicking anywhere on the card (excluding the button)
2. Clicking specifically on the "Select Skip" button

This dual-selection approach improves user experience by making the entire card interactive while maintaining explicit button functionality.

### 7. Error Handling
I added comprehensive error handling for API requests:
- Graceful error display if the API request fails
- Empty state handling when no skips are available
- Type-safe implementation with TypeScript

### 8. Next.js Integration
The solution works seamlessly with Next.js:
- Server components for data fetching
- Client components for interactive elements
- Proper use of "use client" directives
- Image optimization with Next.js Image component

## Technical Highlights

### Client/Server Component Split
I carefully divided functionality between server and client components:
- Server components: Data fetching, layout, static display
- Client components: Interactive elements, state management

### API Integration
Integrated with the provided API endpoint to fetch skip data by location:
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

### TypeScript Implementation
Used TypeScript throughout for type safety, including:
- Proper interface definitions for Skip data
- Type-safe props for components
- Type-safe state management

### Accessibility Considerations
- Semantic HTML structure
- Clear visual states for interactive elements
- Proper disabled states
- Sufficient color contrast

## Deployment

### Option 1: Standard Node.js Deployment
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/skip-selection-redesign.git
   cd skip-selection-redesign
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Build the production version:
   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```

4. Start the production server:
   ```bash
   npm start
   # or
   yarn start
   # or
   pnpm start
   ```

5. Your application will be available at `http://localhost:3000`

### Option 2: Docker Deployment
1. Make sure Docker is installed on your system

2. Clone the repository:
   ```bash
   git clone https://github.com/pranishpaudel/wewantskip.git
   cd wewantskip
   ```

3. Build the Docker image:
   ```bash
   docker build -t skip-selection-app .
   ```

4. Run the Docker container:
   ```bash
   docker run -p 3000:3000 skip-selection-app
   ```

5. Your application will be available at `http://localhost:3000`

### Cloud Deployment
For production environments, consider deploying to:
- Vercel (optimized for Next.js)
- AWS Amplify

Each platform provides specific deployment instructions you can follow from their documentation.

## Conclusion
My approach focused on creating a visually appealing, user-friendly interface while maintaining clean, maintainable code. The redesign emphasizes clear visual hierarchy, intuitive interactions, and responsive design to provide an optimal user experience across all devices.

The implementation demonstrates my skills in React, Next.js, TypeScript, state management, and modern UI design principles.