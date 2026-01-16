// Initialize map
var map = L.map('serviceMap').setView([17.7227, 79.1518], 11); // Jangaon coords

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add marker
L.marker([17.385, 78.4867]).addTo(map)
  .bindPopup('TowingVan Service - Jangaon')
  .openPopup();

// Example service area circle
L.circle([17.7227, 79.1518], {
  radius: 15000,
  color: 'blue',
  fillColor: '#aaddff',
  fillOpacity: 0.3
}).addTo(map);