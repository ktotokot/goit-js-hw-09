import"./assets/reset-df635d97.js";function r(e,a){const s=JSON.stringify(a);localStorage.setItem(e,s)}const l={email:"",message:""},t=document.querySelector(".feedback-form"),m="feedback-form-state";t.addEventListener("submit",e=>{e.preventDefault();let a=t.elements.email.value,s=t.elements.message.value;a=a.trim(),s=s.trim(),a===""||s===""?alert("Please fill all fields"):(console.log(l),localStorage.removeItem(m),l.email="",l.message="",t.reset())});t.addEventListener("input",e=>{let a=t.elements.email.value,s=t.elements.message.value;a=a.trim(),s=s.trim(),l.email=a,l.message=s,r(m,l)});const o=localStorage.getItem(m);if(o!==null){const e=JSON.parse(o);t.elements.email.value=e.email,t.elements.message.value=e.message,l.email=e.email,l.message=e.message}
//# sourceMappingURL=commonHelpers2.js.map
