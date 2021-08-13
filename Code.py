'''
import math #

# Ask user for name
name = input("What is your name? ")

#Ask fot the numbers a b c
a = float(input("Please enter the number for 'a': "))
b = float(input("Please enter the number for 'b': "))
c = float(input("Please enter the number for 'c': "))

#calculate using formula
cal_x1=(-b+math.sqrt(b**2-4*a*c))/(2*a)
cal_x2=(-b-math.sqrt(b**2-4*a*c))/(2*a)

#print result
print ("Your name is: " + name)
print("\nx1 = " + str(cal_x1))
print("\nx2 = " + str(cal_x2))
'''
'''
#for x in range(30,10,-3):
 
 #   print(x)
#1
for x in range(10,80,10):
    print(x)

print("\n\n\n")
#2
for x in range(21):

    print(x/2)

print("\n\n\n")
#3
for x in range(99,0, -1):

        print(x , "bottles of beer on the wall, x bottles of beer. Take one down and pass it around, " , x-1 , " bottles of beer on the wall.")

print("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
'''
num = int (input("Give me a number: "))
if num > 5:
    print("Greater than 5!")