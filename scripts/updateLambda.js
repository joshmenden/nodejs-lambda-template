require('dotenv').config()
var shell = require('shelljs')

shell.cd('src')
shell.exec('zip ../index.zip *')
shell.cd('..')
let commandString = `aws lambda update-function-code --function-name ${process.env.FUNCTION_NAME} --zip-file "fileb://index.zip"`
if (process.env.AWS_PROFILE) {
  commandString += ` --profile ${process.env.AWS_PROFILE}`
}
if (process.env.AWS_REGION) {
  commandString += ` --region ${process.env.AWS_REGION}`
}
shell.exec(commandString)
shell.rm('index.zip')