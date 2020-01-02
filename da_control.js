var application = angular.module('myApp', []); 
application.controller('thisapp', function($filter,$scope, $http, da_factory) {
			$scope.TheRawData = angular.copy(da_factory.generate().products);
			$scope.TheRawData_Filtered=angular.copy($scope.TheRawData);
			
			$scope.ShowFurnitureStyleDropdown=false;
			$scope.ShowDeliveryTimeDropdown=false;
			
			$scope.FurnitureStyleDropdown=[{Checked: null, TheFurnitureStyle: null}];
			$scope.FurnitureStyleDropdown.splice(0,1);
			
			$scope.ShowFurnitureStyleDropdownToggle = function() {
				$scope.ShowFurnitureStyleDropdown=!$scope.ShowFurnitureStyleDropdown;
			}
			
			$scope.ShowDeliveryTimeDropdownToggle = function() {
				$scope.ShowDeliveryTimeDropdown=!$scope.ShowDeliveryTimeDropdown;
			}
			
			
			$scope.FurnitureStyleDropdownOptions = da_factory.generate().furniture_styles;
			for (var j = 0; j < $scope.FurnitureStyleDropdownOptions.length; j++) {
                    $scope.FurnitureStyleDropdown.push({Checked: true, TheFurnitureStyle: $scope.FurnitureStyleDropdownOptions[j]});
                }
				
				
			$scope.DeliveryTimeDropdown=[{Checked: null,The_Label:null, TheDeliveryTime: null}];
			$scope.DeliveryTimeDropdown.splice(0,1);	
			$scope.DeliveryTimeDropdownOptions = ["1 Week", "2 Week", "1 Month","More"];	
			$scope.DeliveryTimeDropdown.push({Checked: true, The_Label:"1 Week", TheDeliveryTime: 7});
			$scope.DeliveryTimeDropdown.push({Checked: true, The_Label:"2 Week", TheDeliveryTime: 14});
			$scope.DeliveryTimeDropdown.push({Checked: true, The_Label:"1 Month", TheDeliveryTime: 30});
			$scope.DeliveryTimeDropdown.push({Checked: true, The_Label:"More", TheDeliveryTime: 31});
			
			$scope.DaFurnitureStyleDropdown=true;
			$scope.DaDeliveryTimeDropdown=true;
			
			
			$scope.DeliveryTimeTxtbx="";
				for (var i = 0; i < $scope.DeliveryTimeDropdown.length; i++) {
                    if($scope.DeliveryTimeDropdown[i].Checked==true)
					{
						$scope.DeliveryTimeTxtbx+=$scope.DeliveryTimeDropdown[i].The_Label+",";
					}
                }
				
			$scope.FurnitureStyleTxtbx="";
				for (var i = 0; i < $scope.FurnitureStyleDropdown.length; i++) {
                    if($scope.FurnitureStyleDropdown[i].Checked==true)
					{
						$scope.FurnitureStyleTxtbx+=$scope.FurnitureStyleDropdown[i].TheFurnitureStyle+",";
					}
                }	
			
			$scope.FurnitureStyleDropdownSelection = function(yesno,label) {
				for (var i = 0; i < $scope.FurnitureStyleDropdown.length; i++) {
                    if($scope.FurnitureStyleDropdown[i].TheFurnitureStyle==label)
					{
						$scope.FurnitureStyleDropdown[i].Checked=angular.copy(yesno);
					}
                }
				$scope.FurnitureStyleTxtbx="";
				for (var i = 0; i < $scope.FurnitureStyleDropdown.length; i++) {
                    if($scope.FurnitureStyleDropdown[i].Checked==true)
					{
						$scope.FurnitureStyleTxtbx+=$scope.FurnitureStyleDropdown[i].TheFurnitureStyle+",";
					}
                }
				$scope.Da_Final_Calc();
			}
			
			$scope.DeliveryTimeDropdownSelection = function(yesno,label) {
				for (var i = 0; i < $scope.DeliveryTimeDropdown.length; i++) {
                    if($scope.DeliveryTimeDropdown[i].The_Label==label)
					{
						$scope.DeliveryTimeDropdown[i].Checked=angular.copy(yesno);
					}
                }
				$scope.DeliveryTimeTxtbx="";
				for (var i = 0; i < $scope.DeliveryTimeDropdown.length; i++) {
                    if($scope.DeliveryTimeDropdown[i].Checked==true)
					{
						$scope.DeliveryTimeTxtbx+=$scope.DeliveryTimeDropdown[i].The_Label+",";
					}
                }
				$scope.Da_Final_Calc();
			}
			
			$scope.Da_Final_Calc = function() {
				
				$scope.TheRawData =[];
				$scope.TheRawData = angular.copy(da_factory.generate().products);
				$scope.TheRawData_Filtered_1=[];
				$scope.TheRawData_Filtered_2=[];
				$scope.TheRawData_Filtered_3=[];
				
				for (var i = 0; i < $scope.TheRawData.length; i++) 
				{
                    for (var j = 0; j < $scope.DeliveryTimeDropdown.length; j++) 
					{
						if($scope.DeliveryTimeDropdown[j].Checked==true && $scope.DeliveryTimeDropdown[j].The_Label=="1 Week")
						{
							if( parseInt($scope.TheRawData[i].delivery_time)<=$scope.DeliveryTimeDropdown[j].TheDeliveryTime)
							{
								$scope.TheRawData_Filtered_1.push($scope.TheRawData[i]);
							}
						}
						
						if($scope.DeliveryTimeDropdown[j].Checked==true && $scope.DeliveryTimeDropdown[j].The_Label=="2 Week")
						{
							if( (parseInt($scope.TheRawData[i].delivery_time)>$scope.DeliveryTimeDropdown[j-1].TheDeliveryTime) && (parseInt($scope.TheRawData[i].delivery_time)<=$scope.DeliveryTimeDropdown[j].TheDeliveryTime))
							{
								$scope.TheRawData_Filtered_1.push($scope.TheRawData[i]);
							}
						}
						
						if($scope.DeliveryTimeDropdown[j].Checked==true && $scope.DeliveryTimeDropdown[j].The_Label=="1 Month")
						{
							if( (parseInt($scope.TheRawData[i].delivery_time)>$scope.DeliveryTimeDropdown[j-1].TheDeliveryTime) && (parseInt($scope.TheRawData[i].delivery_time)<=$scope.DeliveryTimeDropdown[j].TheDeliveryTime))
							{
								$scope.TheRawData_Filtered_1.push($scope.TheRawData[i]);
							}
						}
						
						if($scope.DeliveryTimeDropdown[j].Checked==true && $scope.DeliveryTimeDropdown[j].The_Label=="More")
						{
							if( parseInt($scope.TheRawData[i].delivery_time)>=$scope.DeliveryTimeDropdown[j].TheDeliveryTime)
							{
								$scope.TheRawData_Filtered_1.push($scope.TheRawData[i]);
							}
						}
					}
                }
				
					var intended_style=[];
					for (var k = 0; k < $scope.FurnitureStyleDropdown.length; k++) 
					{
						if($scope.FurnitureStyleDropdown[k].Checked==true)
						{
							intended_style.push($scope.FurnitureStyleDropdown[k].TheFurnitureStyle);
						}
					}
					
					for (var q = 0; q < $scope.TheRawData_Filtered_1.length; q++) 
					{	
					
						for (var z= 0; z < $scope.TheRawData_Filtered_1[q].furniture_style.length; z++) 
						{
							if(intended_style.indexOf($scope.TheRawData_Filtered_1[q].furniture_style[z])!=-1)
							{
								$scope.TheRawData_Filtered_2.push(angular.copy($scope.TheRawData_Filtered_1[q]));
								break;
							}
						}

					}
					// console.log($scope.SearchFurnitureTxtbx);
					// for (var qq = 0; qq < $scope.TheRawData_Filtered_2.length; qq++) 
					// {
						// var lower1=angular.copy($scope.TheRawData_Filtered_2[qq].name.toLowerCase());
						// var lower2=angular.copy($scope.SearchFurnitureTxtbx.toLowerCase());
						
						// if(lower1.includes(lower2))
							// {
								// $scope.TheRawData_Filtered_3.push($scope.TheRawData_Filtered_2[qq]);
							// }
					// }
					
					$scope.TheRawData_Filtered=angular.copy($scope.TheRawData_Filtered_2);
			}
			
			$scope.Da_Text_Filter = function() {
					$scope.Da_Final_Calc();
					$scope.TheRawData_Filtered = $scope.TheRawData_Filtered.filter(function(type) {
						return (type.name.toLowerCase().includes($scope.SearchFurnitureTxtbx.toLowerCase()));
					})
					
			}
			
          
        }); 
