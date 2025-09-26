# კომენტარებით ახსენით, რატომ ვიყენებთ ფუნქციებს და რაში გვეხმარება ის
#ფუნქცია არის პატარა ყუთი სადაც ჩვენ ვწერთ კოდს ერთხელ და მერე შეგვიძლია ვიყენოთ რამდენჯერაც გვინდა

#დაწერეთ ფუნქცია, რომელსაც გადასცემთ 3 არგუმენტს, შემდეგ ამ 3 რიცხვიდან იპოვეთ ამ სამი რიცხვის საშუალო არითმეტიკული და გამოიტანეთ ის(საშუალო არითმეტიკული არის რიცხვების ჯამი გაყოფილი რიცხვების რაოდენობაზე

def average_of_three(a, b, c):
    total = a + b + c
    avg = total / 3
    return avg

print(average_of_three(3, 6, 9))
print(average_of_three(10, 20, 30))
import tkinter as tk

def on_enter(e):
    link.config(fg="yellow")

def on_leave(e):
    link.config(fg="green")

def on_click(e):
    link.config(fg="red")

root = tk.Tk()
root.title("Link Example")

link = tk.Label(root, text="ეს ბმულია", fg="green", cursor="hand2", font=("Arial", 14, "underline"))
link.pack(pady=20)

link.bind("<Enter>", on_enter)
link.bind("<Leave>", on_leave)

link.bind("<Button-1>", on_click)

root.mainloop()
#დავალება 2 გააკეთეთ სამი ბმული გვერდზე ყველა ბმული შავიაუკვე მონახულებული ბმული (:visited) იასამნისფერი უნდა გამოჩნდეს

import tkinter as tk
import webbrowser

links = [
    ("Google", "https://www.google.com"),
    ("Wikipedia", "https://www.wikipedia.org"),
    ("YouTube", "https://www.youtube.com"),
]

visited = set() 

def open_link(label, url):
    webbrowser.open(url)          
    visited.add(url)              
    label.config(fg="purple")     
root = tk.Tk()
root.title("სამი ბმული")

for text, url in links:
    lbl = tk.Label(root, text=text, fg="black", cursor="hand2", font=("Arial", 14, "underline"))
    lbl.pack(anchor="w", pady=5)
    lbl.bind("<Button-1>", lambda e, l=lbl, u=url: open_link(l, u))

root.mainloop()
# დავალება 3 შექმენით ღილაკი (<button>), რომელიც:ნორმალურ მდგომარეობაში ნაცრისფერია მაუსის მიყვანაზე (:hover) ლურჯი ხდება დაჭერისას (:active) მწვანე ხდება
import tkinter as tk

def on_enter(e):
    btn.config(bg="blue")

def on_leave(e):
    btn.config(bg="gray")

def on_click(e):
    btn.config(bg="green") 

root = tk.Tk()
root.title("ღილაკის მდგომარეობები")

btn = tk.Button(root, text="დააჭირე მე", bg="gray", fg="white", padx=20, pady=10)
btn.pack(pady=20)

btn.bind("<Enter>", on_enter)
btn.bind("<Leave>", on_leave)

btn.bind("<Button-1>", on_click)

root.mainloop()
#დავალება 4 გააკეთეთ ორი ბმული პირველ ბმულს hover-ზე წითელი ფერი ჰქონდეს მეორე ბმულს hover-ზე ლურჯი ფერი ჰქონდეს
import tkinter as tk

def on_enter_first(e):
    first_link.config(fg="red")

def on_leave_first(e):
    first_link.config(fg="black")

def on_enter_second(e):
    second_link.config(fg="blue")

def on_leave_second(e):
    second_link.config(fg="black")

root = tk.Tk()
root.title("ორი ბმული")

first_link = tk.Label(root, text="პირველი ბმული", fg="black", cursor="hand2", font=("Arial", 14, "underline"))
first_link.pack(pady=5)
first_link.bind("<Enter>", on_enter_first)
first_link.bind("<Leave>", on_leave_first)

second_link = tk.Label(root, text="მეორე ბმული", fg="black", cursor="hand2", font=("Arial", 14, "underline"))
second_link.pack(pady=5)
second_link.bind("<Enter>", on_enter_second)
second_link.bind("<Leave>", on_leave_second)

root.mainloop()
#დავალება 5 შექმენით <a> ბმული ტექსტით „დააკლიკე“. ნორმალურ მდგომარეობაში შავი ფერია hover-ზე მწვანე ხდება თუ ერთხელ მაინც დაკლიკებულია (:visited), ყავისფერი ჩანს
import tkinter as tk
import webbrowser

visited = False

def on_enter(e):
    if not visited:
        link.config(fg="green")

def on_leave(e):
    if not visited:
        link.config(fg="black")

def on_click(e):
    global visited
    visited = True
    link.config(fg="brown")   
    webbrowser.open("https://www.example.com") 
root = tk.Tk()
root.title("ბმული - დავალება 5")

link = tk.Label(root, text="დააკლიკე", fg="black", cursor="hand2", font=("Arial", 14, "underline"))
link.pack(pady=20)

link.bind("<Enter>", on_enter)
link.bind("<Leave>", on_leave)
link.bind("<Button-1>", on_click)

root.mainloop()