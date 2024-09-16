def countOdds(arr):
  data = helper(arr, 0, [])
  print(data)


def helper(arr, index, res):
  # base condition
  if index == len(arr):
    return res
  
  # add the number to the res if it is odd
  if arr[index] % 2 != 0:
    res.append(arr[index])
  return helper(arr, index+1, res)

# countOdds([1, 7, 10, 3, 5, 9])


# This function returns the list without taking extra arguments
# Add the values in the current list which are returned from the prev function calls
def countOdds2(arr):
  data = helper(arr, 0)
  print(data)


def helper(arr, index):
  res = []

  # base condition
  if index == len(arr):
    return res
  
  # add the number to the res if it is odd
  if arr[index] % 2 != 0:
    res.append(arr[index])
  
  # previous call answers are appended to the current list
  answerFromPrevCalls = helper(arr, index + 1)
  res.extend(answerFromPrevCalls)

  return res

countOdds2([1, 7, 10, 3, 5, 9])