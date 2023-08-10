// 定义食物类Food
class Food {
    // 定义一个属性表示食物所对应的元素
    private element: HTMLElement;

    constructor() {
        // 获取页面中的food元素并将其赋值给element
        // 末尾加上叹号，表示id为food的元素必定存在（非空）
        this.element = document.getElementById('food')!;
    }

    // 定义一个获取食物X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 定义一个获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物的位置
    change(snakeBody: HTMLCollection) {
        // 生成一个随机的位置
        // 食物的位置最小是0 最大是290
        // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

         // 食物不能出现在蛇的位置
        let foodInSnake: boolean = false;
        for (let i = 0; i < snakeBody.length; i++) {
            let body = <HTMLElement>snakeBody[i];
            if (left === body.offsetLeft && top === body.offsetTop) {
                foodInSnake = true
            }
        }
        if (foodInSnake) {
            this.change(snakeBody);
        } else {
            this.element.style.left = left + 'px';
            this.element.style.top = top + 'px';
        }

    }
}

// 测试代码
// const food =  new Food();
// console.log(food.X, food.Y);
// food.change();
// console.log(food.X, food.Y);

export default Food;
