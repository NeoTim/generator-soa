'use strict'

angular
  .module '<%= scriptAppName %>'
  .controller '<%= classedName %>Ctrl', ($scope) ->
    @value = 0;
    @name = <%= name %>

    @increment = =>
      @value++;