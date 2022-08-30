const db = require('../config/dbconfig')
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const { restart } = require('nodemon')

const SCHEMA = process.env.INSTANCE_SCHEMA
const HIRINGMANAGERTABLE = 'hiringmanagers'
const DEVELOPERTABLE = 'developers'

//get-all-hiring-managers
exports.getAllHiringManagers = async (request, response) => {
    console.log('getAll: [GET] /users/')

    try{
        const QUERY = `SELECT * FROM ${SCHEMA}.${HIRINGMANAGERTABLE}`
        const hiringManagers = await db.query(QUERY)
        response.json(hiringManagers)
    } catch (error) {
        console.log('ERROR in getAll ' + 'USER:', error)
        return response.status(500).json(error)
    }
}

//hm-signup
exports.addHiringManagerSignup = async (request, response) => {
    const email = request.body.email
    const password = request.body.password

    const generatedHiringManagerId = uuidv4()
    const hashedPassword = await bcrypt.hash(password, 10)

    try {

        const sanitizedEmail = email.toLowerCase()

        const insertedHiringManager = await db.insert(
            {
                table: 'hiringmanagers',
                records: [
                    {
                        hiring_manager_id: generatedHiringManagerId,
                        email: sanitizedEmail,
                        password: hashedPassword
                    }
                ],
                attributes: ['email']
            }
        )

        const token = jwt.sign(insertedHiringManager, email, {
            expiresIn: 60 * 24
        })

        console.log(token)

        const hiringManagerId = insertedHiringManager.data.inserted_hashes[0]


        response.status(201).json({ token, hiringManagerId })


    } catch (err) {
        console.log(err)
    }
}

//dev-signup
exports.addDeveloperSignup = async (request, response) => {
    const email = request.body.email
    const password = request.body.password


    const generatedDeveloperId = uuidv4()
    const hashedPassword = await bcrypt.hash(password, 10)

    try {

        const sanitizedEmail = email.toLowerCase()

        const insertedDeveloper = await db.insert(
            {
                table: 'developers',
                records: [
                    {
                        developer_id: generatedDeveloperId,
                        email: sanitizedEmail,
                        password: hashedPassword
                    }
                ],
                attributes: ['email']
            }
        )

        const token = jwt.sign(insertedDeveloper, email, {
            expiresIn: 60 * 24
        })


        const developerId = insertedDeveloper.data.inserted_hashes[0]


        response.status(201).json({ token, developerId })


    } catch (err) {
        console.log(err)
    }
}

//update-hiring-manager
exports.updateHiringManager = async (request, response) => {

    const formData = request.body.formData

    try {
        const insertedHiringManager = await db.update(
            {
                table: 'hiringmanagers',
                records: [
                    {
                        id: formData.hiring_manager_id,
                        first_name: formData.first_name,
                        account_type: formData.account_type,
                        country: formData.country,
                        role: formData.role,
                        degree: formData.degree,
                        availability: formData.availability,
                        experience: formData.experience,
                        available_from: formData.available_from,
                        skills: formData.skills,
                        interest: formData.interest,
                        search: formData.search,
                        url: formData.url,
                        matches: formData.matches
                    }
                ]
            }
        )

        response.json(insertedHiringManager)

    } catch (err) {
        console.log(err)
    }

}

//update-developer
exports.updateDeveloper = async (request, response) => {

    const formData = request.body.formData

    try {
        const insertedDeveloper = await db.update(
            {
                table: 'developers',
                records: [
                    {
                        id: formData.developer_id,
                        first_name: formData.first_name,
                        account_type: formData.account_type,
                        country: formData.country,
                        role: formData.role,
                        degree: formData.degree,
                        availability: formData.availability,
                        experience: formData.experience,
                        available_from: formData.available_from,
                        skills: formData.skills,
                        interest: formData.interest,
                        url: formData.url,
                        matches: formData.matches
                    }
                ]
            }
        )

        response.json(insertedDeveloper)

    } catch (err) {
        console.log(err)
    }
}

//update-hiring-manager-search
exports.updateHiringManagerSearch = async (request, response) => {

    const formData = request.body.formData

    console.log('form data', formData)

    try {
        const insertedHiringManager = await db.update(
            {
                table: 'hiringmanagers',
                records: [
                    {
                        id: formData.hiring_manager_id,
                        country: formData.country,
                        role: formData.role,
                        degree: formData.degree,
                        availability: formData.availability,
                        experience: formData.experience,
                        available_from: formData.available_from,
                        skills: formData.skills,
                    }
                ]
            }
        )

        response.json(insertedHiringManager)

    } catch (err) {
        console.log(err)
    }
}

//get-hiring-manager
exports.getHiringManager = async (request, response) => {

    const hiringManagerId = request.body.hiringManagerId

    try {
        const hiringManager = await db.searchByHash(
            {
                table: 'hiringmanagers',
                hashValues: [hiringManagerId],
                attributes: ['*']
            }
        )

        const hiringManagerO = hiringManager.data[0]

        response.send(hiringManagerO)

    } catch (err) {
        console.log(err)
    }


}
//get-developers
exports.getDevelopers = async (request, response) => {

    const hmInterest = request.body.hmInterest

    try {

        const foundDevelopers = await db.searchByValue(
            {
                table: 'developers',
                searchAttribute: 'account_type',
                searchValue: hmInterest,
                attributes: ['*']
            }
        )

        const entries = Object.entries(foundDevelopers.data)

        const devresponse = foundDevelopers.data

        console.log('developers: ', devresponse)

        response.json(devresponse)

    } catch (err) {
        console.log(err)
    }
}

//add-hm-match
exports.addHiringManagerMatch = async (request, response) => {

    const hiringManagerId = request.body.hiringManagerId
    const matchedDeveloperId = request.body.matchedDeveloperId

    try {

        const hiringManager = await db.update(
            {
                table: 'hiringmanagers',
                records: [
                    {
                        id: hiringManagerId,
                        matches: matchedDeveloperId
                    }
                ]
            }
        )
        response.send(hiringManager)

    } catch (err) {
        console.log(err)
    }



}
//get-matched-developers
exports.getMatchedDevelopers = async (request, response) => {

    const matchedDeveloperId = request.body.matchedDeveloperId

    try {

        const foundDevelopers = await db.searchByValue(
            {
                table: 'developers',
                searchAttribute: 'id',
                searchValue: matchedDeveloperId,
                attributes: ['*']
            }
        )

        const founddevsdata = foundDevelopers.data

        response.json(founddevsdata)

    } catch (err) {
        console.log(err)
    }

}
//hm-matches
exports.getHiringManagerMatches = async (request, response) => {

    const hiringManagerId = request.body.hiringManagerId

    try {
        const hiringManagerMatches = await db.searchByValue(
            {
                table: 'hiringmanagers',
                searchAttribute: 'id',
                searchValue: hiringManagerId,
                attributes: ['matches']
            }
        )

       

        const hmmatches = hiringManagerMatches.data

        response.json(hmmatches)

        

    } catch (err) {
        console.log(err)
    }

}

