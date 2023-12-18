// score: 140
function optimizeIntervals(intervals) {
    return intervals
        .sort((x, y) => x[0] - y[0])
        .reduce((mergedIntervals, currentInterval) => {
            let [start, end] = currentInterval;

            let mergedInterval = mergedIntervals.at(-1);

            if (start <= mergedInterval?.[1]) {
                mergedIntervals.at(-1)[1] = Math.max(end, mergedInterval[1]);
            } else mergedIntervals.push(currentInterval);
            return mergedIntervals;
        }, []);
}

// score: 160
function optimizeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (const val of intervals) {
        const [start, end] = val;
        const max = result[result.length - 1][1];

        start > max
            ? result.push(val)
            : (result[result.length - 1][1] = Math.max(end, max));
    }
    return result;
}