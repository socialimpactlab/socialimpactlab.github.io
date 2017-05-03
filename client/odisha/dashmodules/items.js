  var Tahasil = {
               tahasils: [],      
           };
           Tahasil.view = function(){
               return m("article.cf.vh-100.bg-washed-blue#tahasils", Tahasil.tahasils.map(
                   function(tahasil){
                       return m(Single, {tahasil: tahasil, data: tahasilData(tahasil)})
                    }
                )) 
            
            }

           var Single = {
           
           }
          
           Single.view = function(vnode){
            
                return m('div.tahasil.w-100.w-50-ns.tc', [
                    m("h1.tc.f2", [m("a",{href:"/"+vnode.attrs.tahasil,oncreate: m.route.link, onupdate: m.route.link},R.toUpper(vnode.attrs.tahasil))]),
                    m("h4.tc", "tahasildar: Tahasildar (+1923913891929)"),
                    m("div.cf.pa1.center",[
                        m(Card,{
                            type: "householdsPattas",
                            data: vnode.attrs.data,
                            stats: [{label: "pattas distributed", data: vnode.attrs.data["pattas"]}, {label: "households identified", data: vnode.attrs.data["households"]}],
                            override: {width: 250, style: "fill:#000"}
                        }),
                         m(Card,{
                            type: "genderPatta",
                            data: vnode.attrs.data,
                            stats: [{label: "women-inclusive pattas", data: vnode.attrs.data["women"]}],
                            override: {width: 250, style: "fill:#000"}
                        })
                    ])
                    
        
                    ])
           }
           