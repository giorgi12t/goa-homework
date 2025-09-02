#task 1 lol

nums = [10, 20, 30, 40, 50, 60, 70]

print(nums[:3])

print(nums[-3:])

print(nums[::-1])

#task 2 lol

word = "გოგონა"

print(word[:4])

print(word[-3:])

print(word[::2][:2])

#task 3 lol

text = "სლაისინგი სასწაულია"

print(text[:9])

print(text[10:])

print(text[::-2])

#task 4 lol

letters = ["ა", "ბ", "გ", "დ", "ე", "ვ", "ზ", "თ"]

print(", ".join(letters[:3]))

print(", ".join(letters[3:6]))

print(", ".join(letters[6:]))

print(", ".join(letters[::-1])) 

#task 5 lol

sentence = "მასწავლებელი კარგია"

words = sentence.split()

first_word = words[0]

second_word = words[1]

custom_word = "იაგრაკ"
custom_word_reversed = custom_word[::-1]

print(first_word)
print(second_word)
print(custom_word_reversed)