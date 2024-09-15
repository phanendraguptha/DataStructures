def skipAChar(str, char):
  res = helper(str, char, '')
  print(res)

def helper(str, char, res):
  if not str:
    return res
  
  if str[0] != char:
    res += str[:1]

  return helper(str[1:], char, res)

skipAChar("hello", 'l')