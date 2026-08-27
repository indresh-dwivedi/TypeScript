// Primitives
let username: string = "Indresh";
let age: number = 27;
let isAdmin: boolean = true;

// Array
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Indresh", "Dwivedi"];

// Tuples
let person: [string, number] = ["Indresh", 26];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}

let favoriteColor: Color = Color.Blue;

// Any (avoid when possible)
let randomValue: any = 10;
randomValue = "Indresh";
randomValue = true;

// Unknown (safer than any)
let userInput: unknown;
userInput = 5;
userInput = "text";

// Void (for functions that don't return)
function logMessage(message: string): void {
  console.log(message);
}

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;
