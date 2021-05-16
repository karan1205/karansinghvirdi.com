export function resizeAllMasonryItems(el, target){
    const computedStyle = window.getComputedStyle(el);
    const rowGap = parseInt(computedStyle.getPropertyValue('grid-row-gap'));
    const rowHeight = parseInt(computedStyle.getPropertyValue('grid-auto-rows'));
    if(!target) {
        const allItems = el.querySelectorAll('.masonry--content img');
        console.log(allItems)
        Array.prototype.forEach.call(allItems, item => {
            resizeMasonryItem(item, rowGap, rowHeight);
        });
    } else {
        resizeMasonryItem(target, rowGap, rowHeight);
    }
}

function resizeMasonryItem(target, rowGap, rowHeight){
    const rowSpan = Math.ceil((target.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    target.closest('.masonry--content').style.gridRowEnd = 'span '+rowSpan;
}