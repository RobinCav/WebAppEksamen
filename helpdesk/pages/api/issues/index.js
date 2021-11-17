// pages/api/feeds/index.js
// url => localhost:3000/api/feeds

import * as issuesController from '@/features/issues/issues.controller'
// import { createFeed, listFeeds } from '@/features/feeds/feeds.controller'

export default async function handler(req, res) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case 'post':
      // kaller på kontrolleren som brukes til å lage ny feed
      await issuesController.createIssue(req, res)
      break
    case 'get':
      // kaller på kontrolleren som brukes til å hente alle feeds
      await issuesController.listIssues(req, res)
      break
    default:
      // gir 405 Method Not Allowed hvis brukeren prøver på noe annet 
      // enn GET eller POST
      res.status(405).end()
  }
}
