# Trizen - Modern E-commerce Platform

A full-stack e-commerce application featuring a sleek modern UI with dark/light mode theming, real-time search with autocomplete, advanced filtering, animated hero section, and paginated product browsing. Built with React 19, TypeScript, Node.js, Express, and MongoDB Atlas.

![Trizen Banner](./docs/screenshots/banner.png)

---

## 📸 Screenshots

### Homepage - Light Mode
![Homepage Light Mode](./docs/screenshots/light-home.png)
*Modern homepage with animated hero section, category filters, and product grid*

### Search Results - Light Mode  
![Search Results](./docs/screenshots/light-search.png)
*Real-time search with autocomplete dropdown (max 5 suggestions) and result count*

### Homepage - Dark Mode
![Homepage Dark Mode](./docs/screenshots/dark-home.png)
*Smooth dark theme with consistent color palette and excellent contrast*

### Product Cards - Dark Mode
![Product Cards Dark Mode](./docs/screenshots/dark-product.png)
*Detailed product cards with star ratings, buy buttons, and hover effects*

### Mobile Responsive View
![Mobile Responsive](./docs/screenshots/mobile.png)
*Fully responsive design optimized for mobile, tablet, and desktop screens*

---

## ✨ Key Features

### 🎨 Frontend Features
- **Animated Hero Section** - Eye-catching banner with 9 animated background icons (shopping bag, truck, gift, cart, tag, credit card, star, lightning, location pin) in pink/green color scheme
- **Trending Badge** - Rotating lightning icon with "Trending Now" label
- **Feature Highlights** - 3 animated feature boxes showcasing Quality Products, Fast Shipping, Secure Payments
- **Dark/Light Mode** - Seamless theme switching with localStorage persistence and smooth transitions
- **Google Fonts Integration** - Roboto for body text, Poppins for headings (optimized with preconnect)
- **Real-time Search** - Autocomplete dropdown with max 5 product suggestions, case-insensitive matching
- **Search Results Display** - Banner showing "Showing results for X" with product count and clear button
- **Category Filtering** - Dynamic sidebar with product counts per category
- **Pagination System** - Navigate through products 10 per page with arrow buttons and numbered page controls
- **Smooth Scroll** - Auto-scroll to top when changing pages for better UX
- **Star Ratings** - Precise rating display with filled, half-filled, and empty stars using Math.floor/ceil logic
- **Image Fallback** - Elegant SVG gradient placeholder for missing product images
- **Buy Now Buttons** - Clear call-to-action on every product card
- **Hover Effects** - Card lift, image zoom, and smooth transitions throughout
- **Fully Responsive** - 1/2/3/4 column grid adapts to screen size (mobile, tablet, desktop)

### 🔧 Backend Features
- **MVC Architecture** - Clean separation: Models, Views (JSON API), Controllers
- **RESTful API Design** - Standard HTTP methods and status codes
- **MongoDB Atlas Integration** - Cloud-hosted database with Mongoose ODM
- **Product Schema** - name, category, price, rating, image, description with validation (min/max constraints)
- **Search Endpoint** - GET /search?q=term with regex pattern matching, special character escaping
- **CORS Support** - Cross-origin resource sharing enabled for frontend integration
- **Request Logging** - Morgan middleware for HTTP request/response logging
- **Error Handling** - Graceful degradation, consistent error responses
- **Database Connection** - Automatic retry logic, health check endpoint
- **ID Normalization** - Converts MongoDB _id to frontend-friendly id field

### 🚀 DevOps Features
- **Environment Variables** - Secure configuration with .env files
- **Production Builds** - Tree-shaking, minification, compression for frontend

---

## 🛠️ Technology Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | Modern UI library with hooks and concurrent rendering |
| TypeScript | 5.9.3 | Type-safe JavaScript with strict mode enabled |
| Vite | 7.2.4 | Lightning-fast build tool with HMR and optimized bundling |
| Tailwind CSS | 3.4.18 | Utility-first CSS framework with class-based dark mode |
| PostCSS | 8.5.6 | CSS processing pipeline with autoprefixer |
| Google Fonts | - | Roboto (300/400/500/700) + Poppins (400/500/600/700/800) |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 20.x | JavaScript runtime environment |
| Express | 4.18.2 | Fast, minimalist web framework |
| MongoDB Atlas | Cloud | Fully managed cloud database service |
| Mongoose | 7.5.0 | Elegant MongoDB object modeling with schema validation |
| Morgan | 1.10.0 | HTTP request logger middleware |
| CORS | 2.8.5 | Cross-Origin Resource Sharing middleware |
| dotenv | 16.1.4 | Environment variable loader |

