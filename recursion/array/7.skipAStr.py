str = 'hello'
# skipStrLen  = 3
# print(str[skipStrLen:])


def skipAStr(str, skipStr):
  skipStrLen = len(skipStr)
  res = helper(str, skipStr, skipStrLen, '')
  print(res)

def helper(str, skipStr, skipStrLen, res):
  if not str and len(str) != skipStrLen:
    return res
  
  if str[:skipStrLen] == skipStr:
    return helper(str[skipStrLen:], skipStr, skipStrLen, res)
  else:
    res += str[0]
    return helper(str[1:], skipStr, skipStrLen, res)


skipAStr('apple hi apple', 'apple')