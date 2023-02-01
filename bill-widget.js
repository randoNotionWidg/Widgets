  <div id="ajaxContent"></div>
  <script>
  var Webflow = Webflow || [];
  Webflow.push(function() {
    $.get('https://cdn.rawgit.githubusercontent.com/randoNotionWidg/Widgets/main/bill-widget.html?token=GHSAT0AAAAAAB6HHIYCW7VL43PI3BUPPZMAY62XUUQ', function(data) {
      $('#ajaxContent').append(data);
    });
  });
  </script>
