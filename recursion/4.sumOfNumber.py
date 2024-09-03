def sumOfNumber(n):
  # base case
  if n == 0:
    return ''
  
  rem = n % 10
  return str(rem) + sumOfNumber(n//10)

print(sumOfNumber(527))