codekit-kickoff
===============

A scaffolding for use with CodeKit

Purpose & Dependency:

I use CodeKit (http://incident57.com/codekit/) daily and do a lot of prototyping with several libraries that provide me a lot of efficiency. As such, I have been working 
on developing a kickoff project to easily get up and running with this base application whenever I want to get a prototype to hit the ground running. While I understand 
that CodeKit provides a Framework concept, much of what I do is hand files off to others who may or may not be using CodeKit. The following kickoff project allows me to 
build a project easily in a modular way that can allow another developer to either choose to use the CodeKit compiling engine or I can choose to only supply the primary 
"/html" and "/app" directories and the project will just "fire up" without the need for CodeKit. For me, this is currently ideal. 

With all of that in mind, CodeKit is obviously a dependency to this project. While you could likely untangle the web with not a lot of effort, the purpose of this project 
is to be used with CodeKit.

Acknowledgement:

CodeKit, jQuery, jQuery Mobile, Twitter Bootstrap, Font-Awesome, and Normalize.css are all able to be used within this project. I find these tools/libraries to be 
invaluable to my daily workflow. As such, I want to say thank you to everyone who has contributed to them, since they likely provide me with countless saved hours.
To that end, each of these tools/libraries have their own Licensing Restrictions. It is your responsibility to be aware of them.

Basic Application Structure:

	├── app
		├── css
			└── app.min.css
		├── img
		└── js
			└── app.min.js
	├── build
		├── js
			└── app.js
		├── kits
			├── index.kit
			└── partials
				├── footer.kit
				└── header.kit
		└── less
			├── app.less
			└── partials
				├── colors.less
				├── globals.less
				├── mixins.less			
				└── viewport.less
	├── codekit-config.json
	├── html
		└── index.html
	├── lib	
		├── bootstrap-2.2.2
			├── css
				├── bootstrap-responsive.min.css
				└── bootstrap.min.css
			├── img
				├── glyphicons-halflings-white.png
				└── glyphicons-halflings.png
			└── js			
				└── bootstrap.min.js
		├── font-awesome-3.0.0
			├── css
				├── font-awesome-ie7.min.css
				└── font-awesome.min.css
			└── font
				├── fontawesome-webfont.eot
				├── fontawesome-webfont.svg
				├── fontawesome-webfont.ttf
				├── fontawesome-webfont.woff
				└── FontAwesome.otf
		├── jquery-1.8.3
			├── jquery-1.8.3.js
		├── jquery-mobile-1.2.0
			├── css
			└── themes
				└── default
					└── images
						├── ajax-loader.gif
						├── icons-18-black.png
						├── icons-18-white.png
						├── icons-36-black.png
						└── icons-36-white.png						
					├── jquery.mobile-1.2.0.min.css
					├── jquery.mobile.structure-1.2.0.min.css
					└── jquery.mobile.theme-1.2.0.min.css
			└── js
				└── jquery-mobile-1.2.0.js
		└── normalize-2.0.1
			└── normalize-2.0.1.css
	└── README

NOTE: 

APPLICATION COMPILING: The CodeKit compiler relies, in this case, upon the "codekit-config.json" file, which has been pre-configured to build 
specific files into default directories following the structure above. As such, it is IMPORTANT to remember what files are being compiled by CodeKit 
and which files are NOT being compiled -- thus are editable. In most circumstances, you DO NOT want to edit files that are listed as COMPILED below.
Similarly, you should not directly edit or intervene with any of the Library (/lib) files or directories either, as they are layed out in
their respective directory structure as expected by their own dependencies. This will allow us to easily upgrade the libraries without 
unnecessary intervention.

COMPILED Files (Do Not Edit Directly):

	├── app/css/app.min.css
	├── app/js/app.min.js
	└── html/index.html

NOTE: As mentioned above, there are times when I want to hand the compiled files off to another developer not using CodeKit, thereby they will probably want to edit
these compiled files. When this occurs, I simply do not provide the "/build" directory and configure CodeKit to compile "app.min.js" and "app.min.css" without any
concatenation or minification. This way the other developer(s) have the opportunity to intervene or review the code. It is important to remember, however, that it 
is probably safer for those developers to create their own CSS file to import so that you don't end up colliding with them or overwriting their development in the 
event that you build and compile at a later date.

Application Files:
All Production support files reside in the "/app" directory. As mentioned, it is best in most circumstances to not edit these files, since they are compiled from other
sources.

Build Files: 
All Build files reside in the "/build" directory

LESS (/build/less):
This project uses LESS CSS (http://lesscss.org) for managing all style elements. CodeKit has the ability to compile the LESS code to a unified CSS file. The default
management of this file is to leverage the build/less/app.less file for handling all imports, including all "partial" LESS files, which reside in the build/less/partials
directory. A good usage of this might be to create a header.less file that defines all of the styles related to the header of a document. The app.less file would then
import the header.less file. The final output upon compilation from CodeKit would be the app/css/app.min.css under the default management of this project. 

NOTE: If you prefer to use SASS (http://sass-lang.com) vs. LESS, this is fine, but you would need to port over all of the variables, etc. that are currently used to 
SASS syntax. 

NOTE: While I prefer to use CodeKit, if you prefer to use something else to work with LESS, there are many options to remove CodeKit from this workflow, which include the 
usage of other compilers (http://fadeyev.net/2012/02/16/less-update/) or the default LESS process, which utilizes a JavaScript compiler within the DOM. 

KITS (/build/kits):
This project takes advantage of CodeKit's "kit language" (http://incident57.com/codekit/kit.php). This allows you to build html includes (such as header/footer, etc.)
without the need to use a dynamic language. This is very beneficial for rapid prototyping with reused elements. The default usage of this feature within this project
is to create your primary kit files (/build/kits/index.kit) and include any partials (/build/kits/partials) for any reused elements. CodeKit is configured in this 
project to then compile the index.kit file to index.html within the "/html" directory.

JS (/build/js):
This project compiles its JavaScript into a minified and JSLint(ed) output file (/app/js/app.min.js). Through CodeKit, part of the compiling process is to prepend
jQuery by default. If you choose, you can also prepend other libraries via CodeKit's prepending ability. Twitter Bootstrap and jQuery Mobile both will be detected
by CodeKit for prepending/appending to your JavaScript file, but in order to include them, you will have to manually drag them into the prepend/appended state within
CodeKit.

HTML Files:
All Production HTML files reside in the "/html" directory. As mentioned, it is best in most circumstances to not edit these files, since they are compiled from other
sources.

Library Files:
All third-party Library files reside in the "/lib" directory

NOTE: All library dependent style includes are activated and deactivated within the "/build/less/app.less" file. To activate or deactivate a library's style, simply
commend or uncomment that library's includes within "app.less"

NOTE: The directory structure of the libraries has been retained for easy management of the libraries themselves.

Project Licensing (CodeKit Kickoff ONLY):
The MIT License (MIT)
Copyright (c) 2013 The Hive Media

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without 
restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom 
the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE 
AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.