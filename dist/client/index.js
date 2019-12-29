/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/config/fileloader.js":
/*!*************************************!*\
  !*** ./client/config/fileloader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./client/config/index.js\");\n\n\nvar fileLoader = function fileLoader(game) {\n  game.load.crossOrigin = 'Anonymous';\n  game.stage.backgroundColor = '#1E1E1E';\n  game.load.image('asphalt', \"\".concat(___WEBPACK_IMPORTED_MODULE_0__[\"ASSETS_URL\"], \"/sprites/asphalt/asphalt.png\"));\n  game.load.image('car', \"\".concat(___WEBPACK_IMPORTED_MODULE_0__[\"ASSETS_URL\"], \"/sprites/car/car.png\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fileLoader);\n\n//# sourceURL=webpack:///./client/config/fileloader.js?");

/***/ }),

/***/ "./client/config/index.js":
/*!********************************!*\
  !*** ./client/config/index.js ***!
  \********************************/
/*! exports provided: WINDOW_WIDTH, WINDOW_HEIGHT, WORLD_SIZE, ASSETS_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WINDOW_WIDTH\", function() { return WINDOW_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WINDOW_HEIGHT\", function() { return WINDOW_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WORLD_SIZE\", function() { return WORLD_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ASSETS_URL\", function() { return ASSETS_URL; });\nvar WINDOW_WIDTH = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\nvar WINDOW_HEIGHT = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;\nvar WORLD_SIZE = {\n  width: 1600,\n  height: 1200\n};\nvar ASSETS_URL = '../assets';\n\n//# sourceURL=webpack:///./client/config/index.js?");

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./client/config/index.js\");\n/* harmony import */ var _state_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/Game */ \"./client/state/Game.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Phaser$Game) {\n  _inherits(App, _Phaser$Game);\n\n  function App() {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, _config__WEBPACK_IMPORTED_MODULE_0__[\"WINDOW_WIDTH\"], _config__WEBPACK_IMPORTED_MODULE_0__[\"WINDOW_HEIGHT\"], Phaser.AUTO));\n\n    _this.state.add('Game', _state_Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n    _this.state.start('Game');\n\n    return _this;\n  }\n\n  return App;\n}(Phaser.Game);\n\nvar SimpleGame = new App();\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ }),

/***/ "./client/state/Game.js":
/*!******************************!*\
  !*** ./client/state/Game.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./client/config/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./client/state/utils/index.js\");\n/* harmony import */ var _config_fileloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/fileloader */ \"./client/config/fileloader.js\");\n/* harmony import */ var _world_createWorld__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./world/createWorld */ \"./client/state/world/createWorld.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ \"./client/state/player/index.js\");\n/* harmony import */ var _sockets_newPlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sockets/newPlayer */ \"./client/state/sockets/newPlayer.js\");\n/* harmony import */ var _sockets_updatePlayers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sockets/updatePlayers */ \"./client/state/sockets/updatePlayers.js\");\n/* harmony import */ var _predictions_playerMovementInterpolation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./predictions/playerMovementInterpolation */ \"./client/state/predictions/playerMovementInterpolation.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\nvar SERVER_IP = 'http://localhost:8000';\nvar socket = null;\nvar otherPlayers = {};\n\nvar Game =\n/*#__PURE__*/\nfunction (_Phaser$State) {\n  _inherits(Game, _Phaser$State);\n\n  function Game() {\n    var _this;\n\n    _classCallCheck(this, Game);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Game).call(this));\n    _this.player = {};\n    return _this;\n  }\n\n  _createClass(Game, [{\n    key: \"preload\",\n    value: function preload() {\n      // Loads files\n      Object(_config_fileloader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.game);\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      var width = _config__WEBPACK_IMPORTED_MODULE_0__[\"WORLD_SIZE\"].width,\n          height = _config__WEBPACK_IMPORTED_MODULE_0__[\"WORLD_SIZE\"].height; // Creates the world\n\n      Object(_world_createWorld__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.game); // Connects the player to the server\n\n      socket = io(SERVER_IP); // Creates the player passing the X, Y, game and socket as arguments\n\n      this.player = Object(_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Math.random() * width, Math.random() * height / 2, this.game, socket); // Creates the player name text\n\n      this.player.playerName = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(this.game, this.player.sprite.body); // Creates the player speed text\n\n      this.player.speedText = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(this.game, this.player.sprite.body); // Sends a new-player event to the server\n\n      Object(_sockets_newPlayer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(socket, this.player); // update all players\n\n      Object(_sockets_updatePlayers__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(socket, otherPlayers, this.game); // Configures the game camera\n\n      this.game.camera.x = this.player.sprite.x - 800 / 2;\n      this.game.camera.y = this.player.sprite.y - 600 / 2; // Scale game to fit the entire window\n\n      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.player.drive(this.game); // Move the camera to follow the player\n\n      var cameraX = this.player.sprite.x - 800 / 2;\n      var cameraY = this.player.sprite.y - 600 / 2;\n      this.game.camera.x += (cameraX - this.game.camera.x) * 0.08;\n      this.game.camera.y += (cameraY - this.game.camera.y) * 0.08; // Interpolates the players movement\n\n      Object(_predictions_playerMovementInterpolation__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(otherPlayers);\n    }\n  }]);\n\n  return Game;\n}(Phaser.State);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./client/state/Game.js?");

