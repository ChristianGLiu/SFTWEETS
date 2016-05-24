/**
 * The frontend of sales force assignment
 *
 * 2008 Gang Liu (http://gangliu.net)
 * This software is free to use.
 *
 * Homepage:    http://www.gangliu.info/sfTwitterFeeds/index.html
 * Twitter API: https://dev.twitter.com/rest/public
 * Version:     1.0
 */

var SF_TWEETS = {

    costomer: 'salesforce', //the tweet client you want to pull
    tweetNum: 10, //number ouf tweets yuo need
	sfTweetsList: [],

    init: function () {
		console.log("call twitch api");
		$("#sfTweets").html('');
		$("#keywordInput").val('');
        $.post('tweets.php', {q: SF_TWEETS.costomer, count: SF_TWEETS.tweetNum, api: 'statuses/user_timeline'},
            function (sfTweets) {

                var looptimes = SF_TWEETS.tweetNum < sfTweets.length ? SF_TWEETS.tweetNum : sfTweets.length;
				
				if(sfTweets.length<=0) {
					//error handling
					$("#sfTweets").append(
					   '<div class="zero_results">No Tweets Found!</div>'
				    );
				} else {

				    SF_TWEETS.sfTweetsList = [];
					for (var i = 0; i < looptimes; i++) {
						var value = sfTweets[i];
						
						if (typeof value.user === 'undefined' || !value.user) {
							continue;
						}
						;
						
						SF_TWEETS.sfTweetsList.push(value);

						SF_TWEETS.composeHtml(value,'');

					}
			    }

            }, 'json');

    },
	
	composeHtml: function(value,keyword) {
		var html = '<div class="salesforce_tweets"><div class="user_info">USER_INFO</div>TWEET_IMGTWEET_TEXT<div class="resp">JSONRESPCODE</div>';
		var thisUserUsername = value.user['screen_name'];
		var thisUserProfileImg = '<img class="profile_img" src="' + value.user['profile_image_url'] + '"/>';
		var thisTweetContentImg = '';
		var thisTweetContent = value.text;
		var thisRetweetCount = value.retweet_count;

		var thisUserInfo = thisUserProfileImg + '<div class="profile_user_name">' + thisUserUsername + '</div>';

		if (value.entities.media && value.entities.media.length) {

			thisTweetContentImg = '<img src="' + value.entities.media[0].media_url + '"/>';
		}
		
		if(keyword && keyword.trim().length>0) {
			thisTweetContent = thisTweetContent.replace(keyword,'<span class="keyword">'+keyword+'</span>');
		}

		$("#sfTweets").append(
			html.replace('TWEET_TEXT', thisTweetContent)
				.replace('USER_INFO', thisUserInfo)
				.replace('TWEET_IMG', thisTweetContentImg)
				.replace('JSONRESPCODE', '<div class="retweet_count"><b>Retweeted:</b>' + thisRetweetCount + '</div>')
		);
	},

    filter: function(keyword) {
		$("#sfTweets").html('');
		if(SF_TWEETS.sfTweetsList.length>0) {
			var tempList = [];
			SF_TWEETS.sfTweetsList.forEach(function(item){
				if(item.text.indexOf(keyword)>-1){
					SF_TWEETS.composeHtml(item,keyword);
					tempList.push(item);
				}
			});
			if(tempList.length==0) {
				//error handling
				$("#sfTweets").append(
				   '<div class="zero_results">No Tweets Found!</div>'
				);
			}
		} else {
			//error handling
			$("#sfTweets").append(
			   '<div class="zero_results">No Tweets Found!</div>'
			);
		}
       
    }
};


$(document).ready(function () {
    SF_TWEETS.init();
	setInterval(SF_TWEETS.init,60000);
});