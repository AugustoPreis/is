## isString
###### isString(value: any): boolean
Checks if value is a string

#### Examples:
```
isString(10); // false
isString('10'); // true
isString([]); // false
isString('[]'); // true
isString('{}'); // true
```

## isValidString
###### isValidString(value: any): boolean
Checks if value is a valid string

#### Examples:
```
isValidString(10); // false
isValidString('10'); // true
isValidString([]); // false
isValidString('[]'); // true
isValidString('{}'); // true
isValidString(' '); // false
isValidString('_'); // true
```

## isNumberString
###### isNumberString(value: any): boolean
Checks if value is a number string

#### Examples:
```
isValidString(10); // false
isValidString('10'); // true
isValidString([]); // false
isValidString('[]'); // false
isValidString(1.1); // false
isValidString('1.1'); // true
isValidString(' '); // false
isValidString('_'); // false
```

## isEscapedString
###### isEscapedString(value: any): boolean
Checks if value start and end with ' or "

#### Examples:
```
isEscapedString('value'); // false
isEscapedString('"value'); // false
isEscapedString('"value"'); // true
isEscapedString("'value'"); // true
isEscapedString('`value'); // false
isEscapedString('`value`'); // true
isEscapedString(null); // false
```

## isSpacedString
###### isSpacedString(value: any, position: 'start' | 'end' | 'any' | 'both'): boolean
Checks if the string has space according to the second parameter

#### Examples:
```
isSpacedString(' value', 'start'); // true
isSpacedString('\tvalue', 'start'); // true
isSpacedString('value ', 'start'); // false
isSpacedString('value ', 'end'); // true
isSpacedString('value\t', 'end'); // true
isSpacedString(' value', 'end'); // false
isSpacedString('value', 'any'); // false
isSpacedString(' value ', 'any'); // true
isSpacedString(' value', 'any'); // true
isSpacedString('\tvalue\t', 'any'); // true
isSpacedString('value\t', 'any'); // true
isSpacedString('value ', 'both'); // false
isSpacedString(' value', 'both'); // false
isSpacedString(' value ', 'both'); // true
isSpacedString(' value', 'both'); // false
isSpacedString('\tvalue', 'both'); // false
```