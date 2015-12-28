angular.module('starter.controllers', [])

.controller('PicturesCtrl', function($scope) {
  // FAKE CONTENT FOR THE DEMO
  $scope.timeline = [{
  	date: new Date(),
  	title: "I am here",
  	author:"Ludo Anderson",
  	profilePicture:"perry.png",
  	text: "Lorem ipsum dolor sit amet",
  	type: "location"

  },{
  	date: new Date(),
  	title: "For my friends",
		author:"Sara Orwell",
		profilePicture:"mike.png",
  	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  	type: "text"

  },{
  	date: new Date(),
  	title: "Look at my video!",
  	author:"Miranda Smith",
  	profilePicture:"max.png",
  	text: "Lorem ipsum dolor sit amet",
  	type: "video"

  },{
  	date: new Date(),
  	title: "Awesome picture",
  	author:"John Mybeweeg",
  	profilePicture:"adam.jpg",
  	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  	type: "picture"
  }]
})

.controller('IconsCtrl', function($scope) {
   // FAKE CONTENT FOR THE DEMO
  $scope.timeline = [{
  	date: new Date(),
  	title: "Awesome picture",
  	author:"John Mybeweeg",
  	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  	type: "picture"
  },{
  	date: new Date(),
  	title: "Look at my video!",
  	author:"Miranda Smith",
  	text: "Lorem ipsum dolor sit amet",
  	type: "video"

  },{
  	date: new Date(),
  	title: "I am here",
  	author:"Ludo Anderson",
  	text: "Lorem ipsum dolor sit amet",
  	type: "location"

  },{
  	date: new Date(),
  	title: "For my friends",
		author:"Sara Orwell",
  	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  	type: "text"

  }]
})



