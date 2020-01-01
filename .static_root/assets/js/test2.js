'use strict';
/** @type {!Array} */
var _0x5daf = ["innerText", "textContent", "href", "&", "split", "?", "indexOf", "length", "slice", "=", "toUpperCase", "hidden", "toggleClass", ".result", ".choice", "remove", "#resultText span", "scissorsImg", ".playerMoveImg", "rockImg", "paperImg", ".comMoveImg", "random", "fighter", "<span>\ube44\uacbc\uc2b5\ub2c8\ub2e4!</span>", "prepend", "#resultText p", "#penguin span", "<span>", "Peeenguin", "</span>", "append", "#penguin", "<span>\ud50c\ub808\uc774\uc5b4\uac00 \uc774\uacbc\uc2b5\ub2c8\ub2e4!</span>",
    "#playerScore span", "#playerScore p", "PeeenGUIN", "<span>\ucef4\ud4e8\ud130\uac00 \uc774\uacbc\uc2b5\ub2c8\ub2e4!</span>", "#comScore span", "#comScore p", "PeEEnguIn", "\uac8c\uc784\uc885\ub8cc! \ud50c\ub808\uc774\uc5b4\uc758 \uc2b9\ub9ac\uc785\ub2c8\ub2e4!", "\uac8c\uc784\uc885\ub8cc! \ucef4\ud4e8xj\uc758 \uc2b9\ub9ac\uc785\ub2c8\ub2e4!", "click", "#scissors", "#rock", "#paper", "#continue"];
var playerMove;
var comMove;
/** @type {number} */
var playerWins = 0;
/** @type {number} */
var comWins = 0;
/** @type {number} */
var numOfGame = 0;

/**
 * @param {?} text
 * @param {?} innerText
 * @return {undefined}
 */
function setInnerText(text, innerText) {
    if (text[_0x5daf[0]]) {
        text[_0x5daf[0]] = innerText;
    } else {
        text[_0x5daf[1]] = innerText;
    }
}

/**
 * @param {?} types
 * @return {?}
 */
var getParameters = function (types) {
    var c_user;
    var lat = location.href;
    var PL$13 = lat.slice(lat.indexOf("?") + 1, lat.length).split("&");
    /** @type {number} */
    var PL$17 = 0;
    for (; PL$17 < PL$13.length; PL$17++) {
        var _0x3e6cxf = PL$13[PL$17].split("=")[0];
        if (_0x3e6cxf.toUpperCase() == types.toUpperCase()) {
            c_user = PL$13[PL$17].split("=")[1];
            return decodeURIComponent(c_user);
        }
    }
};

/**
 * @return {undefined}
 */
function toggleChoice_Result() {
    $(_0x5daf[13])[_0x5daf[12]](_0x5daf[11]);
    $(_0x5daf[14])[_0x5daf[12]](_0x5daf[11]);
}

/**
 * @return {undefined}
 */
function backToChoice() {
    toggleChoice_Result();
    $(_0x5daf[16])[_0x5daf[15]]();
    switch (playerMove) {
        case 0:
            $(_0x5daf[18])[_0x5daf[12]](_0x5daf[17]);
            break;
        case 1:
            $(_0x5daf[18])[_0x5daf[12]](_0x5daf[19]);
            break;
        case 2:
            $(_0x5daf[18])[_0x5daf[12]](_0x5daf[20]);
            break;
    }
    switch (comMove) {
        case 0:
            $(_0x5daf[21])[_0x5daf[12]](_0x5daf[17]);
            break;
        case 1:
            $(_0x5daf[21])[_0x5daf[12]](_0x5daf[19]);
            break;
        case 2:
            $(_0x5daf[21])[_0x5daf[12]](_0x5daf[20]);
            break;
    }
}

/**
 * @param {number} name
 * @param {?} level
 * @return {undefined}
 */
