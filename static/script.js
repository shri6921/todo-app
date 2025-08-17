document.getElementById('add-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('todo-input');
    const content = input.value.trim();
    if (!content) return;

    const response = await fetch('/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
    });

    if (response.ok) {
        const data = await response.json();
        const li = document.createElement('li');
        li.textContent = data.content;
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    } else {
        alert('Error adding todo');
    }
});