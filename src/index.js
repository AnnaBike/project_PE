function createTask(title, description = '', isCompleted = false) {
  if (!title || typeof title !== 'string') {
    throw new Error('Заголовок задачи обязателен и должен быть строкой');
  }

  return {
    id: Date.now(), // уникальный ID на основе времени
    title: title.trim(),
    description: description.trim(),
    isCompleted: isCompleted,
    createdAt: new Date()
  };
}



