(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),r=n(3),i=n(5),l=n(4),s=n(1),u=n.n(s),m=n(0);function d(){return(new Date).toUTCString().slice(-12,-4)}var h=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).clockTimerId=0,c.state={currentTime:d()},console.log("constructor"),c}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),this.clockTimerId=window.setInterval((function(){e.setState({currentTime:d()}),console.info(e.state.currentTime)}),1e3)}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate"),this.props.clockName!==e.clockName||this.state.currentTime!==t.currentTime}},{key:"componentDidUpdate",value:function(e){console.log("componentDidUpdate"),e.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount"),window.clearInterval(this.clockTimerId)}},{key:"render",value:function(){console.log("render");var e=this.state.currentTime,t=this.props.clockName;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:e})]})}}]),n}(u.a.Component);n(13);function k(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var p=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=0,e.handleContextMenu=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleClick=function(){e.setState({hasClock:!0})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({clockName:k()})}),3300),document.addEventListener("contextmenu",this.handleContextMenu),document.addEventListener("click",this.handleClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleContextMenu),document.removeEventListener("click",this.handleClick),window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),t&&Object(m.jsx)(h,{clockName:n})]})}}]),n}(u.a.Component);o.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e52eac46.chunk.js.map