

const taskState = {
    'manjericao': [
        { id: 'manjericao-task-1', completed: false },
        { id: 'manjericao-task-2', completed: false }
    ],
    'alface': [
        { id: 'alface-task-1', completed: false },
        { id: 'alface-task-2', completed: false }
    ],
    'rucula': [
        { id: 'rucula-task-1', completed: false },
        { id: 'rucula-task-2', completed: false }
    ],
    'couve': [
        { id: 'couve-task-1', completed: false },
        { id: 'couve-task-2', completed: false }
    ],
    'espinafre': [
        { id: 'espinafre-task-1', completed: false },
        { id: 'espinafre-task-2', completed: false }
    ],
    'agriao': [
        { id: 'agriao-task-1', completed: false },
        { id: 'agriao-task-2', completed: false }
    ],
    'salsa': [
        { id: 'salsa-task-1', completed: false },
        { id: 'salsa-task-2', completed: false }
    ],
    'cebolinha': [
        { id: 'cebolinha-task-1', completed: false },
        { id: 'cebolinha-task-2', completed: false }
    ],
    'coentro': [
        { id: 'coentro-task-1', completed: false },
        { id: 'coentro-task-2', completed: false }
    ],
    'oregano': [
        { id: 'oregano-task-1', completed: false },
        { id: 'oregano-task-2', completed: false }
    ],
    'tomilho': [
        { id: 'tomilho-task-1', completed: false },
        { id: 'tomilho-task-2', completed: false }
    ],
    'alecrim': [
        { id: 'alecrim-task-1', completed: false },
        { id: 'alecrim-task-2', completed: false }
    ]
};

function updateProgress(plant) {
    const tasks = taskState[plant];
    if (!tasks) return; // Evita erro se a planta não existir

    const completed = tasks.filter(task => task.completed).length;
    const total = tasks.length;
    const progressPercent = (completed / total) * 100;

    const progressText = document.querySelector(`.progress-text[data-plant="${plant}"]`);
    if (progressText) {
        progressText.textContent = `${completed} de ${total}`;
    }

    const progressBar = document.querySelector(`.progress-bar[data-plant="${plant}"]`);
    if (progressBar) {
        progressBar.style.width = `${progressPercent}%`;
    }
}

function initializeTasks() {
    // Verifica quais plantas estão presentes no DOM
    const plantsInDOM = Array.from(document.querySelectorAll('.progress-text')).map(el => el.getAttribute('data-plant'));

    plantsInDOM.forEach(plant => {
        if (taskState[plant]) {
            taskState[plant].forEach(task => {
                const checkbox = document.getElementById(task.id);
                if (checkbox) {
                    checkbox.checked = task.completed;
                    checkbox.addEventListener('change', () => {
                        task.completed = checkbox.checked;
                        updateProgress(plant);
                    });
                }
            });
            updateProgress(plant);
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeTasks);