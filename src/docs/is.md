## is
###### is(value: any, type: 'array' | 'boolean' | 'date' | 'number' | 'object' | 'string'): boolean
Checks if the value is of the type informed in the second parameter

##### NOTE: this function NOT use ```typeof``` operator, it uses the ```type``` parameter to fetch a validator
#### Examples:
```
is('2000-01-01', 'date'); // false
is(new Date(2000, 01, 01), 'date'); // true
is('10', 'number'); // false
is(10, 'number'); // true
is('   ', 'string'); // true
```

## isValid
###### isValid(value: any, type: 'array' | 'boolean' | 'date' | 'number' | 'object' | 'string'): boolean
Checks if the value is of the type informed in the second parameter, and if he is valid

##### NOTE: this function NOT use ```typeof``` operator, it uses the ```type``` parameter to fetch a validator
#### Examples:
```
isValid('2000-01-01', 'date'); // false
isValid(new Date(2000, 01, 01), 'date'); // true
isValid(new Date(NaN), 'date'); // false
isValid(10, 'number'); // true
isValid(NaN, 'number'); // false
```