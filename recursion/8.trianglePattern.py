def triangle(n):
  if n == 0:
    return
  print('*'*n)
  triangle(n-1)

# triangle(5)

def triangle2(n):
  if n == 0:
    return
  triangle2(n-1)
  print('*'*n)

triangle2(5)