## isObject
###### isObject(value: any): boolean
Checks if value is a object

##### NOTE: this function NOT use the ```typeof``` operator

#### Examples:
```
isObject('10'); // false
isObject({}); // true
isObject(new Date()); // false
isObject([]); // false
isObject([{}, {}]); // false
isObject({ key: [] }); // true
isObject(100); // false
```

## isValidObject
###### isValidObject(value: any): boolean
Checks if object contains at least one valid item

#### Examples:
```
isValidObject([]); // false
isValidObject(null); // false
isValidObject(['value', 'value2']); // false
isValidObject({}); // false
isValidObject({ key: 'value' }); // true
isValidObject({ key: undefined }); // true
isValidObject({ key: null, key: undefined }); // true
```

## isObjectOf
###### isObjectOf(value: any, type: string): boolean
Checks if all values of object is of same type

##### NOTES:
 - this function uses ```typeof``` operator to validate types, then values like Date, [] and {} will be considerated objects
 - If object is empty, the result always be ```true```
#### Examples:
```
isObjectOf([], 'string'); // false
isObjectOf({}, 'string'); // true
isObjectOf({ key: 10 }, 'string'); // false
isObjectOf({ key: 10 }, 'number'); // true
isObjectOf({ key1: 10, key2: '20' }, 'number'); // false
isObjectOf({ key1: 10, key2: '20' }, 'string'); // false
```