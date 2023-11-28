const toggle = document.querySelector(".toggle-all");
const handleToggleAllEvent = (event) =>
{
    if (event.target.checked)
    {
        for (const child of todoList.children)
        {
            child.querySelector(".toggle").setAttribute("checked", "");
            child.classList.add("completed");
            updateItemsLeft();
        }
    }
    else
    {
        for (const child of todoList.children)
        {
            child.querySelector(".toggle").removeAttribute("checked", "");
            child.classList.remove("completed");
            updateItemsLeft();
        }   
    }
};

window.addEventListener("beforeunload", () =>
{
    toggle.checked = false;
});

toggle.addEventListener("click", handleToggleAllEvent);