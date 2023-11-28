const handleCheckBoxClick = (event) =>
{
    const li = event.target.closest("li");
    if (event.target.checked)
    {
        li.classList.add("completed");
        updateItemsLeft();
    }
    else
    {
        if (li.classList.contains("completed"))
        {
            li.classList.remove("completed");
            updateItemsLeft();
        }
    }
};

todoList.addEventListener("click", handleCheckBoxClick);