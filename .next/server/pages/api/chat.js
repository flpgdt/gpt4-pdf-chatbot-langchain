"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "@pinecone-database/pinecone":
/*!**********************************************!*\
  !*** external "@pinecone-database/pinecone" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@pinecone-database/pinecone");

/***/ }),

/***/ "langchain/chains":
/*!***********************************!*\
  !*** external "langchain/chains" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("langchain/chains");;

/***/ }),

/***/ "langchain/embeddings/openai":
/*!**********************************************!*\
  !*** external "langchain/embeddings/openai" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("langchain/embeddings/openai");;

/***/ }),

/***/ "langchain/llms/openai":
/*!****************************************!*\
  !*** external "langchain/llms/openai" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("langchain/llms/openai");;

/***/ }),

/***/ "langchain/vectorstores/pinecone":
/*!**************************************************!*\
  !*** external "langchain/vectorstores/pinecone" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("langchain/vectorstores/pinecone");;

/***/ }),

/***/ "(api)/./config/pinecone.ts":
/*!****************************!*\
  !*** ./config/pinecone.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PINECONE_INDEX_NAME\": () => (/* binding */ PINECONE_INDEX_NAME),\n/* harmony export */   \"PINECONE_NAME_SPACE\": () => (/* binding */ PINECONE_NAME_SPACE)\n/* harmony export */ });\n/**\n * Change the namespace to the namespace on Pinecone you'd like to store your embeddings.\n */ if (!process.env.PINECONE_INDEX_NAME) {\n    throw new Error(\"Missing Pinecone index name in .env file\");\n}\nconst PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? \"\";\nconst PINECONE_NAME_SPACE = \"docbot\"; //namespace is optional for your vectors\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvcGluZWNvbmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Q0FFQyxHQUVELElBQUksQ0FBQ0EsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsRUFBRTtJQUNwQyxNQUFNLElBQUlDLE1BQU0sNENBQTRDO0FBQzlELENBQUM7QUFFRCxNQUFNRCxzQkFBc0JGLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CLElBQUk7QUFFL0QsTUFBTUUsc0JBQXNCLFVBQVUsd0NBQXdDO0FBRTFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3B0NC1sYW5nY2hhaW4tcGRmLWNoYXRib3QvLi9jb25maWcvcGluZWNvbmUudHM/NmYwOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoYW5nZSB0aGUgbmFtZXNwYWNlIHRvIHRoZSBuYW1lc3BhY2Ugb24gUGluZWNvbmUgeW91J2QgbGlrZSB0byBzdG9yZSB5b3VyIGVtYmVkZGluZ3MuXG4gKi9cblxuaWYgKCFwcm9jZXNzLmVudi5QSU5FQ09ORV9JTkRFWF9OQU1FKSB7XG4gIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBQaW5lY29uZSBpbmRleCBuYW1lIGluIC5lbnYgZmlsZScpO1xufVxuXG5jb25zdCBQSU5FQ09ORV9JTkRFWF9OQU1FID0gcHJvY2Vzcy5lbnYuUElORUNPTkVfSU5ERVhfTkFNRSA/PyAnJztcblxuY29uc3QgUElORUNPTkVfTkFNRV9TUEFDRSA9ICdkb2Nib3QnOyAvL25hbWVzcGFjZSBpcyBvcHRpb25hbCBmb3IgeW91ciB2ZWN0b3JzXG5cbmV4cG9ydCB7IFBJTkVDT05FX0lOREVYX05BTUUsIFBJTkVDT05FX05BTUVfU1BBQ0UgfTtcbiJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiUElORUNPTkVfSU5ERVhfTkFNRSIsIkVycm9yIiwiUElORUNPTkVfTkFNRV9TUEFDRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/pinecone.ts\n");

/***/ }),

