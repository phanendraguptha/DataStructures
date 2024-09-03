def reverse(num):
  if num == 0:
    return ''

  rem = num % 10
  print(rem)
  return str(rem) + reverse(num//10)

# print(reverse(52))

class Reversal:
  sum = 0

  def rev(self, num):
    if num == 0:
      return
    
    rem = num % 10
    self.sum = self.sum * 10 + rem

    self.rev(num//10)

  def getReverseValue(self):
    return self.sum
  
reversal = Reversal()
reversal.rev(123)
print(reversal.getReverseValue())
