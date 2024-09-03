# https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

def countSteps(num):
  return helper(num, 0)

def helper(num, counter):
  if num == 0:
    return counter
  
  if num%2 == 0:
    return helper(num/2, counter + 1)
  else:
    return helper(num - 1, counter + 1)

print(countSteps(8))