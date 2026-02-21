import { useState } from 'react';
import Searchbox from './searchbox';
import Infobox from './infobox';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="app-wrapper one-screen premium-ui">
      <div className="floating-particles"></div>
      <div className="split-container">
        <div className="left-panel glass-panel">
          <div className="title-glow">
            <h1 className="main-title premium-title">🌦️ WeatherLive</h1>
          </div>
          <Searchbox setData={setWeatherData} />
        </div>
        <div className="right-panel glass-panel">
          <Infobox data={weatherData} />
        </div>
      </div>
    </div>
  );
}

export default App;
