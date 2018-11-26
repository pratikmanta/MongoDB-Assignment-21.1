const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/"

const newEmployees = [
    {
        Ename: 'Mike',
        department: 'development staff',
        designation: 'Developer',
        salary: 10500,
        dateofjoining: new Date(),
        city: 'New York'
    },

    {
        Ename: 'Shelly',
        department: 'logistics staff',
        designation: 'logistic intern',
        salary: 3500,
        dateofjoining: new Date(),
        city: 'Singapore'
    },

    {
        Ename: 'Bryan',
        department: 'support staff',
        designation: 'Customer Support',
        salary: 7500,
        dateofjoining: new Date(),
        city: 'California'
    },

    {
        Ename: 'Roger',
        department: 'ops staff',
        designation: 'Operations intern',
        salary: 3500,
        dateofjoining: new Date(),
        city: 'Delhi'
    },

    {
        Ename: 'Dwayne',
        department: 'development staff',
        designation: 'Developer',
        salary: 10500,
        dateofjoining: new Date(),
        city: 'Bangalore'
    }    
]

MongoClient.connect(url, (err,client) => {
    if(err) throw err
    const db = client.db('employees_db')
    const col = db.collection('employees')
    console.log('connected to db')
    // Uncomment below code and save to add 5 new records and delete 
    
    // col.insertMany((newEmployees),(err,data) => {
    //     if(err) throw err
    //     console.log(data.insertedIds)    
    // })
    
    // col.deleteMany({designation:"Developer"}, (err,data) => {
    //     console.log(data)
    // })                                                                  
})

