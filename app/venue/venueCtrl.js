/* venueCtrl controller perform Read, Create, Update and Delete operation on task-list API

*/
(function(angular){

	"use strict";

	function venueCtrl(
        $state, $window, $filter, toaster, DOMAIN, 
        COMPANY, COMPANY_DETAIL, ARCHITECTURE, VENUE,
        PRICE, PRICE_DETAIL, VENUE_DETAIL,
        RESERVATION, VENUE_SEARCH, RESERVATION_DETAIL, serviceApi){
        
        var vm = this;
        Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };

        vm.getCurrentTime = function(timestamp){
            return new Date(timestamp * 1000);
        }

        vm.mytime = new Date();

        vm.hstep = 1;
        vm.mstep = 15;
      
        vm.options = {
          hstep: [1, 2, 3],
          mstep: [1, 5, 10, 15, 25, 30]
        };
      
        vm.ismeridian = true;
        

        vm.venue_search = {
            'search': '',
            'available': new Date()
        }

        vm.venue_list = {}
        vm.venue_detail = {}
        vm.reservation_list = {}
        vm.reservation_detail = {}

        vm.reservation = {
            'id':'',
            'book_from': new Date(),
            'book_to':'',
            'license':'',
            'venue':'',
            'phone_number':'',
            'payments':[{
                'amount':0,
                'payment_type': 'free'
            }]
        }
        vm.payment_type = [
            {'key':'cash', 'value':'Cash'},
            {'key':'free', 'value':'Free'},
            {'key':'card', 'value': 'Card'}
        ]
        
        vm.company_list = [];
		/* Function to logged out user from system and throw back to login page */
		vm.SignOut = function(){
			$window.localStorage.clear();
			$state.transitionTo('login');
        }

        vm.CompanyList = function(){
			serviceApi.getData(DOMAIN + COMPANY, {}, true)
				.then(function(response){
					vm.company_list = response.data['results']
				},
				function (response){
					// Erro handler
					var data =response.data;
					if ("non_field_errors" in data) {
						toaster.pop("error", data["non_field_errors"][0]);
					}else{
						angular.forEach(data, function(value, key){
							vm.field_error = true;
							vm.sign_up_error[key] = value[0] 
						});
					}
				});
            }
        
        if ($window.localStorage.getItem('company_count')){
            vm.CompanyList();   
        }
        
        vm.VenueList = function(url=''){
            if (url){
                var url = url;
            }else{
                var url = DOMAIN + VENUE_SEARCH;
                var search = angular.copy(vm.venue_search);
                if (search['available']){
                    search['available'] = search['available'].getUnixTime();
                }else{
                    search['available'] = new Date().getUnixTime();
                }
                var query_param = new URLSearchParams(search);
                if (query_param){
                    url = url +"?"+query_param.toString();
                }
            }
            serviceApi.getData(url, {}, true)
                .then(function(response){
                    vm.venue_list = response.data;
                },
                function(response){
                    var data = response.data;
                });
        }
        vm.VenueList();

        vm.VenueSearchReset = function(){
            vm.venue_search = {
                'search': '',
                'available': new Date()
            }
            vm.VenueList();
        }

        vm.VenueSearch = function(){
            vm.VenueList();
        }

        vm.VenueDetail = function(id){
            var url = DOMAIN + VENUE_DETAIL.replace('{venue_id}', id);
            serviceApi.getData(url, {}, true)
                .then(function(response){
                    vm.venue_detail = response.data;
                    vm.reservation.venue = vm.venue_detail.id;
                });
        }

        vm.PriceList = function(company_id){
            var price_list = PRICE.replace(
                '{company_id}', company_id.toString());
            serviceApi.getData(DOMAIN + price_list, {}, true)
                .then(function(response){
                    vm.price_list = response.data;
                },function(response){
                    var data = response.data;
                });
        }

        vm.PriceDetail = function(company_id, price_id){
            var price_detail = PRICE_DETAIL.replace(
                '{company_id}', company_id.toString());
            price_detail = price_detail.replace(
                '{price_id}', price_id.toString());
            serviceApi.getData(DOMAIN + PRICE_DETAIL, {}, true)
                .then(function(response){
                    vm.price_detail = response.data;   
                }, function(response){
                    var data = response.data;
                })
        }
        
        vm.CreateReservation = function(){
            console.info(vm.reservation);
            var reservation = angular.copy(vm.reservation);
            reservation.book_from = reservation.book_from.getUnixTime();
            reservation.book_to = reservation.book_to.getUnixTime();
            serviceApi.postData(DOMAIN + RESERVATION, reservation, true)
                .then(function(response){
                    vm.reservation_detail = response.data;
                }, function(response){
                    var data = response.data;
                })
        }

        vm.ReservationDetail = function(reservation_id){
            serviceApi.getData(DOMAIN + RESERVATION_DETAIL, {}, true)
                .then(function(response){
                    vm.reservation_detail = response.data;
                }, function(response){
                    var data = response.data;
                })
        }
	}

	angular.module('parkinglot').controller(
		'venueCtrl', [
            '$state', '$window', '$filter', 'toaster', 'DOMAIN', 
            'COMPANY', 'COMPANY_DETAIL', 'ARCHITECTURE', 'VENUE',
            'PRICE', 'PRICE_DETAIL', 'VENUE_DETAIL',
            'RESERVATION', 'VENUE_SEARCH', 'RESERVATION_DETAIL', 
            'serviceApi', venueCtrl]);

})(window.angular);