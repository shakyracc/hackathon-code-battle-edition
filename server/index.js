// const PORT = 8000
const express = require('express')

// To set up routes or endpoints of the server application, you need to include body-parser in the index.js.
// ...BodyParser parses incoming HTTP requests as middleware under req.body before routes or API have access to them and perform any 
//...further actions on them. A very useful and essential step when using forms in a web application.
const bodyParser = require('body-parser');

const cors = require('cors')
require('dotenv').config()

const routesController = require('./api/index')

// the app is an object provided by Express API for the developer to communicate with the application and bootstrap a server.
const app = express()



app.use(cors())
app.use(express.json())

//The urlencoded method in the below snippet allows the body-parser middleware to extract data from form fields. 
//...In the REST client such as Postman or Insomnia, it is possible to send the data as form fields. 
//...The json method allows the JSON data to be extracted.
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => { res.send('Hello from Express!') })

app.route('/get-all-hiring-managers').post(routesController.getAllHiringManagers)
app.route('/hm-signup').post(routesController.addHiringManagerSignup)
app.route('/dev-signup').post(routesController.addDeveloperSignup)

app.route('/update-hiring-manager').post(routesController.updateHiringManager)
app.route('/update-developer').post(routesController.updateDeveloper)

app.route('/update-hiring-manager-search').post(routesController.updateHiringManagerSearch)

app.route('/get-hiring-manager').post(routesController.getHiringManager)
app.route('/get-developers').post(routesController.getDevelopers)

app.route('/add-hm-match').post(routesController.addHiringManagerMatch)
app.route('/get-matched-developers').post(routesController.getMatchedDevelopers)

app.route('/hm-matches').post(routesController.getHiringManagerMatches)



// Default
// app.get('/', (req, res) => {
//     res.json('Express server')
// })

// //Hiring Manager Sign up to the Database 
// app.post('/hm-signup', async (req, res) => {
//     const client = new MongoClient(uri)
//     console.log(req.body)
//     const { email, password } = req.body

//     console.log('email', email)

//     const generatedHiringManagerId = uuidv4()
//     const hashedPassword = await bcrypt.hash(password, 10)

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const hiringManagers = database.collection('hiring-managers')

//         const existingHiringManager = await hiringManagers.findOne({ email })

//         if (existingHiringManager) {
//             return res.status(409).send('User already exists. Please login')
//         }

//         const sanitizedEmail = email.toLowerCase()

//         console.log(sanitizedEmail)

//         const data = {
//             hiring_manager_id: generatedHiringManagerId,
//             email: sanitizedEmail,
//             hashed_password: hashedPassword
//         }

//         const insertedHiringManager = await hiringManagers.insertOne(data)

//         const token = jwt.sign(insertedHiringManager, sanitizedEmail, {
//             expiresIn: 60 * 24
//         })
//         res.status(201).json({ token, hiringManagerId: generatedHiringManagerId })

//     } catch (err) {
//         console.log(err)
//     } finally {
//         await client.close()
//     }
// })

// // Sign up to the Database
// app.post('/dev-signup', async (req, res) => {
//     const client = new MongoClient(uri)
//     const { email, password } = req.body

//     const generatedDeveloperId = uuidv4()
//     const hashedPassword = await bcrypt.hash(password, 10)

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const developers = database.collection('developers')

//         const existingDeveloper = await developers.findOne({ email })

//         if (existingDeveloper) {
//             return res.status(409).send('User already exists. Please login')
//         }

//         const sanitizedEmail = email.toLowerCase()

//         const data = {
//             developer_id: generatedDeveloperId,
//             email: sanitizedEmail,
//             hashed_password: hashedPassword
//         }

//         const insertedDeveloper = await developers.insertOne(data)

//         const token = jwt.sign(insertedDeveloper, sanitizedEmail, {
//             expiresIn: 60 * 24
//         })
//         res.status(201).json({ token, developerId: generatedDeveloperId })

//     } catch (err) {
//         console.log(err)
//     } finally {
//         await client.close()
//     }
// })

// // Log in to the Database
// app.post('/login', async (req, res) => {
//     const client = new MongoClient(uri)
//     const { email, password } = req.body

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const users = database.collection('users')

//         const user = await users.findOne({ email })

//         const correctPassword = await bcrypt.compare(password, user.hashed_password)

//         if (user && correctPassword) {
//             const token = jwt.sign(user, email, {
//                 expiresIn: 60 * 24
//             })
//             res.status(201).json({ token, userId: user.user_id })
//         }

