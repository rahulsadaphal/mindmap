// given infix expression, convert to postfix using stacks usage

// 3+4*5+(2+3)/5 => 345*+23+5/+

/*
if char is number put to ans string
if ur char is opening bracket, push it to stack
if ur char is closing bracket then while stack.top !== '(' ans += stack.top(); stack.pop() and after while loop pop last '('
if the operator is lower precedence than one in stack then do while ans += stack.top() stack.pop() and finally push current operator to stack
set precedence function

and finally evaluate the postfix expression using stacks
*/