# https://leetcode.com/problems/flood-fill/

# Runtime: 60 ms, faster than 64.00% of Ruby online submissions for Flood Fill.
# Memory Usage: 210.4 MB, less than 64.00% of Ruby online submissions for Flood Fill.

def flood_fill(image, sr, sc, new_color, old_color = image[sr][sc])
    
    return image if ( sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] != old_color || image[sr][sc] == new_color )
    
    image[sr][sc] = new_color
    
    flood_fill(image, sr, sc - 1, new_color, old_color)
    flood_fill(image, sr + 1, sc, new_color, old_color)
    flood_fill(image, sr, sc + 1, new_color, old_color)
    flood_fill(image, sr - 1, sc, new_color, old_color)
    
    return image
    
end