var m = require("mithril")

var pieChart = {};    
    pieChart.chart = function(args, override){
        return {pie: Paths.Pie({
                    data: args.data,
                    accessor: function(x) { return x.amount },
                    compute: {
                        color: function(i) { return args.palette[i]; }
                    },
                    center: [123, 100],
                    r: 100,
                    R: 70,  
                }),
                label: args.label,
                override: override || {}
                }
}
   
    pieChart.view = function(vnode) {
        return [
            m('svg.center.tc', {
            width: vnode.attrs.override.width || "100%",
            height: vnode.attrs.override.height || 200
            }, [
            vnode.attrs.pie.curves.map(function(d, i) {
                return [
                m('path', {
                    d: d.sector.path.print(),
                    style: 'fill:' + d.color
                }),
                m('text',{
                    x:vnode.attrs.override.textX || 83,
                    y:vnode.attrs.override.textY || 110,
                    "font-size":30,
                    style: vnode.attrs.override.style || "fill:#fff",
                }, vnode.attrs.label)
                ]
            })
            ])   
        ]
    }
    
     var Setup = {}
            Setup["genderPatta"] = function(input){
                var women = parseInt(JSON.stringify(input.women));
                var pattas = parseInt(JSON.stringify(input.pattas))-women;
                var data = [
                    {
                    name: "men-only pattas",
                    amount: pattas
                },
                {
                    name: "women-inclusive pattas",
                    amount: women
                },
                ]
                var palette = input.palette ||["#ff4136","#96ccff"]
                var label = ((women/(pattas+women)*100).toFixed(1).toString()+'%')
                return {data: data, palette: palette, label: label}

           }

            Setup["householdsPattas"] = function(input){
                var pattas = parseInt(JSON.stringify(input.pattas));
                var households = parseInt(JSON.stringify(input.households))-pattas;
                var data = [
                    {
                    name: "households identified",
                    amount: households
                },
                {
                    name: "pattas distributed",
                    amount: pattas
                },
                ]
                var palette = input.palette || ["#e7040f","#9eebcf"]
                var label = ((pattas/(pattas+households)*100).toFixed(1).toString()+'%')
                return {data: data, palette: palette, label: label}

           }
           
module.exports = pieChart