## isArray
###### isArray(value: any): boolean
Checks if value is a array

#### Examples:
```
isArray(''); // false
isArray([]); // true
isArray([undefined, null]); // true
isArray({}, {}); // false
isArray([[], []]); // true
```

## isValidArray
###### isValidArray(value: any, validator?: (value:any) => any): boolean
Checks if array contains at least one valid item
 
##### NOTE: this function uses "!" validator, values like 0, '' and undefined not be considered valids. You can change this using the second parameter
##### Example: ```isValidArray([null, ''])``` will be return false, then, if yout want to accept empty string, you need to do this: ```isValidArray([null, ''], (value) => value || value === '')```

#### Examples:
```
isValidArray(''); // false
isValidArray([]); // false
isValidArray([undefined, null]); // false
isValidArray([{}, {}]); // true
isValidArray([' ', null]); // true
isValidArray(['', null], (value) => value || typeof value === 'string'); // true
isValidArray([' ', null], (value) => typeof value === 'string'); // false
```

## isArrayOf
###### isArrayOf(value: any, type: string): boolean
Checks if all values of array is of same type

##### NOTES:
  - this function uses ```typeof``` operator to validate types, then values like Date, [] and {} will be considerated objects
  - If the array is empty, the result always be ```true```
#### Examples:
```
isArrayOf(['string1', 'string2'], 'string'); // true
isArrayOf(['10', 20, 30], 'string'); // false
isArrayOf(['10', 20, 30], 'number'); // false
isArrayOf([{}, null], 'object'); // true
isArrayOf([new Date()], 'object'); // true
isArrayOf([10, NaN], 'number'); // true
isArrayOf([() => null, function() {}], 'function'); // true
```