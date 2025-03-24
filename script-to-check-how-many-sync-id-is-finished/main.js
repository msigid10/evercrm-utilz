const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Read the file containing log entries
const logEntriesFile = 'log_entries.txt';
const logEntries = fs.readFileSync(logEntriesFile, 'utf-8').split('\n');

// Regular expression to match the key
const keyRegex = /SYNC ID A:\s+([a-f0-9-]+)\s+/i;

// Array to store extracted keys
const extractedKeys = [];

// Process each log entry
logEntries.forEach((logEntry, index) => {
  // Extract the key using the regular expression
  const match = logEntry.match(keyRegex);

  // Check if a match is found
  if (match) {
    const extractedKey = match[1]; // Extracted key is in the first capturing group
    extractedKeys.push({ key: extractedKey });
    console.log(`Entry ${index + 1}: ${extractedKey}`);
  } else {
    console.log(`Entry ${index + 1}: Key not found`);
  }
});

// Write the extracted keys to a CSV file
const csvWriter = createCsvWriter({
  path: 'output50akunlama.csv',
  header: [
    { id: 'key' },
  ],
});

csvWriter.writeRecords(extractedKeys)
  .then(() => console.log('CSV file written successfully'))
  .catch(error => console.error('Error writing CSV file:', error));
