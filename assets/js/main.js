var main = new Vue({
  el: "#main",
  data: {
    status: "Loading",
    items: [],
  },
  created: function() {
    var self = this;
    fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vTCnlCP3ji1Pzas6J7wYdZP5JL9wjQYBrPpRvZrTb5sZoHpvLwky1TrUvDlCQCJTHmtEqRWAh3KXrY7/pub?gid=0&single=true&output=csv", {
      method: "GET",
      mode: "cors",
    }).then(function (response) {
      return response.text()
    }).then(function (data) {
      var parsed = Papa.parse(data, { header: true });
      self.items = parsed.data;
    }).catch(function (error) {
      console.log('error', error);
    });
  }
})