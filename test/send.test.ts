import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/index'

chai.use(chaiHttp)

describe('Register api /register POST', () => {
  it('Do Register api', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/register')
      .send({
        username: 'tester',
        password: '12345678'
      })
      .end((err, res) => {
        if (err) done(err)
        expect(res).have.status(201)
        done()
      })
  })
})

describe('List All Hospital Data /hospital GET', () => {
  it('Get Data hospital', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/register')
      .send({
        username: 'tester',
        password: '12345678'
      })
      .end((err, res) => {
        if (err) done(err)
        expect(res).have.status(201)
        //after token
        chai
          .request(app)
          .get('/api/v1/hospital')
          .end((err, res) => {
            if (err) done(err)
            expect(res).to.be.not.equal(null)
            expect(res).have.status(200)
            res.should.be.json
            res.body.should.be.a('array')
            done()
          })
      })
  })
})
