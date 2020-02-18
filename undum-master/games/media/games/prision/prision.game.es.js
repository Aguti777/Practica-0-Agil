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
        <p>Se te presenta ahora la primera decisión en esta trepidante aventura, ¿Qué piensas hacer?</p>\
        <p><a href='ayudarprisionero'>ayudar a los prisioneros</a> o <a href='ayudarguarda'>ayudar al guarda</a> <b>SUERTE EN TUS FUTURAS DECISIONES</b></p>"
    ),
    ayudarprisionero: new undum.SimpleSituation(
        "<p>AYUDAS AL PRISIONERO</p>"
    ),
    ayudarguarda: new undum.SimpleSituation(
        "<p>Has decidido ayudar al guarda y dejar morir al prisionero, por lo que todos los prisioneros se vuelven en tu contra y a partir de ahora deberá evitar encontrarte con ellos, si no quieres acabar mal...</p>\
        <p>El guarda y tú conseguís huir del lugar y salís corriendo por el pasillo, donde las puertas se encuentran abiertas.</p>\
        <p>El guarda saca sus esposas y las utilizar para cerrar la puerta y evitar ser alcanzado por los otros guardas. Aprovechando que el guarda está ocupado puedes decidir huir y <a href='huircelda'>salir corriendo hacia tu celda</a>, <a href='huirsalida'>correr a buscar una salida</a> o <a href='continuarconguarda'>continuar con el guarda</a> para intentar llegar al puesto de mando.</p>"
    ),
    huircelda: new undum.SimpleSituation(
        "<p>Has decidido huir hacia tu celda</p>"
    ),
    huirsalida: new undum.SimpleSituation(
        "<p>Has decidido salir corriendo en busca de una salida</p>"
    ),
    continuarconguarda: new undum.SimpleSituation(
        "<p>Has decidido continuar con el guarda</p>"
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
    )
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setQuality("collar", false)
    system.setCharacterText("<p>¡Comienza tu apasionante aventura!.</p>");
};