### Development Tools
| Tool | Purpose |
|------|---------|
| ESLint | JavaScript/TypeScript linting with React rules |
| Nodemon | Auto-restart server on file changes |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **MongoDB Atlas account** (or local MongoDB installation)

---

## 💻 Local Development Setup

### Step 1: Clone Repository
```bash
git clone <repository-url>
cd Trizen-Assignment
```

### Step 2: Backend Setup

1. **Navigate to server directory:**
```bash
cd server
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env` file in `server/` directory:**
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<database>?retryWrites=true&w=majority
PORT=4000
NODE_ENV=development
```

> **Note:** Replace `<username>`, `<password>`, and `<database>` with your MongoDB Atlas credentials.

4. **Start development server:**
```bash
npm run dev
```

Backend will run at: **http://localhost:4000**

**Available scripts:**
- `npm start` - Start production server
- `npm run dev` - Start with nodemon (auto-reload)
- `npm run db:inspect` - Inspect database connection and data

### Step 3: Frontend Setup

1. **Navigate to client directory:**
```bash
cd client
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

Frontend will run at: **http://localhost:5173**

**Available scripts:**
- `npm run dev` - Start Vite dev server with HMR
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on all source files

### Step 4: Access Application

Open your browser and navigate to:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:4000
- **Health Check:** http://localhost:4000/ (returns `{ status: "ok", name: "Trizen-Assignment API" }`)

---

## 🔌 API Documentation

### Base URL
- **Development:** http://localhost:4000

### Endpoints

#### 1. Health Check
```http
GET /
```

**Response:**
```json
{
  "status": "ok",
  "name": "Trizen-Assignment API"
}
```

---

#### 2. Get All Products
```http
GET /api/products
```

**Response:** Array of products with normalized IDs
```json
[
  {
    "id": "507f1f77bcf86cd799439011",
    "name": "Smart TV 55-inch",
    "category": "Electronics",
    "price": 799.99,
    "rating": 4.5,
    "image": "https://example.com/tv.jpg",
    "description": "4K Ultra HD Smart LED TV",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
]
```

**Notes:**
- Returns first 20 products from database
- MongoDB `_id` field is normalized to `id` for frontend compatibility
- Products are fetched from `products` collection in MongoDB

---

#### 3. Get Product by ID
```http
GET /api/products/:id
```

**Parameters:**
- `id` (string, required) - MongoDB ObjectId or normalized ID

**Response:** Single product object
```json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "Smart TV 55-inch",
  "category": "Electronics",
  "price": 799.99,
  "rating": 4.5,
  "image": "https://example.com/tv.jpg",
  "description": "4K Ultra HD Smart LED TV"
}
```

**Error Response (404):**
```json
{
  "message": "Product not found"
}
```

---

#### 4. Search Products
```http
GET /search?q=<search_term>
```

**Query Parameters:**
- `q` (string, required) - Search term (case-insensitive, partial matching)

**Response:** Max 5 matching products
```json
[
  {
    "id": "507f1f77bcf86cd799439011",
    "name": "Smartphone 128GB",
    "category": "Electronics",
    "price": 599.99,
    "rating": 4.7,
    "image": "https://example.com/phone.jpg"
  },
  {
    "id": "507f1f77bcf86cd799439012",
    "name": "Smart Watch",
    "category": "Accessories",
    "price": 199.99,
    "rating": 4.3,
    "image": "https://example.com/watch.jpg"
  }
]
```

**Features:**
- Case-insensitive search (converts to lowercase)
- Partial matching (searches within product names)
- Escapes special regex characters
- Limits results to 5 items max
- Returns empty array if no matches found

**Example:**
```bash
curl "http://localhost:4000/search?q=smart"
# Returns Smart TV, Smartphone, Smart Watch, etc. (max 5)
```

---

## 💾 Database Schema

### Product Collection

**Collection Name:** `products`  
**Database:** Configured in MONGO_URI

| Field | Type | Required | Constraints | Description |
|-------|------|----------|-------------|-------------|
| `name` | String | Yes | - | Product name (e.g., "Smart TV 55-inch") |
| `category` | String | Yes | - | Product category (e.g., "Electronics", "Clothing") |
| `price` | Number | Yes | min: 0 | Price in USD (e.g., 799.99) |
| `rating` | Number | Yes | min: 0, max: 5 | Customer rating (e.g., 4.5) |
| `image` | String | Yes | Valid URL | Product image URL |
| `description` | String | No | - | Detailed product description |
| `createdAt` | Date | Auto | - | Timestamp when document was created |
| `updatedAt` | Date | Auto | - | Timestamp when document was last updated |

