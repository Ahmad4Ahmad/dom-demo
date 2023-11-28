const list = document.querySelector("ul");

for (let i = 0; i < localStorage.length; i++)
{
    const listItem = document.createElement("li");
    listItem.innerHTML = localStorage.getItem(localStorage.key(i));
    list.appendChild(listItem);
}