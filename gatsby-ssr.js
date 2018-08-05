/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import { renderToString } from 'react-dom/server'
import i18n from './src/i18n'
import Backend from 'i18next-sync-fs-backend'
exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  i18n
    .use(Backend)
    .init({
      initImmediate: false,
      backend: {
        // when this site renders serverside we want to get the locales from the src folder
        loadPath: 'src/locales/{{lng}}/{{ns}}.json',
      },
    })
    // load the common namespace
    .loadNamespaces(['common'], () => {
      replaceBodyHTMLString(renderToString(bodyComponent))
    })
}