//         res.status(400).json('Invalid Credentials')

//     } catch (err) {
//         console.log(err)
//     } finally {
//         await client.close()
//     }
// })

// // Get individual user
// app.get('/user', async (req, res) => {
//     const client = new MongoClient(uri)
//     const userId = req.query.userId

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const users = database.collection('users')

//         const query = { user_id: userId }
//         const user = await users.findOne(query)
//         res.send(user)

//     } finally {
//         await client.close()
//     }
// })

// app.get('/hiring-manager', async (req, res) => {
//     const client = new MongoClient(uri)
//     console.log('hiring manager get', req.query.hiringManagerId)
//     const hiringManagerId = req.query.hiringManagerId

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const hiringManagers = database.collection('hiring-managers')

//         const query = { hiring_manager_id: hiringManagerId }
//         const hiringManager = await hiringManagers.findOne(query)
//         res.send(hiringManager)
//     } finally {
//         await client.close()
//     }
// })

// app.get('/developers', async (req, res) => {
//     const client = new MongoClient(uri)
//     console.log('account type query', req.query.accountType)
//     const accountType = req.query.accountType //accunt type: hiring manager interest = developer

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const developers = database.collection('developers')

//         const query = { 
//             account_type: { $eq: 'developer' }
//          }

//         const foundDevelopers = await developers.find(query).toArray()

//         console.log('found developers', foundDevelopers)
//         res.json(foundDevelopers)

//     } finally {
//         await client.close()
//     }
// })

// // Update User with a match
// app.put('/addmatch', async (req, res) => {
//     const client = new MongoClient(uri)
//     const { userId, matchedUserId } = req.body

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const users = database.collection('users')

//         const query = { user_id: userId }
//         const updateDocument = {
//             $push: { matches: { user_id: matchedUserId } }
//         }
//         const user = await users.updateOne(query, updateDocument)
//         res.send(user)
//     } finally {
//         await client.close()
//     }
// })

// app.put('/add-hm-match', async (req, res) => {
//     const client = new MongoClient(uri)
//     const { hiringManagerId, matchedDeveloperId } = req.body

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const hiringManagers = database.collection('hiring-managers')

//         const query = { hiring_manager_id: hiringManagerId }

//         const updateDocument = {
//             $push: { matches: { developer_id: matchedDeveloperId } }
//         }
//         const hiringManager = await hiringManagers.updateOne(query, updateDocument)
//         res.send(hiringManager)
//     } finally {
//         await client.close()
//     }
// })

// // Get all Users by userIds in the Database
// app.get('/users', async (req, res) => {
//     const client = new MongoClient(uri)
//     const userIds = JSON.parse(req.query.userIds)

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const users = database.collection('users')

//         const pipeline =
//             [
//                 {
//                     '$match': {
//                         'user_id': {
//                             '$in': userIds
//                         }
//                     }
//                 }
//             ]

//         const foundUsers = await users.aggregate(pipeline).toArray()

//         res.json(foundUsers)

//     } finally {
//         await client.close()
//     }
// })

// app.get('/developer', async (req, res) => {
//     const client = new MongoClient(uri)
//     const developerIds = JSON.parse(req.query.developerIds)

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const hiringManagers = database.collection('hiring-managers')

//         const pipeline =
//             [
//                 {
//                     '$match': {
//                         'developer_id': {
//                             '$in': developerIds
//                         }
//                     }
//                 }
//             ]

//         const foundUsers = await hiringManagers.aggregate(pipeline).toArray()

//         res.json(foundUsers)

//     } finally {
//         await client.close()
//     }
// })

// app.get('/filtered-users', async (req, res) => {
//     const client = new MongoClient(uri)
//     // const searchFormData = req.body.searchFormData 
//     const country = req.query.country
//     const degree = req.query.degree
//     const availability = req.query.availability
//     const expereince = req.query.expereince
//     const available_from = req.query.available_from
//     const skills = req.query.skills

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const users = database.collection('users')

//         const query = {
//             country: { $eq: country },
//             role: { $eq: country },
//             degree: { $eq: country },
//             availability: { $eq: country },
//             experience: { $eq: country },
//             available_from: { $eq: country },
//             skills: { $eq: country }
//         }

//         const foundUsers = await users.find(query).toArray()

//         res.json(foundUsers)

//     } finally {
//         await client.close()
//     }
// })





