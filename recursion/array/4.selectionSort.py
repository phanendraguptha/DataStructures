def selectionSort(arr):
  helper(arr, len(arr), 0, 0)
  print(arr)


def helper(arr, rows, columns, maxIndex):
  # base condition
  if rows == 0:
    return

  if rows > columns:
    if arr[columns] > arr[maxIndex]:
      # update the maxIndex and the column
      helper(arr, rows, columns + 1, columns)
    else:
      # update the maxIndex and the column
      helper(arr, rows, columns + 1, maxIndex)
  else:
    # at the end of every iteration we are updating the last value with actual value
    arr[maxIndex], arr[rows - 1] = arr[rows - 1], arr[maxIndex]
    # to reduce the iterations we reduce the rows count
    # as the comparision needs to be done from the 0 Index, we set columns as 0
    # we always consider the max index as 0
    helper(arr, rows - 1, 0, 0)

selectionSort([4,3,2,1])