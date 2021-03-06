// function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}
![badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)



## Table of Contents

1. [Title](#title)
2. [Description](#description)
3. [Usage](#usage)
4. [Installation](#installation)
5. [License](#license)
6. [Contributing](#contributions)
7. [Tests](#test)
8. [Contact/Questions](#questions)


## Description 
${answers.description}

## Usage 
${answers.usage}

## Installation 
${answers.installation}

## License
${answers.license}

## Contributions
${answers.contributions}

## Test 
${answers.test}

## Contact/ Questions
> If you have any questions, please contact me at: hillm108@mail.chapman.edu 

> Link to my Github: [daniellehillman](https://github.com/daniellehillman) 

 

 `
}

module.exports = generateMarkdown



// <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8"/>
//     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//     <title>Document</title>
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
//     </head>
//     <body>
//       <h1${answers.title}</h1>
//       <p${answers.bio}</p>
//       <p>${ansers.linkedin}</p>
//       <p>${data.title}</p>
//       <p>${data.title}</p>

//   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
// </body>
// </html>
//  `