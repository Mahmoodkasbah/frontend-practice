// مصفوفة المهام
const defaultTasks = [
  {
    title: "مهمه افتراضيه غير منجزة",
    date: "18/08/2026",
    completed: false,
  },
  {
    title: "مهمة افراضية منجزه",
    date: "19/08/2026",
    completed: true,
  },
];
let tasks = JSON.parse(localStorage.getItem("tasks")) ;
if (!tasks) {
  tasks = defaultTasks;
  saveTasks();
}
// جلب العناصر الأساسية
const tasksContainer = document.querySelector(".tasks-container");
const addTaskButton = document.querySelector(".add-task-button");

// دالة عرض المهام على الشاشة
function renderTasks() {
  tasksContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskEl = document.createElement("div");
    taskEl.className = "task";

    if (task.completed) {
      taskEl.style.backgroundColor = "rgb(114, 255, 43)";
      taskEl.style.opacity = "0.7";
    }

    taskEl.innerHTML = `
      <div class="task-info">
        <p class="title"></p>
        <p class="date">
        <i class="fa-regular fa-calendar-days"></i> 
        ${task.date}</p>
      </div>

      <div class="task-actions">
        <button class="btn-delete" title="حذف" onclick="deleteTask(${index})">
          <i class="fa-solid fa-trash"></i>
        </button>
        <button class="btn-edit" title="تعديل" onclick="editTask(${index})">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
 ${
   task.completed
     ? `<button class="btn-toggle" title="إلغاء الإنجاز" onclick="toggleTaskStatus(${index})">
             <i class="fa-solid fa-xmark"></i>
             </button>`
     : `<button class="btn-complete" title="إنجاز" onclick="toggleTaskStatus(${index})">
             <i class="fa-solid fa-check"></i>
             </button>`
 }
      </div>
    `;

    // تعيين عنوان المهمة
    taskEl.querySelector(".title").textContent = task.title;
    tasksContainer.appendChild(taskEl);
  });
}
renderTasks();
// اضافة مهمه جديده
addTaskButton.addEventListener("click", () => {
  let taskTitle = prompt("أدخل عنوان المهمة الجديدة:");

  // التأكد من أن المستخدم أدخل نصاً
  if (taskTitle && taskTitle.trim() !== "") {
    const task = {
      title: taskTitle,
      date: formatDate(new Date()),
      completed: false,
    };
    tasks.push(task);
    saveTasks();
    renderTasks();
  }
});

// دالة حذف المهمة
function deleteTask(index) {
  const isConfirmed = confirm(
  `هل أنت متأكد من حذف المهمة: ${tasks[index].title}؟`
);
  if (isConfirmed) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }
}

// دالة تبديل حالة المهمة (إنجاز / إلغاء إنجاز)
function toggleTaskStatus(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

//  دالة تعديل المهمة
function editTask(index) {
  let newTitle = prompt("تعديل عنوان المهمة:", tasks[index].title);
  if (newTitle !== null && newTitle.trim() !== "") {
    tasks[index].title = newTitle;
    saveTasks();

    renderTasks();
  }
}
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function formatDate(now) {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${day}/${month}/${year}`;
}
