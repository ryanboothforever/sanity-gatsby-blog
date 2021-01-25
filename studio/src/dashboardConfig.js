export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600f1b19a63a210cf67fc91d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-97esyefs',
                  apiId: 'c9730212-ce73-45fc-9a4e-4db85b5adfc6'
                },
                {
                  buildHookId: '600f1b1905599e0d19211fa5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bh3a4a6s',
                  apiId: '82a457ee-7686-4edb-9161-1ae0ab2746a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryanboothforever/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bh3a4a6s.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
