# FireWorker

How to run the application on mac.
Clone the repo, open terminal, and go to directory and run
1. yarn
2. cd ios
3. pod install
4. cd ..
5. npx react-native run-ios

![Simulator Screen Shot - iPhone 13 - 2022-04-10 at 14 26 25](https://user-images.githubusercontent.com/103382059/162634103-17c55145-335b-4703-8b53-379884c72e99.png)

This application has 3 options to show pdf.
1. Local PDF: pdf file is saved to ios assets by xcode and loaded. It's loading speed is very fast but app size can be increased.
2. Online PDF: pdf file is loaded from the online url. It can be cached. So first loading has some time, but after first loading it is cached and cached file is loaded from the next loading. So next loading time is very fast. After expiration time, it loads pdf file from online and caches again.
3. Download PDF from online: pdf file is downloaded to local file system and loaded. So in this way, app checks if pdf file is already existed in local file system, the app loads it directly. If pdf file is not existed in local file system, the app downloads the pdf file to local file system first and loads it. So for the first loading, it has some time for downloading it but after first loading, there is no timespent for downloading it. So its loading speed is very fast after first loading.


I think we can't implement spitting pdf in react native.
