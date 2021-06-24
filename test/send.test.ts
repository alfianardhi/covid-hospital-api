import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/index'

chai.use(chaiHttp)
//TODO: dep
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

  it('Do Register api (null value)', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/register')
      .send({
        username: '',
        password: ''
      })
      .end((err, res) => {
        if (err) done(err)
        expect(res).to.be.not.equal(null)
        expect(res).have.status(422)
        done()
      })
  })
})

describe('Login api /login POST', () => {
  it('Do login api (null value)', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/login')
      .send({
        username: '',
        password: ''
      })
      .end((err, res) => {
        if (err) done(err)
        expect(res).to.be.not.equal(null)
        expect(res).have.status(422)
        done()
      })
  })
})

describe('List All Hospital Data /hospital GET', () => {
  it('Get Data hospital', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/login')
      .send({
        username: 'tester',
        password: '12345678'
      })
      .end((err, res) => {
        if (err) done(err)
        console.log('run login')
        expect(res).have.status(201)
        expect(res).to.be.json
        expect(res).to.have.property('body')
        expect(res.body).to.have.property('token')
        var token = res.body.token

        //auth token
        chai
          .request(app)
          .get('/api/v1/hospital')
          .set('Authorization', 'Bearer ' + token)
          .end((err, res) => {
            if (err) done(err)
            console.log('run get data')
            expect(res).to.be.not.equal(null)
            expect(res).have.status(200)
            expect(res).to.be.json
          })

        done()
      })
  })
})

describe('Update Hospital Data /hospital POST', () => {
  it('Do update hospital data', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/login')
      .send({
        username: 'tester',
        password: '12345678'
      })
      .end((err, res) => {
        if (err) done(err)
        console.log('run login')
        expect(res).have.status(201)
        expect(res).to.be.json
        expect(res).to.have.property('body')
        expect(res.body).to.have.property('token')
        var token = res.body.token

        chai
          .request(app)
          .get('/api/v1/hospital/3')
          .set('Authorization', 'Bearer ' + token)
          .end((err, res) => {
            if (err) done(err)
            console.log('run get data')
            console.log('CEK --- ', res.body.data[0].id)

            chai
              .request(app)
              .put('/api/v1/hospital/' + res.body.data[0].id)
              .set('Authorization', 'Bearer ' + token)
              .send({
                hospital_name: 'RSKD DUREN SAWIT',
                hospital_address: 'JL. DUREN SAWIT BARU NO.2',
                municipalities: 'JAKARTA TIMUR',
                district: 'DUREN SAWIT',
                sub_district: 'DUREN SAWIT'
              })
              .end((err, res) => {
                if (err) done(err)
                console.log('run update data')
                expect(res).to.be.not.equal(null)
                expect(res).have.status(200)
              })
          })
        done()
      })
  })
})

describe('Delete Hospital Data /hospital POST', () => {
  it('Do Delete hospital data', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/login')
      .send({
        username: 'tester',
        password: '12345678'
      })
      .end((err, res) => {
        if (err) done(err)
        console.log('run login')
        expect(res).have.status(201)
        expect(res).to.be.json
        expect(res).to.have.property('body')
        expect(res.body).to.have.property('token')
        var token = res.body.token

        chai
          .request(app)
          .get('/api/v1/hospital/5')
          .set('Authorization', 'Bearer ' + token)
          .end((err, res) => {
            if (err) done(err)
            console.log('run get data')
            console.log('ID --- ', res.body.data[0].id)

            chai
              .request(app)
              .delete('/api/v1/hospital/' + res.body.data[0].id)
              .set('Authorization', 'Bearer ' + token)
              .end((err, res) => {
                if (err) done(err)
                console.log('run delete data')
                expect(res).to.be.not.equal(null)
                expect(res).have.status(200)
              })
          })
        done()
      })
  })
})
