

var m = require("mithril")


var config = {
        apiKey: "AIzaSyD_UYUYEG2DIfdw18YTrMsda0GhImCsMN4",
        authDomain: "odisha-dash.firebaseapp.com",
        databaseURL: "https://odisha-dash.firebaseio.com",
        storageBucket: "odisha-dash.appspot.com",
        messagingSenderId: "534292583836"
};

firebase.initializeApp(config);

//stub for selecting district
var selectedDistrict = stream("columbia")

//all data - use listRevenueData for further transformations
var rawRevenueData = stream();
var listRevenueData = rawRevenueData.map(function(value){
    return R.values(value)
});

//helpers
var isInDistrict = R.propEq('district')
var isInTahasil = R.propEq('tahasil')

var takeHouseholds = R.prop('households identified')
var sumHouseholds = R.compose(R.sum, R.map(takeHouseholds))
var takePattas = R.prop('pattas distributed')
var sumPattas = R.compose(R.sum, R.map(takePattas))
var takeWomenPattas = R.prop('pattas with women')
var sumWomenPattas = R.compose(R.sum, R.map(takeWomenPattas))
    

//District Helpers
var allInDistrict = stream.combine(function(data, selected){
    var isInSelected = isInDistrict(selected());
    return R.filter(isInSelected, data());
},[listRevenueData, selectedDistrict]);


var totalHouseholds = allInDistrict.map(function(value){
    return sumHouseholds(value)
})

var totalPattas = allInDistrict.map(function(value){
    return sumPattas(value)
})

var totalWomenPattas = allInDistrict.map(function(value){
    return sumWomenPattas(value)
})


//TahasilHelpers
tahasilsInDistrict = allInDistrict.map(function(value){
    var takeTahasils = R.map(R.prop('tahasil'))
    var defaultToList = R.defaultTo([])
    var uniqueTahasils = R.compose(R.uniq, takeTahasils)
    Tahasil.tahasils = uniqueTahasils(value)
    return uniqueTahasils(value)
})

var tahasilData = function(tahasil){
    var district = allInDistrict()
    var isInSelected = isInTahasil(tahasil)
    var filtered = R.filter(isInSelected, district)
    return {
        "households": sumHouseholds(filtered),
        "pattas": sumPattas(filtered),
        "women": sumWomenPattas(filtered)
    }
}




var revenueReporting = firebase.database().ref('/revenue-reporting')
revenueReporting.on('value',function(snapshot){
    rawRevenueData(snapshot.val())
    m.mount(document.body, District)
    m.redraw()

});

var router = m.route(document.body, "/",
{
    "/:district":{
        onmatch: function(args, requestedPath){
            selectedDistrict(args.district)
            return {type: "revenue", geography: "district", name: args.district}
        },
        render: function(vnode){
            return m(Template(vnode.attrs))
        }

    },
    "/:district/:tahasil":{

    }
})