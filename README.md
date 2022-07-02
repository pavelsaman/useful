### containsOnly()

```js
/**
 * Return true if an array contains only certain elements.
 *
 * @param  {object} arr An array object to check
 * @param  {function} func A function that performs the check
 */
```

### dateAsISO()

```js
/**
 * Returns the date portion of Date, e.g. "2022-06-12"
 *
 * @param  {Date} date
 */
```

### first()

```js
/**
 * Return the first element of an array.
 *
 * @param  {object} arr
 */
```

### formatDay()

```js
/**
 * Return day formatted as DD.
 *
 * @param  {object} day Date object.
 */
```

### formatMonth()

```js
/**
 * Return MM indexed from 1 as string.
 *
 * @param  {object} month Date object.
 */
```

### formatString()

```js
/**
 * Return a formatted string.
 *
 * @param  {object} configObj Three properties are mandatory:
 *  string       - an input string;
 *  positions    - an array of numbers that represent indices;
 *  insertedChar - a characted to insert at positions
 */
```

### getConnectionString()

```js
/**
 * Return connection string for MSSQL DB.
 *
 * @param  {object} infoObj Object with user, password, server, and database
 *  properties.
 */
```

### getEnv()

```js
/**
 * Return value from an env variable.
 *
 * @param  {string} envVarName Env variable name.
 */
```

### getEnvWithoutLang()

```js
/**
 * Return environment part of a string ('dev-cz' => 'dev').
 *
 * @param  {string} envVarName Env variable name.
 */
```

### getLang()

```js
/**
 * Return language part of a string ('dev-cz' => 'cz').
 *
 * @param  {string} envVarName Env variable name.
 */
```

### isEqual()

```js
/**
 * Return true if given arrays are equal, e.i. have the same members in the
 * same order.
 *
 * @param  {object} arr
 * @param  {object} arr1
 */
```

### isStrictlyEqual()

```js
/**
 * Return true if given arrays are strictly equal, e.i. have the same members
 * in the same order.
 * @param  {object} arr
 * @param  {object} arr1
 */
```

### last()

```js
/**
 * Return the last element of an array.
 *
 * @param  {object} arr
 */
```

### loadJsonFile()

```js
/**
 * Synchronously reads and parses a JSON file.
 *
 * @param  {string} filename
 * @return {object} Parsed JSON file as an object literal.
 */
```

### loadYamlFile()

```js
/**
 * Synchronously reads and parses a YAML file.
 *
 * @param  {string} filename
 * @return {object} Parsed YAML file as an object literal.
 */
```

### max()

```js
/**
 * Return maximum value from an array.
 *
 * @param  {object} arr
 */
```

### min()

```js
/**
 * Return minimum value from an array.
 *
 * @param  {object} arr
 */
```

### nth()

```js
/**
 * Return nth element of an array.
 *
 * @param  {object} arr
 * @param  {number} nthEl Default to 0.
 * @param  {number} indexStyle Indexing, either start with 0 or 1. Default to 0.
 */
```

### pastYyyyMmDd()

```js
/**
 * Return past date in YYYY{{separator}}MM{{separator}}DD.
 *
 * @param  {string} separator Default '/'.
 * @param  {number} daysAgo Default 1.
 */
```

### randInt()

```js
/**
 * Return a random integer between min and max inclusive.
 *
 * @param  {number} min
 * @param  {number} max
 */
```

### randomEmail()

```js
/**
 * Generate random email. If len is 0, the part before '@' will be
 * missing. If domainStr is '', no domain will be included.
 *
 * @param  {number} len Default 10.
 * @param  {string} domainStr Default USEFUL_DEFAULT_DOMAIN env variable
 *  or "inveo.cz".
 */
```

### randomNumberString()

```js
/**
 * Generate random number string. If alphabetString is not passed,
 * only [0-9] is a considered alphabet.
 *
 * @param  {number} len Default 10.
 * @param  {string} alphabetString Default [0-9].
 */
```

### randomString()

```js
/**
 * Generate random string. If alphabetString is not passed,
 * only [a-zA-Z] is a considered alphabet.
 *
 * @param  {number} len Default 10.
 * @param  {string} alphabetString Default [a-zA-Z].
 */
```

### sortAsc()

```js
/**
 * Return a sorted (asc) array clone.
 *
 * Sorting does not happen in place. Numeric sorting is performed.
 *
 * @param  {object} arr
 */
```

### sortDesc()

```js
/**
 * Return a sorted (desc) array clone.
 *
 * Sorting does not happen in place. Numeric sorting is performed.
 *
 * @param  {object} arr
 */
```

### yyyyMmDd()

```js
/**
 * Return current date in YYYY{{separator}}MM{{separator}}DD.
 *
 * @param  {string} separator Default '/'.
 */
```

