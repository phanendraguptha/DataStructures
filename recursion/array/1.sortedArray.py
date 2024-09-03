def sortedArray(arr):
  print(helper(arr, 0))

def helper(arr, index):
  if index == len(arr) - 1:
    return True

  return arr[index] < arr[index + 1] and helper(arr, index + 1)

sortedArray([1,2,3])
# sortedArray([1,2,5,3])