/***/ "(api)/./pages/api/chat.ts":
/*!***************************!*\
  !*** ./pages/api/chat.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/embeddings/openai */ \"langchain/embeddings/openai\");\n/* harmony import */ var langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/vectorstores/pinecone */ \"langchain/vectorstores/pinecone\");\n/* harmony import */ var _utils_makechain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/makechain */ \"(api)/./utils/makechain.ts\");\n/* harmony import */ var _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/pinecone-client */ \"(api)/./utils/pinecone-client.ts\");\n/* harmony import */ var _config_pinecone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/pinecone */ \"(api)/./config/pinecone.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__, _utils_makechain__WEBPACK_IMPORTED_MODULE_2__, _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__]);\n([langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__, _utils_makechain__WEBPACK_IMPORTED_MODULE_2__, _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nasync function handler(req, res) {\n    const { question , history  } = req.body;\n    console.log(\"question\", question);\n    //only accept post requests\n    if (req.method !== \"POST\") {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n        return;\n    }\n    if (!question) {\n        return res.status(400).json({\n            message: \"No question in the request\"\n        });\n    }\n    // OpenAI recommends replacing newlines with spaces for best results\n    const sanitizedQuestion = question.trim().replaceAll(\"\\n\", \" \");\n    try {\n        const index = _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__.pinecone.Index(_config_pinecone__WEBPACK_IMPORTED_MODULE_4__.PINECONE_INDEX_NAME);\n        /* create vectorstore*/ const vectorStore = await langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__.PineconeStore.fromExistingIndex(new langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIEmbeddings({}), {\n            pineconeIndex: index,\n            textKey: \"text\",\n            namespace: _config_pinecone__WEBPACK_IMPORTED_MODULE_4__.PINECONE_NAME_SPACE\n        });\n        //create chain\n        const chain = (0,_utils_makechain__WEBPACK_IMPORTED_MODULE_2__.makeChain)(vectorStore);\n        //Ask a question using chat history\n        const response = await chain.call({\n            question: sanitizedQuestion,\n            chat_history: history || []\n        });\n        console.log(\"response\", response);\n        res.status(200).json(response);\n    } catch (error) {\n        console.log(\"error\", error);\n        res.status(500).json({\n            error: error.message || \"Something went wrong\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0Q7QUFDQztBQUNsQjtBQUNLO0FBQzBCO0FBRTlELGVBQWVNLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxNQUFNLEVBQUVDLFNBQVEsRUFBRUMsUUFBTyxFQUFFLEdBQUdILElBQUlJLElBQUk7SUFFdENDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZSjtJQUV4QiwyQkFBMkI7SUFDM0IsSUFBSUYsSUFBSU8sTUFBTSxLQUFLLFFBQVE7UUFDekJOLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQjtRQUNuRDtJQUNGLENBQUM7SUFFRCxJQUFJLENBQUNSLFVBQVU7UUFDYixPQUFPRCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLFNBQVM7UUFBNkI7SUFDdEUsQ0FBQztJQUNELG9FQUFvRTtJQUNwRSxNQUFNQyxvQkFBb0JWLFNBQVNXLElBQUksR0FBR0MsVUFBVSxDQUFDLE1BQU07SUFFM0QsSUFBSTtRQUNGLE1BQU1DLFFBQVFuQixrRUFBYyxDQUFDQyxpRUFBbUJBO1FBRWhELHFCQUFxQixHQUNyQixNQUFNb0IsY0FBYyxNQUFNdkIsNEZBQStCLENBQ3ZELElBQUlELHlFQUFnQkEsQ0FBQyxDQUFDLElBQ3RCO1lBQ0UwQixlQUFlSjtZQUNmSyxTQUFTO1lBQ1RDLFdBQVd2QixpRUFBbUJBO1FBQ2hDO1FBR0YsY0FBYztRQUNkLE1BQU13QixRQUFRM0IsMkRBQVNBLENBQUNzQjtRQUN4QixtQ0FBbUM7UUFDbkMsTUFBTU0sV0FBVyxNQUFNRCxNQUFNRSxJQUFJLENBQUM7WUFDaEN0QixVQUFVVTtZQUNWYSxjQUFjdEIsV0FBVyxFQUFFO1FBQzdCO1FBRUFFLFFBQVFDLEdBQUcsQ0FBQyxZQUFZaUI7UUFDeEJ0QixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDYztJQUN2QixFQUFFLE9BQU9iLE9BQVk7UUFDbkJMLFFBQVFDLEdBQUcsQ0FBQyxTQUFTSTtRQUNyQlQsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPQSxNQUFNQyxPQUFPLElBQUk7UUFBdUI7SUFDeEU7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3B0NC1sYW5nY2hhaW4tcGRmLWNoYXRib3QvLi9wYWdlcy9hcGkvY2hhdC50cz9jNTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgT3BlbkFJRW1iZWRkaW5ncyB9IGZyb20gJ2xhbmdjaGFpbi9lbWJlZGRpbmdzL29wZW5haSc7XG5pbXBvcnQgeyBQaW5lY29uZVN0b3JlIH0gZnJvbSAnbGFuZ2NoYWluL3ZlY3RvcnN0b3Jlcy9waW5lY29uZSc7XG5pbXBvcnQgeyBtYWtlQ2hhaW4gfSBmcm9tICdAL3V0aWxzL21ha2VjaGFpbic7XG5pbXBvcnQgeyBwaW5lY29uZSB9IGZyb20gJ0AvdXRpbHMvcGluZWNvbmUtY2xpZW50JztcbmltcG9ydCB7IFBJTkVDT05FX0lOREVYX05BTUUsIFBJTkVDT05FX05BTUVfU1BBQ0UgfSBmcm9tICdAL2NvbmZpZy9waW5lY29uZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlLFxuKSB7XG4gIGNvbnN0IHsgcXVlc3Rpb24sIGhpc3RvcnkgfSA9IHJlcS5ib2R5O1xuXG4gIGNvbnNvbGUubG9nKCdxdWVzdGlvbicsIHF1ZXN0aW9uKTtcblxuICAvL29ubHkgYWNjZXB0IHBvc3QgcmVxdWVzdHNcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghcXVlc3Rpb24pIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnTm8gcXVlc3Rpb24gaW4gdGhlIHJlcXVlc3QnIH0pO1xuICB9XG4gIC8vIE9wZW5BSSByZWNvbW1lbmRzIHJlcGxhY2luZyBuZXdsaW5lcyB3aXRoIHNwYWNlcyBmb3IgYmVzdCByZXN1bHRzXG4gIGNvbnN0IHNhbml0aXplZFF1ZXN0aW9uID0gcXVlc3Rpb24udHJpbSgpLnJlcGxhY2VBbGwoJ1xcbicsICcgJyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBpbmRleCA9IHBpbmVjb25lLkluZGV4KFBJTkVDT05FX0lOREVYX05BTUUpO1xuXG4gICAgLyogY3JlYXRlIHZlY3RvcnN0b3JlKi9cbiAgICBjb25zdCB2ZWN0b3JTdG9yZSA9IGF3YWl0IFBpbmVjb25lU3RvcmUuZnJvbUV4aXN0aW5nSW5kZXgoXG4gICAgICBuZXcgT3BlbkFJRW1iZWRkaW5ncyh7fSksXG4gICAgICB7XG4gICAgICAgIHBpbmVjb25lSW5kZXg6IGluZGV4LFxuICAgICAgICB0ZXh0S2V5OiAndGV4dCcsXG4gICAgICAgIG5hbWVzcGFjZTogUElORUNPTkVfTkFNRV9TUEFDRSwgLy9uYW1lc3BhY2UgY29tZXMgZnJvbSB5b3VyIGNvbmZpZyBmb2xkZXJcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIC8vY3JlYXRlIGNoYWluXG4gICAgY29uc3QgY2hhaW4gPSBtYWtlQ2hhaW4odmVjdG9yU3RvcmUpO1xuICAgIC8vQXNrIGEgcXVlc3Rpb24gdXNpbmcgY2hhdCBoaXN0b3J5XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjaGFpbi5jYWxsKHtcbiAgICAgIHF1ZXN0aW9uOiBzYW5pdGl6ZWRRdWVzdGlvbixcbiAgICAgIGNoYXRfaGlzdG9yeTogaGlzdG9yeSB8fCBbXSxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZSk7XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdlbnQgd3JvbmcnIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiT3BlbkFJRW1iZWRkaW5ncyIsIlBpbmVjb25lU3RvcmUiLCJtYWtlQ2hhaW4iLCJwaW5lY29uZSIsIlBJTkVDT05FX0lOREVYX05BTUUiLCJQSU5FQ09ORV9OQU1FX1NQQUNFIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXN0aW9uIiwiaGlzdG9yeSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsInNhbml0aXplZFF1ZXN0aW9uIiwidHJpbSIsInJlcGxhY2VBbGwiLCJpbmRleCIsIkluZGV4IiwidmVjdG9yU3RvcmUiLCJmcm9tRXhpc3RpbmdJbmRleCIsInBpbmVjb25lSW5kZXgiLCJ0ZXh0S2V5IiwibmFtZXNwYWNlIiwiY2hhaW4iLCJyZXNwb25zZSIsImNhbGwiLCJjaGF0X2hpc3RvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/chat.ts\n");

