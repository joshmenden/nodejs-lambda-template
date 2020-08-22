# nodejs-lambda-template

A template for quickly setting up a NodeJS Lambda function in AWS.

## Setup

Once you've created your repo from this template, you're going to want to

1. Comment out the `.env` line of the `.gitignore`
2. Run `rm -rf .git` so that anything you add to `.env` going forward isn't checked in to version control.
3. Run `git init` and make your first commit.
4. Run `npm install` and check in the `package-lock.json` into version control
5. Add vars to `.env`. `FUNCTION_NAME` and `ROLE_ARN` are required. If the two `AWS_` vars are left blank, then the script will default to whatever you AWS settings have configured by default on your local machine.


Once you have your lambda function up and running, you can run `npm run-script publish_lambda` to publish it, and then `npm run-script update_lambda` to update it.


And you're good to go!