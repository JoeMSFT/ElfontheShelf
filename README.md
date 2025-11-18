# Elf on the Shelf Tracker 🎄

A magical website to track the journey of your elves from the North Pole to your home!

## Overview

This website tracks three elves for the House of Raleigh:
- **Luella's Elf** (Age 7) - Snowflake Jr.
- **Tormund's Elf** (Age 5) - Brave Lion
- **Isadora's Elf** (Coming Soon) - Little Star

## Features

- 📅 Real-time tracking from November 17-30, 2024
- ❄️ Animated snowfall effect
- 📍 Detailed journey timeline for each elf
- 🎨 Beautiful Christmas-themed design
- 📱 Fully responsive (works on phones, tablets, and computers)
- ✨ Dynamic status updates based on current date

## Files

- `index.html` - Main webpage structure
- `styles.css` - Styling and animations
- `script.js` - Dynamic tracking logic and data

## Deployment to houseofraleigh.com

### Option 1: Upload to Existing Hosting

If you already have hosting for houseofraleigh.com:

1. Upload these three files to your web server:
   - index.html
   - styles.css
   - script.js

2. Make sure they're in the root directory (or create a subdirectory like `/elf`)

3. Access via: `https://houseofraleigh.com/` or `https://houseofraleigh.com/elf/`

### Option 2: Use GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select branch and save
4. In your domain registrar (where you bought houseofraleigh.com):
   - Add a CNAME record pointing to your-username.github.io
5. In GitHub repository, add a file named `CNAME` containing: `houseofraleigh.com`

### Option 3: Use Netlify (Recommended - Free and Easy)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop this folder into Netlify
3. In Netlify, go to Domain Settings
4. Add custom domain: houseofraleigh.com
5. Follow Netlify's instructions to update your DNS settings

### Option 4: Use Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import this repository
3. Add custom domain in project settings
4. Update DNS settings as instructed

## Customization

### Update Dates or Status

Edit `script.js` and modify the `elfTrackingData` object to change:
- Delivery dates
- Status messages
- Locations
- Timeline events

### Change Styling

Edit `styles.css` to modify:
- Colors
- Fonts
- Animations
- Layout

### Add More Children

In `script.js`, add another entry to `elfTrackingData` and in `index.html` add another elf card section.

## Timeline

The website shows progressive updates:

- **Nov 17-21**: Elves preparing at North Pole
- **Nov 23-27**: Elves in transit
- **Nov 28-29**: Out for delivery
- **Nov 30**: Delivered to House of Raleigh!

The page automatically updates based on the current date, so kids can check daily for new updates!

## Browser Support

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

## Notes

- The website uses client-side JavaScript only (no server needed)
- All tracking data is contained in the script.js file
- The page refreshes status every hour automatically
- Completely safe for kids to use

## Magic! ✨

Watch the excitement build as the kids track their elves' magical journey from the North Pole to Dad's house!