/***/ }),

/***/ "(api)/./utils/makechain.ts":
/*!****************************!*\
  !*** ./utils/makechain.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeChain\": () => (/* binding */ makeChain)\n/* harmony export */ });\n/* harmony import */ var langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/llms/openai */ \"langchain/llms/openai\");\n/* harmony import */ var langchain_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/chains */ \"langchain/chains\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__]);\n([langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst CONDENSE_PROMPT = `Dada a conversa a seguir e uma pergunta de acompanhamento, reformule a pergunta de acompanhamento para ser uma pergunta independente.\n\nHistórico de conversa:\n{chat_history}\nComentarios adi: {question}\nPergunta independente:`;\nconst QA_PROMPT = `Voce é um assistente de IA especialista. Use as seguintes peças de contexto para responder à pergunta no final.\nSe você não souber a resposta, apenas diga que não sabe. NÃO tente inventar uma resposta.\nSe a pergunta não estiver relacionada ao contexto, responda educadamente que você está treinado para responder perguntas relacionadas à Resolução CVM 175, Instrução CVM 555 e o Ofício Circular CVM/SIN 02/23.\n\n{context}\n\nPergunta: {question}\nResposta construtiva em markdown:`;\nconst makeChain = (vectorstore)=>{\n    const model = new langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__.OpenAI({\n        temperature: 0,\n        modelName: \"gpt-3.5-turbo\"\n    });\n    const chain = langchain_chains__WEBPACK_IMPORTED_MODULE_1__.ConversationalRetrievalQAChain.fromLLM(model, vectorstore.asRetriever(), {\n        qaTemplate: QA_PROMPT,\n        questionGeneratorTemplate: CONDENSE_PROMPT,\n        returnSourceDocuments: true\n    });\n    return chain;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tYWtlY2hhaW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBRW1CO0FBRWxFLE1BQU1FLGtCQUFrQixDQUFDOzs7OztzQkFLSCxDQUFDO0FBRXZCLE1BQU1DLFlBQVksQ0FBQzs7Ozs7OztpQ0FPYyxDQUFDO0FBRTNCLE1BQU1DLFlBQVksQ0FBQ0MsY0FBK0I7SUFDdkQsTUFBTUMsUUFBUSxJQUFJTix5REFBTUEsQ0FBQztRQUN2Qk8sYUFBYTtRQUNiQyxXQUFXO0lBQ2I7SUFFQSxNQUFNQyxRQUFRUixvRkFBc0MsQ0FDbERLLE9BQ0FELFlBQVlNLFdBQVcsSUFDdkI7UUFDRUMsWUFBWVQ7UUFDWlUsMkJBQTJCWDtRQUMzQlksdUJBQXVCLElBQUk7SUFDN0I7SUFFRixPQUFPTDtBQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncHQ0LWxhbmdjaGFpbi1wZGYtY2hhdGJvdC8uL3V0aWxzL21ha2VjaGFpbi50cz9jZmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wZW5BSSB9IGZyb20gJ2xhbmdjaGFpbi9sbG1zL29wZW5haSc7XG5pbXBvcnQgeyBQaW5lY29uZVN0b3JlIH0gZnJvbSAnbGFuZ2NoYWluL3ZlY3RvcnN0b3Jlcy9waW5lY29uZSc7XG5pbXBvcnQgeyBDb252ZXJzYXRpb25hbFJldHJpZXZhbFFBQ2hhaW4gfSBmcm9tICdsYW5nY2hhaW4vY2hhaW5zJztcblxuY29uc3QgQ09OREVOU0VfUFJPTVBUID0gYERhZGEgYSBjb252ZXJzYSBhIHNlZ3VpciBlIHVtYSBwZXJndW50YSBkZSBhY29tcGFuaGFtZW50bywgcmVmb3JtdWxlIGEgcGVyZ3VudGEgZGUgYWNvbXBhbmhhbWVudG8gcGFyYSBzZXIgdW1hIHBlcmd1bnRhIGluZGVwZW5kZW50ZS5cblxuSGlzdMOzcmljbyBkZSBjb252ZXJzYTpcbntjaGF0X2hpc3Rvcnl9XG5Db21lbnRhcmlvcyBhZGk6IHtxdWVzdGlvbn1cblBlcmd1bnRhIGluZGVwZW5kZW50ZTpgO1xuXG5jb25zdCBRQV9QUk9NUFQgPSBgVm9jZSDDqSB1bSBhc3Npc3RlbnRlIGRlIElBIGVzcGVjaWFsaXN0YS4gVXNlIGFzIHNlZ3VpbnRlcyBwZcOnYXMgZGUgY29udGV4dG8gcGFyYSByZXNwb25kZXIgw6AgcGVyZ3VudGEgbm8gZmluYWwuXG5TZSB2b2PDqiBuw6NvIHNvdWJlciBhIHJlc3Bvc3RhLCBhcGVuYXMgZGlnYSBxdWUgbsOjbyBzYWJlLiBOw4NPIHRlbnRlIGludmVudGFyIHVtYSByZXNwb3N0YS5cblNlIGEgcGVyZ3VudGEgbsOjbyBlc3RpdmVyIHJlbGFjaW9uYWRhIGFvIGNvbnRleHRvLCByZXNwb25kYSBlZHVjYWRhbWVudGUgcXVlIHZvY8OqIGVzdMOhIHRyZWluYWRvIHBhcmEgcmVzcG9uZGVyIHBlcmd1bnRhcyByZWxhY2lvbmFkYXMgw6AgUmVzb2x1w6fDo28gQ1ZNIDE3NSwgSW5zdHJ1w6fDo28gQ1ZNIDU1NSBlIG8gT2bDrWNpbyBDaXJjdWxhciBDVk0vU0lOIDAyLzIzLlxuXG57Y29udGV4dH1cblxuUGVyZ3VudGE6IHtxdWVzdGlvbn1cblJlc3Bvc3RhIGNvbnN0cnV0aXZhIGVtIG1hcmtkb3duOmA7XG5cbmV4cG9ydCBjb25zdCBtYWtlQ2hhaW4gPSAodmVjdG9yc3RvcmU6IFBpbmVjb25lU3RvcmUpID0+IHtcbiAgY29uc3QgbW9kZWwgPSBuZXcgT3BlbkFJKHtcbiAgICB0ZW1wZXJhdHVyZTogMCwgLy8gaW5jcmVhc2UgdGVtZXByZWF0dXJlIHRvIGdldCBtb3JlIGNyZWF0aXZlIGFuc3dlcnNcbiAgICBtb2RlbE5hbWU6ICdncHQtMy41LXR1cmJvJywgLy9jaGFuZ2UgdGhpcyB0byBncHQtNCBpZiB5b3UgaGF2ZSBhY2Nlc3NcbiAgfSk7XG5cbiAgY29uc3QgY2hhaW4gPSBDb252ZXJzYXRpb25hbFJldHJpZXZhbFFBQ2hhaW4uZnJvbUxMTShcbiAgICBtb2RlbCxcbiAgICB2ZWN0b3JzdG9yZS5hc1JldHJpZXZlcigpLFxuICAgIHtcbiAgICAgIHFhVGVtcGxhdGU6IFFBX1BST01QVCxcbiAgICAgIHF1ZXN0aW9uR2VuZXJhdG9yVGVtcGxhdGU6IENPTkRFTlNFX1BST01QVCxcbiAgICAgIHJldHVyblNvdXJjZURvY3VtZW50czogdHJ1ZSwgLy9UaGUgbnVtYmVyIG9mIHNvdXJjZSBkb2N1bWVudHMgcmV0dXJuZWQgaXMgNCBieSBkZWZhdWx0XG4gICAgfSxcbiAgKTtcbiAgcmV0dXJuIGNoYWluO1xufTtcbiJdLCJuYW1lcyI6WyJPcGVuQUkiLCJDb252ZXJzYXRpb25hbFJldHJpZXZhbFFBQ2hhaW4iLCJDT05ERU5TRV9QUk9NUFQiLCJRQV9QUk9NUFQiLCJtYWtlQ2hhaW4iLCJ2ZWN0b3JzdG9yZSIsIm1vZGVsIiwidGVtcGVyYXR1cmUiLCJtb2RlbE5hbWUiLCJjaGFpbiIsImZyb21MTE0iLCJhc1JldHJpZXZlciIsInFhVGVtcGxhdGUiLCJxdWVzdGlvbkdlbmVyYXRvclRlbXBsYXRlIiwicmV0dXJuU291cmNlRG9jdW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/makechain.ts\n");

