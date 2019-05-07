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