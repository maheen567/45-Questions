//Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const personName:string = "\n\tMaheen\t\n";              //whitespace characters (\t, \n)
console.log(personName);                                  
const without_spaces:string = personName.trim();         //(.trim)removes whitespaces
console.log(without_spaces);

