import fs from 'fs'

const url = ''

const file = fs.readFileSync('/Users/greg/Source/Repos/websites/kimnetics.com S3 website/images/hanauma.jpg')

const result = await fetch(url, {
  method: 'PUT',
  body: file
})

console.log('Result: ', result)
