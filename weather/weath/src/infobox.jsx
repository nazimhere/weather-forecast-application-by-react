import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function Infobox({ data }) {
  if (!data) {
    return (
      <div className="Infobox modern-empty">
        Search for a city to see weather
      </div>
    );
  }

  return (
    <div className="Infobox modern-card">
      <Card sx={{ maxWidth: 345 }} className="weather-card">
        <CardMedia
          sx={{ height: 140 }}
          image={`https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://images.ntmllc.com/v4/destination/India/Delhi/247199_SCN1_Delhi_iStock000001307820Small_ZC6EB8/Delhi-Scenery.jpg?tr=w-656%2Ch-390%2Cfo-auto`}  // Sunny default
          title={data.weather}
        />
        <CardContent className="enhanced-content">
          {/* City Header */}
          <Typography gutterBottom variant="h5" component="div" className="city-name">
            {data.city.toUpperCase()}
          </Typography>
          
          {/* Main Temperature - Prominent */}
          <Typography variant="h3" color="primary" className="main-temp">
            {Math.round(data.temp)}°C
          </Typography>
          
          {/* Feels Like */}
          <Typography variant="body1" className="feels-like">
            Feels like: {Math.round(data.feelsLike)}°C
          </Typography>
          
          {/* Weather Details Grid */}
          <div className="weather-stats">
            <div className="stat-item">
              <span className="stat-label">Humidity</span>
              <span className="stat-value">{data.humidity}%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">High</span>
              <span className="stat-value">{Math.round(data.tempMax)}°C</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Low</span>
              <span className="stat-value">{Math.round(data.tempMin)}°C</span>
            </div>
            <div className="stat-item full-width">
              <span className="weather-desc capitalize">{data.weather}</span>
            </div>
          </div>
        </CardContent>
        
        <CardActions className="card-actions">
          <Button size="small" className="action-btn">Share</Button>
          <Button size="small" className="action-btn">Map</Button>
        </CardActions>
      </Card>
    </div>
  );
}
