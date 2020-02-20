// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "878da19d-ce25-4b15-820c-728b338a5197"; //Generado por http://www.famkruithof.net/uuid/uuidgen

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

// En modo depuracion, desactivamos efectos de jquery
jQuery.fx.off = true;

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Patio de reclusos</h1>\
        <p>Te encuentras en el patio de reclusos de una prisión de máxima seguridad situada en el desierto de Arizona.\
        <img width='350' src='media/games/prision/patio-prision.jpg' class='float_right'>\
        Debido a una fuerte tormenta de arena, la más fuerte desde que se tienen registros de las mismas se te proporciona la oportunidad de poder escapar de la cárcel siempre y cuando tomes las decisiones correctas y no cometas errores en tu intento de fuga.</p>\
        <p>En este juego eres un prisionero de una prisión de alta seguridad en el desierto de Arizona. Durante el desarrollo del juego se produce una tormenta de magnitudes sin precedentes (nunca se ha registrado una tormenta tan fuerte) que te puede dar la posibilidad de escapar de la cárcel y ser libre.</p>\
        <hr/>\
        <p>Durante la fuerte tormenta se produce un apagón eléctrico en la cárcel lo que provoca que la mayoría de los prisioneros aprovechando el desconcierto de los guardas se avalanchen sobre el único guarda que se encuentra en ese momento en el patio.</p>\
        <p>Decides instintivamente ayudar al guarda frente al ataque de los demás reclusos... A partir de ahora se te presentarás varias decisiones que decidirán tu futuro.</p>\
		<h2><b>SUERTE EN TUS FUTURAS DECISIONES</b></h2>\
        <p>Has decidido ayudar al guarda y dejar morir al prisionero, por lo que todos los prisioneros se vuelven en tu contra y a partir de ahora deberá evitar encontrarte con ellos, si no quieres acabar mal...</p>\
        <p>El guarda y tú conseguís huir del lugar y salís corriendo por el pasillo, donde las puertas se encuentran abiertas.</p>\
        <p>El guarda saca sus esposas y las utilizar para cerrar la puerta y evitar ser alcanzado por los otros guardas. Aprovechando que el guarda está ocupado puedes decidir huir y <a href='./huircelda'>salir corriendo hacia tu celda</a>, <a href='huirsalida'>correr a buscar una salida</a> o <a href='continuarconguarda'>continuar con el guarda</a> para intentar llegar al puesto de mando.</p>"
        ,{
            actions: {
                "huircelda": function(character, system, action){
                    system.setQuality("collar", true);
                    system.doLink("huircelda");
                }
            }
        }
    ),
    huircelda: new undum.SimpleSituation(
        "<p>Has decidido huir hacia tu celda en busca del collar de tu hija, el último recuerdo que te queda de ella...</p>\
        <p>Mientras recuerdas los buenos momentos pasados junto a tu hija empiezan a escucharse fuertes pasos cada vez más cerca de tu celda</p>\
        <p>Por lo que decides salir corriendo antes de que alcancen a verte los otros presos.</p>\
        <p>Tras varios minutos corriendo llegas a una puerta eléctrica que se encuentra cerrada.</p>\
        <p>No puedes perder más tiempo y debes tomar una importante decisión <a href='finalfelizpuertacollar'>observar detenidamente la puerta</a> o <a href='huirsalida'>seguir corriendo</a>.</p>"
    ),
    huirsalida: new undum.SimpleSituation(
        "<p>Has decidido salir corriendo en busca de una salida pero al cruzar el pasillo te encuentras con los demás prisioneros que te atacan por haberlos traicionado anteriormente.</p>\
        <h3>Fin del juego</h3>\
        <p>Buen intento pero tu intendo de fuga termina aquí. Quizás la próxima vez seas más inteligente en la toma de decisiones.</p>"
    ),
    continuarconguarda: new undum.SimpleSituation(
        "<p>Al decidir continuar con el guarda aprovechas un descuido para golpearlo y dejarlo inconsciente.</p>\
        <p>En ese momento lo registras en busca de un objeto y encuentras una <a href='./porra'>porra</a>, unas <a href='./esposas'>esposas</a> y una <a href='./pistola'>pistola</a> pero solo puedes elegir una de ellas.</p>"
        ,{
            actions: {
                "porra": function(character, system, action){
                    system.setQuality("porra", true);
                    system.doLink("guardarobado");
                },
                "esposas": function(character, system, action){
                    system.setQuality("esposas", true);
                    system.doLink("guardarobado");
                },
                "pistola": function(character, system, action){
                    system.setQuality("pistola", true);
                    system.doLink("guardarobado");
                }
            }
        }
    ),
    guardarobado: new undum.SimpleSituation(
        "<p>Tras robar al guarda se produce un encontronazo entre guardas y reclusos de la cácerl, por lo que debes tomar la decisión de si te escondes en la <a href='cocina'>cocina</a> o intentas escapar por una <a href='puerta'>puerta</a> que da directamente al exterior de la cárcel...</p>"
    ),
    cocina: new undum.SimpleSituation(
        "<p>Ya estás a salvo en la cocina pero de pronto...</p>\
        <p>Entran varios prisionero que intentan huir del enfrentamiento con los guardas.</p>"
        ,{
            enter: function( character, system, from ) {
                        if(character.qualities.pistola){
                            system.doLink("cocinavive");
                        } else {
                            system.doLink("cocinamuere");
                        }
            }
        }
    ),
    cocinamuere: new undum.SimpleSituation(
        "<p>Desgraciadamente no puedes hacerles frente y te golpean fuertemente en la cabeza dejándote inconsciente y siendo arrestado después por los guardas de la cárcel...</p>\
        <h2>FIN DEL JUEGO</h2>"
    ),
    cocinavive: new undum.SimpleSituation(
        "<p>Gracias a la pistola robada al guarda puedes defenderte de los prisioneros.</p>\
        <p>Una vez te has deshecho de ellos abres un mueble con un poco de comida, del que puedes coger un poco de <a href='./pan'>pan</a>, una <a href='./manzana'>manzana</a> o una <a href='./lata'>lata de conserva</a></p>"
        ,{
            actions: {
                "pan": function(character, system, action){
                    system.setQuality("pan", true);
                    system.doLink("puerta");
                },
                "manzana": function(character, system, action){
                    system.setQuality("manzana", true);
                    system.doLink("puerta");
                },
                "lata": function(character, system, action){
                    system.setQuality("lata", true);
                    system.doLink("puerta");
                }
            }
        }
    ),
    puerta: new undum.SimpleSituation(
        "<p>Por fín, te encuentras frente a la puerta que da al exterior.</p>"
        ,{
            enter: function( character, system, from ) {
                if(character.qualities.lata){
                    system.doLink("cocinapuerta");
                } else {
                    system.doLink("puertamuere");
                }
            }
        }
    ),
    cocinapuerta: new undum.SimpleSituation(
        "<p>Tras observar detenidamente la puerta te das cuenta de que existe una posibilidad de realizar un puente con la lata de conservas y abrirla.</p>\
        <p>Así que decides utilizar la lata consiguiendo abrir la puerta y salir al exterior de la cárcel.</p>\
        <p>Aprovechando el descontrol de los guardas sales corriendo hacia un coche que se encuentra abierto y con las llaves puestas, consiguiendo así escapar y huir en búsqueda de tu familia...</p>\
        <h2>¡ENHORABUENA HAS CONSEGUIDO ESCAPAR!</h2>\
        <h3>FIN DEL JUEGO</h3>"
    ),
    puertamuere: new undum.SimpleSituation(
        "<p>Mientras la miras detenidamente eres abatido por unos guardias de la prisión.</p>\
        <h3>FIN DEL JUEGO</h3>"
    ),
    finalfelizpuertacollar: new undum.SimpleSituation(
        "<p>Tras observar más detenidamente la puerta te das cuenta de que existe una posibilidad de realizar un puente con el collar de tu hija y abrirla.</p>\
        <p>Finalmente decides utilizar el collar consiguiendo abrir la puerta y salir al exterior de la cárcel.</p>\
        <p>Aprovechando el descontrol de los guardas sales corriendo hacia un coche que se encuentra abierto y con las llaves puestas, consiguiendo así escapar y huir en búsqueda de tu familia...</p>\
        <h2>¡ENHORABUENA HAS CONSEGUIDO ESCAPAR!</h2>\
        <h3>FIN DEL JUEGO</h3>"
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    inventario: new undum.QualityGroup('Inventario', {priority:"0001"})
};

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    collar: new undum.IntegerQuality(
        "Collar", {priority:"0001", group:'inventario', onDisplay:"&#10003;"}
    ),
    porra: new undum.IntegerQuality(
        "Porra", {priority:"0002", group:'inventario', onDisplay:"&#10003;"}
    ),
    esposas: new undum.IntegerQuality(
        "Esposas", {priority:"0003", group:'inventario', onDisplay:"&#10003;"}
    ),
    pistola: new undum.IntegerQuality(
        "Pistola", {priority:"0004", group:'inventario', onDisplay:"&#10003;"}
    ),
    pan: new undum.IntegerQuality(
        "Pan", {priority:"0005", group:'inventario', onDisplay:"&#10003;"}
    ),
    manzana: new undum.IntegerQuality(
        "Manzana", {priority:"0006", group:'inventario', onDisplay:"&#10003;"}
    ),
    lata: new undum.IntegerQuality(
        "Lata de conserva", {priority:"0007", group:'inventario', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setQuality("collar", false);
    system.setQuality("porra", false);
    system.setQuality("esposas", false);
    system.setQuality("pistola", false);
    system.setQuality("pan", false);
    system.setQuality("manzana", false);
    system.setQuality("lata", false);
    system.setCharacterText("<p>¡Comienza tu apasionante aventura!.</p>");
};
