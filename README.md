# Slope Game Unblocked 76 - Gaming Portal

A free online gaming portal providing unblocked access to popular browser games. Built as a static website optimized for performance and accessibility.

## 🎮 Project Overview

This is a gaming portal website that hosts and provides access to unblocked browser games, primarily targeting users in restricted environments (schools, workplaces). The site features a collection of popular casual games that can be played directly in the browser.

**Live Site**: https://slopeonlinegame.github.io

## 🌟 Featured Games

- **Slope Game** (Flagship) - 3D endless runner
- Monkey Mart - Supermarket management game
- Geometry Dash - Rhythm-based platformer
- Subway Surfers - Endless runner
- Block Blast - Puzzle game
- Retro Bowl - Football game
- Drift Boss - Driving game
- And many more...

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (jQuery 3.4.1)
- **Styling**: Custom CSS with Autoprefixer, Google Fonts (Montserrat, Open Sans)
- **Libraries**: jQuery Validate, LazyLoad.js
- **Hosting**: GitHub Pages (Static hosting)
- **Analytics**: Google Analytics (gtag.js)
- **SEO**: Schema.org structured data, comprehensive meta tags

## 📁 Project Structure

```
/
├── index.html              # Homepage (Slope Game)
├── {game-name}.html        # Individual game pages
├── /game/                  # Self-hosted game files
│   ├── /slope/            # Slope game builds
│   ├── /monkey-mart/      # Monkey Mart files
│   └── /block-blast/      # Block Blast files
├── /themes/               # Theme assets
│   └── /slope-game/rs/
│       ├── /css/          # Stylesheets
│       ├── /js/           # JavaScript files
│       ├── /imgs/         # Theme images
│       └── /fonts/        # Web fonts
├── /data/                 # Original images
│   └── /image/
└── /cache/                # Optimized images
    └── /data/image/
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser
- A local web server (for testing)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/slopeonlinegame/slopeonlinegame.github.io.git
   cd slopeonlinegame.github.io
   ```

2. **Start a local server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx serve .
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Deployment

This is a static site hosted on GitHub Pages. To deploy:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Changes will be live within a few minutes.

## 📝 Adding a New Game

To add a new game to the portal:

1. **Create game HTML page** (e.g., `new-game.html`)
   - Copy structure from existing game page
   - Update meta tags (title, description, keywords)
   - Update game iframe source
   - Update breadcrumb navigation
   - Add game description content

2. **Add game images**
   - Place original image in `/data/image/game/`
   - Generate optimized versions in `/cache/data/image/game/`:
     - `game-name-m200x134.jpg` (thumbnail)
     - `game-name-m60x60.jpg` (favicon)
     - `game-name-m512x512.jpg` (large icon)

3. **Update navigation**
   - Add link to main navigation in all HTML files
   - Update `sitemap.xml`
   - Add to "Trending Games" sections

4. **Update SEO**
   - Add entry to `sitemap.xml`
   - Ensure proper meta tags and structured data

## 🎨 Design Guidelines

### HTML Structure
- Follow semantic HTML5 structure
- Use consistent class naming (BEM-like)
- Include proper ARIA labels for accessibility

### CSS Conventions
- Use BEM-like naming: `.game-item`, `.game-item__img`, `.game-item__title`
- Utility classes: `.lazy`, `.hidden`, `.center`
- State classes: `.is-active`, `.hidden_btn_close`

### Image Naming
- `m{W}x{H}` - Medium size (e.g., m200x134)
- `s{W}x{H}` - Small size (e.g., s100x100)
- `h{H}x` - Height-constrained (e.g., hx50)
- `w{W}x` - Width-constrained (e.g., w265x)

### Responsive Breakpoints
- Desktop: 1364px and above
- Tablet/Mobile: Below 1364px

## 🔧 Key Features

### Game Player
- **Fullscreen Mode**: Expand game to full browser window
- **Theater Mode**: Optimized viewing with controls at bottom
- **Lazy Loading**: Images load on scroll for better performance
- **Share Functionality**: Social media sharing buttons
- **Comments**: Discussion section for each game

### Navigation
- **Search**: Real-time game search
- **Categories**: Hot Games, New Games
- **Mobile Menu**: Responsive hamburger menu
- **Breadcrumbs**: Clear navigation path

### SEO Optimization
- Comprehensive meta tags (Open Graph, Twitter Cards)
- Schema.org structured data (LocalBusiness, WebSite)
- XML sitemap
- Robots.txt configuration
- Canonical URLs

## 📊 Analytics

Google Analytics is integrated with tracking ID: `G-DT2XM1TMPM`

Track:
- Page views
- Game plays (iframe interactions)
- User navigation patterns
- Search queries

## 🔒 Security & Privacy

- No user data collection beyond analytics
- External games loaded via secure iframes
- HTTPS enforced via GitHub Pages
- Privacy policy and terms of use pages included

## 🐛 Troubleshooting

### Images not loading
- Check if images exist in `/cache/data/image/`
- Verify lazy loading script is working
- Check browser console for errors

### Game iframe not displaying
- Verify iframe source URL is accessible
- Check for CORS issues
- Ensure iframe has proper dimensions

### Mobile menu not working
- Check jQuery is loaded
- Verify script.js is included
- Check for JavaScript errors in console

## 📈 Performance Optimization

- **Image Optimization**: Multiple sizes, lazy loading
- **CSS**: Minified, autoprefixed
- **JavaScript**: jQuery + minimal custom scripts
- **Caching**: Browser caching via GitHub Pages
- **CDN**: Google Fonts, external game content

## 🤝 Contributing

This is a static site project. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is for educational purposes. Individual games are property of their respective owners.

## 📞 Contact

For questions or issues, please refer to the contact page on the website.

---

**Last Updated**: December 2024
**Version**: 1.0.0
