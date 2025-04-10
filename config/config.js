/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "da",
	locale: "da-DK",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				showWeek: true,
				showSunTimes: true,
				showMoonTimes: true,
				lat: 57.03516787553769,
				lon: 9.935990282846731	
				}
		},
		{
			module: "calendar",
			header: "Delte kalender",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/2ad59d60f5a0a78551757249897271fc24b00874002fa13c0dbee3198232f910%40group.calendar.google.com/private-95fe1951909e86b7e1c0c902ed8aa9d7/basic.ics",
						fadePoint: 0.5
					}
				]
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 57.03516787553769,
				lon: 9.935990282846731
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Vejrudsigt",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 57.03516787553769,
				lon: 9.935990282846731
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "DR Nyhederne",
						url: "https://www.dr.dk/nyheder/service/feeds/senestenyt"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},

  		{
    			module: "updatenotification",
    			position: "top_center", // This can be any of the regions.
    			config: {
      				updateAutorestart: true
      				
				}
    		},
		{
        	module: 'MMM-GoogleTrafficTimes',
        	position: 'top_bar',
        	config: {
            	key: '',
            	origin: {
                address: '57.03516787553769,9.935990282846731',
                addressFormat: 'coordinates',
            },
            destinations: [{
                    name: 'Med24',
                    address: '57.37271567342695,9.730691105373163',
                    addressFormat: 'coordinates',
                    mode: 'drive',
                    avoidHighways: true,
                    avoidTolls: true,
                    schedules: [],
                    showDestinationOutsideScheduleWithoutTraffic: true
                }
            ],
            updateInterval: 900000,
            avoidHighways: false,
            avoidTolls: false,
            avoidFerries: false,
            mode: 'drive',
            language: 'en-EN',
            offsetTimePercentage: 25,
            lastUpdate: true,
            timeLastUpdateWarning: 1,
            horizontalLayout: false,
            debug: false
        },
    }]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
