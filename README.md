# helpful-functions-package

![GitHub package.json version](https://img.shields.io/github/package-json/v/iyanez2314/helpful-functions-package)

## Why did I make this package?

I have only been in the industry for a year and some change but I feel like a lot of the code I have seen and a lot of the code I have written has been really repetative. My response to this was "hey i'm bored lets make my first npm package" so here I am.

## What kind of functions does this package have?
- fetchApi(api) 
- fetchApiWithKey(api, apiKey)
- generateMinMaxRandomNumbers(min, max)
- findIdIWant(arrayOfObjects, id)

## Want to use some of the functions in the browser?

Here is how you can do just that

Step 1:
if you do not have a package.json file prior to using this package please copy and paste this command in your terminal:

```javascript I'm A tab
    npm init -y
```

step 2:
Once you are done with step 1 head over to https://browserify.org/ and in the project you are going to use these helpful-functions-pack execute this command in your terminal:

```javascript I'm A tab
    npm install -g browserify
```

step 3:
Create Javascript file and name it what ever your little heart desires in this example I am naming it main.js:

```javascript I'm A tab
main.js;
```

step 4:
In the file you just made in my case main.js add these 2 lines of code

```javascript I'm A tab
const helpful = require("@icouldnotfigureoutausername/helpful-functions-package");
window.helpful = helpful;
```

step 5:
Once you have added the lines of code in your file you will now need to open your terminal and execute this command:

```javascript I'm A tab
    browserify main.js -o dist/index.js
```

remember to put the name of the file where you added the code first and where you want the output to be in this case dist/index.js will be made once this command is executed.

step 6:
You should now have a file named index.js in a dist folder if that is the route you took now in you html you need to create a script tag and link the file that was created in this example I am showing you what it looks like if you named it the same as I did:

```javascript I'm A tab
<script src="./dist/index.js"></script>
```

step 7:
Now that you have linked to the file in step 6 you can now create a new javascript file and link to it right under the the one we added in step 6:

```javascript I'm A tab
   <script src="./dist/index.js"></script>
   <script src="./index.js"></script>
```

step 8:
We can now add this line of code at the very top of the index.js file:

```javascript I'm A tab
const helpful = window.helpful;
```

step 9:
Now we can use the methods that helpful provides us by doing something like this:

```javascript I'm A tab
const helpful = window.helpful;
let getRandomNum = helpful.generateMinMaxRandomNumbers(100, 200);
console.log(getRandomNum);
```
