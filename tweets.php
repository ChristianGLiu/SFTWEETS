<?php

/**
 * The backend of sales force assignment
 *
 * 2008 Gang Liu (http://gangliu.net)
 * This software is free to use.
 *
 * Homepage:    http://www.gangliu.info/sfTwitterFeeds/index.html
 * Twitter API: https://dev.twitter.com/rest/public
 * Version:     1.0
 */

require_once 'backend/twitter.class.php';

//Twitter OAuth Settings, enter your settings here:
$CONSUMER_KEY = 'Y5DK2KmdFqLSc4YMprTmnjT89';
$CONSUMER_SECRET = 'BsqxT23ubUXxSDqUNVkTcMzMQ5Ief1CN5hioFOTEyjaRykKExI';
$ACCESS_TOKEN = '98424472-PMpyviCMoErHh9Ri4ImrpsO6iv3YrZZjXmxkUTGNp';
$ACCESS_TOKEN_SECRET = 'STu0NIZSC3wzGNkleNRhZWSVGSRfuboYHnrxXBDDLQb1Q';

$twitter = new Twitter($CONSUMER_KEY, $CONSUMER_SECRET, $ACCESS_TOKEN, $ACCESS_TOKEN_SECRET);

// retrieve data
$q = $_POST['q'];
$count = $_POST['count'];
$api = $_POST['api'];

// api data
$params = array(
	'screen_name' => $q,
	'q' => $q,
	'count' => 20,
  'includes_rts' => true
);

$results = $twitter->request($api, 'GET', $params);

// output as JSON
echo json_encode($results);
?>