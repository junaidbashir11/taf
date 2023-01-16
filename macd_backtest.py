# -*- coding: utf-8 -*-
"""Untitled5.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1HoXbe1mVhJ2SRK5eKma7QbgnYv_4xla8
"""

import requests
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

def get_historical_data(symbol, interval, start_date, fast_period, slow_period, signal_period):
    # api_key ="052fbd51564d4652972d7e7cb2686c57"
    api_key ="d681b6792c4145a0a7e2f44756207543"
    api_url = f'https://api.twelvedata.com/time_series?symbol={symbol}&interval={interval}&start_date={start_date}&end_date={end_date}&apikey={api_key}'
    raw_df = requests.get(api_url).json()
    df = pd.DataFrame(raw_df['values']).iloc[::-1].set_index('datetime').astype(float)
    df = df[df.index >= start_date]
    df.index = pd.to_datetime(df.index)

    api_url = f'https://api.twelvedata.com/macd?symbol={symbol}&interval={interval}&start_date={start_date}&end_date={end_date}&fast_period = {fast_period}&slow_period={slow_period}&signal_period={signal_period}&&apikey={api_key}'
    raw_df = requests.get(api_url).json()
    df1 = pd.DataFrame(raw_df['values']).iloc[::-1].set_index('datetime').astype(float)
    df1 = df1[df1.index >= start_date]
    df1.index = pd.to_datetime(df1.index)
    df = pd.concat([df, df1], axis=1, join='inner')
    return df
symbol = 'SQ'
interval = '1h'
start_date = '2022-06-10'
end_date = '2023-01-10'
fast_period = 12
slow_period = 26
signal_period = 15

df = get_historical_data(symbol, interval, start_date, fast_period, slow_period, signal_period)

df['positive_crossover'] = (df['macd'] > df['macd_signal']) & (df['macd'].shift(1) < df['macd_signal'].shift(1))
df['negative_crossover'] = (df['macd'] < df['macd_signal']) & (df['macd'].shift(1) > df['macd_signal'].shift(1))
df

# Initialize variables
position = None
entry_price = 0
stop_loss = -5
take_profit = 2
investment_amount = 10000
portfolio_amount = investment_amount


# Initialize performance metrics

curr_profit=0
# Initialize trades dataframe
trades = []
for index, row in df.iterrows():

    if position != None:
        curr_profit = (row['close'] - entry_price) / entry_price * 100
    # Check for positive crossover
    if row['positive_crossover'] and position == None and portfolio_amount > 0:
        # Take long position
        position = "long"
        entry_price = row['close']
        shares = portfolio_amount // entry_price
        trades.append({"Date": row.name, "Type": "Buy", "Shares": shares, "Price": entry_price, "Portfolio_Amount": portfolio_amount})
        portfolio_amount -= shares*entry_price

    # Check for negative crossover
    elif row['negative_crossover'] and portfolio_amount > 0:
        if position == "long":
            #Sell
            position = None
            amt = shares * row['close']
            portfolio_amount += amt
            trades.append({"Date": row.name, "Type": "negCross_sell", "Shares": shares, "Price": row['close'], "Profit": curr_profit, "Portfolio_Amount": portfolio_amount})
        
        elif position == None:
            #Short
            position = "short"
            entry_price = row['close']
            shares = portfolio_amount // entry_price
            trades.append({"Date": row.name, "Type": "Short", "Shares": shares, "Price": entry_price, "Portfolio_Amount": portfolio_amount})
            portfolio_amount -= shares*entry_price
          
    
    elif position == "short":
        curr_profit = (entry_price - row['close']) / row['close'] * 100

        #BuyMore
        if row['positive_crossover']:
            position = "long"
            x = shares
            amt = (shares * entry_price) +((shares * entry_price) * curr_profit / 100)
            portfolio_amount += amt
            # trades.append({"Date": row.name, "Type": "Cover", "Shares": shares, "Price": row['close'], "Profit": curr_profit, "Portfolio_Amount": portfolio_amount})
            entry_price = row['close']
            shares = portfolio_amount // entry_price
            x = shares + x
            trades.append({"Date": row.name, "Type": "cover", "Shares": x, "Price": entry_price, "Profit": curr_profit, "Portfolio_Amount": portfolio_amount})
            portfolio_amount -= shares*entry_price

        elif curr_profit >= take_profit:
            position = None
            amt = (shares * entry_price) +((shares * entry_price) * curr_profit / 100)
            portfolio_amount += amt
            trades.append({"Date": row.name, "Type": "Take profit buy	", "Shares": shares, "Price": row['close'], "Profit": curr_profit, "Portfolio_Amount": portfolio_amount})

        elif curr_profit <= stop_loss:
            #cover
            position = None
            amt = (shares * entry_price) +((shares * entry_price) * curr_profit / 100)
            portfolio_amount += amt
            trades.append({"Date": row.name, "Type": "Cover", "Shares": shares, "Price": row['close'], "Profit": curr_profit, "Portfolio_Amount": portfolio_amount})
        

    # Check if there is an open position
    if position == "long":
      if (curr_profit >= take_profit or curr_profit <= stop_loss):
        position = None
        amt = shares * row['close']
        portfolio_amount += amt
        trades.append({"Date": row.name, "Type": "take_pnl_sell", "Shares": shares, "Price": row['close'], "Profit": curr_profit, "Portfolio_Amount": portfolio_amount})


print("Portfolio Amount: ",portfolio_amount)


# Create trades dataframe
trades_df = pd.DataFrame(trades)
print(trades_df.to_markdown())


#Graph
plt.figure(figsize=(22,12.375))
ax1 = plt.subplot2grid((8,1), (0,0), rowspan = 5, colspan = 1)
ax2 = plt.subplot2grid((8,1), (5,0), rowspan = 3, colspan = 1)

ax1.plot(df['close'], color = 'skyblue', linewidth = 2, label = symbol)

ax1.legend()
ax1.set_title(symbol+' MACD SIGNALS')
ax2.plot(df['macd'], color = 'grey', linewidth = 1.5, label = 'MACD')
ax2.plot(df['macd_signal'], color = 'skyblue', linewidth = 1.5, label = 'SIGNAL')

for i in range(len(df)):
    if str(df['macd_hist'][i])[0] == '-':
        ax2.bar(df.index[i], df['macd_hist'][i], color = '#ef5350')
    else:
        ax2.bar(df.index[i], df['macd_hist'][i], color = '#26a69a')
        
plt.legend(loc = 'lower right')
plt.show()
