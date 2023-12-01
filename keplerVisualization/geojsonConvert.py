import geopandas as gpd

# Load GeoJSON file
geojson_file = 'keplerVisualization\Texas_Railroads.geojson'
gdf = gpd.read_file(geojson_file)

# Save as CSV
csv_file = 'keplerVisualization\Texas_Railroads.csv'
gdf.to_csv(csv_file, index=False)
