import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Read the dataset into a DataFrame
df = pd.read_csv('sampleDataset.txt')

# Convert 'dateGMT' and 'timeGMT' columns to a single datetime column
df['datetime'] = pd.to_datetime(df['dateGMT'] + ' ' + df['timeGMT'], format='%y/%m/%d %H:%M:%S')

# Set 'datetime' column as the index
df.set_index('datetime', inplace=True)

# Plot data for specific columns
plt.figure(figsize=(12, 6))
# plt.plot(df.index, df['CO_COconc_value'], label='CO Concentration')
plt.plot(df.index, df['O3_O3conc_value'], label='O3 Concentration')
# plt.plot(df.index, df['SO2_SO2Conc_value'], label='SO2 Concentration')
# plt.plot(df.index, df['NOx_NO2conc_value'], label='NOx Concentration')
# plt.plot(df.index, df['NOy_NOyconc_value'], label='NOy Concentration')
plt.xlabel('Time')
plt.ylabel('Concentration')
plt.title('Air Quality Data Over Time')
plt.legend()
plt.grid(True)

# Show the plot
plt.tight_layout()
plt.show()