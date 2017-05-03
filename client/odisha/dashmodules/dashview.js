
 var District = {
               pattas: totalPattas,
               women: totalWomenPattas,
               households: totalHouseholds
    };

           District.view = function(){
                return [
                    m(Banner), 
                    m(Tahasil)
                ]
           } 
