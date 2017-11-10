appServices.factory('EmployeeService', function($http, $q, Options) {
    return {

        FetchEmployeeData: function() {
            var deferred = $q.defer();

            $http.get(Options.baseUrl + '/employee').success(function(data) {
                deferred.resolve(data);
            }).error(function(data, status) {
                deferred.reject(data);
            });

            return deferred.promise;
        },
        FetchEmployeeSalaryData: function(id) {
            var deferred = $q.defer();

            $http.get(Options.baseUrl + '/salary/').success(function(data) {
                deferred.resolve(data);
            }).error(function(data, status) {
                deferred.reject(data);
            });

            return deferred.promise;
        }
    };
});