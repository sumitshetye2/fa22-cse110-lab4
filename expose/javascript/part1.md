### Part 1: SumValues
1: values added: 20
2: final resuld: 20
3: values added: 20
4: code returned an error because line 13 tries to print value of result, but result is out of scope
5-6: code returns error before reaching line 9 as the constand variable result tried to be modified after it was assigned in line 7

### Part 2: DiscountedPrices
1: line 12 prints 3, which is the value of the last time i was incremented in the for loop
2: line 13 prints 150, which is half off the last item in the array before the loop ends
3: line 14 prints 150, which is the final price of the last item in the array before the loop ends
4: The function should return an array of the prices of the items in the prices variable after the given discount.
5: there is an error, as line 12 wants to print i, but i was initialized using let, so its scope is only within the for loop
6: There is an error on line 13, since discounted price's scope is only within the for loop because of using let
7: Line 14 prints 150, since the scope of finalPrice is within the function, unlike the other 2 variables
8: Same function as in question 4, only difference is that the scope has changed for some variables, but this doesn't cause adverse effects to the code overall
9: Error since i is only in the scope of the for loop
10: Line 12 prints 3, which is the length of the prices array fed into the discountPrices function.
11: Returns the same as it did in questions 4 and 8, since the changes made were just to how variables interacted in terms of the scope