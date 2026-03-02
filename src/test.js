const createTask = require("./index");

describe("Функция createTask", () => {
  test("создаёт задачу с обязательными параметрами", () => {
    const task = createTask("Изучить Jest");

    expect(task).toHaveProperty("id");
    expect(task.title).toBe("Изучить Jest");
    expect(task.description).toBe("");
    expect(task.isCompleted).toBe(false);
    expect(task.createdAt).toBeInstanceOf(Date);
  });

  test("создаёт задачу со всеми параметрами", () => {
    const task = createTask("Написать тест", "Подробное описание задачи", true);

    expect(task.title).toBe("Написать тест");
    expect(task.description).toBe("Подробное описание задачи");
    expect(task.isCompleted).toBe(true);
  });

  test("выбрасывает ошибку при отсутствии заголовка", () => {
    expect(() => createTask()).toThrow(
      "Заголовок задачи обязателен и должен быть строкой",
    );
    expect(() => createTask("")).toThrow(
      "Заголовок задачи обязателен и должен быть строкой",
    );
    expect(() => createTask(null)).toThrow(
      "Заголовок задачи обязателен и должен быть строкой",
    );
  });

  test("выбрасывает ошибку, если заголовок не строка", () => {
    expect(() => createTask(123)).toThrow(
      "Заголовок задачи обязателен и должен быть строкой",
    );
    expect(() => createTask({})).toThrow(
      "Заголовок задачи обязателен и должен быть строкой",
    );
  });

  test("обрезает пробелы в заголовке и описании", () => {
    const task = createTask(
      "  Задача с пробелами  ",
      "  Описание с пробелами  ",
    );

    expect(task.title).toBe("Задача с пробелами");
    expect(task.description).toBe("Описание с пробелами");
  });
});