// // Get all the Gendered Users in the Database
// app.get('/gendered-users', async (req, res) => {
//     const client = new MongoClient(uri)
//     const gender = req.query.gender

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const users = database.collection('users')
//         const query = { gender_identity: { $eq: gender } }
//         const foundUsers = await users.find(query).toArray()
//         res.json(foundUsers)

//     } finally {
//         await client.close()
//     }
// })

// // Update a User in the Database
// app.put('/developer', async (req, res) => {
//     const client = new MongoClient(uri)
//     const formData = req.body.formData

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const developers = database.collection('developers')

//         const query = { user_id: formData.user_id }

//         const updateDocument = {
//             $set: {
//                 first_name: formData.first_name,
//                 account_type: formData.account_type,
//                 country: formData.country,
//                 role: formData.role,
//                 degree: formData.degree,
//                 availability: formData.availability,
//                 experience: formData.experience,
//                 available_from: formData.available_from,
//                 skills: formData.skill,
//                 interest: formData.interest,
//                 url: formData.url,
//                 about: formData.about,
//                 matches: formData.matches
//             },
//         }

//         const insertedDeveloper = await developers.updateOne(query, updateDocument)

//         res.json(insertedDeveloper)

//     } finally {
//         await client.close()
//     }
// })

// app.put('/hiring-manager', async (req, res) => {
//     const client = new MongoClient(uri)
//     console.log(req.body.formData)
//     const formData = req.body.formData

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const hiringManagers = database.collection('hiring-managers')

//         const query = {
//             hiring_manager_id: formData.hiring_manager_id
//         }

//         const updateDocument = {
//             $set: {
//                 first_name: formData.first_name,
//                 account_type: formData.account_type,
//                 country: formData.country,
//                 role: formData.role,
//                 degree: formData.degree,
//                 availability: formData.availability,
//                 experience: formData.experience,
//                 available_from: formData.available_from,
//                 skills: formData.skills,
//                 interest: formData.interest,
//                 url: formData.url,
//                 matches: formData.matches
//             },
//         }

//         const insertedHiringManager = await hiringManagers.updateOne(query, updateDocument)

//         res.json(insertedHiringManager)

//     } finally {
//         await client.close()
//     }
// })

// app.put('/hiring-manager-search', async (req, res) => {
//     const client = new MongoClient(uri)
//     console.log(req.body.formData)
//     const formData = req.body.formData

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const hiringManagers = database.collection('hiring-managers')

//         const query = {
//             hiring_manager_id: formData.hiring_manager_id
//         }

//         const updateDocument = {
//             $set: {

//                 country: formData.country,
//                 role: formData.role,
//                 degree: formData.degree,
//                 availability: formData.availability,
//                 experience: formData.experience,
//                 available_from: formData.available_from,
//                 skills: formData.skills,

//             },
//         }

//         const insertedHiringManager = await hiringManagers.updateOne(query, updateDocument)

//         res.json(insertedHiringManager)

//     } finally {
//         await client.close()
//     }
// })

// // Get Messages by from_userId and to_userId
// app.get('/messages', async (req, res) => {
//     const { userId, correspondingUserId } = req.query
//     const client = new MongoClient(uri)

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const messages = database.collection('messages')

//         const query = {
//             from_userId: userId, to_userId: correspondingUserId
//         }
//         const foundMessages = await messages.find(query).toArray()
//         res.send(foundMessages)
//     } finally {
//         await client.close()
//     }
// })

// // Add a Message to our Database
// app.post('/message', async (req, res) => {
//     const client = new MongoClient(uri)
//     const message = req.body.message

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const messages = database.collection('messages')

//         const insertedMessage = await messages.insertOne(message)
//         res.send(insertedMessage)
//     } finally {
//         await client.close()
//     }
// })

// app.get('/favourites', async (req, res) => {
//     const client = new MongoClient(uri)
//     console.log('made it')
//     const developerIds = req.query.developerIds
//     console.log('dev ids', developerIds)

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const hiringManagers = database.collection('hiring-managers')

//         const pipeline =
//             [
//                 {
//                     '$match': {
//                         'developer_id': {
//                             '$in': developerIds
//                         }
//                     }
//                 }
//             ]

//         const foundUsers = await hiringManagers.aggregate(pipeline).toArray()

//         res.json(foundUsers)

//     } finally {
//         await client.close()
//     }
// })


// app.listen(PORT, () => console.log('server running on PORT ' + PORT))

app.listen(process.env.PORT || 8000);