function playGame(name, level) {
    /** @type {number} */
    playerMove = name;
    $(_0x5daf[18])[_0x5daf[12]](level);
    var _0x3e6cx15 = Math[_0x5daf[22]]();
    if (_0x3e6cx15 < 0.33) {
        /** @type {number} */
        comMove = 0;
        $(_0x5daf[21])[_0x5daf[12]](_0x5daf[17]);
    } else {
        if (_0x3e6cx15 < 0.66) {
            /** @type {number} */
            comMove = 1;
            $(_0x5daf[21])[_0x5daf[12]](_0x5daf[19]);
        } else {
            /** @type {number} */
            comMove = 2;
            $(_0x5daf[21])[_0x5daf[12]](_0x5daf[20]);
        }
    }
    /** @type {number} */
    var _0x3e6cx16 = (3 + playerMove - comMove) % 3;
    var pars = getParameters(_0x5daf[23]);
    switch (_0x3e6cx16) {
        case 0:
            $(_0x5daf[26])[_0x5daf[25]](_0x5daf[24]);
            $(_0x5daf[27])[_0x5daf[15]]();
            if (pars == undefined) {
                $(_0x5daf[32])[_0x5daf[31]](_0x5daf[28] + _0x5daf[29] + _0x5daf[30]);
            } else {
                $(_0x5daf[32])[_0x5daf[31]](_0x5daf[28] + pars + _0x5daf[30]);
            }
            break;
        case 1:
            playerWins++;
            $(_0x5daf[26])[_0x5daf[25]](_0x5daf[33]);
            $(_0x5daf[34])[_0x5daf[15]]();
            $(_0x5daf[35])[_0x5daf[31]](_0x5daf[28] + playerWins + _0x5daf[30]);
            $(_0x5daf[27])[_0x5daf[15]]();
            if (pars == undefined) {
                $(_0x5daf[32])[_0x5daf[31]](_0x5daf[28] + _0x5daf[36] + _0x5daf[30]);
            } else {
                $(_0x5daf[32])[_0x5daf[31]](_0x5daf[28] + pars + _0x5daf[30]);
            }
            break;
        case 2:
            comWins++;
            $(_0x5daf[26])[_0x5daf[25]](_0x5daf[37]);
            $(_0x5daf[38])[_0x5daf[15]]();
            $(_0x5daf[39])[_0x5daf[31]](_0x5daf[28] + comWins + _0x5daf[30]);
            $(_0x5daf[27])[_0x5daf[15]]();
            if (pars == undefined) {
                $(_0x5daf[32])[_0x5daf[31]](_0x5daf[28] + _0x5daf[40] + _0x5daf[30]);
            } else {
                $(_0x5daf[32])[_0x5daf[31]](_0x5daf[28] + pars + _0x5daf[30]);
            }
            break;
    }
    toggleChoice_Result();
    if (playerWins == 3 || comWins == 3) {
        if (playerWins > comWins) {
            alert(_0x5daf[41]);
        } else {
            alert(_0x5daf[42]);
        }
        /** @type {number} */
        playerWins = 0;
        /** @type {number} */
        comWins = 0;
        $(_0x5daf[34])[_0x5daf[15]]();
        $(_0x5daf[35])[_0x5daf[31]](_0x5daf[28] + playerWins + _0x5daf[30]);
        $(_0x5daf[38])[_0x5daf[15]]();
        $(_0x5daf[39])[_0x5daf[31]](_0x5daf[28] + comWins + _0x5daf[30]);
        $(_0x5daf[27])[_0x5daf[15]]();
        if (pars == undefined) {
            $(_0x5daf[32])[_0x5daf[31]](_0x5daf[28] + _0x5daf[40] + _0x5daf[30]);
        } else {
            $(_0x5daf[32])[_0x5daf[31]](_0x5daf[28] + pars + _0x5daf[30]);
        }
        backToChoice();
    }
}

$(_0x5daf[13])[_0x5daf[12]](_0x5daf[11]);
$(_0x5daf[44])[_0x5daf[43]](function () {
    playGame(0, _0x5daf[17]);
});
$(_0x5daf[45])[_0x5daf[43]](function () {
    playGame(1, _0x5daf[19]);
});
$(_0x5daf[46])[_0x5daf[43]](function () {
    playGame(2, _0x5daf[20]);
});
$(_0x5daf[47])[_0x5daf[43]](function () {
    backToChoice();
});
