class Solution(object):
    def minHeightShelves(self, books, shelf_width):
        if len(books) <= 0:
            return 0
        memo = {}

        def minHeight(remaining_width, current_height, index):
            if index >= len(books):
                return current_height

            key = index*1000 + remaining_width
            if key in memo:
                return memo[key]
            head, tail = books[index]

            memo[key] = min(current_height + minHeight(shelf_width - head, tail, index + 1),
                            float("inf") if head > remaining_width else minHeight(remaining_width - head, max(current_height, tail), index + 1))

            return memo[key]

        return minHeight(shelf_width, 0, 0)
