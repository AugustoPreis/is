## isNumber
###### isNumber(value: any): boolean
Checks if value is a number

#### Examples:
```
isNumber('10'); // false
isNumber(10); // true
isNumber(NaN); // false
isNumber(Infinity); // false
isNumber('NaN'); // false
isNumber(1.2); // true
```

## isPositive
###### isPositive(value: any): boolean
Checks if value is a positive number

#### Examples:
```
isPositive('10'); // false
isPositive(10); // true
isPositive(NaN); // false
isPositive(-10); // false
isPositive(-1.2); // false
isPositive(1.2); // true
```

## isNegative
###### isNegative(value: any): boolean
Checks if value is a negative number

#### Examples:
```
isNegative(-Infinity); // false
isNegative(10); // false
isNegative(NaN); // false
isNegative(-10); // true
isNegative(-1.2); // true
isNegative(1.2); // false
```

## isInteger
###### isInteger(value: any): boolean
Checks if value is a integer number

#### Examples:
```
isInteger(-Infinity); // false
isInteger(10); // true
isInteger(NaN); // false
isInteger(-10); // true
isInteger(-1.2); // false
isInteger(1.2); // false
```

## isFloat
###### isFloat(value: any): boolean
Checks if value is a float number

#### Examples:
```
isFloat(-Infinity); // false
isFloat(10); // false
isFloat(NaN); // false
isFloat(-10); // false
isFloat(-1.2); // true
isFloat(1.2); // true
```