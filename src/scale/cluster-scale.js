import { ckmeans } from 'simple-statistics';

export default function scaleCluster () {
    let clusters = [];
    let domain = [];
    let range = [];
    let breakpoints = [];

    let scale = function (x) {
        if (clusters.length === 0) return undefined;

        for (let i = breakpoints.length - 1; i >= 0; i--) {
            if (x >= breakpoints[i]) {
                return range[i];
            }
        }
        return range[0];
    };

    function rescale () {
        if (range.length <= 2) {
            return;
        }

        clusters = ckmeans(domain, Math.min(domain.length, range.length));

        breakpoints = [];
        for (let i = 0; i < clusters.length; i++) {
            breakpoints.push(clusters[i][0]);
        }
    }

    scale.domain = function () {
        if (arguments.length) {
            domain = arguments[0];
            rescale();
            return scale;
        } else {
            return domain;
        }
    };

    scale.range = function () {
        if (arguments.length) {
            let newRange = arguments[0];
            let needsUpdate = newRange.length !== range.length;
            range = newRange;
            if (needsUpdate) {
                rescale();
            }
            return scale;
        } else {
            return range;
        }
    };

    scale.invertExtent = function (rangeValue) {
        // d3.scaleQuantile.invertExtent returns NaNs for invalid usage, emulate that behavior here
        let extentA = NaN;
        let extentB = NaN;
        for (let i = 0; i < range.length; i++) {
            if (range[i] === rangeValue) {
                extentA = breakpoints[i];
                extentB = i + 1 < range.length ? breakpoints[i + 1] : NaN;
                break;
            }
        }
        return [extentA, extentB];
    };

    scale.clusters = function () {
        return breakpoints.slice(1);
    };

    scale.copy = function () {
        return scaleCluster().domain(domain).range(range);
    };

    return scale;
}
