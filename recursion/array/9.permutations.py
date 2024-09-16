def permutations(str):
  helper('', str)

def helper(processed, unprocessed):
  if not unprocessed:
    print(processed)
    return
  
  char = unprocessed[0]

  for i in range(0, len(processed)+1):
    first = processed[0: i]
    second = processed[i: len(processed)]
    helper(first + char + second, unprocessed[1:])

# permutations('abc')

def permutationsCount(str):
  res = helper('', str)
  print(res)

def helper(processed, unprocessed):
  if not unprocessed:
    return 1
  
  char = unprocessed[0]
  count = 0

  for i in range(0, len(processed)+1):
    first = processed[0: i]
    second = processed[i: len(processed)]
    count = count + helper(first + char + second, unprocessed[1:])

  return count

permutationsCount('abc')