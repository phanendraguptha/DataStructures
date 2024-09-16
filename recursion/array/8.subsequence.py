def subSeq(str):
  helper('', str)

def helper(p, up):
  if not up:
    print(p)
    return

  char = up[0]

  helper(p + char, up[1:])
  helper(p, up[1:])

subSeq("abc")