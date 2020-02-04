var spritePointsCarrier = [[4.5,0.6],[3.6,0.9],[1.5,1.2],[-0.2,1.2],[-0.7,2.1],[-3,2.1],[-3.6,1.2],[-4.5,0.9],[-4.5,-0.9],[-3.6,-1.2],[-3,-2.1],[-0.7,-2.1],[-0.2,-1.2],[1.5,-1.2],[3.6,-0.9],[4.5,-0.6]];
var dropshipPoints      = [[8.854014894608271,-0.45079665240668254],[8.351766059854207,-1.0059137855559124],[7.770214777507395,-1.3759918743220658],[5.681916990898387,-2.08971390265679],[4.888892514970915,-2.882738378584261],[2.3776483412005884,-3.19994816895525],[1.531755566877953,-4.098709241673051],[2.6948581315715776,-4.098709241673051],[3.1442386679304777,-4.574523927229533],[3.1178045187328953,-5.473284999947334],[1.1088091797166353,-6.0019679838989815],[-1.7989472320174267,-5.975533834701399],[-2.380498514364239,-5.579021596737664],[-3.014918095106216,-5.393982552354587],[-3.0413522443037984,-4.75956297161261],[-2.4069326635618213,-4.627392225624698],[-2.3276302159690743,-4.257314136858545],[-1.7989472320174267,-4.045840943277886],[-2.2747619175739096,-3.781499451302062],[-3.014918095106216,-3.7286311529068974],[-4.627401196158742,-2.354055394632614],[-5.208952478505553,-2.2747529470398664],[-5.658333014864454,-2.8298700801890964],[-5.2882549260983005,-3.1206457213625027],[-5.2882549260983005,-3.7550653021044798],[-6.266318446408849,-4.20444583846338],[-7.482289309497638,-4.230879987660963],[-7.773064950671044,-3.860801898894809],[-8.090274741042032,-3.7286311529068974],[-8.06384059184445,-3.067777422967338],[-7.693762503078297,-2.9620408261770086],[-7.588025906287967,-2.512660289818108],[-7.138645369929067,-2.3011870962374488],[-7.244381966719397,-1.2702552775317362],[-7.693762503078297,-0.9794796363583301],[-7.693762503078297,0.9794796363583301],[-7.244381966719397,1.2702552775317362],[-7.138645369929067,2.3011870962374488],[-7.588025906287967,2.512660289818108],[-7.693762503078297,2.9620408261770086],[-8.06384059184445,3.067777422967338],[-8.090274741042032,3.7286311529068974],[-7.773064950671044,3.860801898894809],[-7.482289309497638,4.230879987660963],[-6.266318446408849,4.20444583846338],[-5.2882549260983005,3.7550653021044798],[-5.2882549260983005,3.1206457213625027],[-5.658333014864454,2.8298700801890964],[-5.208952478505553,2.2747529470398664],[-4.627401196158742,2.354055394632614],[-3.014918095106216,3.7286311529068974],[-2.2747619175739096,3.781499451302062],[-1.7989472320174267,4.045840943277886],[-2.3276302159690743,4.257314136858545],[-2.4069326635618213,4.627392225624698],[-3.0413522443037984,4.75956297161261],[-3.014918095106216,5.393982552354587],[-2.380498514364239,5.579021596737664],[-1.7989472320174267,5.975533834701399],[1.1088091797166353,6.0019679838989815],[3.1178045187328953,5.473284999947334],[3.1442386679304777,4.574523927229533],[2.6948581315715776,4.098709241673051],[1.531755566877953,4.098709241673051],[2.3776483412005884,3.19994816895525],[4.888892514970915,2.882738378584261],[5.681916990898387,2.08971390265679],[7.770214777507395,1.3759918743220658],[8.351766059854207,1.0059137855559124],[8.854014894608271,0.45079665240668254]];
var fighterPoints       = [[-4.49,-.5],[-4.3,-1.2],[-3,-1.4],[-3.7,-3.3],[-3.2,-3.3],[-0.7,-2],[1.1, -2],[1.2, -1.6], [0.3, -1.6], [0.6, -1.2], [2.2, -1], [3.4, -0.7], [4.5, 0], [3.4, 0.7], [2.2, 1], [0.6, 1.2], [0.3, 1.6],[1.2, 1.6], [1.1, 2], [-0.7, 2], [-3.2, 3.3], [-3.7, 3.3], [-3, 1.4], [-4.3, 1.2], [-4.5, 0.5], [-3.5, 0.4], [-3.3, 0],[-3.5, -0.4]];
var fighter2Points      = [[8.052318074090765,-0.3867298871547288],[7.65732603326794,-0.8463248993562864],[6.043309885330673,-1.0644675893870492],[4.058506614507449,-1.5969757839981582],[2.454903396131766,-1.7546844074276817],[2.227582526497481,-2.092464197144651],[3.5859666262686285,-2.106614031517267],[3.402018779424619,-2.5452588970683667],[1.9587356734177748,-2.601858234558831],[1.4671323698113141,-2.96468686944284],[0.12212278336305785,-2.967423716349112],[-1.740065968416133,-3.8026222074431915],[-3.4081443377836047,-4.496278559061348],[-4.729394531341998,-4.529309813900308],[-5,-4],[-3.5705549665182525,-2.6657812964849157],[-3.143894299071926,-1.8702937993640412],[-4.13483194424072,-1.8537781719445612],[-4.90286507470363,-1.4406685533259473],[-4.878035178117317,-0.9454186638731659],[-4.2339257087576,-0.5655592332251278],[-3.6228474942368436,-0.3673717041913688],[-3.6228474942368436,0.3673717041913688],[-4.2339257087576,0.5655592332251278],[-4.878035178117317,0.9454186638731659],[-4.90286507470363,1.4406685533259473],[-4.13483194424072,1.8537781719445612],[-3.143894299071926,1.8702937993640412],[-3.5705549665182525,2.6657812964849157],[-5,4],[-4.729394531341998,4.529309813900308],[-3.4081443377836047,4.496278559061348],[-1.740065968416133,3.8026222074431915],[0.12212278336305785,2.967423716349112],[1.4671323698113141,2.96468686944284],[1.9587356734177748,2.601858234558831],[3.402018779424619,2.5452588970683667],[3.5859666262686285,2.106614031517267],[2.227582526497481,2.092464197144651],[2.454903396131766,1.7546844074276817],[4.058506614507449,1.5969757839981582],[6.043309885330673,1.0644675893870492],[7.65732603326794,0.8463248993562864],[8.052318074090765,0.3867298871547288]];
var carrierPoints       = [[4.5,0.6],[3.6,0.9],[1.5,1.2],[-0.2,1.2],[-0.7,2.1],[-3,2.1],[-3.6,1.2],[-4.5,0.9],[-4.5,-0.9],[-3.6,-1.2],[-3,-2.1],[-0.7,-2.1],[-0.2,-1.2],[1.5,-1.2],[3.6,-0.9],[4.5,-0.6]];
var scoutPoints         = [[10.66503608543385,-0.545900329220375],[8.64959263587493,-1.1885054870507556],[7.8609408512649175,-2.2692505252200323],[7.247545018790463,-2.327669175931885],[6.575730535604157,-1.597436042033725],[4.910798990316352,-1.9187386209489155],[3.0121928421811366,-2.85343703233856],[0.9967493926222153,-2.999483659118192],[-0.02557699483520841,-4.898089807253408],[-0.43450754981817785,-7.205626510371593],[-1.6612992147670864,-7.556138414642709],[-2.975718855783774,-3.4084142141011613],[-4.231719846088609,-3.4376235394570878],[-4.932743654630842,-3.087111635185971],[-4.991162305342695,-2.561343778779296],[-6.977396429545689,-2.327669175931885],[-8,-2],[-8,-1],[-7.094233730969396,-0.4582723531525958],[-7.094233730969396,0.4582723531525958],[-8,1],[-8,2],[-6.977396429545689,2.327669175931885],[-4.991162305342695,2.561343778779296],[-4.932743654630842,3.087111635185971],[-4.231719846088609,3.4376235394570878],[-2.975718855783774,3.4084142141011613],[-1.6612992147670864,7.556138414642709],[-0.43450754981817785,7.205626510371593],[-0.02557699483520841,4.898089807253408],[0.9967493926222153,2.999483659118192],[3.0121928421811366,2.85343703233856],[4.910798990316352,1.9187386209489155],[6.575730535604157,1.597436042033725],[7.247545018790463,2.327669175931885],[7.8609408512649175,2.2692505252200323],[8.64959263587493,1.1885054870507556],[10.66503608543385,0.545900329220375]];
var scout2Points        = [[10.460570807942366,-0.6043189799322277],[9.233779142993457,-0.925621558847418],[8.211452755536035,-2.0063665970166946],[7.27675434414639,-2.0647852477285475],[7.890150176620844,-1.1300868363389027],[5.202892243875616,-1.6850640181015042],[3.596379349299664,-2.8826463576944863],[1.2888426461814793,-3.0579023098300446],[0.3249349094359083,-2.3860878266437378],[-1.6905085401230129,-3.349995563389309],[-1.3692059612078225,-7.556138414642709],[-2.5667883008008046,-7.556138414642709],[-3.647533338970081,-5.102555084744893],[-4.757487702495284,-3.2623675873215294],[-6.130325994223824,-3.145530285897824],[-6.597675199918647,-2.707390405558928],[-7.444745635240512,-2.6781810802030015],[-7.970513491647187,-2.2692505252200323],[-8.02893214235904,-0.8672029081355653],[-7.386326984528659,-0.4874816785085222],[-7.386326984528659,0.4874816785085222],[-8.02893214235904,0.8672029081355653],[-7.970513491647187,2.2692505252200323],[-7.444745635240512,2.6781810802030015],[-6.597675199918647,2.707390405558928],[-6.130325994223824,3.145530285897824],[-4.757487702495284,3.2623675873215294],[-3.647533338970081,5.102555084744893],[-2.5667883008008046,7.556138414642709],[-1.3692059612078225,7.556138414642709],[-1.6905085401230129,3.349995563389309],[0.3249349094359083,2.3860878266437378],[1.2888426461814793,3.0579023098300446],[3.596379349299664,2.8826463576944863],[5.202892243875616,1.6850640181015042],[7.890150176620844,1.1300868363389027],[7.27675434414639,2.0647852477285475],[8.211452755536035,2.0063665970166946],[9.233779142993457,0.925621558847418],[10.460570807942366,0.6043189799322277]];