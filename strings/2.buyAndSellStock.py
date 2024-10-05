def maxProfit(prices):
  buyPrice = prices[0]
  maxProfit = 0

  for price in prices:
      if buyPrice > price:
          buyPrice = price
      maxProfit = max(price - buyPrice, maxProfit)

  return maxProfit

print(maxProfit([7,1,5,3,6,4]))