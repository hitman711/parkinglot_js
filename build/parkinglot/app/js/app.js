/* Module inititalization */
(function (angular) {

    "use strict";

    angular.module('parkinglot', [
        'ui.router',
        'ui.router.state.events',
        'ui.bootstrap',
        'toaster',
        'ngAnimate',
        'ngSanitize',
        'ui.bootstrap.datetimepicker',
        'ui.dateTimeInput',
        'moment-picker'
    ]);

})(window.angular);
;/*List of filters used to perform data manipulation operation */
(function(angular){

	"use strict";

})(window.angular);
;(function (angular) {

    "use strict";

    function config(
        $stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $provide) {
        // body...
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

        // the known route
        $urlRouterProvider.when('', '/');

        // For any unmatched url, redirect to /404
        $urlRouterProvider.otherwise("/404");

        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'app/user/login.html',
                controller: 'userCtrl',
                controllerAs: 'vm'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/user/signup.html',
                controller: 'userCtrl',
                controllerAs: 'vm'
            })
            .state('venue', {
                url: '/venue',
                templateUrl: 'app/venue/venue.html',
                controller: 'venueCtrl',
                controllerAs: 'vm'
            })
            .state('company', {
                url: '/company',
                templateUrl: 'app/venue/company.html',
                controller: 'venueCtrl',
                controllerAs: 'vm'
            })
            .state('reservations', {
                url: '/reservations',
                templateUrl: 'app/venue/reservation.html',
                controller: 'venueCtrl',
                controllerAs: 'vm'
            })
            .state('my-reservation', {
                url: '/my-reservation',
                templateUrl: 'app/venue/my-reservation.html',
                controller: 'venueCtrl',
                controllerAs: 'vm'
            })
            .state('prices', {
                url: '/prices',
                templateUrl: 'app/venue/prices.html',
                controller: 'venueCtrl',
                controllerAs: 'vm'
            })
            .state('404', {
                url: '/404',
                templateUrl: 'app/404.html'
            })
    };

    angular.module('parkinglot').config([
        '$stateProvider',
        '$urlRouterProvider',
        '$httpProvider',
        '$locationProvider',
        '$provide',
        config]);

})(window.angular);
;/*
List of services available to perform API opetation

getData
postData
putData
deleteData
*/

(function (angular) {

	"use strict";

	function serviceApi($http, $q, $state, $window) {

		var headers = {};

		this.getData = function (url, with_token) {
			var token = $window.localStorage.getItem('token');
			if (with_token) {
				headers = {
					"Authorization": "Token " + token
				}
			}
			return $http({
				method: 'GET',
				url: url,
				headers: headers
			})
		};

		this.postData = function (url, data, with_token) {
			var token = $window.localStorage.getItem('token');
			if (with_token) {
				headers = {
					"Authorization": "Token " + token
				}
			}
			return $http({
				method: 'POST',
				url: url,
				data: data,
				headers: headers
			})
		};

		this.putData = function (url, data, with_token) {
			var token = $window.localStorage.getItem('token');
			if (with_token) {
				headers = {
					"Authorization": "Token " + token
				}
			}
			return $http({
				method: 'PUT',
				url: url,
				data: data,
				headers: headers
			})
		};

		this.patchData = function (url, data, with_token) {
			var token = $window.localStorage.getItem('token');
			if (with_token) {
				headers = {
					"Authorization": "Token " + token
				}
			}
			return $http({
				method: 'PATCH',
				url: url,
				data: data,
				headers: headers
			})
		};


		this.deleteData = function (url, with_token) {
			var token = $window.localStorage.getItem('token');
			if (with_token) {
				headers = {
					"Authorization": "Token " + token
				}
			}
			return $http({
				method: 'DELETE',
				url: url,
				headers: headers
			})
		};
	};

	angular.module('parkinglot').service('serviceApi', [
		'$http', '$q', '$state', '$window', serviceApi
	]);

})(window.angular);
;/* State change user validation operation*/
(function (angular) {

	"use strict";

	function run($state, $rootScope, $window, $location) {
		var token_state = [
			'venue', 'company', 'reservations', 'my-reservation',
			'prices'
		];
		var non_token_state = ['login', 'signup'];

		$rootScope.$on('$stateChangeStart', function (event, next) {
			var token = $window.localStorage.getItem('token');
			if (token) {
				if (token_state.indexOf(next.name) == -1) {
					event.preventDefault();
					$state.transitionTo('venue');
				}
			} else {
				if (non_token_state.indexOf(next.name) == -1) {
					event.preventDefault();
					$state.transitionTo('login');
				}
			}
		})
	}

	angular.module('parkinglot').run(
		['$state', '$rootScope', '$window', '$location', run]
	);

})(window.angular);
;/*
Constant list of parameter which used to perform operation in project
 */
