class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    getValueByIndex(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head;
        let currentIndex = 0;

        while (currentIndex < index) {
            current = current.next;
            currentIndex++;
        }

        return current.value;
    }

    // Добавляет элемент в самое начало
    // односвязного списка, другими словами
    // делает его первым
    addFront(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
    }

    // Удаляет первый элемент списка
    deleteFront() {
        if (this.head) {
            this.head = this.head.next;
            this.length--;
        }
    }

    // Выводит на экран все значения нашего списка в
    // правильном порядке (в порядке записи) в любом удобном
    // для вас формате
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

class HighScores {
    constructor() {
        this.scores = new SinglyLinkedList();
        this.maxScores = 10;
    }

    addScore(score) {
        this.scores.addToFront(score);
    }

    removeScore() {
        this.scores.deleteFront();
    }

    printScores() {
        this.scores.print();
    }
}