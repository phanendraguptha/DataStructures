def countZeros(n):
  res = helper(n , 0)
  print(res)

def helper(n, count):
  # base case
  if n == 0:
    return count
  
  rem = n % 10
  if rem == 0:
    # as the reminder is zero increment the counter
    return helper(n//10, count + 1)
  else:
    # return count as is
    return helper(n//10, count)

countZeros(50340900)