**Mongoose Schema:**
```javascript
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    rating: { type: Number, required: true, min: 0, max: 5 },
    image: { type: String, required: true },
    description: { type: String }
  },
  { timestamps: true }
)
```

**Sample Document:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Classic White Shirt",
  "category": "Clothing",
  "price": 49.99,
  "rating": 4.5,
  "image": "https://example.com/shirt.jpg",
  "description": "Premium cotton blend dress shirt",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

---

## 📁 Project Structure

```
Trizen-Assignment/
│
├── client/                          # React Frontend
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── components/             # React Components
│   │   │   ├── Header.tsx          # Navbar with search, theme toggle, navigation
│   │   │   ├── Hero.tsx            # Animated hero banner with 9 icons, badges
│   │   │   ├── SearchBar.tsx       # Search input with autocomplete dropdown
│   │   │   ├── Filters.tsx         # Category filter sidebar
│   │   │   ├── ProductGrid.tsx     # Responsive product grid (1/2/3/4 columns)
│   │   │   └── ProductCard.tsx     # Individual product card with stars, buy button
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx    # Dark/light mode state management
│   │   ├── assets/                 # Images, icons, etc.
│   │   ├── App.tsx                 # Main app component with state, pagination
│   │   ├── main.tsx                # React entry point (renders App in StrictMode)
│   │   ├── types.ts                # TypeScript interfaces (Product)
│   │   └── index.css               # Global styles, Tailwind directives, animations
│   ├── vite.config.ts               # Vite config with dev server proxy
│   ├── tailwind.config.js           # Tailwind CSS configuration
│   ├── tsconfig.json                # Base TypeScript config
│   ├── tsconfig.app.json            # App-specific TypeScript config
│   ├── tsconfig.node.json           # Node-specific TypeScript config
│   ├── eslint.config.js             # ESLint rules for React/TypeScript
│   └── package.json                 # Frontend dependencies and scripts
│
├── server/                          # Node.js Backend
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js               # MongoDB connection with Mongoose
│   │   ├── controllers/
│   │   │   ├── productController.js # Product CRUD handlers
│   │   │   └── searchController.js  # Search logic with regex
│   │   ├── models/
│   │   │   └── productModel.js     # Mongoose Product schema
│   │   ├── routes/
│   │   │   ├── productRoutes.js    # /api/products endpoints
│   │   │   └── searchRoutes.js     # /search endpoint
│   │   └── index.js                # Express app setup, middleware, server start
│   ├── scripts/
│   │   └── inspectDb.js            # Database inspection utility
│   ├── .env                        # Environment variables (not in git)
│   └── package.json                # Backend dependencies and scripts
│
├── docs/                           # Documentation
│   ├── BACKEND.md                  # Backend API architecture documentation
│   ├── FRONTEND.md                 # Frontend component documentation
│   └── screenshots/                # Application screenshots
│       ├── README.md               # Screenshot capture guide
│       ├── banner.png              # Homepage banner
│       ├── light-home.png          # Light mode homepage
│       ├── light-search.png        # Light mode search results
│       ├── dark-home.png           # Dark mode homepage
│       ├── dark-product.png        # Dark mode product cards
│       └── mobile.png              # Mobile responsive view
│
└── README.md                       # This file
```

---

## 🎯 Feature Deep Dive

### Animated Hero Section
- **9 Background Icons:** Shopping bag, truck, gift, cart, tag, credit card, star, lightning, location
- **Color Scheme:** Pink-700 and green-700 with opacity variations
- **Animations:** bounce-slow, float, pulse-slow with staggered delays
- **Trending Badge:** Rotating lightning icon with "Trending Now" label
- **Feature Boxes:** Quality Products, Fast Shipping, Secure Payments with hover effects
- **CTA Button:** "Shop Now" with arrow icon that slides on hover

### Search Functionality
1. **Type** in the search bar (header or main input)
2. **See** autocomplete suggestions (max 5 products, case-insensitive)
3. **Click** a suggestion or press Enter to search
4. **View** "Showing results for X" banner with product count
5. **Clear** search using X icon or "Clear search" button
6. **Filter** search results by category for refined browsing

### Category Filtering
- **Sidebar** shows all available categories with product counts
- **Click** any category to filter products instantly
- **"All Products"** option to show entire catalog
- **Works with search** - apply both filters simultaneously
- **Auto-reset pagination** when filters change

### Pagination System
- **10 products per page** for optimal performance
- **Arrow navigation** - Previous/Next buttons with disabled states
- **Numbered pages** - Click specific page numbers
- **Smooth scroll** - Auto-scrolls to top when page changes
- **Current page indicator** - Highlighted page number
- **Auto-reset** - Returns to page 1 when search/filter changes

