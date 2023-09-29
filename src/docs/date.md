## isDate
###### isDate(value: any): boolean
Checks if value is a Date instance

#### Examples:
```
isDate('2000-01-01'); // false
isDate(new Date()); // true
isDate(new Date(2000, 01, 01)); // true
isDate(new Date(NaN)); // true
isDate(new Date().getTime()); // false
```

## isValidDate
###### isValidDate(value: any): boolean
Checks if value is a valid Date instance (not a ```Invalid Date```)

#### Examples:
```
isValidDate('2000-01-01'); // false
isValidDate(new Date()); // true
isValidDate(new Date(2000, 01, 01)); // true
isValidDate(new Date(NaN)); // false
isValidDate(new Date().getTime()); // false
```