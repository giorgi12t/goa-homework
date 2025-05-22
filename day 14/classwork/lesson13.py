# შექმენით 3 ცვლადი: ასაკი, გამოცდილება და სიმაღლე. ეს ცვლადები შემოატანინეთ inputით. შემდეგ შექმენით ცვლადი სახელად isHired რომელშიც შეინახავთ Trueს თუ მომხმარებელი არის 18 წლის ან მეტის, აქვს 2 წლის გამოცდილება ან მეტი და არის 175სმ ან მეტი. შემდეგ პრინტის გამოყენებით გამოიტანეთ "You are hired: isHired(ეს უნდა იყოს ცვლადი)"
Age = input ('input your age:')
experience = input ('input your experience:')
weight = input ('input your weight:')
isHired = (Age >= experience or weight)
print(isHired)