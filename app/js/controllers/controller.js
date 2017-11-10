appControllers.controller('DashboardCtrl', ['$scope', 'EmployeeService',
    function DashboardCtrl($scope, EmployeeService) {
        let vm = this;

        /* Accessible because sub state */
        vm.isEmployeeData = false;
        vm.fetchEmployee = () => {
            return new Promise((resolve, reject) => {
                vm.isEmployeeData = true;
                EmployeeService.FetchEmployeeData().then(function(res) {
                    vm.employee_data = res.data;
                    resolve(res.data);
                });

            })

        }

        vm.fetchSalary = () => {
            return new Promise((resolve, reject) => {
                vm.isEmployeeSalaryData = true;
                EmployeeService.FetchEmployeeSalaryData().then(function(res) {
                    vm.salary_data = res.data;
                    resolve(res.data);
                });
            });
        }
        vm.fetchEmployeeSalary = () => {
            vm.employee_salary_data = [];

            Promise.all([vm.fetchEmployee(), vm.fetchSalary()]).then(res => {

                let empMap = {};
                for (let j = 0; j < vm.employee_data.length; j++) {
                    let _emp = vm.employee_data[j];
                    empMap[_emp['_id']] = vm.employee_data[j];
                };
                for (let i = 0; i < vm.salary_data.length; i++) {
                    let salObj = vm.salary_data[i];
                    let obj = {
                        id: salObj['code'],
                        fullname: empMap[salObj['code']]['first_name'] + " " + empMap[salObj['code']]['last_name'],
                        salary: salObj['salary']
                    }
                    vm.employee_salary_data.push(obj);
                }
                console.log(vm.employee_salary_data, "sdsd")
                vm.isEmployeeSalaryBothData = true;
                $scope.$apply();

            }).catch(err => {

            })

        }
    }
]);