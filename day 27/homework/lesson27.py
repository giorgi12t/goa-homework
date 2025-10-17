# .append() — სიაში ამატებს ახალ ელემენტს ბოლოში
# .insert() — სიაში ჩასვამს ახალ ელემენტს მითითებულ პოზიციაზე (ინდექსზე)
# .pop() — შლის ელემენტს სიიდან, ნაგულისხმევად შლის ბოლო ელემენტს
numbers = [10, 20, 30, 40, 50] 
print(len(numbers)) 

nums = []  

for i in range(5):  
    number = int(input("შეიყვანე რიცხვი: ")) 
    nums.append(number)
print("შედეგი:", nums)

colors = ["red", "green", "blue", "yellow", "purple"]
colors.pop()  
print(colors)  

animals = ["dog", "cat", "elephant", "lion"]
animals.insert(1, "monkey") 
print(animals)

students = [] 

for i in range(3):
    name = input("შეიყვანე სტუდენტის სახელი: ")
    students.append(name)

students.insert(0, "Teacher")

students.pop()

print("სიის სიგრძე:", len(students))
print("სია:", students)