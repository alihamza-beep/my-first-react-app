# AI Coding Guidelines for React SPA with Firebase

## Architecture Overview
- **Framework**: React 19 with Vite build tool, deployed via Firebase Hosting
- **Routing**: React Router DOM with BrowserRouter wrapping App component
- **Styling**: Bootstrap 5 CSS framework with custom inline styles for components
- **Backend**: Firebase Firestore for CRUD operations on "products" collection
- **Component Structure**:
  - `pages/`: Route-level components (Home, About, CRUD operations)
  - `views/`: Page sections (e.g., homeViews/HeroSection)
  - `layouts/`: Persistent elements (Navbar, Footer)
  - `commons/reusables/`: Shared UI components (Button, InputField)

## Key Patterns
- **Firebase Integration**: Import `db` from `src/firebase/firebaseConfig.js` for Firestore operations
- **CRUD Operations**: Use Firestore SDK methods (`addDoc`, `getDoc`, `updateDoc`, `deleteDoc`) in async functions
- **Form Handling**: Controlled components with `useState`, prevent default on submit
- **Navigation**: `useNavigate` for programmatic routing, `useParams` for dynamic routes
- **Bootstrap Usage**: Apply classes like `container`, `card`, `btn btn-dark`, `form-control` for consistent UI
- **Asset Organization**: Images in `src/assets/imgs/`, videos in `src/assets/videos/`

## Development Workflow
- **Start Dev Server**: `npm run dev` (Vite with HMR)
- **Build**: `npm run build` (outputs to `dist/`)
- **Lint**: `npm run lint` (ESLint with React rules)
- **Preview**: `npm run preview` (serve built app locally)
- **Deploy**: Firebase CLI commands (not in package.json scripts)

## Code Examples
- **Add Product**: `await addDoc(collection(db, "products"), { name, price: Number(price), createdAt: new Date() })`
- **Fetch Single Item**: `const docSnap = await getDoc(doc(db, "products", id)); if (docSnap.exists()) setData(docSnap.data())`
- **Update Item**: `await updateDoc(doc(db, "products", id), formData)`
- **Route with Params**: `<Route path="/item/:id" element={<ViewSingleItem />} />`

## Conventions
- File extensions: `.jsx` for React components
- Import paths: Relative with `../` for parent directories
- State management: Local `useState` hooks, no global state library
- Error handling: Basic try/catch with console.error, alert for user feedback
- Component naming: PascalCase, default export functions

Reference: [App.jsx](src/App.jsx) for routing, [CreateItem.jsx](src/components/pages/CreateItem.jsx) for CRUD patterns</content>
<parameter name="filePath">c:\Users\HP\Desktop\my-first-react-app\.github\copilot-instructions.md