   var Stats = {}
           Stats.view = function(vnode){
               return m('article.pa1.pa2-ns',vnode.attrs.stats.map(function(stat){return m(Stat, stat)}))
           }
        
          var Stat = {};
          Stat.view = function(vnode){
              return m("div.tc.dib.w-50",[
                            m("dl.dib",[
                                m("dd.tc.f6.fw4.ma1", vnode.attrs.label),
                                m("dd.tc.f2.f-subheadline-1.fw6.ma1", vnode.attrs.data)
                            ])
                        ])
                
          }

    var Card = {}

          Card.view = function(vnode){
              var intermediate = Setup[vnode.attrs.type](vnode.attrs.data);
              var override = vnode.attrs.override || {}
              return m("article.mw5.dib.br3.pa1.pa1-ns.mv1.mh3.ba", [
                  (vnode.attrs.header ? vnode.attrs.header : ""),
                  m("div.tc.pt2", [
                            m(pieChart, pieChart.chart(intermediate, override)),
                            m(Stats, vnode.attrs)])
                  ])
          }