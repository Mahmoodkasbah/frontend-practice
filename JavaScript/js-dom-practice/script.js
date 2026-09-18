// ================= HEADER =================

let header = document.createElement("header");
header.className = "site-header";

let headerName = document.createElement("p");
headerName.className = "logo";
headerName.textContent = "Mahmood";

const nav = document.createElement("nav");
let navigationLinks = document.createElement("ul");
navigationLinks.className = "nav-links";

let li_1 = document.createElement("li");
let li_2 = document.createElement("li");
let li_3 = document.createElement("li");

let Link_1 = document.createElement("a");
let Link_2 = document.createElement("a");
let Link_3 = document.createElement("a");

Link_1.href = "https://www.instagram.com/mahmoodkasbah/";
Link_1.textContent = "Instagram";
Link_1.target = "_blank";
Link_1.rel = "noopener noreferrer";

Link_2.href = "https://web.whatsapp.com/";
Link_2.textContent = "Whatsapp";
Link_2.target = "_blank";
Link_2.rel = "noopener noreferrer";

Link_3.href = "https://www.youtube.com/";
Link_3.textContent = "YouTube";
Link_3.target = "_blank";
Link_3.rel = "noopener noreferrer";

nav.appendChild(navigationLinks);

li_1.appendChild(Link_1);
li_2.appendChild(Link_2);
li_3.appendChild(Link_3);

header.appendChild(headerName);
header.appendChild(nav);
navigationLinks.appendChild(li_1);
navigationLinks.appendChild(li_2);
navigationLinks.appendChild(li_3);
// تنسسيق الحاوية
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.padding = "15px 30px";
header.style.background = "#fff";

// تنسيق الاسم

headerName.style.color = "green";
headerName.style.fontSize = "24px";
headerName.style.fontWeight = "bold";
headerName.style.margin = "0";

// تنسيق القائمة
navigationLinks.style.display = "flex";
navigationLinks.style.justifyContent = "space-between";
navigationLinks.style.listStyleType = "none";
navigationLinks.style.gap = "20px"; // مسافة ثابتة بين الروابط
navigationLinks.style.listStyleType = "none";
navigationLinks.style.margin = "0";
navigationLinks.style.padding = "0";
// تنسيق الروابط
let links = [Link_1, Link_2, Link_3];
links.forEach((link) => {
  link.style.textDecoration = "none";
  link.style.color = "#777";
  link.style.fontSize = "16px";
  link.style.fontWeight = "500";
});

// ================= CONTENT =================
let content = document.createElement("main");
let product_card = document.createElement("div");
product_card.className = "product-grid";
// تنسيق الحاوية الرئيسية
product_card.style.background = "#f0f0f0";
product_card.style.padding = "10px";
product_card.style.display = "flex";
product_card.style.flexWrap = "wrap";
product_card.style.gap = "15px";
product_card.style.justifyContent = "center";

//إنشاء 50 كارت
for (let i = 1; i <= 50; i++) {
  let card = document.createElement("div");
  card.className = "card";
  let title = document.createElement("span");
  title.className = "title";

  title.textContent = i;
  title.style.fontSize = "22px";
  title.style.fontWeight = "bold";

  let subtitle = document.createElement("span");
  subtitle.className = "subtitle";
  subtitle.textContent = "Product";
  subtitle.style.fontSize = "12px";
  subtitle.style.color = "#777";

  card.appendChild(title);
  card.appendChild(subtitle);

  // تنسيق الكارت الواحد
  card.style.boxSizing = "border-box";
  card.style.width = "180px";
  card.style.height = "90px";
  card.style.background = "#fff";
  card.style.border = "1px solid #ddd";
  card.style.borderRadius = "8px";

  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.justifyContent = "center";
  card.style.alignItems = "center";

  // إضافة الكارت داخل الحاوية الرئيسية
  product_card.appendChild(card);
}
content.appendChild(product_card);

// ================= FOOTER =================

let footer = document.createElement("footer");
footer.className = "site-footer";
let span = document.createElement("span");

span.textContent = "© 2026";

footer.style.height = "50px";
footer.style.background = "green";
footer.style.margin = "0";
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";

footer.appendChild(span);

document.body.style.margin = "0";
document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);