/***/ }),

/***/ "./client/state/player/createPlayer.js":
/*!*********************************************!*\
  !*** ./client/state/player/createPlayer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar createPlayer = function createPlayer(x, y, game) {\n  var sprite = game.add.sprite(x, y, 'car');\n  game.physics.p2.enable(sprite, false);\n  return sprite;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createPlayer);\n\n//# sourceURL=webpack:///./client/state/player/createPlayer.js?");

/***/ }),

/***/ "./client/state/player/index.js":
/*!**************************************!*\
  !*** ./client/state/player/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPlayer */ \"./client/state/player/createPlayer.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./client/state/utils/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (x, y, game, socket) {\n  var player = {\n    socket: socket,\n    sprite: Object(_createPlayer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x, y, game),\n    playerName: null,\n    speed: 0,\n    speedText: null,\n    drive: function drive(game) {\n      /*\n      Most of the driving logic was written by Daniel Wuggenig\n      https://www.anexia-it.com/blog/en/introduction-to-the-phaser-framework/\n      I decided to use it since this is supposed to be an introduction to multiplayer\n      online car game, his driving solution is simple and clean and fits perfectly\n      */\n      var KEYS = {\n        W: Phaser.Keyboard.W,\n        S: Phaser.Keyboard.S,\n        A: Phaser.Keyboard.A,\n        D: Phaser.Keyboard.D\n      }; // Only emit if the player is moving\n\n      if (this.speed !== 0) {\n        this.emitPlayerData();\n      } // Drive forward if W is pressed down\n\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isDown\"])(game, KEYS.W) && this.speed <= 400) {\n        this.speed += 10;\n      } else {\n        if (this.speed >= 10) {\n          this.speed -= 10;\n        }\n      } // Drive backwards if S is pressed down\n\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isDown\"])(game, KEYS.S) && this.speed >= -200) {\n        this.speed -= 5;\n      } else {\n        if (this.speed <= -5) {\n          this.speed += 5;\n        }\n      } // Steers the car\n\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isDown\"])(game, KEYS.A)) {\n        this.sprite.body.angularVelocity = -5 * (this.speed / 1000);\n      } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isDown\"])(game, KEYS.D)) {\n        this.sprite.body.angularVelocity = 5 * (this.speed / 1000);\n      } else {\n        this.sprite.body.angularVelocity = 0;\n      }\n\n      this.sprite.body.velocity.x = this.speed * Math.cos((this.sprite.body.angle - 360) * 0.01745);\n      this.sprite.body.velocity.y = this.speed * Math.sin((this.sprite.body.angle - 360) * 0.01745); // Brings the player's sprite to top\n\n      game.world.bringToTop(this.sprite);\n      this.updatePlayerName();\n      this.updatePlayerStatusText('speed', this.sprite.body.x - 57, this.sprite.body.y - 39, this.speedText);\n    },\n    emitPlayerData: function emitPlayerData() {\n      // Emit the 'move-player' event, updating the player's data on the server\n      socket.emit('move-player', {\n        x: this.sprite.body.x,\n        y: this.sprite.body.y,\n        angle: this.sprite.body.rotation,\n        playerName: {\n          name: this.playerName.text,\n          x: this.playerName.x,\n          y: this.playerName.y\n        },\n        speed: {\n          value: this.speed,\n          x: this.speedText.x,\n          y: this.speedText.y\n        }\n      });\n    },\n    updatePlayerName: function updatePlayerName() {\n      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.socket.id;\n      var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.sprite.body.x - 57;\n      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.sprite.body.y - 59;\n      // Updates the player's name text and position\n      this.playerName.text = String(name);\n      this.playerName.x = x;\n      this.playerName.y = y; // Bring the player's name to top\n\n      game.world.bringToTop(this.playerName);\n    },\n    updatePlayerStatusText: function updatePlayerStatusText(status, x, y, text) {\n      // Capitalize the status text\n      var capitalizedStatus = status[0].toUpperCase() + status.substring(1);\n      var newText = ''; // Set the speed text to either 0 or the current speed\n\n      this[status] < 0 ? this.newText = 0 : this.newText = this[status]; // Updates the text position and string\n\n      text.x = x;\n      text.y = y;\n      text.text = \"\".concat(capitalizedStatus, \": \").concat(parseInt(this.newText));\n      game.world.bringToTop(text);\n    }\n  };\n  return player;\n});\n\n//# sourceURL=webpack:///./client/state/player/index.js?");

