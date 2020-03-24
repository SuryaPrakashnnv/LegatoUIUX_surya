var legatoApp = angular.module('legatoApp', ['ngRoute']);

legatoApp.config(function ($routeProvider) {
  //$locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
    })
    .when('/about', {
      templateUrl: 'pages/about.html',
      controller: 'aboutController'
    })
    .when('/services', {
      templateUrl: 'pages/services.html',
      controller: 'servicesController'
    })
    .when('/pages', {
      templateUrl: 'pages/pages.html',
      controller: 'pagesController'
    })
    .when('/doctors', {
      templateUrl: 'pages/doctors.html',
      controller: 'doctorsController'
    })
    .when('/appointment', {
      templateUrl: 'pages/appointment.html',
      controller: 'appointmentController'
    })
    .when('/gallery', {
      templateUrl: 'pages/gallery.html',
      controller: 'galleryController'
    })
    .when('/blog', {
      templateUrl: 'pages/blog.html',
      controller: 'blogController'
    })
    .when('/contact', {
      templateUrl: 'pages/contact.html',
      controller: 'contactController'
    })
    .when('/features', {
      templateUrl: 'pages/features.html',
      controller: 'featuresController'
    })
    .when('/portfolio', {
      templateUrl: 'pages/portfolio.html',
      controller: 'portfolioController'
    })
});

legatoApp.controller('legatoController', ['$scope', function ($scope) {
  $scope.name = 'Legato';

  let user_nav = $('.user-nav');
  user_nav.on('mouseenter', 'div', function () {
    $(this).find('i').stop().animate({ fontSize: '3rem' }, 300).animate({ fontSize: '1.8rem' }, 300);
  });

  let top_nav = $('.top-nav');
  top_nav.on('click', 'li', function () {
    $('.top-nav li').removeClass('top-nav__item--active');
    $(this).addClass('top-nav__item--active');
  });


}]);

legatoApp.controller('homeController', ['$scope', function ($scope) {
  $scope.name = 'Home';
  let infos_list = $('.infos__list');
  infos_list.on('mouseenter', 'div', function () {
    $(this).find('i').stop().animate({ fontSize: '3rem' }, 300).animate({ fontSize: '2rem' }, 300);
  });
}]);

legatoApp.controller('aboutController', ['$scope', function ($scope) {
  $scope.name = 'About';
}]);
legatoApp.controller('servicesController', ['$scope', function ($scope) {
  $scope.name = 'Services';
}]);
legatoApp.controller('pagesController', ['$scope', function ($scope) {
  $scope.name = 'Pages';

}]);
legatoApp.controller('doctorsController', ['$scope', function ($scope) {
  $scope.name = 'Doctors';
}]);
legatoApp.controller('appointmentController', ['$scope', function ($scope) {
  $scope.name = 'Appointment';
}]);
legatoApp.controller('galleryController', ['$scope', function ($scope) {
  $scope.name = 'Gallery';
}]);
legatoApp.controller('blogController', ['$scope', function ($scope) {
  $scope.name = 'Blog';
}]);
legatoApp.controller('contactController', ['$scope', function ($scope) {
  $scope.name = 'Contact';
}]);
legatoApp.controller('featuresController', ['$scope', function ($scope) {
  $scope.name = 'Features';
}]);
legatoApp.controller('portfolioController', ['$scope', function ($scope) {
  $scope.name = 'Portfolio';
}]);