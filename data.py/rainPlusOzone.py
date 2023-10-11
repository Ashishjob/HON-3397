import pandas as pd

# Read the data from the text file
df = pd.read_csv('data.py\sampleDataset.txt', sep=',')

# Calculate the correlation between Rain_Precip_value and O3_O3conc_value
correlation = df['Rain_Precip_value'].corr(df['O3_O3conc_value'])

import matplotlib.pyplot as plt

# Create a scatter plot
plt.figure(figsize=(8, 6))
plt.scatter(df['Rain_Precip_value'], df['O3_O3conc_value'], alpha=0.5)
plt.title('Scatter Plot: Rainfall vs. O3 Concentration')
plt.xlabel('Rain_Precip_value')
plt.ylabel('O3_O3conc_value')
plt.grid(True)
plt.show()