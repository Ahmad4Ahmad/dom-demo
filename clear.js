const clearButton = document.querySelector(".clear-completed");

const handleClearCompletedButton = () =>
{
    const completedItems = document.querySelectorAll('.completed');
    
    for (let i = completedItems.length - 1; i >= 0; i--)
    {
        removeListItem(completedItems[i]);
        updateItemsLeft();
    }
};

clearButton.addEventListener("click", handleClearCompletedButton);