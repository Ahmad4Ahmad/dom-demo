const removeListItem = (item) =>
{
    localStorage.removeItem(localStorage.key(Array.from(item.parentElement.children).indexOf(item)))
    item.remove();
    updateItemsLeft(); // Update the count after removing an item
}

const handleButtonClick = (event) =>
{
    const button = event.target;
    if (button.classList.contains("destroy")) 
    {
        const item = button.closest("li");
        if (item) 
        {
            removeListItem(item);
        }
    }
}

todoList.addEventListener('click', handleButtonClick);