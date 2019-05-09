/* venueCtrl controller perform Read, Create, Update and Delete operation on task-list API

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
            'available': ''
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
        vm.price_detail = {

        }

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

        vm.FetchCompany = function (id) {
            serviceApi.getData(
                DOMAIN + COMPANY_DETAIL.replace('{company_id}', id),
                {}, true)
                .then(function (response) {
                    vm.company_detail = response.data;
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

        vm.FetchPrice = function (company_id) {
            serviceApi.getData(
                DOMAIN + PRICE.replace('{company_id}',
                    company_id), {}, true)
                .then(function (response) {
                    vm.company_price_list = response.data['results'];
                });
            vm.FetchCompany(company_id);
        }

        vm.CreateVenue = function () {

            serviceApi.postData(
                DOMAIN + ARCHITECTURE.replace(
                    '{company_id}', vm.company_detail.id
                ), vm.add_venue, true)
                .then(
                    function (response) {
                        vm.venue_detail = response.data;
                    },
                    function (response) {
                        if ("non_field_errors" in data) {
                            toaster.pop("error", data["non_field_errors"][0]);
                        } else {
                            angular.forEach(data, function (value, key) {
                                vm.field_error = true;
                                vm.sign_up_error[key] = value[0]
                            });
                        }
                    }
                )
        }

        vm.CompanyList = function () {
            var search = angular.copy(vm.company_search);
            var url = DOMAIN + COMPANY;
            if (search) {
                var query_param = new URLSearchParams(search);
                if (query_param) {
                    url = url + "?" + query_param.toString();
                }
            }
            serviceApi.getData(url, {}, true)
                .then(function (response) {
                    vm.company_list = response.data['results'];
                });
        }

        vm.CreateCompany = function () {
            serviceApi.postData(DOMAIN + COMPANY, vm.company_detail, true)
                .then(
                    function (response) {
                        vm.company_detail = response.data;
                        vm.user_detail();
                        vm.company_list.push(response.data);
                        toaster.pop("success", "Company create successfully");
                    },
                    function (response) {
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

        vm.MyVenueList = function (url = '') {
            if (url) {
                var url = url;
            } else {
                var url = DOMAIN + ARCHITECTURE.replace("{company_id}", vm.company_id);
                var search = angular.copy(vm.venue_search);
                if (search['available']) {
                    search['available'] = new Date(search['available']).getUnixTime();
                } else {
                    search['available'] = new Date().getUnixTime();
                }
                var query_param = new URLSearchParams(search);
                if (query_param) {
                    url = url + "?" + query_param.toString();
                }
            }
            serviceApi.getData(url, {}, true)
                .then(function (response) {
                    vm.venue_list = response.data;
                },
                    function (response) {
                        var data = response.data;
                    });
        }

        vm.VenueList = function (url = '') {
            if (url) {
                var url = url;
            } else {
                var url = DOMAIN + VENUE_SEARCH;
                var search = angular.copy(vm.venue_search);
                if (search['available']) {
                    search['available'] = new Date(search['available']).getUnixTime();
                } else {
                    search['available'] = new Date().getUnixTime();
                }
                var query_param = new URLSearchParams(search);
                if (query_param) {
                    url = url + "?" + query_param.toString();
                }
            }
            serviceApi.getData(url, {}, true)
                .then(function (response) {
                    vm.venue_list = response.data;
                },
                    function (response) {
                        var data = response.data;
                    });
        }

        vm.VenueSearchReset = function () {
            vm.venue_search = {
                'search': '',
                'available': new Date()
            }
            vm.VenueList();
        }
        vm.CompanySearchReset = function () {
            vm.company_search = {};
            vm.CompanyList();
        }

        vm.VenueSearch = function () {
            vm.VenueList();
        }

        vm.VenueDetail = function (id) {
            var url = DOMAIN + VENUE_DETAIL.replace('{venue_id}', id);
            serviceApi.getData(url, {}, true)
                .then(function (response) {
                    vm.venue_detail = response.data;
                    vm.reservation.venue = vm.venue_detail.id;
                });
        }

        vm.PriceList = function (company_id) {
            var price_list = PRICE.replace(
                '{company_id}', company_id.toString());
            serviceApi.getData(DOMAIN + price_list, {}, true)
                .then(function (response) {
                    vm.price_list = response.data;
                }, function (response) {
                    var data = response.data;
                });
        }

        vm.PriceDetail = function (company_id, price_id) {
            var price_detail = PRICE_DETAIL.replace(
                '{company_id}', company_id.toString());
            price_detail = price_detail.replace(
                '{price_id}', price_id.toString());
            serviceApi.getData(DOMAIN + PRICE_DETAIL, {}, true)
                .then(function (response) {
                    vm.price_detail = response.data;
                }, function (response) {
                    var data = response.data;
                })
        }

        vm.CreateReservation = function () {
            var reservation = angular.copy(vm.reservation);
            reservation.book_from = new Date(reservation.book_from).getUnixTime();
            reservation.book_to = new Date(reservation.book_to).getUnixTime();
            serviceApi.postData(DOMAIN + RESERVATION, reservation, true)
                .then(function (response) {
                    vm.reservation_detail = response.data;
                }, function (response) {
                    if ("non_field_errors" in data) {
                        toaster.pop("error", data["non_field_errors"][0]);
                    } else {
                        angular.forEach(data, function (value, key) {
                            vm.field_error = true;
                            vm.sign_up_error[key] = value[0]
                        });
                    }
                })
        }

        vm.ReservationDetail = function (reservation_id) {
            serviceApi.getData(DOMAIN + RESERVATION_DETAIL, {}, true)
                .then(function (response) {
                    vm.reservation_detail = response.data;
                });
        }

        vm.UpdateReservation = function (reservation_id, status) {
            serviceApi.patchData(DOMAIN + RESERVATION_DETAIL.replace('{reservation_id}', reservation_id), { 'status': status }, true)
                .then(function (response) {
                    vm.reservation_detail = response.data;
                });
        }

        vm.MyReservationList = function () {
            serviceApi.getData(DOMAIN + RESERVATION, {}, true)
                .then(function (response) {
                    vm.reservation_list = response.data;
                })
        }

        vm.CompanyReservationList = function () {
            var url = DOMAIN + COMPANY_RESERVATION;
            if (vm.reservation_search) {
                var search = angular.copy(vm.reservation_search);
                if (search['from']) {
                    search['from'] = new Date(search['from']).getUnixTime();
                }
                if (search['to']) {
                    search['to'] = new Date(search['to']).getUnixTime();
                }
                var query_param = new URLSearchParams(search);
                if (query_param) {
                    url = url + "?" + query_param.toString();
                }
            }
            serviceApi.getData(DOMAIN + COMPANY_RESERVATION, {}, true)
                .then(function (response) {
                    vm.reservation_list = response.data;
                })
        }

        vm.user_detail = function () {
            serviceApi.getData(DOMAIN + DETAIL, {}, true)
                .then(function (response) {
                    $window.localStorage.setItem('token', response.data.authentication_code);
                    $window.localStorage.setItem('email', response.data.email);
                    $window.localStorage.setItem('full_name', '');
                    $window.localStorage.setItem('company_id', response.data.company_id);
                    $window.localStorage.setItem('company_id', response.data.company_id);
                    vm.company_id = $window.localStorage.getItem('company_id');
                    vm.reservation_count = $window.localStorage.getItem('reservation_count');
                })
        }
        vm.my_venue_list = {};
        vm.my_venue_search = {}
        vm.method_calls = [
            {
                'venue': {
                    'get': {
                        'url': DOMAIN + VENUE_SEARCH,
                        'key_replace': {
                        },
                        'success_key': 'venue_list',
                        'search_field': 'venue_search',
                    }
                }
            },
            {
                'company': {
                    'get': {
                        'url': DOMAIN + ARCHITECTURE,
                        'search_field': 'my_venue_search',
                        'key_replace': {
                            '{company_id}': vm.company_id
                        },
                        'success_key': 'my_venue_list',
                    },
                    'post': {
                        'url': DOMAIN + VENUE,
                        'key_replace': {
                            '{venue_id}': vm.venue_id
                        },
                        'success_key': 'venue_detail',
                    },
                    'update': {
                        'url': DOMAIN + VENUE,
                        'key_replace': {
                            '{venue_id}': vm.venue_id
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
                            '{company_id}': vm.company_id
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
                            '{company_id}': vm.company_id
                        },
                        'success_key': 'reservation_list',
                    },
                    'post': {
                        'url': DOMAIN + RESERVATION,
                        'key_replace': {
                            '{company_id}': vm.company_id
                        },
                        'success_key': 'reservation_detail',
                    },
                    'update': {
                        'url': DOMAIN + RESERVATION_DETAIL,
                        'key_replace': {
                            '{company_id}': vm.company_id,
                            '{price_id}': vm.price_detail.id
                        },
                        'success_key': 'reservation_detail'
                    }
                }
            },
            {
                'price': {
                    'get': {
                        'url': DOMAIN + PRICE,
                        'search_field': 'price_search',
                        'key_replace': {
                            '{company_id}': vm.company_id
                        },
                        'success_key': 'price_list',
                    },
                    'post': {
                        'url': DOMAIN + PRICE,
                        'key_replace': {
                            '{company_id}': vm.company_id
                        },
                        'success_key': 'price_detail',
                    },
                    'update': {
                        'url': DOMAIN + PRICE,
                        'key_replace': {
                            '{company_id}': vm.company_id,
                            '{price_id}': vm.price_detail.id
                        },
                        'success_key': 'price_detail',
                    },
                    'delete': {
                        'url': DOMAIN + PRICE,
                        'key_replace': {
                            '{company_id}': vm.company_id,
                            '{price_id}': vm.price_detail.id
                        },
                        'success_key': 'price_detail'
                    }
                }
            }
        ]
        vm.VenueDetail = function (id) {
            angular.forEach(vm.venue_list.results, function (value, key) {
                if (value.id == id) {
                    vm.reservation_detail.venue = id;
                    vm.venue_detail = value;
                }
            })
        }

        vm.user_detail();
        vm.url = '';
        vm.success = '';
        vm.date_time_fields = ['book_from', 'book_to', 'available'];
        vm.field_error = false;
        vm.key_error = {};

        vm.API_SERVICE_CALL = function (event_name, method, custom_url = '') {
            vm.url = '';
            vm.success = '';
            console.log(event_name, method);
            angular.forEach(vm.method_calls, function (value, key) {
                if (value[event_name]) {
                    vm.url = value[event_name][method]['url'];
                    vm.success = value[event_name][method]['success_key'];
                    vm.search_field = value[event_name][method]['search_field'];
                    angular.forEach(
                        value[event_name][method]['key_replace'], function (sub_value, field_key) {
                            vm.url = vm.url.replace(field_key, sub_value);
                        }, vm);
                }
            }, vm);
            if (method == 'get' && vm[vm.search_field]) {
                var search = angular.copy(vm[vm.search_field]);
                angular.forEach(search, function (value, key) {
                    if (!vm.date_time_fields.indexOf(key)) {
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
                            console.info(resopnse_key, response_value);
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
                        vm[vm.success] = response.data;
                        toaster.pop("success", "Record created successfully");
                    }, function (response) {
                        console.log(response.data);
                        if ("non_field_errors" in response.data) {
                            toaster.pop("error", data["non_field_errors"][0]);
                        } else {
                            angular.forEach(response.data, function (erro_value, error_key) {
                                console.log(erro_value, error_key);
                                vm.field_error = true;
                                vm.key_error[error_key] = erro_value[0];
                            });
                        }
                    });
            } else if (method == 'update') {
                serviceApi.getData(vm.url, {}, true)
                    .then(function (response) {
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
            } else if (method == 'delete') {
                serviceApi.deleteData(vm.url, true)
                    .then(function (response) {
                        vm[vm.success] = response.data;
                        vm.call_initial_function();
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
            }
        }
        vm.call_initial_function();

        vm.Search = function () {
            vm.call_initial_function();
        }
        vm.Reset = function () {

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