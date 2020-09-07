def maxEnvelopes(envelopes, doll = None, memo = {}, count = 0):
    
    length = len(envelopes)

    if doll == None: doll = envelopes[0]
    if str(doll) in memo: return memo[str(doll)]
    
    attempts = [1]
    for i in range(length):
        if doll[0] < envelopes[i][0] and doll[1] < envelopes[i][1]:
            attempts.append(maxEnvelopes(envelopes, envelopes[i], memo, count + 1) + 1)

        if count < length:
            attempts.append(maxEnvelopes(envelopes, envelopes[i], memo, count + 1))

    memo[str(doll)] = max(attempts) 
    return memo[str(doll)]


envelopes = [[5,4],[6,4],[6,7],[2,3]]
print(maxEnvelopes(envelopes)) # 3
# print(maxEnvelopes([2,1,4,3]))