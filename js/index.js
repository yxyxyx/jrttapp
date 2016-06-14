var tt = angular.module('jrttnew',['ngAnimate','ngRoute','ngTouch']);
tt.controller('indexCtrl',['$scope',function($scope){
	// if(localStrage.x){
	// 	$scope.isFirstopen = false;     
	// }else{
	// 	$scope.isFirstopen = true;
	// }
	// $scope.enter = function(){
	// 	localStrage.bdx
	// }
	//第一次进入显示，以后不显示
}])
tt.controller('shuaxinCtrl',['$scope',function($scope){
      $scope.newlist=[
        {dazi:'揭秘明星保镖真是生活:满肚子八卦却绝口不提',baose:'新文化报',pinglun:'120条评论',image:'images/2.png'},
        {dazi:'偷看妇女主任洗澡，却看见她在蜕皮，全村炸开了锅',baose:'老苏',pinglun:'1条评论',image:'images/3.png'},
        {dazi:'法国VS罗马尼亚 一起欧洲杯，从此日夜不分',baose:'百盈足球',pinglun:'21条评论',image:'images/4.png'},
        {dazi:'为什么蚊子永远不会被雨砸死 千万别被孩2子问倒',baose:'新民网',pinglun:'123条评论',image:'images/5.png'},
        {dazi:'揭秘明星保镖真是生活:满肚子八卦却绝口不提',baose:'新文化报',pinglun:'120条评论',image:'images/2.png'},
      ]
      $scope.deletenew=function(id){
      	$scope.newlist=$scope.newlist.filter(function(v,i){
      		return i!==id;
      	})
      }
}])
tt.controller('shipinCtrl',['$scope',function($scope){
      $scope.shilist=[
        {image:'images/21.png',tubiao:'images/x1.png',zi:'创意秀搜天下',bo:'123万次播放',zan:'5877'},
        {image:'images/22.png',tubiao:'images/x2.png',zi:'夏日萌萌哒',bo:'153万次播放',zan:'855'},
        {image:'images/21.png',tubiao:'images/x1.png',zi:'创意秀搜天下',bo:'123万次播放',zan:'5877'},
      ]
}])
tt.controller('guanxinCtrl',['$scope',function($scope){
      $scope.starlist=[
        {image:'images/x31.png',name:'张韶涵',love:'2086人关心',lun:'1196条评论',state:true},
        {image:'images/x32.png',name:'豹子',love:'5431人关心',state:true},
        {image:'images/x33.png',name:'日娱',love:'9076人关心',state:true},
        {image:'images/x34.png',name:'马伊俐',love:'5.8万人关心',lun:'1999条评论',state:true},
        {image:'images/x35.png',name:'林正英',love:'8062人关心',lun:'1507条评论',state:true},
        {image:'images/x36.png',name:'虎',love:'1.1万人关心',lun:'1969条评论',state:true},
      ]
      $scope.xiaoshi = true;
      $scope.guanxin = function(v){
         v.state = !v.state
         $scope.xiaoshi = false;
      }
}])
tt.controller('wodeCtrl',['$scope',function($scope){
      $scope.serverlist=[
        {zi:'通知'},
        {zi:'离线'},
        {zi:'活动'},
        {zi:'商城'},
        {zi:'今日游戏'},
        {zi:'我要爆料'},
        {zi:'反馈'}
      ]
}])
tt.directive('ttHeader',[function(){
	return {
		restrict:'E',
		templateUrl:'views/directive/header.html',
	}
}])
tt.directive('ttFooter',[function(){
	return {
		restrict:'E',
		templateUrl:'views/directive/footer.html',
	}
}])
//定义路由
tt.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		controller:'shuaxinCtrl',
		templateUrl:'views/templates/shuaxin.html',
	}).when('/shipin',{
		controller:'shipinCtrl',
		templateUrl:'views/templates/shipin.html',
	}).when('/guanxin',{
		controller:'guanxinCtrl',
		templateUrl:'views/templates/guanxin.html',
	}).when('/wode',{
		controller:'wodeCtrl',
		templateUrl:'views/templates/wode.html',
	}).otherwise({
		redirectTo:'/'
	})
}])