"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.undefined = mod.exports;
  }
})(void 0, function () {
  "use strict";

  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  /*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
  var initialTravellers = [{
    id: 1,
    name: 'Jack',
    phone: '88885555',
    email: 'jack@example.com',
    seatNumber: '01A',
    bookingTime: 'Sun Sep 28 2024'
  }, {
    id: 2,
    name: 'Rose',
    phone: '88884444',
    email: 'rose@example.com',
    seatNumber: '02B',
    bookingTime: 'Sun Sep 29 2024'
  }, {
    id: 3,
    name: 'John',
    phone: '88883333',
    email: 'john@example.com',
    seatNumber: '04A',
    bookingTime: 'Sun Sep 29 2024'
  }, {
    id: 4,
    name: 'Doe',
    phone: '88882222',
    email: 'doe@example.com',
    seatNumber: '05B',
    bookingTime: 'Sun Sep 29 1900'
  }];
  var idCounter = initialTravellers.length + 1;
  function TravellerRow(props) {
    {/*Q3. Placeholder to initialize local variable based on traveller prop.*/}
    var traveller = props.traveller,
      deleteTraveller = props.deleteTraveller;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, traveller.id), /*#__PURE__*/React.createElement("td", null, traveller.name), /*#__PURE__*/React.createElement("td", null, traveller.phone), /*#__PURE__*/React.createElement("td", null, traveller.email), /*#__PURE__*/React.createElement("td", null, traveller.seatNumber), /*#__PURE__*/React.createElement("td", null, traveller.bookingTime), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return deleteTraveller(traveller);
      }
    }, "Delete")));
  }
  function Display(props) {
    var travellers = props.travellers,
      deleteTraveller = props.deleteTraveller;
    /*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/

    var travellerRows = travellers.map(function (traveller) {
      return /*#__PURE__*/React.createElement(TravellerRow, {
        traveller: traveller,
        deleteTraveller: deleteTraveller,
        key: traveller.id
      });
    });
    return /*#__PURE__*/React.createElement("table", {
      className: "bordered-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Phone"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Seat Number"), /*#__PURE__*/React.createElement("th", null, "Booking Time"), /*#__PURE__*/React.createElement("th", null, "Action"))), /*#__PURE__*/React.createElement("tbody", null, travellerRows));
  }
  var Add = function (_React$Component) {
    function Add(props) {
      var _this;
      _classCallCheck(this, Add);
      _this = _callSuper(this, Add, [props]);
      _this.handleSubmit = _this.handleSubmit.bind(_this);
      return _this;
    }
    _inherits(Add, _React$Component);
    return _createClass(Add, [{
      key: "handleSubmit",
      value: function handleSubmit(e) {
        e.preventDefault();
        /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
        var form = document.forms.addTraveller;
        var seatPattern = /^[0][0-5][A-B]$/;
        if (!seatPattern.test(form.travellerseatnumber.value)) {
          alert('Invalid Seat Number');
          return;
        }
        var isSeatTaken = this.props.travellers.some(function (traveller) {
          return traveller.seatNumber === form.travellerseatnumber.value;
        });
        if (isSeatTaken) {
          alert('Seat is already taken');
          return;
        }
        this.props.bookTraveller({
          name: form.travellername.value,
          phone: form.travellerphone.value,
          email: form.travelleremail.value,
          seatNumber: form.travellerseatnumber.value,
          bookingTime: new Date().toDateString(),
          id: idCounter
        });
        form.travellername.value = '';
        form.travellerphone.value = '';
        form.travelleremail.value = '';
        form.travellerseatnumber.value = '';
        idCounter++;
        alert('Add Success!');
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("form", {
          name: "addTraveller",
          onSubmit: this.handleSubmit,
          className: "form"
        }, /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "travellername",
          placeholder: "Name",
          required: true
        }), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "travellerphone",
          placeholder: "Phone",
          required: true
        }), /*#__PURE__*/React.createElement("input", {
          type: "email",
          name: "travelleremail",
          placeholder: "Email",
          required: true
        }), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "travellerseatnumber",
          placeholder: "Seat Number",
          required: true
        }), /*#__PURE__*/React.createElement("button", null, "Add"));
      }
    }]);
  }(React.Component);
  var Delete = function (_React$Component2) {
    function Delete(props) {
      var _this2;
      _classCallCheck(this, Delete);
      _this2 = _callSuper(this, Delete, [props]);
      _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
      return _this2;
    }
    _inherits(Delete, _React$Component2);
    return _createClass(Delete, [{
      key: "handleSubmit",
      value: function handleSubmit(e) {
        e.preventDefault();
        /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
        var form = document.forms.deleteTraveller;
        var id = parseInt(form.travellerid.value, 10);
        if (!this.props.travellers.some(function (traveller) {
          return traveller.id === id;
        })) {
          alert('Invalid ID');
          return;
        }
        this.props.deleteTraveller({
          id: id
        });
        form.travellerid.value = '';
        alert('Delete Success!');
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("form", {
          name: "deleteTraveller",
          onSubmit: this.handleSubmit,
          className: "form"
        }, /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "travellerid",
          placeholder: "ID",
          required: true
        }), /*#__PURE__*/React.createElement("button", null, "Delete"));
      }
    }]);
  }(React.Component);
  var DisplayFreeSeats = function (_React$Component3) {
    function DisplayFreeSeats(props) {
      _classCallCheck(this, DisplayFreeSeats);
      return _callSuper(this, DisplayFreeSeats, [props]);
    }
    _inherits(DisplayFreeSeats, _React$Component3);
    return _createClass(DisplayFreeSeats, [{
      key: "render",
      value: function render() {
        var travellers = this.props.travellers;
        var reservedSeats = travellers.map(function (traveller) {
          return traveller.seatNumber;
        });
        var seats = [];
        var rows = 5;
        var cols = ['A', 'B'];
        var freeSeats = rows * cols.length - reservedSeats.length;
        seats.push(/*#__PURE__*/React.createElement("div", {
          key: "header",
          className: "table-header"
        }, /*#__PURE__*/React.createElement("span", null), " ", cols.map(function (col) {
          return /*#__PURE__*/React.createElement("span", {
            key: col,
            className: "col"
          }, col);
        })));
        for (var i = 1; i <= rows; i++) {
          var rowNumber = i.toString().padStart(2, '0');
          seats.push(/*#__PURE__*/React.createElement("span", {
            className: "table-row",
            style: {
              width: '20px'
            }
          }, rowNumber, " "));
          var _iterator = _createForOfIteratorHelper(cols),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var col = _step.value;
              var seatNumber = "".concat(rowNumber).concat(col);
              var isReserved = reservedSeats.includes(seatNumber);
              seats.push(/*#__PURE__*/React.createElement("button", {
                key: seatNumber,
                className: "seat ".concat(isReserved ? 'reservedSeat' : 'freeSeat')
              }));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          seats.push(/*#__PURE__*/React.createElement("br", null));
        }
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
          className: "free-seats-header"
        }, "Free Seats Left: ", freeSeats), /*#__PURE__*/React.createElement("div", {
          className: "seatingChart"
        }, seats));
      }
    }]);
  }(React.Component);
  var Homepage = function (_React$Component4) {
    function Homepage(props) {
      var _this3;
      _classCallCheck(this, Homepage);
      _this3 = _callSuper(this, Homepage, [props]);
      _this3.state = {
        travellers: [],
        isLoading: true
      };
      return _this3;
    }
    _inherits(Homepage, _React$Component4);
    return _createClass(Homepage, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this4 = this;
        setTimeout(function () {
          _this4.setState({
            travellers: _this4.props.travellers,
            isLoading: false
          });
        }, 100);
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.isLoading) {
          return /*#__PURE__*/React.createElement("div", null, "Loading...");
        }
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DisplayFreeSeats, {
          travellers: this.state.travellers
        }));
      }
    }]);
  }(React.Component);
  var TicketToRide = function (_React$Component5) {
    function TicketToRide() {
      var _this5;
      _classCallCheck(this, TicketToRide);
      _this5 = _callSuper(this, TicketToRide);
      _this5.state = {
        travellers: [],
        selector: 1
      };
      _this5.bookTraveller = _this5.bookTraveller.bind(_this5);
      _this5.deleteTraveller = _this5.deleteTraveller.bind(_this5);
      return _this5;
    }
    _inherits(TicketToRide, _React$Component5);
    return _createClass(TicketToRide, [{
      key: "setSelector",
      value: function setSelector(value) {
        /*Q2. Function to set the value of component selector variable based on user's button click.*/

        this.setState({
          selector: value
        });
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.loadData();
      }
    }, {
      key: "loadData",
      value: function loadData() {
        var _this6 = this;
        setTimeout(function () {
          _this6.setState({
            travellers: initialTravellers
          });
        }, 50);
      }
    }, {
      key: "bookTraveller",
      value: function bookTraveller(passenger) {
        /*Q4. Write code to add a passenger to the traveller state variable.*/
        this.setState({
          travellers: this.state.travellers.concat(passenger)
        });
      }
    }, {
      key: "deleteTraveller",
      value: function deleteTraveller(passenger) {
        /*Q5. Write code to delete a passenger from the traveller state variable.*/
        this.setState({
          travellers: this.state.travellers.filter(function (traveller) {
            return traveller.id !== passenger.id;
          })
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this7 = this;
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
          className: "title"
        }, "Ticket To Ride"), /*#__PURE__*/React.createElement("div", {
          className: "navbar"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return _this7.setSelector(1);
          }
        }, "Homepage"), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return _this7.setSelector(2);
          }
        }, "Display"), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return _this7.setSelector(3);
          }
        }, "Add"), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return _this7.setSelector(4);
          }
        }, "Delete")), /*#__PURE__*/React.createElement("div", {
          className: "mainContainer"
        }, this.state.selector === 1 && /*#__PURE__*/React.createElement(Homepage, {
          travellers: this.state.travellers
        }), this.state.selector === 2 && /*#__PURE__*/React.createElement(Display, {
          travellers: this.state.travellers,
          deleteTraveller: this.deleteTraveller
        }), this.state.selector === 3 && /*#__PURE__*/React.createElement(Add, {
          bookTraveller: this.bookTraveller,
          travellers: this.state.travellers
        }), this.state.selector === 4 && /*#__PURE__*/React.createElement(Delete, {
          deleteTraveller: this.deleteTraveller,
          travellers: this.state.travellers
        })));
      }
    }]);
  }(React.Component);
  var element = /*#__PURE__*/React.createElement(TicketToRide, null);
  ReactDOM.render(element, document.getElementById('contents'));
});