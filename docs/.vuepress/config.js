module.exports = {
  title: 'Nop',
  description: 'Documentation for Nop',
  themeConfig: {
    // if your docs are in a different repo from your main project:
    docsRepo: 'nop-is/docs',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // defaults to false, set to true to enable
    editLinks: true,

    nav: [
      { text: 'Nop', link: 'https://nop.is' },
      { text: 'GitHub', link: 'https://github.com/nop-is' },
    ],
    sidebar: [
      {
        title: 'Counter',
        collapsable: false,
        children: [
          ['/counter/usage', 'Usage'],
          ['/counter/see-also', 'See Also']
        ]
      }
    ],
  }
}