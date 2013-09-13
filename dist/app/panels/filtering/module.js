define("panels/filtering/module",["angular","app","underscore"],function(e,t,n){var r=e.module("kibana.panels.filtering",[]);t.useModule(r),r.controller("filtering",["$scope","filterSrv","$rootScope","dashboard",function(e,t,r,i){e.panelMeta={status:"Beta",description:"A controllable list of all filters currently applied to the dashboard. You almost certainly want one of these on your dashboard somewhere."};var s={};n.defaults(e.panel,s),e.init=function(){e.filterSrv=t},e.remove=function(e){t.remove(e),i.refresh()},e.toggle=function(e){t.list[e].active=!t.list[e].active,i.refresh()},e.refresh=function(){r.$broadcast("refresh")},e.render=function(){r.$broadcast("render")},e.show_key=function(e){return!n.contains(["type","id","alias","mandate","active","editing"],e)},e.isEditable=function(e){var t=["time"];return n.contains(t,e.type)?!1:!0}}])});