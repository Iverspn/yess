 <script>
        const needsHelp = confirm('Do you need help calculating your average score?');  
  
  if (needsHelp) {  
      // The user is prompted to enter their full name  
      const fullName = prompt('Please enter your full name:');  
        
      //The user is prompted to enter grades for four courses  
      const gradeUnit1 = parseFloat(prompt('Please enter the grade for the first course:'));  
      const gradeUnit2 = parseFloat(prompt('Please enter the grade for the sceond course:'));  
      const gradeUnit3 = parseFloat(prompt('Please enter the grade for the third course:'));  
      const gradeUnit4 = parseFloat(prompt('Please enter the grade for the fourth course:'));  
        
      // The total score is calculated  
      const totalScore = gradeUnit1 + gradeUnit2 + gradeUnit3 + gradeUnit4;  
        
      // The average score is calculated  
      const averageScore = totalScore / 4;  
        
      // Output the result to the console  
      console.log(`${fullName}The total score is:${totalScore}`);  
      console.log(`${fullName}The average score is:${averageScore.toFixed(2)}`);  
        
      
      console.log('thank');  
  } else {  
      console.log('error');  
  }
    </script>
