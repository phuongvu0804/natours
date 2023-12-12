export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiaGFwaHVvbmcwODA0IiwiYSI6ImNscGF3aWFkaDBhejMyaXF0aTE0MXhtdGYifQ.8eJRGR_c_5cEMyqM1YPn4A';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/haphuong0804/clpb27l8v006n01po8jz52u0h',
    scrollZoom: false,
    //   center: [-122.5435226, 37.7764468],
    //   zoom: 4,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
