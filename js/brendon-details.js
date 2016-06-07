// Splash
var splash = ""
  + "                                                                     ..;===+.\n"
  + "                                                                  .:=iiiiii=+=\n"
  + "                                                               .=i))=;::+)i=+,\n"
  + "                                                            ,=i);)I)))I):=i=;\n"
  + "                                                         .=i==))))ii)))I:i++\n"
  + "                                                       +)+))iiiiiiii))I=i+:'\n"
  + "                                  .,:;;++++++;:,.       )iii+:::;iii))+i='\n"
  + "                               .:;++=iiiiiiiiii=++;.    =::,,,:::=i));=+'\n"
  + "                             ,;+==ii)))))))))))ii==+;,      ,,,:=i))+=:\n"
  + "                           ,;+=ii))))))IIIIII))))ii===;.    ,,:=i)=i+\n"
  + "                          ;+=ii)))IIIIITIIIIII))))iiii=+,   ,:=));=,\n"
  + "                        ,+=i))IIIIIITTTTTITIIIIII)))I)i=+,,:+i)=i+\n"
  + "                       ,+i))IIIIIITTTTTTTTTTTTI))IIII))i=::i))i='\n"
  + "                      ,=i))IIIIITLLTTTTTTTTTTIITTTTIII)+;+i)+i`\n"
  + "                      =i))IIITTLTLTTTTTTTTTIITTLLTTTII+:i)ii:'\n"
  + "                     +i))IITTTLLLTTTTTTTTTTTTLLLTTTT+:i)))=,\n"
  + "                     =))ITTTTTTTTTTTLTTTTTTLLLLLLTi:=)IIiii;\n"
  + "                    .i)IIITTTTTTTTLTTTITLLLLLLLT);=)I)))))i;\n"
  + "                    :))IIITTTTTLTTTTTTLLHLLLLL);=)II)IIIIi=:\n"
  + "                    :i)IIITTTTTTTTTLLLHLLHLL)+=)II)ITTTI)i=\n"
  + "                    .i)IIITTTTITTLLLHHLLLL);=)II)ITTTTII)i+\n"
  + "                    =i)IIIIIITTLLLLLLHLL=:i)II)TTTTTTIII)i'\n"
  + "                  +i)i)))IITTLLLLLLLLT=:i)II)TTTTLTTIII)i;\n"
  + "                +ii)i:)IITTLLTLLLLT=;+i)I)ITTTTLTTTII))i;\n"
  + "               =;)i=:,=)ITTTTLTTI=:i))I)TTTLLLTTTTTII)i;\n"
  + "             +i)ii::,  +)IIITI+:+i)I))TTTTLLTTTTTII))=,\n"
  + "           :=;)i=:,,    ,i++::i))I)ITTTTTTTTTTIIII)=+'\n"
  + "         .+ii)i=::,,   ,,::=i)))iIITTTTTTTTIIIII)=+\n"
  + "        ,==)ii=;:,,,,:::=ii)i)iIIIITIIITIIII))i+:'\n"
  + "       +=:))i==;:::;=iii)+)=  `:i)))IIIII)ii+'\n"
  + "     .+=:))iiiiiiii)))+ii;\n"
  + "    .+=;))iiiiii)));ii+\n"
  + "   .+=i:)))))))=+ii+\n"
  + "  .;==i+::::=)i=;\n"
  + "  ,+==iiiiii+,\n"
  + "  `+=+++;`\n";

// Put your details here
var name = "Brendon Body";
var loc = "Sydney, Australia";

var lookingfor = "Frontend Development Opportunities";

var githubUsername = "bbody";
var bitbucketUsername = "bbody";
var showForks = false;
var pdfLink = "https://www.brendonbody.com/CMD-Resume/CV.pdf";

var githubURL = "https://github.com/" + githubUsername;
var bitbucketURL = "https://bitbucket.org/" + bitbucketUsername;
var websiteURL = "http://www.brendonbody.com/";
var blogURL = "http://www.brendonbody.com/";
var portfolioURL = "";
var twitterURL = "https://twitter.com/DormeoES";
var facebookURL = "";
var skypeAccount = "brendon.body";

var socialMedia = [["Github", githubURL], ["Bitbucket", bitbucketURL], ["Website", websiteURL], 
	["Blog", blogURL], ["Portfolio", portfolioURL], ["Twitter", twitterURL], ["Facebook", facebookURL],
	["Skype", skypeAccount]];


var education = [["General Assembly", "Product Management", "Graduated February, 2016"],
	["University of Queensland", "Bachelor of Engineering (Software Engineering)", "Graduated July, 2014"],
	["Tianjin University", "Applied Computer Science Research", "June-July 2012"],
	["Chinese University of Hong Kong", "Exchange Student", "September-December 2011"]];

var employment = [["Westpac Institutional Bank", "Frontend Developer", "February 2016 - Present"],
	["Westpac Banking Group", "Business Analyst", "February 2015 - February 2016"],
	["Westpac Banking Group", "Software Engineering Intern", "November 2013 - February 2014"],
	["APS Mining", "Test Engineering Intern", "December 2012 - November 2013"],
	["Keays Software", "Software Engineering Intern", "April 2012 - November 2013"],
	["Google Australia", "Student Ambassador", "January 2013 - November 2013"],
	["Wali Information Technology", "IT Intern", "January 2012 - February 2012"]];

var volunteering = [["Web Developer", "Vanuatu Agriculture College", "September-December 2014"],
	["Mentor", "Coder Dojo Brisbane", "July-September 2013"],
	["Rescue Referee", "RoboCup Junior Australia", "August 2012"]];	

var awards = [["1st Place - Driveway", "AngelHack Sydney", "May 2015"],
	["Paul Gampe Excellence Prize in Open Source", "Faculty of Engineering, Architecture and Information Technology", "December 2014"],
	["2nd Place - SeamCore", "Unearthed Sydney", "August 2015"],
	["2nd Place - Divvly", "Startup Weekend Melbourne", "March 2015"],
	["Freelancer API Prize", "NASA Space Apps Sydney", "April 2016"],
	["Runner up - UrSay.Click", "Crowd Source Hire - Telstra API Developer Contest", "August 2015"],
	["Certificate of Achievement", "ACM South Pacific Regional Programming Contest", "2013"],
	["Dean's Commendation", "The University of Queensland", "2011 and 2012"]];

var membership = [["ABLE Accessibility at Work", "Member"]];

// Skills
var skillsLanguages = [["Proficient", "HTML, CSS, Javascript, jQuery"],
	["Experienced", "Ruby on Rails, Angular.js"],
	["Familiar", "Python, Ruby"]];

var skillsTools = [["Proficient", "Git, Github"],
	["Experienced", "IntelliJ, Sublime Text"],
	["Familiar", "Vim, Gulp, NPM"]];

var skillsConcepts = [["Proficient", "Agile, Single Page Application"],
	["Experienced", "Web Accessibility, Continuous Deployment"],
	["Familiar", "Data Mining, Test Driven Development"]];

var publicPGPkey = "";
