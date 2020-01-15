function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeKLists = function (lists) {
    if (lists.length < 1) { return null };

    let idx = 0;
    while (lists[idx] === null) {
        idx++;
    }
    if (lists[idx] === undefined) { return null };

    lists = lists.slice(idx);

    let min = lists[0].val;
    let current = lists[0];
    idx = 0;
    for (let i = 1; i < lists.length; i++) {
        let node = lists[i]
        if (node !== null) {
            if (node.val < min) {
                current = node;
                min = node.val;
                idx = i;
            };
        };
    };
    let first = current;
    lists[idx] = lists[idx].next;

    let looping = true;
    while (looping) {
        for (let index = 0; index < lists.length; index++) {
            let node = lists[index]
            if (node !== null) {
                if (current.val === node.val) {
                    current.next = node;
                    current = node;
                    lists[index] = lists[index].next;
                };
            };
        };

        let min = Infinity;
        let idx = 0
        for (let i = 0; i < lists.length; i++) {
            let node = lists[i];
            if (node !== null) {
                if (node.val < min) {
                    min = node.val;
                    idx = i;
                };
            };
        };
        let node = lists[idx];
        if (node !== null) {
            current.next = node;
            current = node;
            lists[idx] = lists[idx].next;
        };

        looping = false;
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] !== null) {
                looping = true;
                break;
            };
        };
    };

    return first;
};