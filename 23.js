
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeKLists = function (lists) {
    if (lists.length < 1) {
        return null;
    }

    let min = Math.min(...lists.map(node => node === null ? Infinity : node.val));
    let current;
    let first = null;
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] !== null) {
            if (lists[i].val === min) {
                first = lists[i];
                current = lists[i];
                lists[i] = lists[i].next;
                break;
            };
        };
    };

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

        min = Math.min(...lists.map(node => node === null ? Infinity : node.val));
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