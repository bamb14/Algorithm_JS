function solution(sizes) {
    const width = sizes.map(size => Math.max(size[0], size[1]));
    const height = sizes.map(size => Math.min(size[0], size[1]));
    const width_max = Math.max(...width);
    const height_max = Math.max(...height);
    return width_max * height_max;
}