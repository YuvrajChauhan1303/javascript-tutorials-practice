/* 
    Stack memory and Heap Memory:


    where Stack is used -> Primitive Data types

    where Heap is used -> Non-Primitive Data types

    we get a reference from heap, hence changes made to original copy

*/

let myName = 'Yuvraj'

let anotherName = myName;

let user = {
    name : "Yuvraj",
    age : 20,
    sex : 'male'
}

let user2 = user;

user.age = 21;

/*
    user2 has the reference to the location of user, hence changing in either would reflect the change in other instances as well, as they are both pointing in the same memory location.

    while in primitive data types, a copy is generated and copied to another location, hence changing in either would not reflect any other changes on other copies present.
*/