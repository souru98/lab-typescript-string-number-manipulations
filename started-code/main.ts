//progression-2

import {
  StringManipulationService,
  NumberManipulationService
} from "./main-service";

class StringManipulations implements StringManipulationService {
  public print(word: string): void {
    console.log(word);
    console.log(word.toUpperCase());
    console.log(word.toLowerCase());
    console.log(word.charAt(3));
    console.log(word.concat(" kulkarni"));
    console.log(word.slice(3, -1));
    console.log(word.length);
  }
  printWithSpace(sentence: string): void {
    console.log(sentence);
    console.log(sentence.split("").join(" "));
  }

  findVowel(str: string): void {
    console.log(str);
    console.log(str.replace(/[^aeiou]/gi, "").length);
  }
}
let object = new StringManipulations();

object.print("sourabh");
object.printWithSpace("kulkarni");
object.findVowel("sourabh");

class NumbersManipulations implements NumberManipulationService {
  findPrime(num: number): void {
    console.log(num);
    if (num % 2 === 0) {
      console.log("not a prime number");
    } else {
      console.log("prime number");
    }
  }

  findMagic(num: number): void {
    console.log(num);
    if (num % 9 == 1) {
      console.log("MAGIC NUMBER");
    } else {
      console.log("NOT MAGIC NUMBER");
    }
  }
}

let obj = new NumbersManipulations();
obj.findPrime(21);
obj.findMagic(199);
