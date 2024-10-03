# Simple Weather App

This Weather App is a lightweight application built with HTML and JavaScript that provides real-time weather information based on user input or current location.

## Features

1. **Search Functionality**: Search for weather information of any city or location worldwide.
2. **Current Weather Display**: View current weather conditions including temperature, humidity, and wind speed.
3. **Geolocation**: Get weather information for your current location with one click.

## Setup

To run this Weather App, you'll need to obtain an API key from OpenWeatherMap.

### Getting an API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/) and sign up for a free account.
2. After signing in, go to your account dashboard and navigate to the "API Keys" section.
3. Generate a new API key or copy your existing one.

### Configuring the App

1. Open the `script.js` file in a text editor.
2. Find the line that looks like this:
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```
3. Replace `'YOUR_API_KEY_HERE'` with your actual API key, keeping the quotes.
4. Save the file.

## Running the App

1. Simply open the `index.html` file in a web browser.
2. The Weather App should load and be ready to use.

## Usage

- To search for a location, type the city name in the search bar and press enter or click the search button.
- To get weather for your current location, click the "Use My Location" button (make sure to allow location access in your browser).
- The app will display the current weather conditions for the specified location.

## File Structure

- `index.html`: The main HTML file that structures the app.
- `script.js`: Contains all the JavaScript code for fetching weather data and updating the UI.
- `styles.css`: (If you have one) Contains all the styles for the app.

## Contributing

Contributions to improve the Weather App are welcome. Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

Enjoy using the Weather App!