/***/ }),

/***/ "(api)/./utils/pinecone-client.ts":
/*!**********************************!*\
  !*** ./utils/pinecone-client.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pinecone\": () => (/* binding */ pinecone)\n/* harmony export */ });\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"@pinecone-database/pinecone\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {\n    throw new Error(\"Pinecone environment or api key vars missing\");\n}\nasync function initPinecone() {\n    try {\n        const pinecone = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__.PineconeClient();\n        await pinecone.init({\n            environment: process.env.PINECONE_ENVIRONMENT ?? \"\",\n            apiKey: process.env.PINECONE_API_KEY ?? \"\"\n        });\n        return pinecone;\n    } catch (error) {\n        console.log(\"error\", error);\n        throw new Error(\"Failed to initialize Pinecone Client\");\n    }\n}\nconst pinecone = await initPinecone();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9waW5lY29uZS1jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2RDtBQUU3RCxJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQUksQ0FBQ0YsUUFBUUMsR0FBRyxDQUFDRSxnQkFBZ0IsRUFBRTtJQUN0RSxNQUFNLElBQUlDLE1BQU0sZ0RBQWdEO0FBQ2xFLENBQUM7QUFFRCxlQUFlQyxlQUFlO0lBQzVCLElBQUk7UUFDRixNQUFNQyxXQUFXLElBQUlQLHVFQUFjQTtRQUVuQyxNQUFNTyxTQUFTQyxJQUFJLENBQUM7WUFDbEJDLGFBQWFSLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQUk7WUFDakRPLFFBQVFULFFBQVFDLEdBQUcsQ0FBQ0UsZ0JBQWdCLElBQUk7UUFDMUM7UUFFQSxPQUFPRztJQUNULEVBQUUsT0FBT0ksT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUMsU0FBU0Y7UUFDckIsTUFBTSxJQUFJTixNQUFNLHdDQUF3QztJQUMxRDtBQUNGO0FBRU8sTUFBTUUsV0FBVyxNQUFNRCxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3B0NC1sYW5nY2hhaW4tcGRmLWNoYXRib3QvLi91dGlscy9waW5lY29uZS1jbGllbnQudHM/ZGYzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaW5lY29uZUNsaWVudCB9IGZyb20gJ0BwaW5lY29uZS1kYXRhYmFzZS9waW5lY29uZSc7XG5cbmlmICghcHJvY2Vzcy5lbnYuUElORUNPTkVfRU5WSVJPTk1FTlQgfHwgIXByb2Nlc3MuZW52LlBJTkVDT05FX0FQSV9LRVkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdQaW5lY29uZSBlbnZpcm9ubWVudCBvciBhcGkga2V5IHZhcnMgbWlzc2luZycpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0UGluZWNvbmUoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGluZWNvbmUgPSBuZXcgUGluZWNvbmVDbGllbnQoKTtcblxuICAgIGF3YWl0IHBpbmVjb25lLmluaXQoe1xuICAgICAgZW52aXJvbm1lbnQ6IHByb2Nlc3MuZW52LlBJTkVDT05FX0VOVklST05NRU5UID8/ICcnLCAvL3RoaXMgaXMgaW4gdGhlIGRhc2hib2FyZFxuICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5QSU5FQ09ORV9BUElfS0VZID8/ICcnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBpbmVjb25lO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBpbml0aWFsaXplIFBpbmVjb25lIENsaWVudCcpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwaW5lY29uZSA9IGF3YWl0IGluaXRQaW5lY29uZSgpO1xuIl0sIm5hbWVzIjpbIlBpbmVjb25lQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIlBJTkVDT05FX0VOVklST05NRU5UIiwiUElORUNPTkVfQVBJX0tFWSIsIkVycm9yIiwiaW5pdFBpbmVjb25lIiwicGluZWNvbmUiLCJpbml0IiwiZW52aXJvbm1lbnQiLCJhcGlLZXkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/pinecone-client.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chat.ts"));
module.exports = __webpack_exports__;

})();