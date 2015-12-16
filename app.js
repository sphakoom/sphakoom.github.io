(function(){
  var app = angular.module('portfolio', []);

  app.controller('ProjectController', function() {
  	this.projects = work;	 // property of controller
  });

  var work = [
    {
      name: 'Foodie',
      description: 'A web app. The world\'s easiest-to-use recipe book. Developed using Bootstrap, Javascript, and JQuery for the web.',
    },
    {
      name: 'Rain',
      description: 'A single-player game. It\'s raining cats and dogs and you\'ve got to catch them all. Developed on Eclipse using lib-GDX for desktop and mobile platforms.',
    },
    {
    	name: 'Spotispy',
    	description: '',
    }
  ];


  app.controller('PanelController', function() {
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab = checkTab;
    }
  });

})();