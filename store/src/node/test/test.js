const request = require('supertest')

const {app} = require('../app')



describe('Test for a mock node api', ()=>{
    it('should get 200 response', (done) =>{
        request(app)
        .get('/categories')
        .set("Accept", "application/json")
        .expect('content-type', /json/)
        .expect(200,done)
        
    })
})

describe('Test for a mock node api', ()=>{
    it('should get 200 response', (done) =>{
        request(app)
        .get('/categories/2/products')
        .set("Accept", "application/json")
        .expect('content-type', /json/)
        .expect(200,done)
        
    })
})

describe('Test for a mock node api', ()=>{
    it('should get 404 response', (done) =>{
        request(app)
        .get('/products/20')
        .set("Accept", "application/json")
        .expect('content-type', /json/)
        .expect(404,done)
        
    })
})

describe('Test for a mock node api', ()=>{
    it('should get 200 response', (done) =>{
        request(app)
        .get('/categories/2')
        .set("Accept", "application/json")
        .expect('content-type', /json/)
        .expect(200,done)
        
    })
})