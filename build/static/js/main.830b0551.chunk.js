(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/logo-vagas.9af27c13.png"},26:function(e,a,t){e.exports=t.p+"static/media/developer.92ee1408.png"},27:function(e,a,t){e.exports=t.p+"static/media/tester.3611cdb3.png"},28:function(e,a,t){e.exports=t.p+"static/media/designer.33abf3e9.png"},29:function(e,a,t){e.exports=t.p+"static/media/background.71ce45f3.jpg"},31:function(e,a,t){e.exports=t(68)},36:function(e,a,t){},38:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(25),l=t.n(r),c=t(70),s=(t(36),t(7)),i=t(8),d=t(10),m=t(9),u=t(11),b=(t(38),t(17)),p=t.n(b),g=t(69),f=function(e){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light  bg-dark"},o.a.createElement("div",null,o.a.createElement(g.a,{className:"navbar-brand",to:"/dashboard"},o.a.createElement("img",{src:p.a,style:{width:"100px"}}))),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},o.a.createElement("div",{className:"navbar-nav"},o.a.createElement(g.a,{className:"nav-item nav-link active text-white",to:"/vagas"},"Vagas"),o.a.createElement(g.a,{className:"nav-item nav-link text-white",to:"/sobre"},"Sobre"),o.a.createElement("a",{className:"nav-item nav-link text-white"},e.userName),o.a.createElement("a",{className:"nav-item nav-link text-white",onClick:function(){return e.logout()}},o.a.createElement("i",{className:"fas fa-sign-out-alt"})," Logout"))))},v=t(26),h=t.n(v),E=t(27),w=t.n(E),N=t(28),j=t.n(N),k=t(29),y=t.n(k),J=function(e){var a=null;switch(e.area){case"dev":a=h.a;break;case"test":a=w.a;break;case"design":a=j.a;break;default:a=y.a}var t=o.a.createElement("div",null);return navigator.onLine&&(t=o.a.createElement("div",null,o.a.createElement("button",{onClick:e.editHandler,"data-toggle":"collapse","data-target":"#"+e.panelId,className:"btn btn-warning mr-1"},o.a.createElement("i",{className:"far fa-edit"})),o.a.createElement("button",{onClick:e.removeHandler,className:"btn btn-danger"},o.a.createElement("i",{className:"far fa-trash-alt"})))),o.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4 mb-3"},o.a.createElement("div",{className:"card"},o.a.createElement("img",{className:"card-img-top",src:a,alt:"Card cap"}),o.a.createElement("div",{className:"card-body"},o.a.createElement(g.a,{to:"/vagas/"+e.id},o.a.createElement("h5",{className:"card-title"},e.name)),o.a.createElement("div",null,o.a.createElement("b",null,"Descri\xe7\xe3o:"),o.a.createElement("p",null,e.description),o.a.createElement("b",null,"Sal\xe1rio base:"),o.a.createElement("p",null,"R$  ",e.salary)),t)))},S=t(12),C=t(6),I=t.n(C),O=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).objModel=Object.freeze({name:"",description:"",skills:"",differentials:"",salary:"",area:"",isPcd:!1}),t.state={newJob:Object(S.a)({},t.objModel),idEditing:!1},t.postJobHandler=function(e){var a="";t.state.newJob.id?I.a.put("/jobs/"+t.state.newJob.id,t.state.newJob).then(function(e){t.props.editedHandler(t.state.newJob.id,t.state.newJob),t.setState({newJob:Object(S.a)({},t.objModel)})}).catch(function(e){alert("Deu erro no servidor!"),console.error(e)}):I.a.post("/jobs",t.state.newJob).then(function(e){a=e.data,t.props.addItemList(Object(S.a)({id:a},t.state.newJob)),t.setState({newJob:Object(S.a)({},t.objModel)})}).catch(function(e){alert("Deu erro no servidor!"),console.error(e)}),e.preventDefault()},t.onValueChangeHandler=function(e,a){var n=Object(S.a)({},t.state.newJob);n[e]=a,t.setState({newJob:n})},t.clearFormHandler=function(){t.setState({newJob:Object(S.a)({},t.objModel),isEditing:!1}),t.props.clearSelectedId()},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(){var e=this;console.log("did update - id: "+this.props.editJobId),this.props.editJobId&&!this.state.isEditing&&I.a.get("/jobs/"+this.props.editJobId).then(function(a){e.setState({newJob:a.data,isEditing:!0})}).catch(function(e){alert("Deu erro no servidor!"),console.error(e)})}},{key:"shouldComponentUpdate",value:function(e,a){var t=this,n=!1;return this.props.editJobId!==e.editJobId&&(n=!0),Object.keys(a.newJob).forEach(function(e){t.state.newJob[e]!==a.newJob[e]&&(n=!0)}),n}},{key:"render",value:function(){var e=this;return o.a.createElement("form",{className:"row mb-0",onSubmit:this.postJobHandler},o.a.createElement("div",{className:"form-group col-12"},o.a.createElement("label",{for:"nome"},"Nome *"),o.a.createElement("input",{type:"text",className:"form-control",id:"nome",value:this.state.newJob.name,required:!0,onChange:function(a){return e.onValueChangeHandler("name",a.target.value)}})),o.a.createElement("div",{className:"form-group col-12"},o.a.createElement("label",{for:"descricao"},"Descri\xe7\xe3o *"),o.a.createElement("textarea",{className:"form-control",id:"descricao",rows:"3",required:!0,value:this.state.newJob.description,name:"description",onChange:function(a){return e.onValueChangeHandler(a.target.name,a.target.value)}})),o.a.createElement("div",{className:"form-group col-sm-12 col-md-6"},o.a.createElement("label",{for:"habilidades"},"Habilidades necess\xe1rias"),o.a.createElement("textarea",{className:"form-control",id:"habilidades",rows:"3",value:this.state.newJob.skills,onChange:function(a){return e.onValueChangeHandler("skills",a.target.value)}})),o.a.createElement("div",{className:"form-group col-sm-12 col-md-6"},o.a.createElement("label",{for:"diferenciais"},"Diferenciais"),o.a.createElement("textarea",{className:"form-control",id:"diferenciais",rows:"3",value:this.state.newJob.differentials,onChange:function(a){return e.onValueChangeHandler("differentials",a.target.value)}})),o.a.createElement("div",{className:"form-group col-sm-12 col-md-6"},o.a.createElement("label",{for:"salario"},"Sal\xe1rio Base *"),o.a.createElement("input",{type:"text",className:"form-control",id:"salario",value:this.state.newJob.salary,required:!0,onChange:function(a){return e.onValueChangeHandler("salary",a.target.value)}})),o.a.createElement("div",{className:"form-group col-sm-12 col-md-6"},o.a.createElement("label",{for:"area"},"\xc1rea *"),o.a.createElement("select",{className:"form-control",id:"area",value:this.state.newJob.area,required:!0,onChange:function(a){return e.onValueChangeHandler("area",a.target.value)}},o.a.createElement("option",{value:""},"Selecione..."),o.a.createElement("option",{value:"dev"},"Desenvolvimento"),o.a.createElement("option",{value:"design"},"UX/UI"),o.a.createElement("option",{value:"test"},"Teste"))),o.a.createElement("div",{className:"form-group form-check col-sm-12 col-md-6 ml-3"},o.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"isPcd",checked:this.state.newJob.isPcd,onChange:function(a){return e.onValueChangeHandler("isPcd",a.target.checked)}}),o.a.createElement("label",{className:"form-check-label",for:"isPcd"},"Vaga para PCD")),o.a.createElement("div",{className:"form-group col-12 text-right mb-0"},o.a.createElement("button",{onClick:this.clearFormHandler,className:"btn btn-light mr-1","data-toggle":"collapse","data-target":"#"+this.props.panelId},"Cancelar"),o.a.createElement("button",{type:"submit",className:"btn btn-success","data-toggle":"collapse","data-target":"#"+this.props.panelId},"Salvar vaga")))}}]),a}(n.Component),x=function(e){return o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("a",{className:"btn "+e.btnClass,"data-toggle":"collapse",href:"#"+e.collapseId,role:"button"},e.buttonText),o.a.createElement("div",{className:"collapse mb-3",id:e.collapseId},o.a.createElement("div",{className:"card card-body mb-3"},e.children))))},H=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={jobs:[],hasError:!1,selectedId:""},t.jobCreateHandler=function(e){var a=t.state.jobs;a.push(e),t.setState({jobs:a})},t.jobEditHandler=function(e){console.log(e),t.setState({selectedId:e})},t.jobEditedHandler=function(e,a){var n=t.state.jobs.findIndex(function(a){return a.id==e}),o=t.state.jobs;o[n]=a,t.setState({jobs:o})},t.jobRemoveHandler=function(e,a){window.confirm('Deseja realmente remover a vaga "'.concat(a,'"?'))&&I.a.delete("/jobs/".concat(e),window.getAxiosConfig()).then(function(a){var n=t.state.jobs.findIndex(function(a){return a.id===e}),o=t.state.jobs;o.splice(n,1),t.setState({jobs:o}),window.alert("Removido com sucesso!")}).catch(function(e){console.error(e)})},t.clearSelectedId=function(){t.setState({selectedId:""})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentWillUnmount",value:function(){console.log("WILL UNMOUNT")}},{key:"componentDidMount",value:function(){var e=this;navigator.onLine?I.a.get("/jobs",window.getAxiosConfig()).then(function(a){e.setState({jobs:a.data}),localStorage.setItem("jobs",JSON.stringify(a.data))}).catch(function(e){console.error(e)}):this.setState({jobs:JSON.parse(localStorage.getItem("jobs"))})}},{key:"render",value:function(){var e=this,a=this.state.jobs.map(function(a){return o.a.createElement(J,{key:a.id,id:a.id,name:a.name,description:a.description,salary:a.salary,area:a.area,panelId:"newJobForm",removeHandler:function(){return e.jobRemoveHandler(a.id,a.name)},editHandler:function(){return e.jobEditHandler(a.id)}})});return o.a.createElement("div",null,o.a.createElement(x,{buttonText:"CRIAR VAGA",btnClass:"btn-secondary",collapseId:"newJobForm"},o.a.createElement(O,{addItemList:this.jobCreateHandler,editJobId:this.state.selectedId,panelId:"newJobForm",clearSelectedId:this.clearSelectedId,editedHandler:this.jobEditedHandler})),o.a.createElement("div",{className:"row"},a))}}]),a}(o.a.Component),A=function(){return o.a.createElement("p",null,"P\xe1gina de sobre!")},U=function(){return o.a.createElement("div",{className:"text-center mt-5"},o.a.createElement("h3",null,"P\xe1gina n\xe3o encontrada"),o.a.createElement("h1",null," \ud83d\ude31 "))},D=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={email:"",password:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container mt-5"},o.a.createElement("div",{className:"card",style:{maxWidth:"35rem",margin:"0 auto"}},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},o.a.createElement("img",{style:{width:"100%"},src:t(17)})),o.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Insira seu email e senha para entrar no sistema"),o.a.createElement("div",{className:"form-group col-12"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{onChange:function(a){e.setState({email:a.target.value})},type:"email",className:"form-control",id:"email"})),o.a.createElement("div",{className:"form-group col-sm-12"},o.a.createElement("label",{htmlFor:"password"},"Senha"),o.a.createElement("input",{onChange:function(a){e.setState({password:a.target.value})},type:"password",className:"form-control",id:"password"})),o.a.createElement("div",{className:"form-group col-12 text-right mb-0"},o.a.createElement("button",{type:"submit",className:"btn btn-success",onClick:function(){e.props.login(e.state.email,e.state.password)}},"Entrar")))))}}]),a}(o.a.Component),L=t(72),V=t(71),M=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={loggedUser:JSON.parse(window.localStorage.getItem("user"))||null},t.loginHandler=function(e,a){I.a.post("/login",{email:e,password:a}).then(function(e){window.localStorage.setItem("user",JSON.stringify(e.data.user)),window.localStorage.setItem("token",JSON.stringify(e.data.token)),t.setState({loggedUser:e.data.user})}).catch(function(e){alert("Login inv\xe1lido"),console.error(e)})},t.logoutHandler=function(){window.localStorage.clear(),t.setState({loggedUser:null})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.state.loggedUser?o.a.createElement("div",{className:"App"},o.a.createElement(f,{userName:this.state.loggedUser.name,logout:this.logoutHandler}),o.a.createElement("div",{className:"container pt-3"},o.a.createElement(L.a,null,o.a.createElement(V.a,{path:"/",component:H}),o.a.createElement(V.a,{path:"/dashboard",component:H}),o.a.createElement(V.a,{path:"/vagas",component:H}),o.a.createElement(V.a,{path:"/sobre",component:A}),o.a.createElement(V.a,{path:"*",component:U})))):o.a.createElement(D,{login:this.loginHandler})}}]),a}(n.Component),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(62),t(64),t(66);I.a.defaults.baseURL="https://afternoon-ocean-29603.herokuapp.com",window.getAxiosConfig=function(){return{headers:{Authorization:"Bearer "+JSON.parse(window.localStorage.getItem("token"))}}},l.a.render(o.a.createElement(c.a,null,o.a.createElement(M,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("","/service-worker.js");P?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):R(a,e)})}}()}},[[31,2,1]]]);
//# sourceMappingURL=main.830b0551.chunk.js.map