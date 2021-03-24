/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const userMessages = []\n\nconst userMessageForm = document.querySelector('form')\nconst userMessagesList = document.querySelector('ul')\n\nfunction renderMessages() {\n  let messageItems = ''\n  for (const message of userMessages) {\n    messageItems = `\n      ${messageItems}\n      <li class=\"message-item\">\n        <div class=\"message-image\">\n          <img src=\"${message.image}\" alt=\"${message.text}\">\n        </div>\n        <p>${message.text}</p>\n      </li>\n    `\n  }\n\n  userMessagesList.innerHTML = messageItems\n}\n\nfunction formSubmitHandler(event) {\n  event.preventDefault()\n  const userMessageInput = event.target.querySelector('textarea')\n  const messageImageInput = event.target.querySelector('input')\n  const userMessage = userMessageInput.value\n  const imageUrl = messageImageInput.value\n\n  if (\n    !userMessage ||\n    !imageUrl ||\n    userMessage.trim().length === 0 ||\n    imageUrl.trim().length === 0\n  ) {\n    alert('Please insert a valid message and image.')\n    return\n  }\n\n  userMessages.push({\n    text: userMessage,\n    image: imageUrl\n  })\n\n  userMessageInput.value = ''\n  messageImageInput.value = ''\n\n  renderMessages()\n}\n\nuserMessageForm.addEventListener('submit', formSubmitHandler)\n\n\n//# sourceURL=webpack://xss-attack-example/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;