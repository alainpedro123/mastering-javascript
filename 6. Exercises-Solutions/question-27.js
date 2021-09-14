/* 27

Input: "abcabcbb" -> Output: 3 
Explanation: The answer is "abc", with the length of 3.

Input: "bbbbb" -> Output: 1
Input: "pwwkew" -> Output: 3
*/

const string = "abcabcbb";

// SOLUTION 1
function lengthOfLongestSubstring(s){
    const map = {};
    let max = 0;
    const length = s.length;
    let i = 0;   // it keeps tracking the length of the substring that has not appeared yet. 

    for (let j = 0; j < length; j++) {
        if (map[s[j]] !== undefined) {  // character is not found 
            i = Math.max(map[s[j]], i);
        }
        max = Math.max(max, j - i + 1);
        map[s[j]] = j + 1;
    }

    return max;
};


lengthOfLongestSubstring(string)



// SOLITION 2
function lengthOfLongestSubstring() {
  let max_len = 0;
  let curr = 0;  // it keeps tracking the length of the substring that has not appeared yet. 
  let hash = {}; // to keep track of seen substrings.
  
  if (s.length < 2) {
    return s.length;
  }
  
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] == null) {  // character is not found 
      curr += 1;
    } else {
      curr = Math.min(i - hash[s[i]], curr + 1);
    }
    max_len = Math.max(max_len, curr);

    // we put a character into the hash table if it's not already in there
    hash[s[i]] = i; //hash = {char: index} -->  the key is the character and the value is the index.
  }
  return max_len;
};


/*Consider a string:
_ _ _ _ _ a _ _ _ _ _ f _ _ _ f _ _ _ a

Where _ means a distinct character from all the others.

As we transverse the string, we put a character into the hash table if it's not already in there where the key is the character and the value is the index. --> hash = {char: index}

If there character is already in the string, we have to update the index after we do the following procedures:

We have a curr that keeps track of the length of the substring that has not seen an already seen character. As we get to the second f, curr = 16. So, so far the max_len is going to be max(max_len = 0, curr = 16) [Since max_len has yet to be updated].

Now, we start our curr from the character after the first f. curr now becomes the distance between the first f and the second f, which is i - hash[s[i]]. We update the hash and continue.

The max_len is determined by the max of the current max_len and the curr value when it encounters a character already seen.

Finally, we have completely transversed the string and arrived at the max length of the substring that does not have any repeating characters.

*/