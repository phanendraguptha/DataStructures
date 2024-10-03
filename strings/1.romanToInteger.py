
# big alphabet followed by small causes addition
# check the prev val if smaller than curr val minus (prev val * 2)
class Solution:
    ob = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    def romanToInt(self, s: str) -> int:
        res = 0
        for i in range(0, len(s)):
            res += self.ob[s[i]]
            if i != 0:
                if self.ob[s[i-1]] < self.ob[s[i]]:
                    res -= self.ob[s[i-1]] * 2

        return res
        

ob = Solution()
print(ob.romanToInt('MCMXCIV'))

# Input: s = "MCMXCIV"
# Output: 1994
# Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
# Time complexity - O(n)
# Space complexity - O(1)