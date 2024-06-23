function calculateY(x) {
    try {
        if (x < -3 || x > 3) {
            throw new Error("x должен быть в диапазоне от -3 до 3");
        }
        const y = 2 - Math.sqrt(9 - x * x);
        return y;
    } catch (error) {
        return `Ошибка: ${error.message}`;
    }
}