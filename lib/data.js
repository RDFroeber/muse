module.exports = {
  content: [
    {
      path: 'server/models/index.js',
      data: 'module.exports = {}'
    },

    {
      path: 'server/models/User.js',
      basic: {
        data: 'basic'
      },
      oath: {
        data: 'oath'
      },
      both: {
        data: 'both'
      }
    },

    {
      path: 'server/models/Page.js',
      data: ''
    },

    {
      path: 'server/routes/index.js',
      data: ''
    },

    {
      path: 'server/routes/users.js',
      basic: {
        data: 'basic'
      },
      oath: {
        data: 'oath'
      },
      both: {
        data: 'both'
      }
    },

    {
      path: 'server/routes/auth.js',
      basic: {
        data: 'basic'
      },
      oath: {
        data: 'oath'
      },
      both: {
        data: 'both'
      }
    },

    {
      path: 'public/js/main.js',
      data: ''
    },

    {
      path: 'public/css/style.scss',
      data: ''
    },

    {
      path: 'public/css/style.less',
      data: ''
    },

    {
      path: 'public/css/style.css',
      data: ''
    },

    {
      path: 'public/templates/index.ejs',
      data: ''
    },

    {
      path: 'public/templates/layout.ejs',
      data: ''
    },

    {
      path: 'public/templates/auth/signup.ejs',
      data: ''
    },

    {
      path: 'public/templates/auth/login.ejs',
      data: ''
    },

    {
      path: 'public/templates/users/index.ejs',
      data: ''
    },

    {
      path: 'public/templates/users/view.ejs',
      data: ''
    },

    {
      path: 'public/templates/users/edit.ejs',
      data: ''
    },

    {
      path: 'public/templates/errors/401.ejs',
      data: ''
    },

    {
      path: 'public/templates/errors/404.ejs',
      data: ''
    },

    {
      path: 'public/templates/errors/500.ejs',
      data: ''
    },

    {
      path: 'public/templates/errors/503.ejs',
      data: ''
    },

    {
      path: 'config/passport.js',
      data: ''
    },

    {
      path: 'config/auth.js.example',
      data: ''
    }
  ]
}
