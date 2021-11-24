def reedinsqs():
                x = int (input("Enter of squares"))
                return x
def reedinoffset():
                y = float (input("Enter offset angle for the squares"))
                return y
def esquare (n):
                turtle.hideturtle()
                turtle.speed('fast')
                for w in range (4):
                                turtle.forward(250)
                                turtle.left(90)
def cirk(x):
                turtle.circle(125)
                turtle.left(x)
def even():
                turtle.pencolor('#000000')
                turtle.fillcolor('#7E248E')
                turtle.pensize(1)
def odd():
                turtle.pencolor('#ff0000')
                turtle.fillcolor('#E8FFCC')
                turtle.pensize(2)
import turtle
i = reedinsqs()
a = reedinoffset()
while i > 0:
                if i % 2 == 0:
                                even()
                                cirk(a)
                else:
                                odd()
                                esquare(a)
                i-=1
turtle.exitonclick()
