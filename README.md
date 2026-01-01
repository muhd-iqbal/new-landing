# Portfolio Website - Muhamad Iqbal

A modern, responsive portfolio website built with Vite and Tailwind CSS, featuring a GitHub-inspired dark theme design.

## 🚀 Tech Stack

- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Vanilla JavaScript** - For interactions and animations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation & Setup

Follow these steps to get your portfolio running locally:

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

This will install all required packages:
- `vite` - Development server and build tool
- `tailwindcss` - CSS framework
- `postcss` - CSS processing
- `autoprefixer` - Automatic vendor prefixing

### 2. Start Development Server

Once dependencies are installed, start the development server:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The terminal will show you a local URL (usually `http://localhost:5173`). Open this in your browser.

### 3. Make Changes

The development server has **hot module replacement (HMR)**, which means:
- Save any file and see changes instantly in the browser
- No need to manually refresh
- CSS changes apply without page reload

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── style.css          # Main CSS file with Tailwind directives
│   └── main.js            # JavaScript for interactions
├── index.html             # Main HTML file
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── .gitignore            # Git ignore file
└── README.md             # This file
```

## 🎨 Customization Guide

### 1. Replace Profile Photo

In `index.html`, find this line:
```html
<img src="https://via.placeholder.com/300x300/21262d/58a6ff?text=Your+Photo+Here"
```

Replace the `src` with your actual photo path:
```html
<img src="/src/assets/your-photo.jpg"
```

### 2. Update Personal Information

Search for `<!-- PLACEHOLDER:` comments in `index.html` to find areas to customize:
- Personal tagline
- Resume/CV link
- Social media links
- Project descriptions
- Blog section (if desired)

### 3. Modify Colors

Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  'bg-primary': '#0d1117',      // Main background
  'accent-blue': '#58a6ff',      // Primary accent color
  // ... modify as needed
}
```

### 4. Add Your Projects

In `index.html`, find the "Featured Projects" section and duplicate the project card template to add your own projects.

## 🏗️ Building for Production

When you're ready to deploy your portfolio:

### 1. Build the Project

```bash
npm run build
```

or

```bash
yarn build
```

This creates an optimized production build in the `dist/` folder.

### 2. Preview Production Build

Test the production build locally:

```bash
npm run preview
```

or

```bash
yarn preview
```

### 3. Deploy

Upload the contents of the `dist/` folder to your hosting service:

#### Popular Hosting Options:
- **Vercel**: `npm i -g vercel` then `vercel`
- **Netlify**: Drag and drop `dist/` folder to netlify.com
- **GitHub Pages**: Push to GitHub and enable Pages
- **Traditional hosting**: Upload `dist/` contents via FTP

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🎯 Features

- ✅ Fully responsive design
- ✅ GitHub-inspired dark theme
- ✅ Smooth scroll animations
- ✅ Intersection observer for fade-in effects
- ✅ Custom scrollbar styling
- ✅ Optimized performance
- ✅ SEO-friendly structure
- ✅ Production-ready build

## 🔧 Troubleshooting

### Issue: Port already in use
**Solution**: Vite will automatically try the next available port, or you can specify one:
```bash
npm run dev -- --port 3000
```

### Issue: Changes not reflecting
**Solution**: 
1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Restart the dev server

### Issue: Build errors
**Solution**: 
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Try building again

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

If you have questions or need help:
- Check the [Vite documentation](https://vitejs.dev/)
- Check the [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Review the comments in the code files

---

**Happy coding! 🚀**