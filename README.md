
# 🎨 ColorShare

A simple and intuitive React project for sharing, saving, and managing color codes. ColorShare lets users easily work with color codes in various formats like HEX, RGB, and HSL, making it an essential tool for designers, developers, and color enthusiasts.

## 🚀 Features

- **Pick Colors**: Use the integrated color picker to select colors and instantly view them in HEX, RGB, and HSL formats.
- **Save & Share**: Save favorite colors to a personal collection and share them through a unique link.
- **Format Conversion**: Seamlessly convert between HEX, RGB, and HSL color formats.
- **Copy to Clipboard**: Quickly copy color codes to the clipboard for convenient use in other projects.
- **Dark Mode Support**: Experience the app in light or dark mode, with your preference saved in local storage.

## 🎯 Live Demo

Check out the live demo [here](https://colorshare.skript.zip/)

## 📦 Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/CodeskStudio/colorshare-react-app.git
   cd colorshare-react-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the App**:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` to view the app in your browser.

## 🛠️ Usage

1. Choose a color using the color picker or enter a specific color code.
2. View the color code in multiple formats (HEX, RGB, HSL).
3. Save colors to your collection for quick reference and reuse.
4. Share saved colors with others using a generated link.
5. Use the **Dark Mode Toggle** for an optimized viewing experience.

## 📁 Project Structure

Here's a brief overview of the project structure:

```
colorshare/
├── src/
│   ├── components/
│   │   ├── ColorCode.jsx        # Displays individual color codes (HEX, RGB, HSL) with copy-to-clipboard
│   │   ├── ColorPicker.jsx      # Color picker component using react-colorful
│   │   ├── DarkModeToggle.jsx   # Dark mode toggle button
│   │   ├── Footer.jsx           # Footer with credits and links
│   │   ├── SavedColors.jsx      # Manages and displays saved colors with options for copying and deleting
│   ├── utils/
│   │   ├── colorUtils.js        # Utility functions for color conversions (HEX, RGB, HSL) and random color generation
│   ├── App.jsx                  # Main component housing color picker and saved colors
│   ├── index.css                # CSS styles --> including Tailwind
│   └── index.js                 # Entry point for the React app
└── tailwind.config.js           # Tailwind CSS configuration
```

## 🧪 Testing

To run tests (if you've added tests for functions or components), use the following command:

```bash
npm test
```

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Open a pull request.

## 📜 License

This project is licensed under the MIT License.

## 📝 Acknowledgments

Special thanks to the contributors (aka. `ChatGPT`) and libraries that helped make this project possible, including `react-colorful` for the color picker, `color-namer` for naming color codes, `react-hot-toast` for notifications, and Tailwind CSS for styling.