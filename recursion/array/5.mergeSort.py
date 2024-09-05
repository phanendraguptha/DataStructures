def mergeSort(arr):
  if len(arr) == 1:
    return arr
  
  mid = len(arr) // 2

  left = mergeSort(arr[:mid])
  right = mergeSort(arr[mid:])

  return merge(left, right)

def merge(left, right):
    merged = []
    i = j = 0

    # Merging the two arrays while both have elements
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1

    # Append remaining elements of left array, if any
    while i < len(left):
        merged.append(left[i])
        i += 1

    # Append remaining elements of right array, if any
    while j < len(right):
        merged.append(right[j])
        j += 1

    return merged

res = mergeSort([4,3,2,1])
print(res)