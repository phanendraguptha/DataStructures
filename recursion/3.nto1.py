def nto1(num):
  if num == 0:
    return
  
  print(num)
  nto1(num-1)
nto1(5)

# def oneToN(num):
#   if num == 0:
#     return
  
#   oneToN(num-1)
#   print(num)
# oneToN(5)