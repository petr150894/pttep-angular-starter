module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": ["tsconfig.app.json", "tsconfig.spec.json"],
        
        "sourceType": "module",
        "ecmaVersion":  2018
    },
    "extends": [
        "eslint:recommended", // set of rules which are recommended for all projects by the ESLint Team
        "plugin:@typescript-eslint/eslint-recommended", // adjustment of rules from eslint appropriately for TypeScript
        "plugin:@typescript-eslint/recommended", // all the recommended rules for our typescript-eslint plugin
        "plugin:@typescript-eslint/recommended-requiring-type-checking" // additinal rules to type-checking
    ],
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        /**
         * ========================================================================
         * Modified Airbnb JS Style Guide rules extending eslint:recommended
         * ========================================================================
         */
        // require the use of === and !==
        "eqeqeq": ["warn", "always", { "null": "ignore" }],
        // disallow else after a return in an if
        "no-else-return": ["warn", { "allowElseIf": false }],
        // disallow redundant return keywords
        "no-useless-return": "warn",
        // require let or const instead of var
        "no-var": "warn",
        // require method and property shorthand syntax for object literals
        "object-shorthand": [
          "warn",
          "always",
          {
            "ignoreConstructors": false,
            "avoidQuotes": true
          }
        ],
        // suggest using arrow functions as callbacks
        "prefer-arrow-callback": [
          "warn",
          {
            "allowNamedFunctions": false,
            "allowUnboundThis": true
          }
        ],
        // suggest using const declaration for vars never modified after declared
        "prefer-const": [
          "warn",
          {
            "destructuring": "any",
            "ignoreReadBeforeAssign": true
          }
        ],
        // Prefer destructuring from arrays and objects
        "prefer-destructuring": [
          "warn",
          {
            "VariableDeclarator": {
              "array": false,
              "object": true
            },
            "AssignmentExpression": {
              "array": true,
              "object": true
            }
          },
          {
            "enforceForRenamedProperties": false
          }
        ],
        // suggest using template literals instead of string concatenation
        "prefer-template": "warn",
        // specify the maximum length of a comment line in your program
        "max-len": ["warn", { "comments": 80 }],
        // disallow reassignment of function parameters
        "no-param-reassign": ["warn", { "props": false }],
        "max-len": [
            "error",
            {
                "code": 140
            }
        ],
        "no-debugger": "error",
        "no-eval": "error",
        "semi": ["warn", "always"],
        "object-curly-spacing": ["warn", "always"],
        "no-useless-escape": "off",
        
        /**
         * ========================================================================
         * ESLint Plugin TypeScript rules extending @typescript-eslint/recommended
         * ========================================================================
         */
        // disallow usage of the any type
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/prefer-regexp-exec": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/unbound-method": "off",
        // disallows magic numbers
        "@typescript-eslint/no-magic-numbers": [
          "off",
          {
            "ignoreArrayIndexes": true,
            "ignore": [0, 1]
          }
        ],
        // disallow the use of parameter properties in class constructors
        "@typescript-eslint/no-parameter-properties": "off",
        // require a consistent member declaration order
        "@typescript-eslint/member-ordering": "warn",
        // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
        "@typescript-eslint/unified-signatures": "warn",
        // requires any function or method that returns a Promise to be marked async
        "@typescript-eslint/promise-function-async": "warn",
        // disallow async functions which have no await expression
        "@typescript-eslint/require-await": "warn",
        // require explicit return types on functions and class methods
        "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
            "allowExpressions": true
          }
        ],
        "@typescript-eslint/indent": [
            "error",
            2
        ],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ]
    }
};
