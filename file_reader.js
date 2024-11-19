const fs = require("fs");

//result `John Smith is 50 years old and his hoobies are swimming and dancing`
fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  const firstname = data1
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    const lastname = data2
    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      const age = data3
      fs.readFile("./hobbies.txt", "utf-8", (err, arr) => {
        const hobbies = JSON.parse(arr)
        console.log(`${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}.`);
      })      
    })
  })
})