def search(arr, num):
  print(helper(arr, num, 0))

def helper(arr, num, index):
  if len(arr) == index:
    return False

  return arr[index] == num or helper(arr, num, index + 1)
  
search([1,2,3],1)