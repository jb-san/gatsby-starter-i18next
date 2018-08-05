# gatsby-starter-i18next

in the article [Building i18n with Gatsby](https://www.gatsbyjs.org/blog/2017-10-17-building-i18n-with-gatsby/)
they go through how to get i18next setup with gatsby, but i couldnt get the ssr to work as described in the article, so after som tinkering i got it to work, this is very basic and can probably get better.

## Installation

with gatsby-cli installed
`gatsby new [APP_NAME] https://github.com/jb-san/gatsby-starter-i18next.git`
without gatsby-cli installed
`git clone https://github.com/jb-san/gatsby-starter-i18next.git`

## TODO

right now you need to run `gatsby build` to move the locales files to the `public/` folder, from where they can be read by the client.
need to figure out how to make gatsby watch the json files.
