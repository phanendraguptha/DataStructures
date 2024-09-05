def bubbleSort(arr):
  helper(arr, len(arr) - 1 , 0)
  print(arr)

def helper(arr, rows, columns):
  # base condition
  if rows == 0:
    return
  if columns < rows:
    if arr[columns] > arr[columns + 1]:
      # swap
      temp = arr[columns]
      arr[columns] = arr[columns + 1]
      arr[columns + 1] = temp
      # recursion call
    helper(arr, rows, columns + 1)
  else:
    # recursion call
    helper(arr, rows - 1, 0)
  

bubbleSort([4,3,2,1])