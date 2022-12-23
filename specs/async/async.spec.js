const { User } = require('../../04_async/async')
const axios = require('axios')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

const expect = chai.expect

chai.use(sinonChai)

describe(`Unit Testing Asynchronous Code`, () => {
    describe(`the 'User' class`, (done) => {
        const sandbox = sinon.createSandbox()
        let user

        beforeEach(() => {
            user = new User('sa2209github')
        })

        afterEach(() => {
            sandbox.restore()
        })

        it('should get the user id', (done) => {
            const getStub = sandbox.stub(axios, 'get').resolves({ data: { id: 1112233 } })
            user.getUserId()
                .then(result => {
                    expect(result).to.be.a('number')
                    expect(result).to.be.eq(1112233)
                    expect(getStub).to.have.been.calledOnce
                    expect(getStub).to.have.been.calledWith('https://api.github.com/users/sa2209github')
                    done()
                })
                .catch(done)
        })
        it('should return a repository if the user can view repos', (done) => {
            const getStub = sandbox.stub(axios, 'get').resolves({ data: ['repo1', 'repo2', 'repo3'] })
            sandbox.stub(user, 'canViewRepos').value(true)
            user.getUserRepo(2)
                .then(response => {
                    expect(response).to.be.eq('repo3')
                    expect(getStub).to.have.been.calledOnceWith('https://api.github.com/users/sa2209github/repos')
                    done()
                })
                .catch(done)
        })
        it('should return an error if the user cannot view repos', (done) => {
            const getStub = sandbox.stub(axios, 'get')
            sandbox.stub(user, 'canViewRepos').value(false)
            user.getUserRepo(2)
                .catch(error => {
                    expect(error).to.be.eq('Cannot view repos')
                    expect(getStub).to.not.have.been.called
                    done()
                })
        })
    })
})