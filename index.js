function printPasswords(passwords) {
    let num = 1;
    for (let password of passwords) {
      console.log(num++ + " : " + password);
    }
  }
  
  function generatePossiblePasswords(digits) {
    const possiblePasswords = new Set();
  
    if (digits.length === 4) {
      generatePermutations([], digits, new Array(digits.length).fill(false), possiblePasswords);
    } else if (digits.length === 3) {
      const d1 = digits[0];
      const d2 = digits[1];
      const d3 = digits[2];
  
      const arr1 = [d1, d1, d2, d3];
      const arr2 = [d1, d2, d2, d3];
      const arr3 = [d1, d2, d3, d3];
  
      generatePermutations([], arr1, new Array(arr1.length).fill(false), possiblePasswords);
      generatePermutations([], arr2, new Array(arr2.length).fill(false), possiblePasswords);
      generatePermutations([], arr3, new Array(arr3.length).fill(false), possiblePasswords);
    } else {
      throw new Error("Number of digits must be 3 or 4");
    }
  
    return [...possiblePasswords];
  }
  
  function generatePermutations(currentPassword, digits, used, possiblePasswords) {
    if (currentPassword.length === 4) {
      possiblePasswords.add([...currentPassword]);
      return;
    }
  
    const usedDigits = new Set(); // Track used digits within the current permutation
  
    for (let i = 0; i < digits.length; i++) {
      if (!used[i] && !usedDigits.has(digits[i])) {
        used[i] = true;
        usedDigits.add(digits[i]);
        currentPassword.push(digits[i]);
  
        generatePermutations(currentPassword, digits, used, possiblePasswords);
  
        used[i] = false;
        currentPassword.pop();
      }
    }
  }
  
  
  function generatePasswords() {
    const digitInput = document.getElementById("digitInput");
    const output = document.getElementById("output");
  
    const inputDigits = digitInput.value.trim().split(" ").map(Number);
  
  // Validate input values
    const isValidInputRange = inputDigits.every(digit => digit >= 0 && digit <= 9);
    const areAllDifferent = inputDigits.length === new Set(inputDigits).size;

    if (!isValidInputRange || !areAllDifferent || inputDigits.length < 3 || inputDigits.length > 4) {
      output.innerHTML = "Please enter valid and distinct digits (0-9) and use 3 or 4 digits.";
      return;
    }
  
    try {
      let possiblePasswords = new Set();
      
      if (inputDigits.length === 4) {
        possiblePasswords = new Set(generatePossiblePasswords(inputDigits));
        output.classList.add("four-digit-output"); // Add class for 3 columns
        output.innerHTML = "<h3 class='output-label'>Generated Passwords (4 digits):</h3>";
      } else if (inputDigits.length === 3) {
        const d1 = inputDigits[0];
        const d2 = inputDigits[1];
        const d3 = inputDigits[2];
  
        const arr1 = [d1, d1, d2, d3];
        const arr2 = [d1, d2, d2, d3];
        const arr3 = [d1, d2, d3, d3];
  
        const passwords1 = generatePossiblePasswords(arr1);
        const passwords2 = generatePossiblePasswords(arr2);
        const passwords3 = generatePossiblePasswords(arr3);
  
        possiblePasswords = new Set([...passwords1, ...passwords2, ...passwords3]);
        output.classList.add("three-digit-output"); // Add class for 3 columns
        output.innerHTML = "<h3 class='output-label'>Generated Passwords (3 digits):</h3>";
      }
  
      let passwordNumber = 1;
      
      for (const password of possiblePasswords) {
        output.innerHTML += `<p>${passwordNumber++} : ${password.join(" ")}</p>`;
      }
    } catch (error) {
      output.innerHTML = error.message;
    }
  }
  
  
  
  
  
  
  