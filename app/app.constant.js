/*
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