### Dark Mode
- **Toggle** using sun/moon icon in header
- **Persists** across page reloads via localStorage
- **Smooth transitions** on all color changes
- **Optimized contrast** for readability in both themes
- **Custom animations** adapt to theme (icon colors, backgrounds)

### Star Ratings
- **Precise display:** Filled stars (Math.floor), half star (modulo check), empty stars (5 - Math.ceil)
- **Example:** 4.7 rating → 4 filled + 1 half + 0 empty
- **Hover effect:** Stars pulse on card hover
- **Accessible:** ARIA labels for screen readers

---

## 🔧 Configuration Files

### Vite Configuration (`client/vite.config.ts`)
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
      '/search': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
```

### Tailwind Configuration (`client/tailwind.config.js`)
```javascript
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### TypeScript Configuration
- **tsconfig.json** - Base config for the entire project
- **tsconfig.app.json** - App-specific settings (strict mode, JSX)
- **tsconfig.node.json** - Node.js tooling (Vite config files)

---

## 🌐 Environment Variables

### Backend (.env in `server/`)
```env
# MongoDB Connection String
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<database>?retryWrites=true&w=majority

# Server Port
PORT=4000

# Node Environment
NODE_ENV=development
```

**Important:**
- Never commit `.env` files to version control
- Use `.env.example` as a template
- For MongoDB Atlas:
  - Whitelist your IP address in Network Access
  - Create database user with read/write permissions
  - Use connection string from Atlas dashboard

---

## 🐛 Troubleshooting

### Backend Issues

#### Database Connection Fails
```bash
# Check MongoDB URI syntax
cat server/.env

# Test connection manually
cd server
npm run db:inspect

# MongoDB Atlas checklist:
# 1. Whitelist IP address (0.0.0.0/0 for development)
# 2. Verify database user credentials
# 3. Check cluster status in Atlas dashboard
# 4. Ensure correct database name in URI
```

#### Port Already in Use
```bash
# Windows - Find process on port 4000
netstat -ano | findstr :4000

# Kill process (replace <PID> with actual process ID)
taskkill /PID <PID> /F

# Mac/Linux - Find and kill process
lsof -ti:4000 | xargs kill -9
```

#### Server Won't Start
```bash
# Reinstall dependencies
cd server
rm -rf node_modules package-lock.json
npm install

# Check Node version (should be 18+)
node --version

# Run with verbose logging
npm run dev
```

---

### Frontend Issues

#### Dark Mode Not Working
```bash
# Verify Tailwind v3 installation
cd client
npm list tailwindcss

# Should show: tailwindcss@3.x.x
# If showing @tailwindcss/vite, fix with:
npm uninstall @tailwindcss/vite
npm install -D tailwindcss@^3 postcss autoprefixer
```

#### API Calls Return HTML Instead of JSON
```bash
# Ensure backend is running
cd server
npm run dev

# Check Vite proxy configuration
cat client/vite.config.ts

# Restart frontend dev server
cd client
npm run dev
```

#### Build Fails with TypeScript Errors
```bash
# Clear caches and rebuild
cd client
rm -rf node_modules .vite dist
npm install
npm run build

# Check TypeScript config
cat tsconfig.json
cat tsconfig.app.json
```

#### Styles Not Applying
```bash
# Verify Tailwind setup
cd client
cat tailwind.config.js    # Check content paths
cat postcss.config.js      # Check plugins

# Clear Vite cache
rm -rf .vite
npm run dev
```

---

## 📚 Additional Documentation

For comprehensive technical documentation, see:

- **[Backend Documentation](./docs/BACKEND.md)** - API design patterns, MVC architecture, database setup, error handling
- **[Frontend Documentation](./docs/FRONTEND.md)** - Component tree, styling system, state management, responsive design

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/AmazingFeature`
3. **Commit** your changes: `git commit -m 'Add AmazingFeature'`
4. **Push** to branch: `git push origin feature/AmazingFeature`
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style (ESLint rules)
- Write meaningful commit messages (Conventional Commits)
- Add comments for complex logic
- Update documentation for new features
- Test thoroughly before submitting PR

---

## 📝 License

ISC License

---

## 👤 Author

**Trizen Team**

---

## 🙏 Acknowledgments

- **Design Inspiration:** Modern e-commerce platforms
- **Icons:** Heroicons (MIT License)
- **Fonts:** Google Fonts (Roboto, Poppins)
- **Styling:** Tailwind CSS
- **Database:** MongoDB Atlas

---

## 📞 Support

For issues and questions:
- Open an issue in the repository
- Check documentation in `docs/` folder
- Review troubleshooting section above
- Consult API documentation for endpoint details

---

**Built with ❤️ using React 19, TypeScript, Node.js, Express, and MongoDB**
