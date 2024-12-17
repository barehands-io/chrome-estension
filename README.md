
# Duplicate Tab Manager

A Chrome extension that automatically manages duplicate tabs by closing new duplicates and focusing on existing tabs.

## Features

- Automatically detects when a duplicate URL is opened in a new tab
- Switches focus to the existing tab with the same URL
- Closes the duplicate tab automatically
- Helps keep your browser organized and reduces tab clutter

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## How It Works

The extension listens for tab URL changes and:
1. Checks if the URL already exists in another tab
2. If a duplicate is found, it switches focus to the existing tab
3. Closes the newly opened duplicate tab

## Permissions Required

- `tabs`: To access and manage browser tabs

## Contributing

Feel free to submit issues and pull requests to improve the extension.

## License

[MIT License](LICENSE)