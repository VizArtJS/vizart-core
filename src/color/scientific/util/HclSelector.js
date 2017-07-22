/**
 * General condition for selecting the color space
 *
 * @param _schema {
 *      h: [min, max],
 *      c: [min, max],
 *      l: [min, max]
 * }
 * @return sub color space
 */
class HclSelector  {
    constructor(preset) {
        let hmin = preset.hmin;
        let hmax = preset.hmax;
        let cmin = preset.cmin;
        let cmax = preset.cmax;
        let lmin = preset.lmin;
        let lmax = preset.lmax;

        if(hmin<hmax){
            this.hcondition = (hcl)=>{return hcl[0]>=hmin && hcl[0]<=hmax};
        } else {
            this.hcondition = (hcl)=>{return hcl[0]>=hmin || hcl[0]<=hmax};
        }
        this.ccondition = (hcl)=>{return hcl[1]>=cmin && hcl[1]<=cmax};
        this.lcondition = (hcl)=>{return hcl[2]>=lmin && hcl[2]<=lmax};
    }

    validate(hcl) {
        return this.hcondition(hcl) && this.ccondition(hcl) && this.lcondition(hcl);
    }

}

export default HclSelector;
