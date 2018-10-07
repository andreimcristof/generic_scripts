# AWS scripts

### Dynamo DB
batch-import: Import items into your DynamoDB, in batches of 25. 

----------------------------

### Credentials
Credentials are provided with the .dotenv package and being read from process.env, so you need to create the .env file and input your credentials there.

### How to use 
Notice how the run() method calls data.fetchList() - for this to work, you need to provide this data source yourself, in the form of, for example:

- a Data class which gives you two methods: fetchList() which returns a promise that resolves a list of some objects
- a function asDataItem() which maps to some JSON that you want to write in DynamoDB

Revealing the data I used in my own project is out of scope of this script, but if you encounter difficulties please open an issue, I am always willing to help.
