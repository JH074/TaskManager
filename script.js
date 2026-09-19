const newTaskBtn = document.getElementById("newTaskBtn");
const searchInput = document.getElementById("searchInput");
const tasks = document.querySelectorAll(".task");

newTaskBtn.addEventListener("click", () => {
    alert("Formulario de nueva tarea próximamente.");
});

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    tasks.forEach((task) => {
        const title = task
            .querySelector("h3")
            .textContent
            .toLowerCase();

        task.style.display = title.includes(searchText)
            ? "flex"
            : "none";
    });
});