/* 
Constant list of parameter which used to perform operation in project
 */
(function(angular){

	"use strict";

	angular.module('parkinglot')
		.constant('DOMAIN', 'http://127.0.0.1:8000/v1/')
		.constant('SIGNIN', 'login')
		.constant('REGISTRATION', 'register')
        .constant('COMPANY', 'company')
        .constant('COMPANY_DETAIL', 'company/{company_id}')
        .constant('ARCHITECTURE', 'company/{company_id}/venue')
        .constant('VENUE', 'venue/{venue_id}/venue')
        .constant('RESERVATION', 'reservation')
        .constant('VENUE_SEARCH', 'venue')
        .constant('VENUE_DETAIL', 'venue/{venue_id}')
        .constant('PRICE', 'company/{company_id}/price')
        .constant('PRICE_DETAIL', 'company/{company_id}/price/{price_id}')
		.constant('RESERVATION_DETAIL', 'reservation/{reservation_id}');

})(window.angular);