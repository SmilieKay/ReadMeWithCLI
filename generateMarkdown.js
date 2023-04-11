//  a function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  if (!license || license.toLowerCase() === 'none') {
    return '';
  }

  let badge;
  switch (license.toLowerCase()) {
    case 'mit':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'isc':
      badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'gnuplv3':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    default:
      badge = '';
      break;
  }

  return badge;
}


//  a function that returns the license link
// If there is no license,it returns an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  let link;
  switch (license.toLowerCase()) {
    case 'mit':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'isc':
      link = 'https://opensource.org/licenses/ISC';
      break;
    case 'gnuplv3':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    default:
      link = '';
      break;
  }

  return link;
}


//  a function that returns the license section of README
// If there is no license,it returns an empty string
function renderLicenseSection(license) {
  if (!license || license.toLowerCase() === 'none') {
    return '';
  }

  const licenseLink = renderLicenseLink(license);
  const licenseNotice = renderLicenseNotice(license);

  const licenseSection = `
## License

This project is licensed under the [${license} license](${licenseLink}).`;

  return licenseSection;
}

function renderLicenseNotice(license) {
  let licenseNotice = '';

  switch (license.toLowerCase()) {
    case 'mit':
      licenseNotice = 'This software is licensed under the MIT License.';
      break;
    case 'isc':
      licenseNotice = 'This software is licensed under the ISC License.';
      break;
    case 'gnuplv3':
      licenseNotice = 'This software is licensed under the GNU GPLv3 License.';
      break;
    default:
      break;
  }

  return licenseNotice;
}


//   a function that generates markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  const licenseSection = renderLicenseSection(answers.license);

  const installationSection = answers.installation ? `
## Installation

${answers.installation}` : '';

  const usageSection = answers.howToUse ? `
## Usage

${answers.howToUse}` : '';

  const testSection = answers.test ? `
## Test

${answers.test}` : '';

  const contributionSection = answers.contribution ? `
## Contribution

${answers.contribution}` : '';

  const markdown = `
# ${answers.title} ${licenseBadge}
${licenseSection}

## Description

${answers.description}

## Table of Contents

${answers.installation ? '- [Installation](#installation)' : ''}
${answers.howToUse ? '- [Usage](#usage)' : ''}
${answers.test ? '- [Test](#test)' : ''}
${answers.contribution ? '- [Contribution](#contribution)' : ''}
- [Questions](#questions)

${installationSection}
${usageSection}
${testSection}
${contributionSection}

## Questions

For questions, please contact:

- Email: ${answers.email}
- GitHub: ${answers.github}

${licenseSection}`;

  return markdown.trim();
}

module.exports = generateMarkdown;
