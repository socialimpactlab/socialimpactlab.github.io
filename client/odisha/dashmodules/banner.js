var m = require('mithril')

module.exports = {
       view: function() {return m("header.bg-navy.sans-serif.white", [
                        m("mw9.center.tc.pa4.pt5-ns.ph7-l",[
                            m("h1.center.f2.f1-m.f-headline-l.measure-narrow.lh-title.mv0", R.toUpper(selectedDistrict())),
                            m("div.cf.pa2.center",[
                            m(Card,
                                {
                                    type: "householdsPattas",
                                    data: {pattas: District.pattas, households: District.households},
                                    stats: [{label: "pattas distributed", data: District.pattas()}, {label: "households identified", data: District.households()}]
                                }
                            ),
                            m(Card, {
                                    type: "genderPatta", 
                                    data: {women: District.women, pattas: District.pattas}, 
                                    stats:[{label:"women-inclusive pattas", data: District.women()}]
                            }),
                            ])
                        ])
                    ])
       }
}