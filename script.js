const observer = new IntersectionObserver((entries) => {
entries.forEach(e => {
if(e.isIntersecting) e.target.classList.add("active");
});
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.addEventListener("click", function(e){
let ripple = document.createElement("span");
ripple.className = "click-effect";
ripple.style.left = e.clientX + "px";
ripple.style.top = e.clientY + "px";
document.body.appendChild(ripple);
setTimeout(() => ripple.remove(), 450);
});

function toggleChat(){
let box = document.getElementById("chatBox");
if(box.style.display === "flex") box.style.display = "none";
else {
box.style.display = "flex";
box.style.flexDirection = "column";
}
}

function sendMsg(){
let input = document.getElementById("userInput");
let text = input.value.trim();
if(!text) return;
let chat = document.getElementById("chatBody");
chat.innerHTML += `<div class="user">${escapeHtml(text)}</div>`;
input.value = "";
chat.scrollTop = chat.scrollHeight;
setTimeout(() => {
let reply = getAIResponse(text);
chat.innerHTML += `<div class="bot">${reply}</div>`;
chat.scrollTop = chat.scrollHeight;
}, 300);
}

function getAIResponse(msg){
msg = msg.toLowerCase();
if(msg.includes("siapa") || msg.includes("nama")){
return "Saya AI assistant portfolio Faris, siap membantu.";
}
if(msg.includes("skill") || msg.includes("bisa apa")){
return "Faris menguasai HTML, CSS, JavaScript, Python, dan juga game development.";
}
if(msg.includes("project") || msg.includes("portfolio")){
return "Beberapa project: Modern Landing Page, AI Portfolio Assistant, Dashboard Analytics, dan game interaktif.";
}
if(msg.includes("lokasi") || msg.includes("dimana")){
return "Faris berlokasi di Jawa Barat, Bogor - Indonesia.";
}
if(msg.includes("halo") || msg.includes("hi") || msg.includes("hai")){
return "Halo juga 👋 Ada yang bisa saya bantu tentang Faris?";
}
if(msg.includes("terima kasih") || msg.includes("makasih")){
return "Sama-sama! Senang bisa membantu 😊";
}
return "Maaf, saya kurang paham. Coba tanya tentang: skill, project, lokasi, atau siapa Faris.";
}

function escapeHtml(str){
return str.replace(/[&<>]/g, function(m){
if(m === '&') return '&amp;';
if(m === '<') return '&lt;';
if(m === '>') return '&gt;';
return m;
});
}

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("hireBtn")?.addEventListener("click", () => {
alert("📩 Kamu bisa menghubungi Faris via +62 882-9787-7862 atau DM Instagram @starry.ris");
});