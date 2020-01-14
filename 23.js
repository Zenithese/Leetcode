
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeKLists = function (lists) {
    if (lists.length < 1) { return null };

    let idx = 0;
    let min = Infinity;
    let current;
    let first;
    for (let i = 0; i < lists.length; i++) {
        let node = lists[i]
        if (node !== null) {
            if (node.val < min) {
                current = node;
                min = node.val;
                idx = i;
            };
        };
    };

    if (min !== Infinity) {
        first = current;
        lists[idx] = lists[idx].next;
    } else {
        return null;
    }

    let looping = true;
    while (looping) {
        lists.forEach((node, index) => {
            if (node !== null) {
                if (current.val === node.val) {
                    current.next = node;
                    current = node;
                    if (lists[index] !== undefined) {
                        lists[index] = lists[index].next;
                    }
                }
            }
        });

        let min = Infinity;
        lists.forEach(node => {
            if (node !== null) {
                if (node.val < min) {
                    min = node.val;
                };
            };
        });
        lists.forEach((node, i) => {
            if (node !== null) {
                if (node.val === min) {
                    current.next = node;
                    current = node;
                    lists[i] = lists[i].next;
                };
            };
        });

        if (lists.every(node => node === null)) {
            looping = false;
        }
    }

    return first;
};