(function (angular) {

    "use strict";

    angular.module('parkinglot')
        .constant('DOMAIN', 'http://52.15.231.54/v1/')
        .constant('SIGNIN', 'login')
        .constant('REGISTRATION', 'register')
        .constant('DETAIL', 'detail')
        .constant('COMPANY', 'company')
        .constant('COMPANY_DETAIL', 'company/{company_id}')
        .constant('VENUE', 'venue/{venue_id}/venue')
        .constant('ARCHITECTURE', 'company/{company_id}/venue')
        .constant('RESERVATION', 'reservation')
        .constant('COMPANY_RESERVATION', 'company-reservation')
        .constant('VENUE_SEARCH', 'venue')
        .constant('VENUE_DETAIL', 'venue/{venue_id}')
        .constant('PRICE', 'company/{company_id}/price')
        .constant('PRICE_DETAIL', 'company/{company_id}/price/{price_id}')
        .constant('RESERVATION_DETAIL', 'reservation/{reservation_id}');

})(window.angular);
;/* UserCtrl controller perform Create, Validate and Update
    operation on sign-in and registration API
*/
(function (angular) {

	"use strict";

	function userCtrl(
		$state, $window, $filter, toaster, DOMAIN, SIGNIN,
		REGISTRATION, serviceApi) {
		/*
		sign_in : Login parameters
		sign_in_error : Login parameter error
		field_error : Boolean field to display error msg on front end
		sign_up : Registration parameter
		sign_up_error : Registration parameter error
		*/
		var vm = this;
		vm.sign_in = {
			'username': '',
			'password': ''
		}

		vm.sign_in_error = {
			'username': '',
			'password': ''
		}
		vm.field_error = false;

		vm.sign_up = {
			'first_name': '',
			'last_name': '',
			'password': '',
			'username': '',
			'email': ''
		}

		vm.sign_up_error = {
			'first_name': '',
			'last_name': '',
			'password': '',
			'username': '',
			'email': ''
		}
		/* Function to check user details and generate token via sign-in API */
		vm.signIn = function () {
			vm.field_error = false;
			serviceApi.postData(DOMAIN + SIGNIN, vm.sign_in, false)
				.then(function (response) {
					// Success handler
					console.info(response.data);
					$window.localStorage.setItem('token', response.data.authentication_code);
					$window.localStorage.setItem('email', response.data.email);
					$window.localStorage.setItem('full_name', '');
					$window.localStorage.setItem('company_count', response.data.company_count);
					$window.localStorage.setItem('reservation_count', response.data.reservation_count);
					$window.localStorage.setItem('company_id', response.data.company_id);
					$state.transitionTo('venue');
				},
					function (response) {
						// Error handler
						var data = response.data;
						if ("non_field_errors" in data) {
							toaster.pop("error", data["non_field_errors"][0]);
						} else {
							angular.forEach(data, function (value, key) {
								vm.field_error = true;
								vm.sign_in_error[key] = value[0]
							});
						}
					});
		}

		/* Function to perform user create operation */
		vm.registration = function () {
			serviceApi.postData(DOMAIN + REGISTRATION, vm.sign_up, false)
				.then(function (response) {
					$state.transitionTo('login');
				},
					function (response) {
						// Erro handler
						var data = response.data;
						if ("non_field_errors" in data) {
							toaster.pop("error", data["non_field_errors"][0]);
						} else {
							angular.forEach(data, function (value, key) {
								vm.field_error = true;
								vm.sign_up_error[key] = value[0]
							});
						}
					});
		}
	}

	angular.module('parkinglot').controller(
		'userCtrl', [
			'$state', '$window', '$filter', 'toaster', 'DOMAIN',
			'SIGNIN', 'REGISTRATION', 'serviceApi', userCtrl
		]);

})(window.angular);
;/* venueCtrl controller perform Read, Create, Update and Delete operation on task-list API

*/
(function (angular) {

    "use strict";

    function venueCtrl(
        $state, $window, $filter, toaster, DOMAIN,
        COMPANY, COMPANY_DETAIL, ARCHITECTURE, VENUE,
        PRICE, PRICE_DETAIL, VENUE_DETAIL, DETAIL,
        RESERVATION, COMPANY_RESERVATION, VENUE_SEARCH,
        RESERVATION_DETAIL, serviceApi) {

        var vm = this;
        Date.prototype.getUnixTime = function () { return this.getTime() / 1000 | 0 };

        vm.getCurrentTime = function (timestamp) {
            return new Date(timestamp * 1000);
        }

        vm.venue_search = {
            'search': '',
            'available': new Date()
        }

        vm.venue_list = {};
        vm.company_search = {};
        vm.reservation_search = {};
        vm.company_list = [];
        vm.company_detail = {
            'id': '',
            'name': ''
        }
        vm.venue_detail = {};
        vm.reservation_list = {};
        vm.reservation_detail = {
            'payments': []
        };
        vm.reservation_id = '';
        vm.price_detail = {}

        vm.reservation = {
            'id': '',
            'date': '',
            'book_from': new Date(),
            'book_to': '',
            'license': '',
            'venue': '',
            'phone_number': '',
            'payments': [{
                'amount': 0,
                'payment_type': 'free'
            }]
        }

        vm.reservation_status_type = [
            { 'key': 'pending', 'value': 'Pending' },
            { 'key': 'booked', 'value': 'Booked' },
            { 'key': 'active', 'value': 'Active' },
            { 'key': 'closed', 'value': 'Closed' },
            { 'key': 'canceled', 'value': 'Canceled' },
        ]
        vm.payment_type = [
            { 'key': 'cash', 'value': 'Cash' },
            { 'key': 'free', 'value': 'Free' },
            { 'key': 'card', 'value': 'Card' }
        ]

        vm.venue_type = [
            {'key': 'public', 'value': 'Publicaly available for booking'},
            {'key': 'private', 'value': 'Private parking'}
        ]

        vm.payment_status = [
            { 'key': 'pending', 'value': 'Pending' },
            { 'key': 'partial paid', 'value': 'Partial Paid' },
            { 'key': 'full paid', 'value': 'Full Paid' }
        ]

        vm.duration_unit = [
            { 'key': 'day', 'value': 'Day' },
            { 'key': 'hour', 'value': 'Hour' }
        ]

        vm.venue_category = [
            { 'key': 'building', 'value': 'Building' },
            { 'key': 'floor', 'value': 'Floor' },
            { 'key': 'lot', 'value': 'Parking lot' }
        ]

        vm.add_price = {
            "duration": '',
            "duration_unit": "hour",
            "pre_paid_amount": "",
            "amount": "",
            "overdue_amount": "",
            "name": ""
        }
        vm.price_duration = [
            { 'key': 'day', 'value': 'Day' },
            { 'key': 'hour', 'value': 'Hour' }
        ]
        vm.add_venue = {
            "name": "",
            "category": "",
            "price": ''
        }

        vm.company_detail = {
            'id': '',
            'name': ''
        }
        vm.company_list = [];
        vm.company_price_list = [];
        /* Function to logged out user from system and throw back to login page */
        vm.SignOut = function () {
            $window.localStorage.clear();
            $state.transitionTo('login');
        }

        vm.CreateCompany = function () {
            serviceApi.postData(DOMAIN + COMPANY, vm.company_detail, true)
                .then(
                    function (response) {
                        vm.company_detail = response.data;
                        vm.user_detail();
                        vm.company_list.push(response.data);
                        toaster.pop("success", "Company create successfully");
                        $('.modal').modal('hide');

                    },
                    function (response) {
                        data = response.data;
                        if ("non_field_errors" in data) {
                            toaster.pop("error", data["non_field_errors"][0]);
                        } else {
                            angular.forEach(data, function (value, key) {
                                vm.field_error = true;
                                vm.sign_up_error[key] = value[0]
                            });
                        }
                    });
        }

        if ($window.localStorage.getItem('company_id') > 0) {
            vm.company_id = $window.localStorage.getItem('company_id');
            vm.reservation_count = $window.localStorage.getItem('reservation_count');
        } else {
            vm.company_id = 0;

        }

        vm.AddVenueDetail = function (id) {
            vm.venue_id = id;
            vm.venue_detail = {};
            vm.API_SERVICE_CALL('prices', 'get');
        }

        vm.UpdateVenueDetail = function (id) {
            vm.venue_id = id;
            angular.forEach(vm.my_venue_list.results, function (value, key) {
                if (value.id == id) {
                    vm.venue_detail = value;
                }
            });
            vm.API_SERVICE_CALL('prices', 'get');
        }

        vm.user_detail = function () {
            serviceApi.getData(DOMAIN + DETAIL, {}, true)
                .then(function (response) {
                    $window.localStorage.setItem('token', response.data.authentication_code);
                    $window.localStorage.setItem('email', response.data.email);
                    $window.localStorage.setItem('full_name', '');
                    $window.localStorage.setItem('company_id', response.data.company_id);
                    $window.localStorage.setItem('reservation_count', response.data.reservation_count);
                    vm.company_id = $window.localStorage.getItem('company_id');
                    vm.reservation_count = $window.localStorage.getItem('reservation_count');
                })
        }
        vm.my_venue_list = {};
        vm.my_venue_search = {};
        vm.price_id = '';

        vm.VenueDetail = function (id) {
            angular.forEach(vm.venue_list.results, function (value, key) {
                if (value.id == id) {
                    vm.reservation_detail.venue = id;
                    vm.venue_detail = value;
                }
            })
        }

        vm.ReservationDetail = function (id) {
            angular.forEach(vm.reservation_list.results, function (value, key) {
                if (value.id == id) {
                    vm.reservation_detail = value;
                    vm.reservation_id = value.id;
                    vm.reservation_detail.venue = value.id;
                }
            });
        }

        vm.PriceDetail = function (id) {
            angular.forEach(vm.price_list.results, function (value, key) {
                if (value.id == id) {
                    vm.price_detail = value;
                    vm.price_id = value.id;
                }
            }, vm);
        }


        vm.method_calls = [
            {
                'venue': {
                    'get': {
                        'url': DOMAIN + VENUE_SEARCH,
                        'key_replace': {
                        },
                        'success_key': 'venue_list',
                        'search_field': 'venue_search',
                    },
                    'post': {
                        'url': DOMAIN + VENUE,
                        'key_replace': {
                            '{venue_id}': 'venue_id'
                        },
                        'success_key': 'venue_detail',
                    },
                    'update': {
                        'url': DOMAIN + VENUE_DETAIL,
                        'key_replace': {
                            '{venue_id}': 'venue_id'
                        },
                        'success_key': 'venue_detail',
                    }
                }
            },
            {
                'company': {
                    'get': {
                        'url': DOMAIN + ARCHITECTURE,
                        'search_field': 'my_venue_search',
                        'key_replace': {
                            '{company_id}': 'company_id'
                        },
                        'success_key': 'my_venue_list',
                    },
                    'post': {
                        'url': DOMAIN + ARCHITECTURE,
                        'key_replace': {
                            '{company_id}': 'company_id'
                        },
                        'success_key': 'venue_detail',
                    }
                }
            },
            {
                'my-reservation': {
                    'get': {
                        'url': DOMAIN + RESERVATION,
                        'search_field': 'my_reservation_search',
                        'key_replace': {
                        },
                        'success_key': 'my_reservation_list',
                    },
                    'post': {
                        'url': DOMAIN + RESERVATION,
                        'key_replace': {
                        },
                        'success_key': 'reservation_detail',
                    },
                },
            },
            {
                'reservations': {
                    'get': {
                        'url': DOMAIN + COMPANY_RESERVATION,
                        'search_field': 'reservation_search',
                        'key_replace': {
                        },
                        'success_key': 'reservation_list',
                    },
                    'post': {
                        'url': DOMAIN + RESERVATION,
                        'key_replace': {
                        },
                        'success_key': 'reservation_detail',
                    },
                    'update': {
                        'url': DOMAIN + RESERVATION_DETAIL,
                        'key_replace': {
                            '{reservation_id}': 'reservation_id'
                        },
                        'success_key': 'reservation_detail'
                    }
                }
            },
            {
                'prices': {
                    'get': {
                        'url': DOMAIN + PRICE,
                        'search_field': 'price_search',
                        'key_replace': {
                            '{company_id}': 'company_id'
                        },
                        'success_key': 'price_list',
                    },
                    'post': {
                        'url': DOMAIN + PRICE,
                        'key_replace': {
                            '{company_id}': 'company_id'
                        },
                        'success_key': 'price_detail',
                    },
                    'update': {
                        'url': DOMAIN + PRICE_DETAIL,
                        'key_replace': {
                            '{company_id}': 'company_id',
                            '{price_id}': 'price_id'
                        },
                        'success_key': 'price_detail',
                    },
                    'delete': {
                        'url': DOMAIN + PRICE_DETAIL,
                        'key_replace': {
                            '{company_id}': 'company_id',
                            '{price_id}': 'price_id'
                        },
                        'success_key': 'price_detail'
                    }
                }
            }
        ]

        vm.user_detail();
        vm.url = '';
        vm.success = '';
        vm.date_time_fields = ['book_from', 'book_to', 'available'];
        vm.field_error = false;
        vm.key_error = {};

        vm.API_SERVICE_CALL = function(event_name, method, custom_url=null) {
            vm.url = '';
            vm.success = '';
            angular.forEach(vm.method_calls, function (value, key) {
                if (value[event_name]) {
                    vm.url = value[event_name][method]['url'];
                    vm.success = value[event_name][method]['success_key'];
                    vm.search_field = value[event_name][method]['search_field'];
                    angular.forEach(
                        value[event_name][method]['key_replace'], function (sub_value, field_key) {
                            vm.url = vm.url.replace(field_key, vm[sub_value]);
                        }, vm);
                }
            }, vm);
            console.info(vm.url);
            if (method == 'get' && vm[vm.search_field]) {
                var search = angular.copy(vm[vm.search_field]);
                angular.forEach(search, function (value, key) {
                    if (vm.date_time_fields.indexOf(key) > -1) {
                        if (value) {
                            search[key] = new Date(value).getUnixTime();
                        }
                    }
                });
                var query_param = new URLSearchParams(search);
                if (query_param) {
                    vm.url = vm.url + "?" + query_param.toString();
                }
            }

            if (custom_url) {
                vm.url = custom_url;
            }
            if (method == 'get') {
                serviceApi.getData(vm.url, {}, true)
                    .then(function (response) {
                        angular.forEach(response.data.results, function (
                            response_value, resopnse_key) {
                            if (response_value['book_from']) {
                                response_value['book_from'] = vm.getCurrentTime(response_value['book_from']);
                            }
                            if (response_value['book_to']) {
                                response_value['book_to'] = vm.getCurrentTime(response_value['book_to']);
                            }
                            response.data.results[resopnse_key] = response_value;
                        });
                        vm[vm.success] = response.data;


                    }, function (response) {
                        var data = response.data;
                        if ("non_field_errors" in data) {
                            toaster.pop("error", data["non_field_errors"][0]);
                        } else {
                            angular.forEach(data, function (value, key) {
                                vm.field_error = true;
                                vm.key_error[key] = value[0]
                            });
                        }
                    });
            } else if (method == 'post') {
                var search = angular.copy(vm[vm.success]);
                angular.forEach(search, function (value, key) {
                    if (vm.date_time_fields.indexOf(key) > -1) {
                        if (value) {
                            search[key] = new Date(value).getUnixTime();
                        }
                    }
                });
                serviceApi.postData(vm.url, search, true)
                    .then(function (response) {
                        if (response.data['book_from']) {
                            response.data['book_from'] = vm.getCurrentTime(response.data['book_from']);
                        }
                        if (response.data['book_to']) {
                            response.data['book_to'] = vm.getCurrentTime(response.data['book_to']);
                        }
                        vm[vm.success] = response.data;
                        toaster.pop("success", "Record created successfully");
                        $('.modal').modal('hide');
                        vm.call_initial_function();
                    }, function (response) {
                        if ("non_field_errors" in response.data) {
                            toaster.pop("error", response.data["non_field_errors"][0]);
                        } else {
                            angular.forEach(response.data, function (erro_value, error_key) {
                                vm.field_error = true;
                                vm.key_error[error_key] = erro_value[0];
                            });
                        }
                    });
            } else if (method == 'update') {
                var search = angular.copy(vm[vm.success]);
                angular.forEach(search, function (value, key) {
                    if (vm.date_time_fields.indexOf(key) > -1) {
                        if (value) {
                            search[key] = new Date(value).getUnixTime();
                        }
                    }
                });
                serviceApi.patchData(vm.url, search, true)
                    .then(function (response) {
                        if (response.data['book_from']) {
                            response.data['book_from'] = vm.getCurrentTime(response.data['book_from']);
                        }
                        if (response.data['book_to']) {
                            response.data['book_to'] = vm.getCurrentTime(response.data['book_to']);
                        }
                        vm[vm.success] = response.data;
                        vm.call_initial_function();
                        $('.modal').modal('hide');
                        toaster.pop("success", "Record updated successfully");
                    }, function (response) {
                        var data = response.data;
                        if ("non_field_errors" in data) {
                            toaster.pop("error", data["non_field_errors"][0]);
                        } else {
                            angular.forEach(data, function (value, key) {
                                vm.field_error = true;
                                vm.key_error[key] = value[0]
                            });
                        }
                    });
            } else if (method == 'delete') {
                serviceApi.deleteData(vm.url, true)
                    .then(function (response) {
                        toaster.pop("success", "Record deleted successfully");
                        vm.call_initial_function();
                    }, function (response) {
                        var data = response.data;
                        $('.modal').modal('hide');
                        if ("non_field_errors" in data) {
                            toaster.pop("error", data["non_field_errors"][0]);
                        } else {
                            angular.forEach(data, function (value, key) {
                                vm.field_error = true;
                                vm.key_error[key] = value[0]
                            });
                        }
                    });
            }
        }
        vm.call_initial_function = function (url = '') {

            if ($state.current.name == 'reservations') {
                vm.method_calls;
                vm.API_SERVICE_CALL($state.current.name, 'get', url);
            } else if ($state.current.name == 'my-reservation') {
                vm.method_calls;
                vm.API_SERVICE_CALL($state.current.name, 'get', url);
            } else if ($state.current.name == 'company') {
                vm.method_calls;
                vm.API_SERVICE_CALL($state.current.name, 'get', url);
            } else if ($state.current.name == 'venue') {
                vm.method_calls;
                vm.API_SERVICE_CALL($state.current.name, 'get', url);
            } else if ($state.current.name == 'prices') {
                vm.method_calls;
                vm.API_SERVICE_CALL($state.current.name, 'get', url);
            }
        }

        vm.call_initial_function();

        vm.Search = function () {
            vm.call_initial_function();
        }

        vm.Reset = function () {
            vm.call_initial_function();
        }
    }




    angular.module('parkinglot').controller(
        'venueCtrl', [
            '$state', '$window', '$filter', 'toaster', 'DOMAIN',
            'COMPANY', 'COMPANY_DETAIL', 'ARCHITECTURE', 'VENUE',
            'PRICE', 'PRICE_DETAIL', 'VENUE_DETAIL', 'DETAIL',
            'RESERVATION', 'COMPANY_RESERVATION', 'VENUE_SEARCH',
            'RESERVATION_DETAIL',
            'serviceApi', venueCtrl]);

})(window.angular);