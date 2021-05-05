export function resizeAllMasonryItems(el, target){
    const computedStyle = window.getComputedStyle(el);
    const rowGap = parseInt(computedStyle.getPropertyValue('grid-row-gap'));
    const rowHeight = parseInt(computedStyle.getPropertyValue('grid-auto-rows'));
    const rowSpan = Math.ceil((target.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    target.closest('.masonry--content').style.gridRowEnd = 'span '+rowSpan;
}
