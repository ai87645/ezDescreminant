const  a = prompt('введите коафиццент a:')
const  b = prompt('введите коафиццент b:')
const  c = prompt('введите коафиццент c:')

const f = a
const g = b
const r = c

const D =  ( g*g) - 4 * f * r
const x1 = (-g-Math.sqrt(D))/2*f
const x2 = (-g+Math.sqrt(D))/2*f


document.write('D = ',D,'     ')
document.write('x1 = ',x1,'     ')
document.write('x2 = ',x2)

