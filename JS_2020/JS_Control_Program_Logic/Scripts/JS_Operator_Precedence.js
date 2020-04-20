/*
Operator Precedence
*/

//NOT(!) has higher precedence than AND(&&) and OR(||)

//AND(&&) has higher precedence than OR(||)

//!

//&&

//||

//You can alter this using parens ()

let x = 7;

// THIS VERSION RETURNS TRUE

//&& runs before ||

//x == 7 || x === 3 && x > 10;

// THIS VERSION RETURNS FALSE

// Use parens to change order

(x == 7 || x === 3) && x > 10;
