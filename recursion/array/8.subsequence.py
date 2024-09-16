def subSeq(str):
  helper('', str)

def helper(p, up):
  # base condition
  if not up:
    print(p)
    return

  char = up[0]

  helper(p + char, up[1:])
  helper(p, up[1:])

# subSeq("abc")

def subSeq2(str):
  res = helper2('', str)
  print(res)

def helper2(processed, unprocessed):
  # base condition
  if not unprocessed:
    arr = []
    arr.append(processed)
    return arr

  char = unprocessed[0]
  
  left = helper2(processed + char, unprocessed[1:])
  right = helper2(processed, unprocessed[1:])

  left.extend(right)
  return left

subSeq2('abc')