import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import numpy as np

# Load the CSV files
asthma_data = pd.read_csv('keplerVisualization\Asthma_Cases.csv')
railroad_data = pd.read_csv('keplerVisualization\Texas_Railroads.csv')

# Check for common 'WKT' values
common_wkt_values = set(asthma_data['WKT']).intersection(railroad_data['WKT'])

# Check for 'WKT' values in Texas_Railroads.csv contained within Asthma_Cases.csv
common_wkt_values_within = set(railroad_data[railroad_data['WKT'].str.contains('|'.join(common_wkt_values))]['WKT'])

if not common_wkt_values_within:
    print("No common 'WKT' values found within Texas_Railroads.csv. Unable to perform linear regression.")
    exit()

# Merge the dataframes on the common column 'WKT'
merged_data = pd.merge(asthma_data, railroad_data[railroad_data['WKT'].isin(common_wkt_values_within)], on='WKT', how='inner')

# Select relevant columns for the linear regression model
X = merged_data[['asthma_avg', 'SHAPE_Length']]
y = merged_data['SHAPE_Length']

# Check if there are enough samples for train-test split
if len(X) == 0 or len(y) == 0:
    print("Insufficient data for train-test split. Unable to perform linear regression.")
    exit()

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train the linear regression model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions on the test set
predictions = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, predictions)
rmse = np.sqrt(mse)

# Print the coefficients and evaluation metrics
print('Coefficients:', model.coef_)
print('Intercept:', model.intercept_)
print('Root Mean Squared Error (RMSE):', rmse)