/***/ }),

/***/ "./client/state/predictions/playerMovementInterpolation.js":
/*!*****************************************************************!*\
  !*** ./client/state/predictions/playerMovementInterpolation.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar playerMovementInterpolation = function playerMovementInterpolation(otherPlayers) {\n  for (var id in otherPlayers) {\n    var player = otherPlayers[id];\n\n    if (player.target_x !== undefined) {\n      // Interpolate the player's position\n      player.sprite.body.x += (player.target_x - player.sprite.body.x) * 0.30;\n      player.sprite.body.y += (player.target_y - player.sprite.body.y) * 0.30;\n      var angle = player.target_rotation;\n      var direction = (angle - player.sprite.body.rotation) / (Math.PI * 2);\n      direction -= Math.round(direction);\n      direction *= Math.PI * 2;\n      player.sprite.body.rotation += direction * 0.30; // Interpolate the player's name position\n\n      player.playerName.x += (player.playerName.target_x - player.playerName.x) * 0.30;\n      player.playerName.y += (player.playerName.target_y - player.playerName.y) * 0.30; // Interpolate the player's speed text position\n\n      player.speedText.x += (player.speedText.target_x - player.speedText.x) * 0.30;\n      player.speedText.y += (player.speedText.target_y - player.speedText.y) * 0.30;\n      player.updatePlayerStatusText('speed', player.speedText.x, player.speedText.y, player.speedText);\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (playerMovementInterpolation);\n\n//# sourceURL=webpack:///./client/state/predictions/playerMovementInterpolation.js?");

/***/ }),

/***/ "./client/state/sockets/newPlayer.js":
/*!*******************************************!*\
  !*** ./client/state/sockets/newPlayer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar newPlayer = function newPlayer(socket, player) {\n  socket.on('connect', function () {\n    socket.emit('new-player', {\n      x: player.sprite.body.x,\n      y: player.sprite.body.y,\n      angle: player.sprite.rotation,\n      playerName: {\n        name: String(socket.id),\n        x: player.playerName.x,\n        y: player.playerName.y\n      },\n      speed: {\n        value: player.speed,\n        x: player.speed.x,\n        y: player.speed.y\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newPlayer);\n\n//# sourceURL=webpack:///./client/state/sockets/newPlayer.js?");

/***/ }),

