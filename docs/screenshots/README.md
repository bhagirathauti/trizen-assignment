# Screenshots Guide

This directory contains screenshots for the main README.md file.

## Required Screenshots

To complete the documentation, please add the following screenshots:

### 1. banner.png
- Full-width banner image of the application
- Recommended size: 1200x600px
- Shows: Application name and main hero section

### 2. light-home.png
- Homepage in light mode
- Recommended size: 1200x800px
- Shows: Header, hero section, filters, and product grid

### 3. light-search.png
- Search functionality in light mode
- Recommended size: 1200x600px
- Shows: Search bar with autocomplete dropdown open

### 4. dark-home.png
- Homepage in dark mode
- Recommended size: 1200x800px
- Shows: Complete layout with dark theme applied

### 5. dark-product.png
- Product card close-up in dark mode
- Recommended size: 800x600px
- Shows: Product card with hover effect, ratings, and buy button

### 6. mobile.png
- Mobile view of the application
- Recommended size: 375x812px (iPhone size)
- Shows: Responsive layout on mobile device

## How to Capture Screenshots

### Method 1: Using Browser DevTools
1. Open the application in your browser
2. Press F12 to open DevTools
3. Click the device toolbar icon (Ctrl+Shift+M)
4. Select device size or custom dimensions
5. Take screenshot using browser's built-in tool or extension

### Method 2: Using Windows Snipping Tool
1. Press Win+Shift+S
2. Select area to capture
3. Save the image to this directory

### Method 3: Using Third-Party Tools
- **Lightshot**: Free screenshot tool with editing
- **Greenshot**: Open-source screenshot tool
- **ShareX**: Advanced screenshot tool with annotation

## Screenshot Tips

- Use high-quality, crisp images
- Ensure all text is readable
- Show meaningful content (actual product data)
- Maintain consistent browser chrome (or none)
- Use the same zoom level across screenshots
- Capture in good lighting (for visual clarity)

## Image Optimization

After capturing screenshots, optimize them:

```bash
# Using TinyPNG (online) or imagemagick (CLI)
magick convert input.png -quality 85 -resize 1200x output.png
```

## Current Status

- [ ] banner.png
- [ ] light-home.png
- [ ] light-search.png
- [ ] dark-home.png
- [ ] dark-product.png
- [ ] mobile.png

Once all screenshots are added, the README.md will display them automatically.
