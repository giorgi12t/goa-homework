#შექმენი ფუნქცია რომელიც დაადგენს კენტია თუ ლუწია ციფრი
def chek_party(number) :
    if number % 2 == 0 :
        return "Even"
    else:
        return "Odd"
    

print(chek_party(10))