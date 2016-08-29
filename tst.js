'use strict'

const xlsx = require('./index')

const data = [
  {
    'Name': 'Bob',
    'Location': 'Sweden'
  },
  {
    'Name': 'Alice',
    'Location': 'France'
  }
]

xlsx.write('mySpreadsheet.xlsx', data, function (error) {
  // Error handling here
  if (error) {
    console.error(error)
  }
})
