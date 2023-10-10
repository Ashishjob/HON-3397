import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Read the dataset into a DataFrame
df = pd.read_csv('sampleDataset.txt')

# Select columns that you want to calculate correlations for
selected_columns = [
    'CO_COconc_value',
    'O3_O3conc_value',
    'SO2_SO2Conc_value',
    'NOx_NO2conc_value',
    'NOy_NOyconc_value',
    'TRH_Temp_value',
    'TRH_RH_value',
    'Baro_Press_value',
    'RMY_WD_value',
    'RMY_WS_value',
]

# Create a new DataFrame with only the selected columns
selected_df = df[selected_columns]

# Calculate the correlation matrix
correlation_matrix = selected_df.corr()

# Set the aspect ratio of the entire figure
plt.figure(figsize=(12, 8))

# Create a heatmap to visualize the correlations
ax = sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', fmt=".2f", linewidths=0.5, square=True, annot_kws={"size": 10})

plt.title('Correlation Heatmap')

# Rotate the tick labels on the y-axis to prevent them from going outside
ax.set_yticklabels(ax.get_yticklabels(), rotation=0)

# Adjust the size of the color bar markers
cax = ax.collections[0].colorbar
cax.ax.tick_params(labelsize=10)  # Adjust the font size as needed

plt.tight_layout()
plt.show()