/***/ "./client/state/sockets/updatePlayers.js":
/*!***********************************************!*\
  !*** ./client/state/sockets/updatePlayers.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../player */ \"./client/state/player/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./client/state/utils/index.js\");\n\n\n\nvar updatePlayers = function updatePlayers(socket, otherPlayers, game) {\n  socket.on('update-players', function (playersData) {\n    var playersFound = {}; // Iterate over all players\n\n    for (var index in playersData) {\n      var data = playersData[index]; // In case a player hasn't been created yet\n      // We make sure that we won't create a second instance of it\n\n      if (otherPlayers[index] === undefined && index !== socket.id) {\n        var newPlayer = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.x, data.y, game);\n        newPlayer.playerName = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(game, newPlayer);\n        newPlayer.speedText = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(game, newPlayer);\n        newPlayer.updatePlayerName(data.playerName.name, data.playerName.x, data.playerName.y);\n        otherPlayers[index] = newPlayer;\n      }\n\n      playersFound[index] = true; // Update players data\n\n      if (index !== socket.id) {\n        // Update players target but not their real position\n        otherPlayers[index].target_x = data.x;\n        otherPlayers[index].target_y = data.y;\n        otherPlayers[index].target_rotation = data.angle;\n        otherPlayers[index].playerName.target_x = data.playerName.x;\n        otherPlayers[index].playerName.target_y = data.playerName.y;\n        otherPlayers[index].speedText.target_x = data.speed.x;\n        otherPlayers[index].speedText.target_y = data.speed.y;\n        otherPlayers[index].speed = data.speed.value;\n      }\n    } // Check if there's no missing players, if there is, delete them\n\n\n    for (var id in otherPlayers) {\n      if (!playersFound[id]) {\n        otherPlayers[id].sprite.destroy();\n        otherPlayers[id].playerName.destroy();\n        otherPlayers[id].speedText.destroy();\n        delete otherPlayers[id];\n      }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (updatePlayers);\n\n//# sourceURL=webpack:///./client/state/sockets/updatePlayers.js?");

/***/ }),

/***/ "./client/state/utils/index.js":
/*!*************************************!*\
  !*** ./client/state/utils/index.js ***!
  \*************************************/
/*! exports provided: isDown, createText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDown\", function() { return isDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createText\", function() { return createText; });\nvar isDown = function isDown(game, key) {\n  return game.input.keyboard.isDown(key);\n};\nvar createText = function createText(game, target) {\n  return game.add.text(target.x, target.y, '', {\n    fontSize: '12px',\n    fill: '#FFF',\n    align: 'center'\n  });\n};\n\n//# sourceURL=webpack:///./client/state/utils/index.js?");

/***/ }),

/***/ "./client/state/world/createWorld.js":
/*!*******************************************!*\
  !*** ./client/state/world/createWorld.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../config */ \"./client/config/index.js\");\n\nvar width = _config__WEBPACK_IMPORTED_MODULE_0__[\"WORLD_SIZE\"].width,\n    height = _config__WEBPACK_IMPORTED_MODULE_0__[\"WORLD_SIZE\"].height;\n\nvar worldCreator = function worldCreator(game) {\n  // Start P2 physics engine\n  game.physics.startSystem(Phaser.Physics.P2JS); // We set this to true so our game won't pause if we focus\n  // something else other than the browser\n\n  game.stage.disableVisibilityChange = true; // Here we set the bounds of our game world\n\n  game.world.setBounds(0, 0, width, height);\n  createMap(game);\n};\n\nvar createMap = function createMap(game) {\n  var groundTiles = [];\n\n  for (var i = 0; i <= width / 64 + 1; i++) {\n    for (var j = 0; j <= height / 64 + 1; j++) {\n      var groundSprite = game.add.sprite(i * 64, j * 64, 'asphalt');\n      groundTiles.push(groundSprite);\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (worldCreator);\n\n//# sourceURL=webpack:///./client/state/world/createWorld.js?");

/***/ })

/******/ });