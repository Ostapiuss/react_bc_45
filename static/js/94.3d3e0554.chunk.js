"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[94],{4505:function(e,a,t){t.r(a),t.d(a,{default:function(){return K}});var i=t(3433),s=t(9439),n=t(2791),r=t(9434),c=t(1817),l=t(4249);var o=t.p+"static/media/universityIcon.80fb8fbb7dd1df4c6c14fdbc50d71121.svg";var m=t.p+"static/media/edit.68042d9a7d6d4a9fc2f256e4735285f5.svg",d=t(5534),u="Card_universityContainer__e4PCP",h="Card_universityCard__h8i07",p="Card_universityIcon__qkkdU",f="Card_universityBtnContainer__U6Nzd",v="Card_universityBtn__D-OWz",x="Card_universityTitle__Q9Qvk",j="Card_universityText__XmbXZ",_=t(184);function N(e){var a=e.universityName;return(0,_.jsx)(l.X,{className:h,children:(0,_.jsxs)("div",{className:u,children:[(0,_.jsx)("img",{className:p,src:o,alt:"University img"}),(0,_.jsx)("p",{className:j,children:"\u0423\u043d\u0456\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0438"}),(0,_.jsx)("h3",{className:x,children:a}),(0,_.jsxs)("div",{className:f,children:[(0,_.jsx)("button",{className:v,children:(0,_.jsx)("img",{src:m,alt:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f"})}),(0,_.jsx)("button",{className:v,children:(0,_.jsx)("img",{src:d.Z,alt:"\u0412\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f"})})]})]})})}var y=t.p+"static/media/phone.51b5ae291dd8c16f054c5079afe0313c.svg";var b=t.p+"static/media/message-icon.f1340bed32c208dfd82a9dc2e6402c8a.svg";var g=t.p+"static/media/location-icon.9efeb93c953dc5d5cae095bee76ea621.svg",C="TutorList_tutorList__YuCPY",k="TutorList_tutorItem__DqyuB",T="TutorList_tutorClm__i+Yr2",Z="TutorList_tutorIcon__N6xUZ";function S(e){var a=e.tutors;return(0,_.jsx)("div",{className:C,children:a.map((function(e){var a=e.firstName,t=e.lastName,i=e.patronymic,s=e.phone,n=e.email,r=e.city,c=e.options;return(0,_.jsx)(z,{firstName:a,lastName:t,patronymic:i,phone:s,email:n,city:r,options:c},s)}))})}function z(e){var a=e.firstName,t=e.lastName,i=e.patronymic,s=e.phone,n=e.email,r=e.city,c=e.options;return(0,_.jsxs)(l.X,{className:k,children:[(0,_.jsxs)("div",{className:T,children:[(0,_.jsx)("span",{children:a}),(0,_.jsx)("span",{children:t}),(0,_.jsx)("span",{children:i})]}),(0,_.jsxs)("div",{className:T,children:[(0,_.jsxs)("span",{children:[(0,_.jsx)("img",{className:Z,src:y,alt:"Phone"}),s]}),(0,_.jsxs)("span",{children:[(0,_.jsx)("img",{className:Z,src:b,alt:"Email"}),n]}),(0,_.jsxs)("span",{children:[(0,_.jsx)("img",{className:Z,src:g,alt:"Location"}),r]})]}),(0,_.jsx)("div",{className:T,children:(0,_.jsx)("span",{children:c})})]})}var I=t(7223),B=t(8106),D=t(4942),F=t(1413),L="TeacherForm_formWrapper__Dxp+L",X="TeacherForm_form__znAoB",w="TeacherForm_formTitle__wBFvk",q="TeacherForm_formInput__odT5v",A="TeacherForm_tutorBtn__kfkA6",M=[{placeholder:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",name:"lastName"},{placeholder:"\u0406\u043c'\u044f",name:"firstName"},{placeholder:"\u041f\u043e-\u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456",name:"patronymic"},{placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",name:"phone"},{placeholder:"Email",name:"email"},{placeholder:"\u041c\u0456\u0441\u0442\u043e",name:"city"}],P={firstName:"",lastName:"",patronymic:"",phone:"",email:"",city:""};function U(e){var a=e.addTutor,t=(0,n.useState)(P),i=(0,s.Z)(t,2),r=i[0],c=i[1];function o(e){var a=e.target,t=a.name,i=a.value;c((0,F.Z)((0,F.Z)({},r),{},(0,D.Z)({},t,i)))}var m,d=(m=r,Object.values(m).every((function(e){return e.length>1})));return(0,_.jsxs)(l.X,{className:L,children:[(0,_.jsx)("h3",{className:w,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432\u0438\u043a\u043b\u0430\u0434\u0430\u0447\u0430"}),(0,_.jsxs)("form",{className:X,onSubmit:function(e){e.preventDefault(),a(r),c(P)},children:[M.map((function(e){var a=e.placeholder,t=e.name;return(0,_.jsx)("label",{children:(0,_.jsx)("input",{required:!0,placeholder:a,name:t,className:q,onChange:o,value:r[t]})},t)})),(0,_.jsx)(I.z,{type:"submit",disabled:!d,className:A,title:"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u0438"})]})]})}var $=t(3638),E=JSON.parse('{"u2":"MIT","rM":[{"firstName":"\u041c\u0430\u0440\u0438\u044f","lastName":"\u0420\u0443\u0434\u0435\u043d\u043a\u043e","patronymic":"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u043d\u0430","phone":"+38(097) 448 73 11","email":"rudenko.mail@gmail.com","city":"\u041f\u043e\u043b\u0442\u0430\u0432\u0430","options":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u043f\u043f"},{"firstName":"\u0415\u043b\u0435\u043d\u0430","lastName":"\u0418\u0432\u0430\u043d\u043e\u0432\u0430","patronymic":"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u043d\u0430","phone":"+38(093) 443 43 51","email":"ivanova.mail@gmail.com","city":"\u0411\u0435\u0440\u043b\u0438\u043d","options":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u043f\u043f, \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u0435\u0439 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0435\u0439"}],"cA":["\u041a\u0438\u0435\u0432","\u041b\u043e\u043d\u0434\u043e\u043d","\u0411\u0435\u0440\u043b\u0438\u043d"]}');var O=t.p+"static/media/cat.7cafd0c49822c69d4bfc86b6ab3e26aa.svg";var Y=t.p+"static/media/city-marker.d519331d81ed40935facdf00588d0dc0.svg";var Q=t.p+"static/media/robot.03e42768dadfb523e8a906cc791efa65.svg",W=function(e){var a=e.title,t=e.placeholder,i=e.buttonName,r=e.handleSubmit,c=(0,n.useState)(""),o=(0,s.Z)(c,2),m=o[0],d=o[1];var u=m.length>1;return(0,_.jsxs)(l.X,{className:L,children:[(0,_.jsx)("h3",{className:w,children:a}),(0,_.jsxs)("form",{className:X,onSubmit:function(e){e.preventDefault(),r(m),d("")},children:[(0,_.jsx)("label",{children:(0,_.jsx)("input",{required:!0,placeholder:t,name:t,className:q,onChange:function(e){var a=e.target.value;d(a)},value:m})}),(0,_.jsx)(I.z,{type:"submit",disabled:!u,className:A,title:i})]})]})},J="teacher",G="city",H="faculty";var K=function(){var e=(0,n.useState)([]),a=(0,s.Z)(e,2),t=a[0],o=a[1],m=(0,n.useState)(E.rM),d=(0,s.Z)(m,2),u=d[0],h=d[1],p=(0,n.useState)(E.cA.map((function(e){return{name:e}}))),f=(0,s.Z)(p,2),v=f[0],x=f[1],j=(0,r.I0)(),y=(0,r.v9)((function(e){return e.faculty.department})),b=function(e){var a=t.find((function(a){return a===e}));if(a||o((function(a){return[].concat((0,i.Z)(a),[e])})),a){var s=t.filter((function(a){return a!==e}));o(s)}},g=function(e){return t.includes(e)},C=g(J),k=g(G),T=g(H);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(c.$,{title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0435",position:"right",children:(0,_.jsxs)("div",{className:"university-wrapper",children:[(0,_.jsx)(N,{universityName:E.u2}),(0,_.jsx)(l.X,{className:"university-card",children:(0,_.jsx)("p",{children:"\u041e\u043f\u044b\u0442, \u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0430\u0442 \u0437\u043d\u0430\u043d\u0438\u0439 \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043e\u0448\u0438\u0431\u043e\u043a \u043f\u0440\u0438 \u043f\u0440\u0438\u0435\u043c\u0435 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443. \u041c\u044b \u0437\u043d\u0430\u0435\u043c, \u0447\u0442\u043e \u0445\u043e\u0442\u044f\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0438 \u0438\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439 \u0438 \u043c\u043e\u0436\u0435\u043c \u0432\u0430\u043c \u044d\u0442\u043e \u0434\u0430\u0442\u044c. \u0410 \u0435\u0449\u0435 \u043c\u044b \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u0443\u0435\u043c \u043d\u0430\u0448\u0438 \u043a\u0443\u0440\u0441\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044f \u0442\u0443\u0434\u0430 \u0447\u0442\u043e-\u0442\u043e \u043d\u043e\u0432\u043e\u0435. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0438\u0447\u043d\u043e \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441 \u0438\u0441\u0442\u043e\u0440\u0438\u044f\u043c\u0438 \u0443\u0441\u043f\u0435\u0445\u0430 \u043d\u0430\u0448\u0438\u0445 \u0432\u044b\u043f\u0443\u0441\u043a\u043d\u0438\u043a\u043e\u0432, \u0447\u0442\u043e\u0431\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438 \u043d\u0430\u0448\u0435\u0439 \u043c\u0435\u0442\u043e\u0434\u0438\u043a\u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f. \u0414\u0430, \u043c\u044b \u043d\u0430\u0447\u043d\u0435\u043c \u0441 \u0430\u0437\u043e\u0432 \u0438 \u0441\u0430\u043c\u043e\u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438. \u0417\u043d\u0430\u0435\u043c, \u0447\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043b\u044e\u0434\u0435\u0439 \u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0442 \u043a \u043d\u0430\u043c \u0441 \u043d\u0443\u043b\u0435\u0432\u044b\u043c\u0438 \u0437\u043d\u0430\u043d\u0438\u044f\u043c\u0438."})})]})}),(0,_.jsxs)(c.$,{icon:O,title:"\u0412\u0438\u043a\u043b\u0430\u0434\u0430\u0447\u0456",children:[(0,_.jsx)(S,{tutors:u}),C&&(0,_.jsx)(U,{addTutor:function(e){h([].concat((0,i.Z)(E.rM),[e]))}}),(0,_.jsx)(I.z,{title:C?"\u0417\u0430\u043a\u0440\u0438\u0442\u0438 \u0444\u043e\u0440\u043c\u0443":"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432\u0438\u043a\u043b\u0430\u0434\u0430\u0447\u0430",onClick:function(){b(J)}})]}),(0,_.jsxs)(c.$,{icon:Y,title:"\u041c\u0456\u0441\u0442\u0430",children:[(0,_.jsx)(B.D,{list:v}),k&&(0,_.jsx)(W,{handleSubmit:function(e){var a={name:e};x([].concat((0,i.Z)(v),[a]))},buttonName:"\u0414\u043e\u0434\u0430\u0442\u0438",title:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043c\u0456\u0441\u0442\u043e",placeholder:"\u041c\u0456\u0441\u0442\u043e"}),(0,_.jsx)(I.z,{title:k?"\u0417\u0430\u043a\u0440\u0438\u0442\u0438 \u0444\u043e\u0440\u043c\u0443":"\u0414\u043e\u0434\u0430\u0442\u0438 \u043c\u0456\u0441\u0442\u043e",onClick:function(){b(G)}})]}),(0,_.jsxs)(c.$,{icon:Q,title:"\u0424\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0438",children:[(0,_.jsx)(B.D,{list:y,onEditCard:function(e){j((0,$.B0)(e))}}),T&&(0,_.jsx)(W,{handleSubmit:function(e){var a={name:e};j((0,$.I5)(a))},buttonName:"\u0414\u043e\u0434\u0430\u0442\u0438",title:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442",placeholder:"\u0424\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442"}),(0,_.jsx)(I.z,{title:T?"\u0417\u0430\u043a\u0440\u0438\u0442\u0438 \u0444\u043e\u0440\u043c\u0443":"\u0414\u043e\u0434\u0430\u0442\u0438 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442",onClick:function(){b(H)}})]})]})}}}]);
//# sourceMappingURL=94.3d3e0554.chunk.js.map