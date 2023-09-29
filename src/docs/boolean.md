## isBoolean
###### isBoolean(value: any): boolean
Checks if value is a boolean

#### Examples:
```
isBoolean(''); // false
isBoolean(false); // true
isBoolean(true); // true
isBoolean(!null); // true
isBoolean('simple value'); // false
```

## isFalse
###### isFalse(value: any): boolean
Checks if value is false

#### Examples:
```
isFalse(''); // false
isFalse(false); // true
isFalse(true); // false
isFalse(!null); // false
isFalse('simple value'); // false
```

## isTrue
###### isTrue(value: any): boolean
Checks if value is true

#### Examples:
```
isTrue(''); // false
isTrue(false); // false
isTrue(true); // true
isTrue(!null); // true
isTrue('simple value'); // false
```