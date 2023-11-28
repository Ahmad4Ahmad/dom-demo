const handleDoubleClick = (event) =>
{
    const label = event.target;
    label.closest("li").classList.add("editing");
    const input = label.closest("div").nextSibling
    input.value = label.innerText;
    input.addEventListener("keydown", (event) =>
    {
        if (event.key === "Enter")
        {
            const editedValue = input.value;
            label.closest("li").classList.remove("editing");
            label.innerText = editedValue;
        }
    });
}

todoList.addEventListener('dblclick', handleDoubleClick);