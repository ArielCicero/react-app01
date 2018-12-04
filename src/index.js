import React from "react";
import ReactDOM from "react-dom";

import bracketNotation from "./bracket-notation";
import bindingThis from "./binding-this";
import arrowFunction from "./arrow-functions";
import filterMethod from "./filter-method";
import objectDestructuring from "./object-destructuring";
import spreadOperator from "./spread-operator";
import Person from "./person";
import Teacher from "./teacher";

const element = <h1>Hellow World</h1>;

ReactDOM.render(element, document.getElementById("root"));

//## Bracket Notation
//bracketNotation();

//## Binding this
//bindingThis();

//## Arrow functions:
//arrowFunction();

//## Filter method
//filterMethod();

//## Object Destructuring
//objectDestructuring();

//## Spread Operator
//spreadOperator();

//## Classes
const person = new Person("ariel");
console.log(person);

const teacher = new Teacher("Mosh", "IT");
console.log(teacher);
