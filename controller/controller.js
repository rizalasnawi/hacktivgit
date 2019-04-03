const axios = require('axios');

let ax = axios.create({
    baseURL : 'https://api.github.com'
})
ax.defaults.headers.common['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;

class Controller {

    static getRepos(req, res) {
        ax
          .get('/user')
          .then(( {data} ) => {
              res.status(200).json(data)
          })
          .catch((err) => {
              res.status(500).json(err)
          })
    }

    static createRepos (req, res) {
        ax
          .post('/user/repos', {
              name : req.body.repoName
          })
          .then(({data}) => {
              res.status(201).json(data)

          })
          .catch((err) => {
              res.status(500).json(err)
          })
    }

    static deleteRepos (req, res) {
        ax
          .delete(`/repos/${req.params.owner}/${req.params.repoName}`)
          .then(( {data} ) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(500).json(err)

        })
    }

    static findUser(req, res) {
        ax
          .get(`/search/users?q=${req.params.username}`)
          .then(( {data}) => {
            res.status(302).json(data)
          })
          .catch((err) => {
              res.status(500).json(err)
          })
    }

    static starredRepos (req, res) {
        ax
          .get(`/users/${req.params.username}/starred`)
          .then(({data}) => {
             res.status(302).json(data)
          })
          .catch((err) => {
              res.status(500).json(err)
          })
    }

    static unstarRepos(req, res) {
        ax
          .delete(`/user/starred/${req.params.owner}/${req.params.repoName}`)
          .then(({data}) => {
              res.status(200).json(data)
          })
          .catch((err) => {
              res.status(500).json(err)
          })
    }

}


module.exports = Controller