# from youtube: https://www.youtube.com/watch?v=pKO9UjSeLew

def findDuplicates(nums):
    tortoise = nums[0]
    hare = nums[0]

    while True:
        tortoise = nums[tortoise]
        hare = nums[nums[hare]]
        if tortoise == hare:
            break


    ptr1 = nums[0]
    ptr2 = tortoise
    while ptr1 != ptr2:
        print(ptr1, ptr2)
        ptr1 = nums[ptr1]
        ptr2 = nums[ptr2]
        print(ptr1, ptr2)

    return ptr1

print(findDuplicates([6,1,8,4,2, 3, 3, 7, 9, 5]))
