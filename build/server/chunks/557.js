"use strict";
exports.id = 557;
exports.ids = [557];
exports.modules = {

/***/ 2098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2589);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const AnimatedText = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: {
            xl: "28px",
            md: "24px",
            sm: "20px",
            base: "16px"
        },
        fontWeight: "bold",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((typewriter_effect__WEBPACK_IMPORTED_MODULE_2___default()), {
            options: {
                strings: [
                    'print("Hello World!");',
                    'cout<<"Hello World!";',
                    'console.log("Hello World")'
                ],
                autoStart: true,
                loop: true,
                delay: 75
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedText);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _components_animated_text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2098);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1946);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ti__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_tfi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1740);
/* harmony import */ var react_icons_tfi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_tfi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_animated_text_js__WEBPACK_IMPORTED_MODULE_2__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_animated_text_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const About = ()=>{
    const [cardTextOpacity, setCardTextOpacity] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const [moreTextOpacity, setMoreTextOpacity] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0.0);
    const [bioOpacity, setBioOpacity] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0.0);
    const listenToScroll = ()=>{
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const moreText = document.querySelector("#moreText");
        if (moreText) {
            const moreOpacity = 0.2 + (1 - 0.2) / moreText.offsetHeight * winScroll;
            setMoreTextOpacity(moreOpacity);
        }
        const bio = document.querySelector("#bio");
        if (bio) {
            const bioOpacity = 0.2 + (1 - 0.2) / (bio.offsetHeight + moreText.offsetHeight / 2) * winScroll;
            setBioOpacity(bioOpacity);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setCardTextOpacity(1);
        setMoreTextOpacity(0.2);
        setBioOpacity(0.2);
        window.addEventListener("scroll", listenToScroll);
        return ()=>window.removeEventListener("scroll", listenToScroll);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
        maxW: "full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                variant: "customCard",
                maxW: {
                    md: "container.md",
                    base: "container.sm"
                },
                padding: 10,
                marginTop: 50,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_animated_text_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontSize: {
                            md: "22px",
                            sm: "18px",
                            base: "14px"
                        },
                        opacity: cardTextOpacity,
                        overflow: "hidden",
                        transition: "max-height 0.2s ease-in, opacity 0.2s ease-in",
                        textAlign: "justify",
                        children: "Hey there, I'm Gaetano - your friendly neighborhood developer! I love tackling challenges with an open mind and delivering solid results. Let's team up, write some killer code, and make a dent in the software universe!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                id: "moreText",
                maxW: "container.md",
                marginTop: 20,
                gap: 10,
                opacity: moreTextOpacity,
                transition: "opacity 0.05s ease-in",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                        src: "images/ProfileImage.jpg",
                        alt: "Gaetano Celentano",
                        float: "right",
                        margin: 2.5,
                        marginInline: 10,
                        borderRadius: "50%",
                        boxSize: {
                            md: "200px",
                            base: "100px"
                        },
                        border: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("1.5px solid #1a1a1a", "1.5px solid #d1d9e6")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontSize: {
                            md: "22px",
                            sm: "18px",
                            base: "14px"
                        },
                        textAlign: "justify",
                        children: [
                            "Going a bit further...",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " I'd say I see myself as a dedicated and adaptable person, always aiming for reliable and focused outcomes. Every task I take on is a chance to learn, and I approach it with humility. I thrive on embracing challenges with an open mind, which makes adapting to different situations a strong suit of mine. ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Communication and collaboration are key to my playbook - I know teamwork is the magic ingredient for success. In the realm of software development, I've got some big goals: honing my technical skills, riding the wave of industry trends, and dreaming up innovative solutions. I'm all about that collaborative team environment, where we can grow together while making a real impact in the software world."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                id: "bio",
                maxW: "container.md",
                marginTop: 20,
                gap: 10,
                opacity: bioOpacity,
                transition: "opacity 0.05s ease-in",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                        size: "lg",
                        variant: "title",
                        maxW: "full",
                        textAlign: "left",
                        marginBlock: 5,
                        children: "From Then to Now"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        dir: "row",
                        gap: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                variant: "bioYear",
                                children: "1999"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                children: " Born in Naples - IT"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        dir: "row",
                        gap: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                variant: "bioYear",
                                children: "2018"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                children: "High school graduate as a computer technician"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        dir: "row",
                        gap: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                variant: "bioYear",
                                children: "2023"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                children: "Bachelor degree as IT Engineer"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        dir: "row",
                        gap: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                variant: "bioYear",
                                children: "2022-23"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                children: "Student @ Apple Developer Academy<Unina Federico II>"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                opacity: bioOpacity,
                transition: "opacity 0.05s ease-in",
                variant: "customCard",
                marginTop: 20,
                width: {
                    md: "xl",
                    base: "md"
                },
                alignItems: "flex-start",
                justifyContent: "flex-start",
                pt: 7,
                pl: 14,
                pr: 14,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        dir: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        width: "full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                size: "lg",
                                variant: "title",
                                pb: 7,
                                children: "Contacts"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                as: react_icons_ti__WEBPACK_IMPORTED_MODULE_4__.TiContacts,
                                fontSize: {
                                    md: 50,
                                    base: 25
                                },
                                color: "#ff6e00"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                        variant: "contactLink",
                        href: "mailto:gaetano99celentano@gmail.com",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                as: react_icons_tfi__WEBPACK_IMPORTED_MODULE_5__.TfiEmail,
                                fontSize: {
                                    md: 25,
                                    base: 12.5
                                }
                            }),
                            "Email"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                        variant: "contactLink",
                        href: "https://www.linkedin.com/in/gaetano-celentano/",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaLinkedin,
                                fontSize: {
                                    md: 25,
                                    base: 12.5
                                }
                            }),
                            "LinkedIn"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                        variant: "contactLink",
                        href: "https://github.com/g-celentano",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaGithub,
                                fontSize: {
                                    md: 25,
                                    base: 12.5
                                }
                            }),
                            "GitHub"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;