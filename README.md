# Salesforce Assignment - Tweets Pull
This tiny project is to pull the last 10 tweets from salesforce twitter, and added interval, filter.

This is an implimentation of the Salesforce Assignment - Tweets Pull (http://gangliu.info/sfTwitterFeeds/) for salesforce assignment, it adds the following functionality -

- show the last 10 tweets from salesforce
-- It will retrieve latest tweets  every 1 minutes
-- Added friendly stylesheet for UI
-- Show the user screen name, portrait picture, tweets contents, tweets IMG (if it has), retweeted counts
- filter
-- Added filter input box to all user to filter tweets by finding the keywords in the tweets content.
-- hightlight the keywords in the found tweets content (black background, white text).

## Installation

### Backend

To install this App into an webspace:

    Upload tweets.php + backend folder into your webspace (ex: http://gangliu.info/sfTwitterFeeds/)

    specify your own twitter customer key, secret, access token and access secret in tweets.php

### Frontend

To install this App into an webspace (or just the same webspace with your backend):

    Upload index + js,css folder into your webspace (remember in your twitter.js, to call your backend service URL, like http://gangliu.info/sfTwitterFeeds/tweets.php)

## Usage

### Salesforce Tweets

open your frontend page , like http://gangliu.info/sfTwitterFeeds/index.html

input filter keyword in the box on the top.

## Error handling

There is common error handling when no tweets found, it will show error message to inform "no tweets found"

## P

## Supported browsers/environments

(Tested in chrome, firefox, later version IE > 8)

## Dependencies

Twitter API
OAuth API
JQuery 1.6+

## Testing

Function test when app was deployed on webspace.

## Building

The distribution version of the App can be built by running "npm run dist" from the command line.

## Issue and Enhancement

we might be able to add more error handling, like connection lost.

## Release Notes

### Version 0.0.0
- Code is free to use and view

## Author
Gang Liu (http://gangliu.info)